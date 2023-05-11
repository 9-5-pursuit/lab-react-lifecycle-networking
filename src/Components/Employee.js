import React, { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

const Employee = ({ employee, setPets }) => {
  const [showPets, setShowPets] = useState(false);

  return (
    <article className="employee">
      <main>
        <h3>{`${employee.prefix} ${employee.firstName} ${employee.lastName}, ${employee.postfix}`}</h3>
        <h4>{employee.title}</h4>
        <button onClick={() => setShowPets(!showPets)}>
          {showPets ? "Hide Pets" : "Show Pets"}
        </button>
        {showPets && <PetList employee={employee} />}
      </main>
    </article>
  );
};

export default Employee;
