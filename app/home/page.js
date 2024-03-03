"use client";
import React, { useEffect, useState } from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import { io } from "socket.io-client";
import { CheckLocalStorageAll } from "@/lib/CheckLocalStorageAll";
import { useRouter } from "next/navigation";
import SuccessToast from "../components/Toast/SuccessToast";
import AddingLightLoader from "../components/Loader/AddingLightLoader";
import { LoaderModal } from "../components/Modals/LoaderModal";

export default function Page() {
  const socket = io("https://spms-backend-production.up.railway.app", {
    extraHeaders: {
      role: 1,
    },
  }); // Replace with your server URL
  const [Loading, setLoading] = useState(true);
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    CheckLocalStorageAll(router, setuserLoggedIn, setLoading);
  }, []);
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
  }, [userLoggedIn]);
  return (
    <>
      <MainWrapper>
        {Loading ? (
          <LoaderModal Open={Loading} setOpen={setLoading} />
        ) : (
          <div>
            <h1> welcome to dashboard</h1>
          </div>
        )}
      </MainWrapper>
    </>
  );
}
