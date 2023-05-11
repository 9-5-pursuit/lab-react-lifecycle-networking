import React, { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState(false);

  const togglePets = () => {
    setShowPets(!showPets);
  };

  const fullName = `${employee.prefix ? employee.prefix + " " : ""}${
    employee.firstName + " " +employee.lastName
  }${employee.postfix ? ", " + employee.postfix : ""}`;

  return (
    <article className="employee">
      <h3>{fullName}</h3>
      <h4>{employee.title}</h4>
      <button onClick={togglePets}>
        {showPets ? "Hide Pets" : "Show Pets"}
      </button>
      {showPets && <PetList employeeId={employee.id} />}
    </article>
  );
};

export default Employee;
