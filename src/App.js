import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
//import { useState } from "react";

// Main link: https://backend-vet-api.onrender.com/api/

// Pets: /api/pets
// Owners: /api/owners
// Owners/Pets: /api/owners_pets

function App() {
  return (
    <>
      <NavBar />
      <EmployeeList />
    </>
  );
}

export default App;
