"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SideMenuItems = ({ LinkText = "", Icon, Title }) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col justify-center items-center transition-all duration-500 ease-in-out gap-y-1 py-2 cursor-pointer shadow-[inset_0_0_0_0_black] hover:shadow-[inset_-100px_0_0_0_black] active:scale-90 hover:text-[white]"
      onClick={() => {
        if (LinkText !== "") router.push(LinkText);
      }}
    >
      <Icon className="text-[2rem]" />
      <span className="font-[Quicksand] text-[1rem] font-bold">{Title}</span>
    </div>
  );
};

export default SideMenuItems;
