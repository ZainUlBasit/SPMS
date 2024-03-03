// components/Home.js
import Link from "next/link";
import React from "react";

const Home = () => {
  // Check if running on the client side
  const isLoggedIn = localStorage.getItem("logged-in");

  return (
    <div>
      <p>User is logged in: {isLoggedIn}</p>
      <Link href="./login">Go to Login</Link>
    </div>
  );
};

export default Home;
