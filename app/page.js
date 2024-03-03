// pages/index.js
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const DynamicHome = dynamic(() => import("./components/Home"), {
  ssr: false,
});

export default function Home() {
  // Check if running on the client side

  return (
    <main className="">
      <DynamicHome />
    </main>
  );
}
