import { NextResponse } from "next/server";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEYS);

export async function POST(request) {
  try {
    const data = await request.json();
    await addDoc(collection(db, "webinar-registrations"), {
      ...data,
      createdAt: serverTimestamp(),
    });

    // Send email to admin
    await resend.emails.send({
      from: "matchbest@matchbestsoftware.ae", // From email address (verified)
      to: "csm@matchbest.ai", // Admin email
      subject: "New Webinar Registration",
      html: `<p>A new webinar registration has been received:</p>
<ul>
  <li><strong>Name:</strong> ${data.name}</li>
  <li><strong>Email:</strong> ${data.email}</li>
  <li><strong>Phone:</strong> ${data.phone}</li>
  <li><strong>Company:</strong> ${data.company || 'Not provided'}</li>
  <li><strong>Experience:</strong> ${data.experience}</li>
</ul>`,
    });

    // Send confirmation email to registrant
    await resend.emails.send({
      from: "matchbest@matchbestsoftware.ae", // From email address (verified)
      to: data.email, // Send to registrant's email
      subject: "Registration Confirmed",
      html: `<p>Hello ${data.name},</p>
<p>Thank you for registering for our upcoming session.</p>
<p>We will be sharing the webinar access link with you shortly.</p>
<p>Warm regards,<br>Team BytePlus × MatchBest</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
