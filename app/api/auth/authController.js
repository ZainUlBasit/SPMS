import { compare } from "bcrypt";
import {Users} from "@/lib/models/users";
import JwtService from "@/lib/Services/JwtServices";
import UserDto from "@/lib/Services/userDto";
import { NextResponse } from "next/server";
import { parse } from "cookie";
import Joi from "joi";

function authControllers() {
  return {
    login: async (request) => {
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
      const user = await Users.findOne({ email });
      if (!user) {
        return NextResponse.json({
          success: false,
          error: "No such email found..!",
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

      // Store access token and refresh token in cookies
      const cookies = parse(request.headers.cookie || "");
      NextResponse.setHeader("Set-Cookie", [
        `refreshtoken=${refreshToken}; Max-Age=${
          30 * 24 * 60 * 60
        }; Path=/; HttpOnly`,
        `accesstoken=${accessToken}; Max-Age=${60 * 60}; Path=/; HttpOnly`,
      ]);

      const userdata = UserDto(user);
      return NextResponse.json({
        success: true,
        data: { data: userdata, msg: "Successfully logged in!" },
      });
    },

    register: async (request) => {
      // validate req using joi
      const bData = await request.json();
      const registerSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        role: Joi.number().required(),
        password: Joi.string()
          .pattern(new RegExp("^[a-zA-Z0-9]{5,15}$"))
          .required()
          .min(8)
          .max(15)
          .messages({
            "string.pattern.base":
              "Password must include alphabets and numbers",
            "string.min": "Password must be a minimum of 8 characters",
            "string.max": "Password must be up to 15 characters",
          }),
        confirmpassword: Joi.ref("password"),
      });

      const { error } = registerSchema.validate(bData.values);
      if (error) {
        return NextResponse.json({
          success: false,
          error: error.message,
        });
      }

      // check if email has not registered yet
      const { name, email, role, password, confirmpassword } = bData;
      const user = await User.exists({ email });
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
        const hashedPassword = await bcrypt.hash(password, 10);

        // register user
        newUser = new User({
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
        return NextResponse.json({
          success: false,
          error: "Internal server error. Please try again",
        });
      }
      return NextResponse.json({
        success: true,
        data: { data: newUser, msg: "Successfully registered..!" },
      });
    },

    autoLogin: async (req, res) => {
      const { refreshtoken: refreshTokenFromCookies } = req.cookies;
      if (!refreshTokenFromCookies) {
        return res.status(401).json({ message: "Token not found" });
      }

      let userData;
      try {
        userData = await JwtService.verifyRefreshToken(refreshTokenFromCookies);
      } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
      }

      try {
        const token = await JwtService.findRefreshToken(
          userData._id,
          refreshTokenFromCookies
        );
        if (!token) {
          return res.status(401).json({ message: "Invalid Token" });
        }
      } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
      }

      const userExist = await User.findById(userData._id);
      if (!userExist) {
        return res.status(404).json({ message: "Invalid user" });
      }

      const { accessToken, refreshToken } = JwtService.generateToken({
        _id: userData._id,
        role: userData.role,
      });

      try {
        const result = await JwtService.updateRefreshToken(
          userData._id,
          refreshToken
        );
      } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
      }

      // store access token and refresh token in cookies
      res.cookie("refreshtoken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30, // 2 hours
        httpOnly: true,
      });

      res.cookie("accesstoken", accessToken, {
        maxAge: 1000 * 60 * 60, // 1 hour
        httpOnly: true,
      });

      const userdata = userDto(userExist);
      return res.status(200).json({ userdata });
    },
  };
}

export default authControllers;
