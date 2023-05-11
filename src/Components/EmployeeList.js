import React, { useEffect, useState } from "react";
import axios from "axios";
import Employee from "./Employee";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    try {
      const response = await axios.get(
        "https://backend-vet-api.onrender.com/api/employees"
      );
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="employee-list"
      style={{
        display: "grid",
        gap: "25px",
        gridTemplateColumns: "repeat(3, 1fr)",
        margin: "40px",
      }}
    >
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
