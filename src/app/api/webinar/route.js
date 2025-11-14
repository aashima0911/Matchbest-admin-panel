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

    // Send email with Resend
    await resend.emails.send({
      from: "matchbest@matchbestsoftware.ae", // Replace with your "from" email address
      to: "matchbestsoftware199@gmail.com", // Replace with your "to" email address
      subject: "New Webinar Registration",
      html: `<p>A new webinar registration has been received:</p><pre>${JSON.stringify(
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
