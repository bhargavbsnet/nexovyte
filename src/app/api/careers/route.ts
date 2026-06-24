import { NextResponse } from "next/server";
import { memoryDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, position, resumeUrl, coverLetter } = body;

    if (!fullName || !email || !position) {
      return NextResponse.json(
        { error: "Name, email, and position are required." },
        { status: 400 }
      );
    }

    const result = await memoryDb.saveApplication({
      fullName,
      email,
      position,
      resumeUrl,
      coverLetter,
    });

    return NextResponse.json(
      { message: "Careers candidate submission logged successfully.", id: result.id },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
