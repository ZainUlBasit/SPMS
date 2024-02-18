"use client";
import { ReportData } from "@/lib/NavigationData/ReportData";
import NavGenerator from "../components/Navigations/NavGenerator";
import MainWrapper from "../components/Wrapper/MainWrapper";

const Page = () => {
  return (
    <>
      <MainWrapper>
        <NavGenerator Data={ReportData} />
      </MainWrapper>
    </>
  );
};

export default Page;
