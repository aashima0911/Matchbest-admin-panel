import { NextResponse } from "next/server";
import { db } from "../../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(request) {
  try {
    const data = await request.json();
    await addDoc(collection(db, "applications"), data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 