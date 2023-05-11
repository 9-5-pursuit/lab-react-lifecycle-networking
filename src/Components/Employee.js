import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ employee, petData }) => {
  const [show, setShow] = useState(false);
  console.log(employee);

  let staff = employee.map((employee) => {
    return (
      <article className="employee" key={employee.id}>
        <h3>
          {employee.prefix} {employee.firstName} {employee.lastName},{" "}
          {employee.postfix}{" "}
        </h3>
        <h4>{employee.title}</h4>
        <button onClick={() => setShow(!show)}>Show Pets</button>
        {show ? <PetList employeeID={employee.id} /> : null}
      </article>
    );
  });

  return <>{staff}</>;
};

export default Employee;
