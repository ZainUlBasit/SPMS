import { connectionSrt } from "@/lib/db";
import { Users } from "@/lib/models/users";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ result: true });
}
