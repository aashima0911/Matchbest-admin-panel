import { NextResponse } from "next/server";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEYS);

export async function POST(request) {
  try {
    const data = await request.json();
    await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: serverTimestamp(),
    });

    // Send email with Resend
    await resend.emails.send({
      from: "matchbest@matchbestsoftware.ae", // Replace with your "from" email address
      to: "biz@matchbest.ai", // Replace with your "to" email address
      subject: "New Contact Form Submission",
      html: `<p>A new contact form submission has been received from MatchBest.com:</p><pre>${JSON.stringify(
        data,
        null,
        2
      )}</pre>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 