import connectDB from "@/lib/db";
import { Users } from "@/lib/models/users";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import JwtService from "@/lib/Services/JwtServices";
import UserDto from "@/lib/Services/userDto";
import { parse, serialize } from "cookie";
import Joi from "joi";
import { sign } from "jsonwebtoken";

export async function GET() {
  await connectDB();
  return NextResponse.json({ result: true });
}

export async function POST(request) {
  const bData = await request.json();
  console.log(bData);

  // Validate the request
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = loginSchema.validate(bData);
  if (error) {
    return NextResponse.json({
      success: false,
      error: "Invalid Credentials",
    });
  }

  // Check user email
  const { email, password } = bData;
  let user;
  try {
    user = await Users.findOne({ email });
    if (!user) {
      return NextResponse.json({
        success: false,
        error: "No such email found..!",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: "Check your internet connection",
    });
  }

  // Check user password using bcrypt
  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({
      success: false,
      error: "Invalid Password..!",
    });
  }

  const { accessToken, refreshToken } = JwtService.generateToken({
    _id: user._id,
    role: user.role,
  });

  const result = await JwtService.storeRefreshToken(refreshToken, user._id);
  if (!result) {
    return NextResponse.json({
      success: false,
      error: "Internal server error.Cannot store refresh token",
    });
  }

  // const secret = process.env.ACCESS_SECRET_KEY;

  const MAX_AGE = 60 * 60 * 24 * 30; // days;

  const seralized = serialize("accesstoken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  const response = {
    success: true,
    data: user,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": seralized },
  });
}
