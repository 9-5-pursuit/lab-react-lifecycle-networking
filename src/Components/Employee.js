import PetList from "./PetList";
import "./Employee.css";
import React, { useState } from "react";
//import axios from "axios";

export const Employee = ({ item, petData }) => {
  const [showData, setShowData] = useState(false);

  // console.log(item);
  let first = item.firstName;
  let last = item.lastName;
  if (item.prefix) {
    first = `${item.prefix} ${item.firstName}`;
  }

  if (item.postfix) {
    last = `${item.lastName}, ${item.postfix}`;
  }

  function handleToggle() {
    setShowData(!showData);
  }

  let petArray = [];
  petData.map((pets) => {
    if (pets.employeeId === item.id) {
      petArray.push(pets);
    }
  });

  return (
    <article className="employee" key={item.id}>
      <h3>{`${first} ${last}`}</h3>
      <h4>{item.title}</h4>
      <button onClick={handleToggle}>
        {!showData ? "Show Pets" : "Hide Pets"}
      </button>
      {showData && <PetList petArray={petArray} />}
    </article>
  );
};

export default Employee;

// let employeeList = employee.map((item)=>{
//   let formattedName = `${item.prefix}${item.firstName}${item.lastName}${item.postfix}`;
//   <>
//     <article className="employee" key={item}>
//       <h3>{formattedName}</h3>
//       <h4>{item.title}</h4>
//       <button>Show Pets</button>
//       <PetList />
//     </article>
//   </>;
// })
