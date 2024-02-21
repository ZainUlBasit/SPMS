"use client";
import Link from "next/link";
import MainWrapper from "../components/Wrapper/MainWrapper";
import { useEffect, useState } from "react"; // Import useEffect and useState from react package
import "./page.css"; // Import the external CSS file
import NavGenerator from "../components/Navigations/NavGenerator";
import { CustomerData } from "@/lib/NavigationData/CustomerData";

// Define the Page component
const Page = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Customer 1" },
    { id: 2, name: "Customer 2" },
    { id: 3, name: "Customer 3" },
  ]);

  // Function to add a new customer
  const addCustomer = () => {
    const newCustomerId = customers.length + 1;
    const newCustomer = {
      id: newCustomerId,
      name: `Customer ${newCustomerId}`,
    };
    setCustomers([...customers, newCustomer]);
  };

  // Function to remove a customer by ID
  const removeCustomer = (customerId) => {
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== customerId
    );
    setCustomers(updatedCustomers);
  };

  // Function to edit a customer name by ID
  const editCustomer = (customerId, newName) => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === customerId ? { ...customer, name: newName } : customer
    );
    setCustomers(updatedCustomers);
  };

  return (
    <MainWrapper>
      <div>
        <h1> welcome to dashboard</h1>
      </div>
    </MainWrapper>
  );
};

// Export the Page component as default
export default Page;
