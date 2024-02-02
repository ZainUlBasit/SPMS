import connectDB from "@/lib/db";
import { Users } from "@/lib/models/users";
import bodyParser from "body-parser";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  return NextResponse.json({ result: true });
}

export async function POST(request) {
  const privateKey = process.env.PRIVATE_KEY;
  const bData = await request.json();
  // const { username, password } = req.body;
  await connectDB();
  console.log(bData);

  const { email, password } = bData;

  if (!email) {
    return NextResponse.json({
      success: false,
      error: { msg: "username field is undefined!" },
    });
  }
  if (!password) {
    return NextResponse.json({
      success: false,
      error: { msg: "password field is undefined!" },
    });
  }

  try {
    const user = await Users.findOne({ email });
    if (user === null)
      return NextResponse.json({
        success: false,
        error: { msg: "No such email registered!" },
      });
    if (user.password !== password) {
      return NextResponse.json({
        success: false,
        error: { msg: `email or password doesn't match!` },
      });
    }
    delete user.password;
    // var token = await sign({ ...user }, privateKey);
    // res.cookie("userToken", token, {
    //   // maxAge: 60000000,
    //   httpOnly: true,
    //   sameSite: "none",
    //   secure: true,
    // });
    // console.log("res Cookies : ", res);
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
