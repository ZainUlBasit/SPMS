// pages/page.js
import React from "react";
import Link from "next/link";
import { IoExit } from "react-icons/io5";
import { FaBarsProgress } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import MainWrapper from "../components/Wrapper/MainWrapper";
import Image from "next/image";

const Page = () => {
  return (
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
                <Link href="#">Link 1</Link>
              </li>
              <li>
                <Link href="#">Link 2</Link>
              </li>
              <li>
                <Link href="#">Link 3</Link>
              </li>
              <li>
                <Link href="#">Link 4</Link>
              </li>
            </ul>
          </div>
          <div className="items-for-sale-block">
            <h2>Items for Sale</h2>
            <div className="item">
              <Image src="/item-image.jpg" alt="Item" width={100} height={100} />
              <p>Item Name</p>
              <p>$99.99</p>
            </div>
            {/* Add more items here */}
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Page;