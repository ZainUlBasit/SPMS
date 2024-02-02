"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthInput from "../Input/AuthInput";
import AuthBtn from "../Buttons/AuthBtn";
import AddingLightLoader from "../Loader/AddingLightLoader";

const ForgotPasswordForm = ({ onSubmit }) => {
  const [Loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      console.log(values);
      setLoading(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="gap-y-4 flex flex-col justify-center items-center">
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
      <div className="mb-1"></div>
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
    </form>
  );
};

export default ForgotPasswordForm;
