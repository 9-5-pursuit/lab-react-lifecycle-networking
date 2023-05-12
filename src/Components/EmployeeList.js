import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export default function EmployeeList() {
  const [employeesData, setEmployeesData] = useState([]);

  async function getData() {
    try {
      const result = await axios.get(
        `https://vet-api-1.onrender.com/api/employees`
      );
      setEmployeesData(result.data);
    } catch (error) {}
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        <div>
          {employeesData.map((item) => {
            return <Employee key={item.id} item={item} />;
          })}
        </div>
      </section>
    </main>
  );
}
