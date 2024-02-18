"use client"
import { CashData } from "@/lib/NavigationData/CashData";
import NavGenerator from "../components/Navigations/NavGenerator";
import MainWrapper from "../components/Wrapper/MainWrapper";

const Page = () => {
  return (
    <>
      <MainWrapper>
        <NavGenerator Data={CashData} />
      </MainWrapper>
    </>
  );
};

export default Page;
