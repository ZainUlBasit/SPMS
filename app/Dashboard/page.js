// .js
"use client";
import React, { useState } from "react";
import { IoExit } from "react-icons/io5";
import { FaBarsProgress } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import "./page.css";
import SideMenu from "../components/SideMenu/SideMenu";
import MainWrapper from "../components/Wrapper/MainWrapper";

const Page = () => {
  return (
    <>
      <MainWrapper>
        <div className="content">
          <h1>Welcome to Your Dashboard</h1>
          <div className="dashboard-grid">
            <div className="graph-block">
              {/* Graph component goes here */}
              <h2>Graph 1</h2>
              {/* Placeholder for graph */}
            </div>
            <div className="graph-block">
              {/* Graph component goes here */}
              <h2>Graph 2</h2>
              {/* Placeholder for graph */}
            </div>
            <div className="graph-block">
              {/* Graph component goes here */}
              <h2>Graph 3</h2>
              {/* Placeholder for graph */}
            </div>
            <div className="graph-block">
              {/* Graph component goes here */}
              <h2>Graph 4</h2>
              {/* Placeholder for graph */}
            </div>
            <div className="page-link-block">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li>
                <li>
                  <a href="#">Link 4</a>
                </li>
              </ul>
            </div>
            <div className="items-for-sale-block">
              <h2>Items for Sale</h2>
              <div className="item">
                <img src="item-image.jpg" alt="Item" />
                <p>Item Name</p>
                <p>$99.99</p>
              </div>
              {/* Add more items here */}
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default Page;
