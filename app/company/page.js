"use client";
import React from "react";
import Button from "../components/Buttons/Button";
import MainWrapper from "../components/Wrapper/MainWrapper";
import { BsBuildingAdd } from "react-icons/bs";
import { BsBuildingExclamation } from "react-icons/bs";
import { BsBuildingFillGear } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";

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
          {/* Add functionality to the buttons using onClick */}
          <Button
            title={"Add New"}
            Width={"w-[170px]"}
            Icon={BsBuildingAdd}
            onClick={handleAddNewClick}
          />
          <Button
            title={"Info"}
            Width={"w-[170px]"}
            Icon={BsBuildingExclamation}
            onClick={handleInfoClick}
          />
          <Button
            title={"Accounts"}
            Width={"w-[170px]"}
            Icon={BsBuildingFillGear}
            onClick={handleAccountsClick}
          />
          <Button
            title={"Ledger"}
            Width={"w-[170px]"}
            Icon={MdAccountBalance}
            onClick={handleLedgerClick}
          />
        </div>
      </MainWrapper>
    </>
  );
};

export default Page;