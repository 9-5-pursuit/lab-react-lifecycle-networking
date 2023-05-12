import PetList from "./PetList";
import {useState} from 'react'
import "./Employee.css";

export const Employee = ({
  id,
  firstName, 
  lastName,
   prefix, 
   postfix, 
   title,
  }) => {
    
   const [showpets, setshowpets] = useState(false)
  return (
    <article className="employee">
      <h3>{prefix || ""} {firstName} {lastName} {postfix ? `, ${postfix}`:""}</h3>
      <h4>{title}</h4>
      <button onClick={() => setshowpets(!showpets)}> Show Pets</button>
       {showpets && <PetList employeeId={id} />}
    </article>
  );
};

export default Employee;
