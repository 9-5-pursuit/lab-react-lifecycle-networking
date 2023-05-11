import { useEffect, useState } from "react";

export const PetList = ({ employeeID }) => {
  console.log(employeeID);
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch("https://backend-vet-api.onrender.com/api/pets")
      .then((response) => response.json())
      .then((data) => setPets(data));
  }, []);

  function ID(animal) {
    let array = [];
    for (let pet of animal) {
      if (pet.id === employeeID) {
        array.push(pet.name);
      }
    }
    return array.join(",");
  }

  return (
    <aside className="pets-list">
      <p>
        {ID(pets) === employeeID
          ? ID(pets)
          : "No pets listed for this employee."}
      </p>
    </aside>
  );
};

export default PetList;
