import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ staffMember }) => {
  const [showPets, setShowPets] = useState(false);
  return (
    <article className="employee" key={staffMember.id}>
      <h3>
        {staffMember.prefix +
          ` ${staffMember.firstName} ${staffMember.lastName}, ${staffMember.postfix}`}
      </h3>
      <h4>{staffMember.title}</h4>
      <button onClick={() => setShowPets(!showPets)}>Show Pets</button>
      <PetList employeeID={staffMember.id} showPets={showPets} />
    </article>
  );
};

export default Employee;
