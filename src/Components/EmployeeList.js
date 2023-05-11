import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import axios from "axios";

export const EmployeeList = () => {
  const employees = "/api/employees";
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetchAPIEmployee();
  }, []);

  async function fetchAPIEmployee() {
    try {
      const result = await axios.get(
        `https://backend-vet-api.onrender.com${employees}`
      );
      setEmployee(result.data);
    } catch (e) {
      console.log(e);
    }
  }
  //console.log(employee)

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employee.map((item)=>{
          return <Employee item={item} key={item.id} />;
        })}
        
      </section>
    </main>
  );
};

export default EmployeeList;
{
  /**<Employee employee={employee}/> */
}