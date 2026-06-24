import { NextResponse } from "next/server";
import { memoryDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, inquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const result = await memoryDb.saveContact({
      name,
      email,
      company,
      inquiryType,
      message,
    });

    return NextResponse.json(
      { message: "General inquiry submitted successfully.", id: result.id },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
