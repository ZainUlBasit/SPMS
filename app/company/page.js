"use client";
import React from "react";
import Button from "../components/Buttons/Button";
import MainWrapper from "../components/Wrapper/MainWrapper";
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
        <div className="w-full flex justify-center items-center my-3">
          <NewButton type="modal" Width={currentWidth} setOpen={setEditCompanyModal} link="" Icon, title
        </div>
        <NavGenerator Data={CompanyData} />
      </MainWrapper>
    </>
  );
};

export default Page;
