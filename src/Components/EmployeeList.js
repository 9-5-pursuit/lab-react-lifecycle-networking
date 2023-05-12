import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import axios from "axios";
import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        " https://vet-api-1.onrender.com/api/employees"
      );

      const result = response.data;
      setEmployees(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((item) => {
          return (
            <div key={item.id}>
              <Employee {...item} />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
