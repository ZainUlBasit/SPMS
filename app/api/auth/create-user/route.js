import connectDB from "@/lib/db";
import bodyParser from "body-parser";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import authControllers from "../authController";
import { compare, hash } from "bcrypt";
import JwtService from "@/lib/Services/JwtServices";
import UserDto from "@/lib/Services/userDto";
import { parse } from "cookie";
import Joi from "joi";
import { Users } from "@/lib/models/users";

// export async function GET() {
//   await connectDB();
//   return NextResponse.json({ result: true });
// }

export async function POST(request) {
  // const { username, password } = req.body;
  await connectDB();
  const bData = await request.json();
  console.log(bData);
  // const registerSchema = Joi.object({
  //   name: Joi.string().required(),
  //   email: Joi.string().email().required(),
  //   role: Joi.number().required(),
  //   password: Joi.string()
  //     .pattern(new RegExp("^[a-zA-Z0-9]{5,15}$"))
  //     .required()
  //     .min(8)
  //     .max(15)
  //     .messages({
  //       "string.pattern.base": "Password must include alphabets and numbers",
  //       "string.min": "Password must be a minimum of 8 characters",
  //       "string.max": "Password must be up to 15 characters",
  //     }),
  //   confirmpassword: Joi.ref("password"),
  // });

  // const { error } = registerSchema.validate(bData.values);
  // if (error) {
  //   return NextResponse.json({
  //     success: false,
  //     error: error.message,
  //   });
  // }

  // check if email has not registered yet
  const { name, email, role, password, confirmpassword } = bData;
  const user = await Users.exists({ email });
  if (user) {
    return NextResponse.json({
      success: false,
      error: "Email already registered...",
    });
  }

  if (!name || !email || !password || !confirmpassword) {
    return NextResponse.json({
      success: false,
      error: "All fields are required...",
    });
  }

  if (password !== confirmpassword) {
    return NextResponse.json({
      success: false,
      error: "Password and Confirm Password not matching...",
    });
  }

  let newUser;
  try {
    // hash password
    const hashedPassword = await hash(password, 10);

    // register user
    newUser = new Users({
      name,
      email,
      role,
      password: hashedPassword,
    });

    const isSaved = await newUser.save();
    if (!isSaved) {
      return NextResponse.json({
        success: false,
        error: "Internal server error. Could not register user",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: "Internal server error. Please try again",
    });
  }
  return NextResponse.json({
    success: true,
    data: { data: newUser, msg: "Successfully registered..!" },
  });
}
