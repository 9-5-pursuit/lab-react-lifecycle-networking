import React from "react";
import Employee from "./Employee";
import axios from "axios";
import "./EmployeeList.css";
import { useState, useEffect } from "react";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  async function fetchData() {
    try {
      const result = await axios.get(
        `https://vet-api-1.onrender.com/api/employees`
      );
      setEmployees(result.data);
      /*use the helper function inside of the try block to update the state*/
      // console.log(result);
    } catch (error) {
      // console.log(error);
    }
  }
  useEffect(() => {
    fetchData(); //call the function here
  }, []); /*make sure to include a dependency to avoid an infinite loop*/

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        <div>
          {employees.map((ele) => {
            return <Employee key={ele.id} ele={ele} />;
          })}
        </div>
      </section>
    </main>
  );
}
