// .js
"use client";
import React, { useState } from 'react';
import MainWrapper from "../components/Wrapper/MainWrapper";
import "./page.css";
import Button from '../components/Buttons/Button';

const Page = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1, // Assign a unique ID to each item
      name: `Item ${items.length + 1}`,
      description: `Description of item ${items.length + 1}`,
      price: "$99.99"
    };
    setItems([...items, newItem]);
  };

  return (
    <>
      <MainWrapper>
        <div className="centered-content">
          <h1>Items for Sale</h1>
          <Button title={"Add items"} Width={"w-[170px]"}  />
          <table className="item-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td><img src={`/item${item.id}.jpg`} alt={`Item ${item.id}`} /></td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MainWrapper>
    </>
  );
};

export default Page;