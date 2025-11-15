import { NextResponse } from "next/server";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Resend } from "resend";
import {
  withRateLimit,
  sanitizeInput,
  securityMiddleware,
  logSecurityEvent,
  getClientInfo,
  apiLimiter,
  RateLimiter
} from "../../../lib/security";

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

    // Validate request size
    const rawBody = JSON.stringify(data);
    if (rawBody.length > 1024 * 1024) { // 1MB limit for contact forms
      logSecurityEvent('PAYLOAD_TOO_LARGE', {
        client: clientInfo,
        size: rawBody.length
      });
      return NextResponse.json({ error: 'Request payload too large' }, { status: 413 });
    }

    // Sanitize and validate input data
    const sanitizedData = {
      name: sanitizeInput.string(data.name, 100),
      email: sanitizeInput.email(data.email),
      subject: sanitizeInput.string(data.subject, 200),
      message: sanitizeInput.text(data.message),
      source: 'contact_form',
      ip: clientInfo.ip,
      userAgent: clientInfo.userAgent,
      createdAt: serverTimestamp(),
    };

    // Check for required fields
    const requiredFields = ['name', 'email', 'message'];
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
    const suspiciousFields = [sanitizedData.name, sanitizedData.subject, sanitizedData.message].filter(Boolean);
    if (suspiciousFields.some(field => securityMiddleware.detectSuspiciousInput(field))) {
      logSecurityEvent('SUSPICIOUS_INPUT_DETECTED', {
        client: clientInfo,
        fields: {
          name: sanitizedData.name,
          subject: sanitizedData.subject,
          message: sanitizedData.message
        }
      });
      return NextResponse.json({ error: 'Invalid input detected' }, { status: 400 });
    }

    // Rate limit multiple submissions from same IP/email
    const emailKey = `contact_email_${sanitizedData.email}`;
    const emailLimiter = new RateLimiter({
      windowMs: 60 * 60 * 1000, // 1 hour
      maxRequests: 3 // Max 3 contact forms per email per hour
    });

    if (emailLimiter.isRateLimited(emailKey)) {
      logSecurityEvent('CONTACT_RATE_LIMIT_EXCEEDED', {
        client: clientInfo,
        email: sanitizedData.email
      });
      return NextResponse.json({
        error: 'Too many contact submissions. Please try again later.',
        retryAfter: Math.ceil(60 * 60 * 1000 / 1000)
      }, { status: 429 });
    }

    // Log successful contact submission
    logSecurityEvent('CONTACT_FORM_SUBMITTED', {
      client: clientInfo,
      contact: {
        name: sanitizedData.name,
        email: sanitizedData.email,
        hasSubject: !!sanitizedData.subject
      }
    });

    // Save to database
    await addDoc(collection(db, "contacts"), sanitizedData);

    // Send email with security validation
    try {
      await resend.emails.send({
        from: "matchbest@matchbestsoftware.ae",
        to: ["biz@matchbest.ai"],
        subject: `New Contact: ${sanitizedData.subject || 'General Inquiry'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #5f12c6;">New Contact Form Submission</h2>
            <p>A new contact inquiry has been received from MatchBest.com:</p>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Contact Details:</h3>
              <ul>
                <li><strong>Name:</strong> ${sanitizedData.name}</li>
                <li><strong>Email:</strong> ${sanitizedData.email}</li>
                ${sanitizedData.subject ? `<li><strong>Subject:</strong> ${sanitizedData.subject}</li>` : ''}
                <li><strong>IP Address:</strong> ${sanitizedData.ip}</li>
                <li><strong>Time:</strong> ${sanitizedData.createdAt?.toDate?.().toISOString() || new Date().toISOString()}</li>
              </ul>

              <h4>Message:</h4>
              <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #5f12c6;">
                ${sanitizedData.message.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div style="margin-top: 20px; padding: 15px; background: #d4edda; border-left: 4px solid #28a745;">
              <small><strong>Security Check:</strong> This submission has been validated and sanitized.</small>
            </div>
          </div>
        `,
      });

    } catch (emailError) {
      console.error('Contact email sending failed:', emailError);
      logSecurityEvent('CONTACT_EMAIL_FAILED', {
        error: emailError.message,
        contact: sanitizedData.email
      });
      // Don't fail the request if email fails - data is still stored
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    logSecurityEvent('CONTACT_FORM_ERROR', {
      client: getClientInfo(request),
      error: error.message
    });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};

// Create contact rate limiter
const contactLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5 // 5 contact forms per IP per 15 minutes
});

// Apply rate limiting to contact endpoint
export const POST = withRateLimit(handler, contactLimiter);
