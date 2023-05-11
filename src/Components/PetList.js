import React, { useState, useEffect } from "react";
import axios from "axios";

export const PetList = ({ employee }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  async function fetchPets() {
    try {
      const response = await axios.get(
        "https://backend-vet-api.onrender.com/api/pets"
      );
      setPets(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Find pets associated with the employee
  const employeePets = pets.filter((pet) => pet.employeeId === employee.id);

  return (
    <aside className="pets-list">
      {employeePets.length === 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        <ul>
          {employeePets.map((pet) => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default PetList;
