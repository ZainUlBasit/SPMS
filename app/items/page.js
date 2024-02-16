// .js
"use client";
import React, { useState } from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import "./page.css";
import Button from "../components/Buttons/Button";

const Page = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1, // Assign a unique ID to each item
      name: `Item ${items.length + 1}`,
      description: `Description of item ${items.length + 1}`,
      price: "$99.99",
    };
    setItems([...items, newItem]);
  };

  return (
    <>
      <MainWrapper>Items</MainWrapper>
    </>
  );
};

export default Page;
