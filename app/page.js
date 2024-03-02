import Link from "next/link";
import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Home() {
  return (
    <main className="">
      <Link href={"./login"}>Go to Login</Link>
    </main>
  );
}
