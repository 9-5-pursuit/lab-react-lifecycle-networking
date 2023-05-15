import { useState } from "react";
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
  // state for show pets
  const [click, setClick] = useState(false);

  async function handleClick() {
    setClick(!click);
  }

  return (
    <article className="employee">
      <h3>
        {prefix ? prefix : ""} {firstName} {lastName}
        {postfix ? `, ${postfix}` : null}
      </h3>
      <h4>{title}</h4>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {!click ? "Show Pets" : "Hide Pets"}
      </button>
      {click && <PetList id={id} />}
    </article>
  );
};

export default Employee;
