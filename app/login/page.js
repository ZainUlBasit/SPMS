"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import AuthInput from "../components/Input/AuthInput";
import AuthInputPassword from "../components/Input/AuthInputPassword";
import AuthBtn from "../components/Buttons/AuthBtn";
import AddingLightLoader from "../components/Loader/AddingLightLoader";
import SuccessToast from "../components/Toast/SuccessToast";
import ErrorToast from "../components/Toast/ErrorToast";

export default function Page() {
  const [Loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          {
            email: values.email,
            password: values.password,
          }
        );

        if (!response?.data?.success) {
          ErrorToast(response?.data?.error?.msg);
          if (response?.data?.error?.msg === "No such email registered!")
            formik.setFieldError("email", response?.data?.error?.msg);
          else formik.setFieldError("password", "Invalid password!");
        } else if (response?.data?.success) {
          SuccessToast(response.data.data.msg);
        }
      } catch (err) {
        console.error(err);
        alert("An error occurred. Please try again.");
      }
      setLoading(false);
    },
  });

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-[aliceblue]">
        <div className="bg-white flex justify-center flex-col items-center border-y-[3px] border-y-black rounded-[10px] py-5">
          <Image src="/SPMS.png" alt="Not Found..." width={150} height={150} />
          <p className="flex flex-col justify-center items-center">
            <span className="font-bold text-[1.8rem] font-[Quicksand]">
              Welcome back!
            </span>
            <span className="font-[Quicksand]">
              Please enter your credentials to log in.
            </span>
          </p>

          {/* Inputs and button */}
          <div className="mt-8 mb-3 flex flex-col gap-y-5 px-8">
            <AuthInput
              name="email"
              label="Email"
              placeholder="Enter email..."
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              touched={formik.touched.email}
              isError={formik.errors.email}
              errorMsg={formik.errors.email}
            />
            <AuthInputPassword
              name="password"
              label="Password"
              placeholder="*****************"
              value={formik.values.password}
              onChange={formik.handleChange}
              touched={formik.touched.password}
              isError={formik.errors.password}
              errorMsg={formik.errors.password}
            />
          </div>
          {Loading ? (
            <AddingLightLoader />
          ) : (
            <AuthBtn
              type="submit"
              disabled={Loading}
              onSubmit={formik.handleSubmit}
              title="Sign In"
              Loading={Loading}
            />
          )}
          <Link href="/forgot-password" className="mt-5">
            Forget Password?
          </Link>
        </div>
      </div>
    </>
  );
}
