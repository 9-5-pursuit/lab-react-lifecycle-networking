import React, { useState, useEffect } from "react";
import axios from "axios";

const PetList = ({ employeeId }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get(
        `https://backend-vet-api.onrender.com/api/employees/${employeeId}/pets`
      );
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  const petNames = pets.map((pet) => pet.name).join(", ");

  return (
    <aside className="pets-list">
      {pets.length > 0 ? (
        <p>{petNames}</p>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
