"use client";
import React, { useState } from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import NavGenerator from "../components/Navigations/NavGenerator";
import { CompanyData } from "@/lib/NavigationData/CompanyData";
import TableComp from "../components/Table/TableComponent";
import { InfoColumns } from "@/lib/Columns/CompanyColumns";
import { NewButton } from "../components/Buttons/NewButton";

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

  const currentWidth = "200px";

  return (
    <>
      <MainWrapper>
        <div className="w-full flex justify-center items-center my-3">
          <NewButton type="modal" Width={currentWidth} setOpen={setEditCompanyModal} link={""} Icon title /> 
        </div>
        <NavGenerator Data={CompanyData} />
        {/* main wrapper */}
        <div className="w-[100%] flex justify-center items-center">
          <div className="w-[90%]">
            <TableComp
              rows={[{}]}
              columns={InfoColumns}
              title={"COMPANIES INFO"}
              setSelID={setSelID}
              setEditItemModal={setEditItemModal}
              setEditCompanyModal={setEditCompanyModal}
            />
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default Page;
