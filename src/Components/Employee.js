import PetList from "./PetList";
import "./Employee.css";

import { useState } from "react";

export const Employee = ({
  firstName,
  id,
  lastName,
  postfix,
  prefix,
  title,
}) => {
  const [showPetList, setShowPetList] = useState(false);

  const name = `${prefix ? prefix + " " : ""} ${firstName}${lastName} 
  ${postfix ? ", " + postfix : ""} `;
  return (
    <article className="employee" key={id}>
      <h3>{name}</h3>
      <h4>
        {title} {postfix}
      </h4>
      <button onClick={() => setShowPetList(!showPetList)}>
        {showPetList ? "Hide Pets" : "Show Pets"}
      </button>
      {showPetList && <PetList employeeID={id} />}
    </article>
  );
};

export default Employee;
