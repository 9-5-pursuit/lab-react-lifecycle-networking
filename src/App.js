import React, {useEffect, useState} from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
//import axios from "axios";

function App () {
  // const api = "https://backend-vet-api.onrender.com";
  // const employees = "/api/employees";
  // const pets = "/api/pets"

  // useEffect(() => {
  //   fetchAPIEmployee();
  // }, [])
  

  // async function fetchAPIEmployee(){
  //   try {
  //     const result = await axios.get(
  //       `https://backend-vet-api.onrender.com${employees}`
  //     );
  //     console.log(result.data)
      
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  return (
    <>
      <NavBar />
      <EmployeeList />
    </>
  );
};

export default App;
