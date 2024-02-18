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
      className={`z-10 flex flex-col justify-between w-fit h-[89.5vh] overflow-hidden mt-[2px] bg-[aliceblue] z-0 transition-transform duration-1000 ease-in-out transform absolute top-[10vh] ${
        MenuOpen ? "translate-x-0 shadow-[5px_0px_0px_0px_rgba(0,0,0)]" : "-translate-x-full"
      }`}
    >
      <SideMenuItems Title="Dashboard" Icon={RiDashboard3Line} LinkText="/dashboard" />
      <SideMenuItems Title="Company" Icon={FaBuildingShield} LinkText="/company" />
      <SideMenuItems Title="Items" Icon={MdInventory2} LinkText="/items"/>
      <SideMenuItems Title="Customers" Icon={FaUserShield} LinkText="/customers" />
      <SideMenuItems Title="Employee" Icon={FaBuildingUser} LinkText="/employee" />
      <SideMenuItems Title="Report" Icon={TbReport} LinkText="/reports" />
      <SideMenuItems Title="Cash Payment" Icon={MdOutlinePayments} LinkText="/cashpayment" />
    </div>
  );
};

export default SideMenu;
