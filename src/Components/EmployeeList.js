import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import axios from "axios";
import "./EmployeeList.css";

// Main Employees link: https://backend-vet-api.onrender.com/api/employees
// alternate link: https://vet-api-1.onrender.com/api/employees

export const EmployeeList = () => {
  //-----------------------//
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
    //console.log(employees);
  }, []);
  async function getEmployees() {
    try {
      const response = await axios.get(
        `https://vet-api-1.onrender.com/api/employees`
      );
      //console.log(response.data);
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
    //------------------------//

    // fetch(`https://vet-api-1.onrender.com/api/employee`)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setEmployees(json);
    //     console.log(json);
    //   })
    //   .catch((error) => {
    //     console.log("There was a problem fetching the data");
    //   });
  }
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((item) => {
          return <Employee staffMember={item} />;
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
