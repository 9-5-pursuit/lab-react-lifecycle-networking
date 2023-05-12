import React, {useState}  from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({firstName, id, lastName, prefix, postfix, title}) => {

    const [showPets, setShowPets] = useState(false)

  return (
    <article className="employee">
      <h3>
        {prefix || ""} {firstName}{lastName} {postfix ? `, ${postfix}` : ""}
      </h3>

      <h4>{title}</h4>
      <button onClick={() => setShowPets(!showPets)}>Show Pets</button>
      {showPets && <PetList employeeId={id} />}
    </article>
  );
};

export default Employee;
