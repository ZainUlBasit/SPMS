// pages/index.js
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AddingLightLoader from "./components/Loader/AddingLightLoader";
import { useRouter } from "next/navigation";
import { CheckLocalStorage } from "@/lib/CheckLocalStorage";

export default function Home() {
  const router = useRouter();
  const [CurrentStatus, setCurrentStatus] = useState(false);
  // State to hold the logged-in status
  useEffect(() => {
    CheckLocalStorage(router,setCurrentStatus);
  }, []);

  return (
    <main className="h-screen w-full flex justify-center items-center">
      <AddingLightLoader />
    </main>
  );
}
