import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import axios from "axios";

export const EmployeeList = () => {
  const employees = "/api/employees";
  const pets = "/api/pets";
  const [employee, setEmployee] = useState([]);
  const [petData, setPetData] = useState([])

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
  useEffect(() => {
    fetchAPIPets();
  }, []);

  async function fetchAPIPets() {
    try {
      const result = await axios.get(
        `https://backend-vet-api.onrender.com${pets}`
      );
      setPetData(result.data);
    } catch (e) {
      console.log(e);
    }
  }
  // console.log(petData)
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employee.map((item)=>{
          return <Employee item={item} key={item.id} petData={petData}/>;
        })}
        
      </section>
    </main>
  );
};

export default EmployeeList;
{
  /**<Employee employee={employee}/> */
}