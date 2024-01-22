"use client";
import { useState } from "react";
import AuthInput from "../components/Input/AuthInput";
import AuthInputPassword from "../components/Input/AuthInputPassword";
import Image from "next/image";
import AuthBtn from "../components/Buttons/AuthBtn";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function page() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const Auth = useSelector((state) => state.Auth);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    // check whether login credential is true are not if true then save it in localstorage
    if (Username !== "" && Password !== "") {
      router.push("/", { scroll: false });
    } else {
      alert("Please Provide Credentials...");
    }
  };
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
          <AuthBtn title={"Login"} onSubmit={onSubmit} />
          <Link href={"/forgot-password"} className="mt-5">
            Forget Password?
          </Link>
        </div>
      </div>
    </>
  );
}
