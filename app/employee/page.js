// Page.jsx
"use client";
import MainWrapper from "../components/Wrapper/MainWrapper";
import React, { useState } from "react";
import "./EmployeePage.css";
import NavGenerator from "../components/Navigations/NavGenerator";
import { EmployeeData } from "@/lib/NavigationData/EmployeeData";

const Page = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    position: "",
    salary: ""
  });
  const [editIndex, setEditIndex] = useState(null); // Track the index of the employee being edited

  const addEmployee = () => {
    if (editIndex !== null) {
      // If editing an existing employee
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = newEmployee;
      setEmployees(updatedEmployees);
      setEditIndex(null); // Reset editIndex
    } else {
      // If adding a new employee
      setEmployees([...employees, newEmployee]);
    }
    setNewEmployee({
      id: "",
      name: "",
      position: "",
      salary: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const removeEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  const editEmployee = (index) => {
    // Set newEmployee state with the details of the employee being edited
    setNewEmployee(employees[index]);
    setEditIndex(index);
  };

  return (
    <MainWrapper>
      <NavGenerator Data={EmployeeData} />
    </MainWrapper>
  );
};

export default Page;
