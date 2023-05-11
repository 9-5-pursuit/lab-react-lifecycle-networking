import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("https://backend-vet-api.onrender.com/api/employees")
      .then((response) => response.json())
      .then((data) => setEmployee(data));
  }, []);


  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        <Employee employee={employee} />
      </section>
    </main>
  );
};

export default EmployeeList;
