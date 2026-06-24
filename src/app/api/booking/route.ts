import { NextResponse } from "next/server";
import { memoryDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, date, timeSlot } = body;

    if (!fullName || !email || !date || !timeSlot) {
      return NextResponse.json(
        { error: "Full name, email, date, and time slot are required." },
        { status: 400 }
      );
    }

    const result = await memoryDb.saveBooking({
      fullName,
      email,
      date,
      timeSlot,
    });

    return NextResponse.json(
      { message: "Solutions consultation booking logged successfully.", id: result.id },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
