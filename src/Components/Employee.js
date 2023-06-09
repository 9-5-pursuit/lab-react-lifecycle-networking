import React, { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({
  id,
  firstName,
  lastName,
  prefix,
  postfix,
  title,
}) => {
  const [showPets, setShowPets] = useState(false);

  return (
    <article className="employee">
      <h3>
        {prefix || ""} {firstName} {lastName}
        {postfix ? `, ${postfix}` : ""}
      </h3>
      <h4>{title}</h4>
      <button onClick={() => setShowPets(!showPets)}>Show Pets</button>
      {showPets && (
        <div className="pets-container">
          <PetList employeeId={id} />
        </div>
      )}
    </article>
  );
};

export default Employee;
