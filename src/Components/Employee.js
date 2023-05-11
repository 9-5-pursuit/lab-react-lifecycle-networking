import PetList from "./PetList";
import "./Employee.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Employee = ({ item }) => {
  const [showData, setShowData] = useState(false);
  const pets = "/api/pets";
  console.log(item);
  let first = item.firstName;
  let last = item.lastName;
  if (item.prefix) {
    first = `${item.prefix} ${item.firstName}`;
  }

  if (item.postfix) {
    last = `${item.lastName}, ${item.postfix}`;
  }

  return (
    <article className="employee" key={item.id}>
      <h3>{`${first} ${last}`}</h3>
      <h4>{item.title}</h4>
      <button>Show Pets</button>
      <PetList />
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
