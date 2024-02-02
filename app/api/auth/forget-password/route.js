import connectDB from "@/lib/db";
import { Users } from "@/lib/models/users";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  return NextResponse.json({ result: true });
}

export async function POST(request) {
  const bData = await request.json();
  await connectDB();
  console.log(bData);
  const { email } = bData;

  if (!email) {
    return NextResponse.json({
      success: false,
      error: { msg: "email field is undefined!" },
    });
  }

  try {
    const user = await Users.findOne({ username: email });
    if (user === null)
      return NextResponse.json({
        success: false,
        error: { msg: "No such email registered!" },
      });
    delete user.password;
    return NextResponse.json({
      success: true,
      data: { data: user, msg: "Successfully logged in!" },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
