import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import axios from 'axios'
import { useEffect, useState } from 'react'

function App () {
  const [employeeData, setEmployeeData] = useState([])
  const [petData, setPetData] = useState([])
  
  useEffect(() => {
    fetchEmployeeData();
    fetchPetData();
  }, []);
  
  async function fetchEmployeeData() {
    try {
      const result = await axios.get(
        `https://backend-vet-api.onrender.com/api/employees`
      );
      setEmployeeData(result.data)
  } catch (e) {}
  }

  async function fetchPetData() {
    try {
      const result = await axios.get(
        `https://backend-vet-api.onrender.com/api/pets`
      );
      setPetData(result.data);
  } catch (e) {}
  }

  return (
    <>
      <NavBar />
      <EmployeeList employeeData={employeeData} petData={petData}/>
    </>
  );
};

export default App;
