import { FaInfoCircle } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAccountBalance, MdAddChart } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";




export const CustomerData = [
  {
    title: "Add New",
    Width: "w-[200px]",
    Icon: IoMdPersonAdd,
  },
  {
    title: "Add Bill",
    Width: "w-[200px]",
    Icon: MdAddChart,
  },
  {
    title: "Info",
    Width: "w-[200px]",
    Icon: FaInfoCircle,
  },
  {
    title: "Accounts",
    Width: "w-[200px]",
    Icon: MdManageAccounts,
  },
  {
    title: "Item Return",
    Width: "w-[200px]",
    Icon: GiReturnArrow,
  },
  {
    title: "Ledger",
    Width: "w-[200px]",
    Icon: MdAccountBalance,
  },
];
