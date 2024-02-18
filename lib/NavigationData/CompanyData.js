import {
  BsBuildingAdd,
  BsBuildingExclamation,
  BsBuildingFillGear,
} from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";

export const CompanyData = [
  {
    title: "Add New",
    Width: "200px",
    Icon: BsBuildingAdd,
  },
  {
    title: "Info",
    Width: "200px",
    Icon: BsBuildingExclamation,
    Link: "/company-accounts",
  },
  {
    title: "Accounts",
    Width: "200px",
    Icon: BsBuildingFillGear,
  },
  {
    title: "Ledger",
    Width: "200px",
    Icon: MdAccountBalance,
  },
];
