import connectDB from "@/lib/db";
import { Users } from "@/lib/models/users";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: {
        msg: err,
      },
    });
  }
}
