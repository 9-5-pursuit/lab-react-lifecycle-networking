import React, { useState, useEffect } from "react";
import axios from "axios";

const PetList = ({ employeeId }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const result = await axios.get(
          `https://vet-api-1.onrender.com/api/pets?employeeId=${employeeId}`
        );
        setPets(result.data);
      } catch (error) {}
    };

    fetchPets();
  }, [employeeId]);

  return (
    <aside className="pets-list">
      {pets.length > 0 ? (
        <p>{pets.map((pet) => pet.name).join(", ")}</p>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
