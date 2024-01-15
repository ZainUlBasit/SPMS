"use client";
import { useState } from "react";
import AuthInput from "../components/Input/AuthInput";
import AuthInputPassword from "../components/Input/AuthInputPassword";
import Image from "next/image";
import AuthBtn from "../components/Buttons/AuthBtn";
import Link from "next/link";

export default function page() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-[aliceblue]">
        <div className="bg-white flex justify-center flex-col items-center border-y-[3px] border-y-black rounded-[10px] py-5">
          <Image src="/SPMS.png" alt="Not Found..." width={150} height={150} />
          <p className="flex flex-col justify-center items-center">
            <span className="font-bold text-[1.5rem]">Welcome back!</span>
            <span>Please enter your credentials to log in.</span>
          </p>
          {/* inputs and button */}
          <div className="mt-8 mb-3 flex flex-col gap-y-5 px-8">
            <AuthInput
              Value={Username}
              setValue={setUsername}
              placeholder={"Enter email..."}
              id={"email"}
              name={"email"}
              required={true}
              label={"Email"}
            />
            <AuthInputPassword
              id={"password"}
              name={"password"}
              label={"Password"}
              placeholder="*****************"
              required={true}
              Value={Password}
              setValue={setPassword}
            />
          </div>
          <AuthBtn title={"Login"} onSubmit={() => {}} />
          <Link href={"/forgot-password"} className="mt-5">
            Forget Password?
          </Link>
        </div>
      </div>
    </>
  );
}
