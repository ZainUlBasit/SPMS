"use client";
import { io } from "socket.io-client";
import MainWrapper from "../components/Wrapper/MainWrapper";
import { useEffect } from "react";

// Define the Page component
const Page = () => {
  const socket = io("https://spms-backend-production.up.railway.app", {
    extraHeaders: {
      role: 1,
    },
  }); // Replace with your server URL

  const userLoggedIn = localStorage.getItem("logged-in");

  useEffect(() => {
    if (!userLoggedIn) return;
    // Listen for custom events
    socket.on("connect", (data) => {
      console.log("connected");
    });
    socket.on("notification-message", (data) => {
      // Handle the event data
      SuccessToast(data.description);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.off("disconnect", (data) => {
        console.log("disconnected");
      });
    };
  }, []);
  return (
    <MainWrapper>
      <div>
        <h1> welcome to dashboard</h1>
      </div>
    </MainWrapper>
  );
};

// Export the Page component as default
export default Page;
