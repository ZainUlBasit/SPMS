// Page.jsx
"use client";
import MainWrapper from "../components/Wrapper/MainWrapper";
import React, { useState } from "react";
import "./EmployeePage.css";

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
      <div className="employee-page">
        <h2>Employee Management System</h2>
        <div className="employee-buttons">
          <button onClick={addEmployee}>Add Employee</button>
        </div>
        <div className="employee-form">
          <input
            type="text"
            placeholder="ID"
            name="id"
            value={newEmployee.id}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newEmployee.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Position"
            name="position"
            value={newEmployee.position}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Salary"
            name="salary"
            value={newEmployee.salary}
            onChange={handleChange}
          />
        </div>
        <div className="employee-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <button onClick={() => editEmployee(index)}>Edit</button>
                    <button onClick={() => removeEmployee(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Page;
