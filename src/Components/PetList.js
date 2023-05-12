import axios from "axios";
import { useEffect, useState } from "react";

export default function PetList({ employee }) {
  const [pets, setPets] = useState([]);
  // console.log(pets);

  // console.log(employee);

  async function fetchPetData() {
    try {
      const result = await axios.get(
        `https://vet-api-1.onrender.com/api/pets?employeeId=${employee.id}`
        // result is a filtered array
      );
      let filteredArr = result.data.map((item) => item.name);
      setPets(filteredArr);
      /*use the helper function inside of the try block to update the state*/
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPetData(); //call the function here
  }, [pets]);
  /*add the state to the dependency
  make sure to include a dependency to avoid an infinite loop*/

  let filteredPets = pets.filter((item) => {
    // console.log(ele);
    item.employeeId === employee.id;
  });
  return (
    <aside className="pets-list">
      {pets.length > 0 ? (
        pets.join(",")
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
}
