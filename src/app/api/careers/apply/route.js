import { NextResponse } from "next/server";
import { db } from "../../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Resend } from "resend";
import {
  withRateLimit,
  sanitizeInput,
  securityMiddleware,
  logSecurityEvent,
  getClientInfo,
  authLimiter,
  RateLimiter
} from "../../../../lib/security";

const resend = new Resend(process.env.RESEND_API_KEYS);

// Handle OPTIONS for CORS preflight
export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

const handler = async (request) => {
  try {
    const data = await request.json();
    const clientInfo = getClientInfo(request);

    // Validate content type
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      logSecurityEvent('INVALID_CONTENT_TYPE', {
        client: clientInfo,
        contentType,
        userAgent: clientInfo.userAgent
      });
      return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    // Validate request size (prevent oversized payloads)
    const rawBody = JSON.stringify(data);
    if (rawBody.length > 10 * 1024 * 1024) { // 10MB limit
      logSecurityEvent('PAYLOAD_TOO_LARGE', {
        client: clientInfo,
        size: rawBody.length
      });
      return NextResponse.json({ error: 'Request payload too large' }, { status: 413 });
    }

    // Sanitize and validate input data
    const sanitizedData = {
      name: sanitizeInput.string(data.name, 50),
      email: sanitizeInput.email(data.email),
      phone: sanitizeInput.phone(data.phone),
      message: sanitizeInput.text(data.message || ''),
      submittedAt: new Date().toISOString(),
      source: 'website_form'
    };

    // Check for required fields
    const requiredFields = ['name', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !sanitizedData[field]);

    if (missingFields.length > 0) {
      logSecurityEvent('MISSING_REQUIRED_FIELDS', {
        client: clientInfo,
        missingFields,
        dataKeys: Object.keys(data)
      });
      return NextResponse.json({
        error: `Missing required fields: ${missingFields.join(', ')}`
      }, { status: 400 });
    }

    // Check for suspicious input patterns
    if (securityMiddleware.detectSuspiciousInput(sanitizedData.name) ||
        securityMiddleware.detectSuspiciousInput(sanitizedData.message)) {
      logSecurityEvent('SUSPICIOUS_INPUT_DETECTED', {
        client: clientInfo,
        fields: {
          name: sanitizedData.name,
          message: sanitizedData.message
        }
      });
      return NextResponse.json({ error: 'Invalid input detected' }, { status: 400 });
    }

    // Handle resume attachment
    if (data.resume && typeof data.resume === 'string') {
      // Validate base64 resume
      if (!/^data:application\/(pdf|msword|(?:vnd\.openxmlformats-officedocument\.)wordprocessingml\.document);base64,/.test(data.resume)) {
        logSecurityEvent('INVALID_RESUME_FORMAT', {
          client: clientInfo,
          resumeType: data.resume.substring(0, 50) + '...'
        });
        return NextResponse.json({ error: 'Invalid resume file format' }, { status: 400 });
      }

      // Check resume size (base64 is ~33% larger than binary)
      if (data.resume.length > 13 * 1024 * 1024) { // ~10MB binary equivalent
        logSecurityEvent('RESUME_TOO_LARGE', {
          client: clientInfo,
          resumeSize: data.resume.length
        });
        return NextResponse.json({ error: 'Resume file too large (max 10MB)' }, { status: 413 });
      }

      sanitizedData.resume = data.resume;
      sanitizedData.resumeName = sanitizeInput.string(data.resumeName, 100);
    }

    // Log successful application submission
    logSecurityEvent('CAREER_APPLICATION_SUBMITTED', {
      client: clientInfo,
      applicant: {
        name: sanitizedData.name,
        email: sanitizedData.email,
        hasResume: !!sanitizedData.resume
      }
    });

    // Save to database
    await addDoc(collection(db, "applications"), sanitizedData);

    // Send email with security checks
    try {
      const attachments = [];
      if (sanitizedData.resume) {
        attachments.push({
          filename: sanitizedData.resumeName || 'resume.pdf',
          content: Buffer.from(sanitizedData.resume.split(',')[1], 'base64'),
          encoding: 'base64',
        });
      }

      await resend.emails.send({
        from: "matchbest@matchbestsoftware.ae",
        to: ["mshpdell@gmail.com"],
        subject: "New Career Application - Secure Submission",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #5f12c6;">New Career Application Received</h2>
            <p>A new career application has been securely submitted from MatchBest.com:</p>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Applicant Details:</h3>
              <ul>
                <li><strong>Name:</strong> ${sanitizedData.name}</li>
                <li><strong>Email:</strong> ${sanitizedData.email}</li>
                <li><strong>Phone:</strong> ${sanitizedData.phone}</li>
                <li><strong>Submitted:</strong> ${sanitizedData.submittedAt}</li>
                ${sanitizedData.resumeName ? `<li><strong>Resume:</strong> ${sanitizedData.resumeName}</li>` : ''}
              </ul>

              ${sanitizedData.message ? `
              <h4>Message:</h4>
              <p style="background: white; padding: 10px; border-radius: 4px;">${sanitizedData.message.replace(/\n/g, '<br>')}</p>
              ` : ''}
            </div>

            <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107;">
              <small><strong>Security Check:</strong> This submission has been sanitized and validated.</small>
            </div>
          </div>
        `,
        attachments: attachments.length > 0 ? attachments : undefined,
      });

    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
      logSecurityEvent('EMAIL_SEND_FAILED', {
        error: emailError.message,
        applicant: sanitizedData.email
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully'
    });

  } catch (error) {
    console.error('Career application error:', error);
    logSecurityEvent('CAREER_APPLICATION_ERROR', {
      client: getClientInfo(request),
      error: error.message
    });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};

// Apply rate limiting to the careers endpoint (stricter limits for form submissions)
export const POST = withRateLimit(handler, authLimiter);
