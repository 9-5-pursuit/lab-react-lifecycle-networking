import React, { useState, useEffect } from "react";
import axios from 'axios';
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  // State
  const [employees, setEmployees] = useState([]);

  // Functions
  async function getEmployeeeData(){
    try{
      const result = await axios.get('https://vet-api-1.onrender.com/api/employees');

      setEmployees(result.data);
    }
    catch(e){
      console.log(e)
    }
  }

  // Calling useEffect
  useEffect(() => {
    getEmployeeeData();
  }, [])


  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {
          employees.map((employee) => {
            return(
              <Employee key={employee.id} employee={employee}/>
            )
          })
        }
      </section>
    </main>
  );
};

export default EmployeeList;
