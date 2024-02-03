import React from "react";
import SideMenuItems from "./SideMenuItems";
import { RiDashboard3Line } from "react-icons/ri";
import {
  FaBuildingShield,
  FaBuildingUser,
  FaUserShield,
} from "react-icons/fa6";
import { MdInventory2, MdOutlinePayments } from "react-icons/md";
import { TbReport } from "react-icons/tb";

const SideMenu = ({ MenuOpen }) => {
  return (
    <div
      className={`flex flex-col justify-between w-fit h-[90vh] overflow-hidden mt-[2px] bg-[aliceblue] z-0 transition-transform duration-1000 ease-in-out transform shadow-[5px_0px_0px_0px_rgba(0,0,0)] ${
        MenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <SideMenuItems Title="Dashboard" Icon={RiDashboard3Line} />
      <SideMenuItems Title="Company" Icon={FaBuildingShield} />
      <SideMenuItems Title="Items" Icon={MdInventory2} />
      <SideMenuItems Title="Customers" Icon={FaUserShield} />
      <SideMenuItems Title="Employee" Icon={FaBuildingUser} />
      <SideMenuItems Title="Report" Icon={TbReport} />
      <SideMenuItems Title="Cash Payment" Icon={MdOutlinePayments} />
    </div>
  );
};

export default SideMenu;
