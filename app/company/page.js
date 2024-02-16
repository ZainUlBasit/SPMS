"use client";
import React from "react";
import Button from "../components/Buttons/Button";
import MainWrapper from "../components/Wrapper/MainWrapper";
import { BsBuildingAdd } from "react-icons/bs";
import { BsBuildingExclamation } from "react-icons/bs";
import { BsBuildingFillGear } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";
import NavGenerator from "../components/Navigations/NavGenerator";
import { CompanyData } from "@/lib/NavigationData/CompanyData";

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

  return (
    <>
      <MainWrapper>
        <NavGenerator Data={CompanyData} />
      </MainWrapper>
    </>
  );
};

export default Page;
