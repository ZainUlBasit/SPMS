"use client";
import React, { useEffect, useState } from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import NavGenerator from "../components/Navigations/NavGenerator";
import { CompanyData } from "@/lib/NavigationData/CompanyData";
import TableComp from "../components/Table/TableComponent";
import { AccountsColumns } from "@/lib/Columns/CompanyColumns";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "@/lib/Slices/CompanySlice";
import { NewButton } from "../components/Buttons/NewButton";
import {
  BsBuildingAdd,
  BsBuildingExclamation,
  BsBuildingFillGear,
} from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";
import { AddCompanyModal } from "../components/Modals/AddCompanyModal";
import { io } from "socket.io-client";
import { useRouter } from "next/navigation";
import { CheckLocalStorageAll } from "@/lib/CheckLocalStorageAll";
import SuccessToast from "../components/Toast/SuccessToast";
import { LoaderModal } from "../components/Modals/LoaderModal";

const Page = () => {
  // Define functions to handle button clicks
  const handleAddNewClick = () => {
    console.log("Add New button clicked!");
    // Add your logic here for Add New button
  };

  const handleInfoClick = () => {
    console.log("Info button clicked!");
    // Add your logic here for Info button
  };

  const handleAccountsClick = () => {
    console.log("Accounts button clicked!");
    // Add your logic here for Accounts button
  };

  const handleLedgerClick = () => {
    console.log("Ledger button clicked!");
    // Add your logic here for Ledger button
  };

  const [SelID, setSelID] = useState("");
  const [EditItemModal, setEditItemModal] = useState(false);
  const [EditCompanyModal, setEditCompanyModal] = useState(false);
  const [OpenAddModal, setOpenAddModal] = useState(false);

  const dispatch = useDispatch();
  const CompaniesData = useSelector((state) => state.CompanyState);
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  const currentWidth = "200px";

  // main code
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
        <div className="w-full flex justify-center items-center my-3">
          <NewButton
            type="modal"
            Width={currentWidth}
            setOpen={setOpenAddModal}
            link={""}
            Icon={BsBuildingAdd}
            title={"Add New"}
          />
          <NewButton
            type="link"
            Width={currentWidth}
            setOpen={""}
            link={"/company"}
            Icon={BsBuildingExclamation}
            title={"Info"}
          />
          <NewButton
            type="link"
            Width={currentWidth}
            setOpen={""}
            link={"/company-accounts"}
            Icon={BsBuildingFillGear}
            title={"Accounts"}
          />
          <NewButton
            type="link"
            Width={currentWidth}
            setOpen={""}
            link={"/company-ledger"}
            Icon={MdAccountBalance}
            title={"Ledger"}
          />
        </div>
        {Loading ? (
          <LoaderModal Open={Loading} setOpen={setLoading} />
        ) : (
          <>
            {/* main wrapper */}
            <div className="w-[100%] flex justify-center items-center">
              <div className="w-[90%]">
                <TableComp
                  rows={CompaniesData.loading ? [{}] : CompaniesData?.data}
                  columns={AccountsColumns}
                  title={"COMPANIES ACCOUNTS"}
                  setSelID={setSelID}
                  setEditItemModal={setEditItemModal}
                  setEditCompanyModal={setEditCompanyModal}
                />
              </div>
            </div>
          </>
        )}
      </MainWrapper>
      {OpenAddModal && (
        <AddCompanyModal Open={OpenAddModal} setOpen={setOpenAddModal} />
      )}
    </>
  );
};

export default Page;
