// ./app/customers/page.js

// Mark this component as a Client Component
"use client";

// Import necessary modules
import Link from "next/link";
import MainWrapper from "../components/Wrapper/MainWrapper";
import { useEffect, useState } from "react"; // Import useEffect and useState from react package
import "./page.css"; // Import the external CSS file

// Define the Page component
const Page = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Customer 1' },
    { id: 2, name: 'Customer 2' },
    { id: 3, name: 'Customer 3' },
  ]);

  // Function to add a new customer
  const addCustomer = () => {
    const newCustomerId = customers.length + 1;
    const newCustomer = { id: newCustomerId, name: `Customer ${newCustomerId}` };
    setCustomers([...customers, newCustomer]);
  };

  // Function to remove a customer by ID
  const removeCustomer = (customerId) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== customerId);
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
    <>
      {/* Wrap the content with MainWrapper component */}
      <MainWrapper>
        {/* Define the content of the page */}
        <div className="container">
          <h1 className="heading">Customers Page</h1>
          {/* Button group for adding, removing, and editing customers */}
          <div className="buttonGroup">
            <button className="button" onClick={addCustomer}>
              Add Customer
            </button>
          </div>
          {/* List of customers */}
          <table className="customerTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>
                    {/* Add buttons for editing and removing individual customers */}
                    <button className="editButton" onClick={() => editCustomer(customer.id, prompt('Enter new name:'))}>
                      Edit
                    </button>
                    <button className="removeButton" onClick={() => removeCustomer(customer.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MainWrapper>
    </>
  );
};

// Export the Page component as default
export default Page;
