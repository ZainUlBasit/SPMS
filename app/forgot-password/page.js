"use client";
import React from "react";
import ForgotPasswordForm from "../components/Forms/ForgetPasswordForm";
import Image from "next/image";

const Page = () => {
  const handleResetPassword = async (email) => {
    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Password reset email sent successfully");
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="border-[1.5px] border-black gap-y-2 flex flex-col justify-center items-center px-10 py-10 rounded-[10px] shadow-[5px_5px_0px_0px_rgba(0,0,0)]">
        <Image
          src="/ForgetPasswordPNG.png"
          alt="Not Found..."
          width={250}
          height={190}
        />
        <h1 className="text-center py-2 font-bold font-[Quicksand] text-[2rem] mb-3">
          Forgot Password
        </h1>
        <ForgotPasswordForm onSubmit={handleResetPassword} />
      </div>
    </div>
  );
};

export default Page;
