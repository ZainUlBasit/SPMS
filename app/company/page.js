"use client";
import React, { useState } from "react";
import Button from "../components/Buttons/Button";
import MainWrapper from "../components/Wrapper/MainWrapper";
import { BsBuildingAdd } from "react-icons/bs";
import { BsBuildingExclamation } from "react-icons/bs";
import { BsBuildingFillGear } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";
import NavGenerator from "../components/Navigations/NavGenerator";
import { CompanyData } from "@/lib/NavigationData/CompanyData";
import TableCustom from "../components/Table/TableWrapper";
import { CompanyColumns } from "../components/Table/Columns/CompanyData";

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
  const [EditItemModal, setEditItemModal] = useState("");
  const [EditCompanyModal, setEditCompanyModal] = useState("");

  return (
    <>
      <MainWrapper>
        <NavGenerator Data={CompanyData} />
        <TableCustom
          rows={[{}, {}]}
          columns={CompanyColumns}
          title={"Company Info"}
          setSelID={setSelID}
          setEditItemModal={setEditItemModal}
          setEditCompanyModal={setEditCompanyModal}
        />
      </MainWrapper>
    </>
  );
};

export default Page;
