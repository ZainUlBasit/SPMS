"use client";
import Button from "../components/Buttons/Button";
import MainWrapper from "../components/Wrapper/MainWrapper";
import { BsBuildingAdd } from "react-icons/bs";
import { BsBuildingExclamation } from "react-icons/bs";
import { BsBuildingFillGear } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";

const Page = () => {
  return (
    <>
      <MainWrapper>
        <div className="w-full flex justify-center items-center my-3">
          <Button title={"Add New"} Width={"w-[170px]"} Icon={BsBuildingAdd} />
          <Button title={"Info"} Width={"w-[170px]"} Icon={BsBuildingExclamation}/>
          <Button title={"Accounts"} Width={"w-[170px]"} Icon={BsBuildingFillGear} />
          <Button title={"Ledger"} Width={"w-[170px]"} Icon={MdAccountBalance} />
        </div>
      </MainWrapper>
    </>
  );
};

export default Page;
