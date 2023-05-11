import React from "react";
import Employee from "./Employee";
import {useEffect, useState} from 'react'
import "./EmployeeList.css";
export const EmployeeList = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    fetch('https://backend-vet-api.onrender.com/api/employees').then(data => data.json() ).then(data => setData(data))
  }
  
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
       {data && <Employee data={data}/>}
      </section>
    </main>
  );
};

export default EmployeeList;
