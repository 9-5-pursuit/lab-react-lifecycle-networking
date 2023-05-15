import { useState, useEffect } from "react";
import { handleAPI } from "./data/APIfunction";

export const PetList = ({ id }) => {
  const [pets, setPets] = useState([]);

  const petFilter = pets.filter(({ employeeId }) => id === employeeId);
  const petNames = petFilter.map(({ name }) => name);

  useEffect(() => {
    handleAPI("pets", setPets);
  }, []);

  return (
    <aside className="pets-list">
      {petFilter.length ? (
        <p>{petNames.join(", ")}</p>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
