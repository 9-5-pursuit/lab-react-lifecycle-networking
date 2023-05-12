import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export default function Employee({ key, item }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="employee">
      <h3>
        {item.prefix} {item.firstName} {item.lastName}
        {item.postfix ? `, ${item.postfix}` : ``}
      </h3>
      <h4>{item.title}</h4>
      <button onClick={() => setShowDetails(!showDetails)}>Show Pets</button>
      <div>{showDetails && <PetList employeeObj={item} key={item.id} />}</div>
    </article>
  );
}
