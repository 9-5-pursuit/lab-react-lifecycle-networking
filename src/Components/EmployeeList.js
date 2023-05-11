import React from "react";
import Employee from "./Employee";
import { useEffect, useState } from 'react'
import "./EmployeeList.css";
export const EmployeeList = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    fetch('https://vet-api-1.onrender.com/api/employees').then(data => data.json()).then(data => setData(data))
  }

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        <Employee data={data} />
      </section>
    </main>
  );
};

export default EmployeeList;
