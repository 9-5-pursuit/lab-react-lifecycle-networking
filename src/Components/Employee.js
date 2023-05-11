import PetList from "./PetList";
import { useState } from 'react'
import "./Employee.css";

export const Employee = ({ em, petData }) => {
  const [showPets, setShowPets] = useState(false)

  let filteredPets = []

  petData.forEach((pet) => {
    if (em.id === pet.employeeId) {
      filteredPets.push(pet.name)
    }
  })

  return (
    <article className="employee">
      <h3>{em.prefix} {em.firstName} {em.lastName}{em.postfix ? `, ${em.postfix}` : ""}</h3>
      <h4>{em.title}</h4>
      <button onClick={() => setShowPets(!showPets)}>Show Pets</button>
      {showPets ? <PetList petData={filteredPets} em={em}/> : null}
    </article>
  );
};

export default Employee;
