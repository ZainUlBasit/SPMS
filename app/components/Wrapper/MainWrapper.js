"use client";
import React, { useState } from "react";
import { IoExit } from "react-icons/io5";
import { FaBarsProgress } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import SideMenu from "../SideMenu/SideMenu";

const MainWrapper = ({ children }) => {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full h-screen">
        {/* top side */}
        <div className="w-full h-[10vh] flex justify-between items-center px-4 bg-[aliceblue] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] z-1">
          {/* left */}
          <div className="flex items-center gap-x-2">
            {MenuOpen ? (
              <ImCross
                onClick={() => setMenuOpen(!MenuOpen)}
                className="cursor-pointer text-[2rem] hover:text-gray-600 transition-all duration-700 ease-in-out"
              />
            ) : (
              <FaBarsProgress
                onClick={() => setMenuOpen(!MenuOpen)}
                className="cursor-pointer text-[2rem] hover:text-gray-600 transition-all duration-700 ease-in-out"
              />
            )}
            logo
          </div>
          {/* right */}
          <div>
            <IoExit className="cursor-pointer text-[2rem] hover:text-gray-600 transition-all duration-700 ease-in-out" />
          </div>
        </div>
        {/* side menu */}
        <SideMenu MenuOpen={MenuOpen} />
        <div className="w-full h-[90vh]">{children}</div>
      </div>
    </>
  );
};

export default MainWrapper;
