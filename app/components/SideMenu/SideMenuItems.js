import React from "react";

const SideMenuItems = ({ LinkText = "", Icon, Title }) => {
  return (
    <div className="flex flex-col justify-center items-center hover:bg-black hover:!text-white gap-y-1 py-2">
      <Icon className="text-[2rem]" />
      <span className="font-[Quicksand] text-[1rem] font-bold">{Title}</span>
    </div>
  );
};

export default SideMenuItems;
