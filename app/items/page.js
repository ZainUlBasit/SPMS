// .js
"use client";
import React, { useState } from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import "./page.css";
import Button from "../components/Buttons/Button";
import NavGenerator from "../components/Navigations/NavGenerator";
import { ItemData } from "@/lib/NavigationData/ItemsData";
import { NewButton } from "../components/Buttons/NewButton";
import { BsBuildingAdd, BsInfo, BsInfoCircleFill } from "react-icons/bs";
import { RiStockFill } from "react-icons/ri";

const Page = () => {
  const [items, setItems] = useState([]);
  const [OpenAddModal, setOpenAddModal] = useState(false);
  const [AddStockModal, setAddStockModal] = useState(false)

  const addItem = () => {
    const newItem = {
      id: items.length + 1, // Assign a unique ID to each item
      name: `Item ${items.length + 1}`,
      description: `Description of item ${items.length + 1}`,
      price: "$99.99",
    };
    setItems([...items, newItem]);
  };

  const currentWidth = "220px";

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
            link={"/items"}
            Icon={BsInfoCircleFill}
            title={"Info"}
          />
          <NewButton
            type="modal"
            Width={currentWidth}
            setOpen={setAddStockModal}
            link={""}
            Icon={BsBuildingAdd}
            title={"Add Stock"}
          />
          <NewButton
            type="link"
            Width={currentWidth}
            setOpen={""}
            link={"/items-stock"}
            Icon={RiStockFill}
            title={"Stock Statistics"}
          />
        </div>
        <div>Items Info</div>
      </MainWrapper>
    </>
  );
};

export default Page;
