import { NextResponse } from "next/server";
import { memoryDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { clientName, email, productType, message } = body;

    if (!clientName || !email || !productType || !message) {
      return NextResponse.json(
        { error: "Client name, email, product type, and message details are required." },
        { status: 400 }
      );
    }

    const result = await memoryDb.saveProductInquiry({
      clientName,
      email,
      productType,
      message,
    });

    return NextResponse.json(
      { message: "LexFlow demo request logged successfully.", id: result.id },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
