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
import { useRouter } from "next/navigation";
import AuthSelect from "../components/Input/AuthSelect";

export default function Page() {
  const [Loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmpassword: Yup.string().required("Confirm Password is required"),
    name: Yup.string().required("Username is required"),
    role: Yup.number().required("Role is required"),
  });
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "",
      name: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/create-user",
          {
            email: values.email,
            password: values.password,
            confirmpassword: values.confirmpassword,
            name: values.name,
            role: values.role,
          }
        );
        console.log(response);

        if (!response?.data?.success) {
          ErrorToast(response?.data?.error?.msg);
          if (response?.data?.error?.msg === "No such email registered!")
            formik.setFieldError("email", response?.data?.error?.msg);
          else formik.setFieldError("password", "Invalid password!");
        } else if (response?.data?.success) {
          SuccessToast(response.data.data.msg);
          router.push("/login");
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
      <div className="flex justify-center items-start w-full bg-[aliceblue] py-4">
        <div className="bg-white flex justify-center flex-col items-center border-y-[3px] border-y-black rounded-[10px] py-5">
          <Image src="/SPMS.png" alt="Not Found..." width={100} height={100} />
          <p className="flex flex-col justify-center items-center">
            <span className="font-bold text-[1.8rem] font-[Quicksand]">
              Register!
            </span>
            <span className="font-[Quicksand]">
              Please enter your credentials to register.
            </span>
          </p>

          {/* Inputs and button */}
          <div className="mt-8 mb-0 flex flex-col gap-y-5 px-8">
            <AuthInput
              name="name"
              label="Username"
              placeholder="Enter username..."
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              touched={formik.touched.name}
              isError={formik.errors.name}
              errorMsg={formik.errors.name}
            />
            <AuthSelect
              name="role"
              label="Role"
              value={formik.values.role}
              onChange={formik.handleChange}
              touched={formik.touched.role}
              isError={formik.errors.role}
              errorMsg={formik.errors.role}
              options={[
                { label: "Admin", value: 0 },
                { label: "Sale Maneger", value: 1 },
              ]}
            />
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
            <AuthInputPassword
              name="confirmpassword"
              label="Confirrm Password"
              placeholder="*****************"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              touched={formik.touched.confirmpassword}
              isError={formik.errors.confirmpassword}
              errorMsg={formik.errors.confirmpassword}
            />
          </div>
          {Loading ? (
            <AddingLightLoader />
          ) : (
            <div className="mt-3">
              <AuthBtn
                type="submit"
                disabled={Loading}
                onSubmit={formik.handleSubmit}
                title="Register"
                Loading={Loading}
              />
            </div>
          )}
          <div className="mt-4">
            Already have an account?{" "}
            <Link href="/create-user" className="-mt-3 underline font-bold">
              SignIn
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
