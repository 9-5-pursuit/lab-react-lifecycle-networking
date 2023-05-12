import axios from "axios";
import { useEffect, useState } from "react";

export default function PetList({ employeeObj }) {
  const [petsData, setPetsData] = useState([]);

  async function getPetsData() {
    try {
      const petResults = await axios.get(
        `https://vet-api-1.onrender.com/api/pets?employeeId=${employeeObj.id}`
      );
      let arr = petResults.data.map((ele) => ele.name);
      setPetsData(arr);
    } catch (error) {}
  }

  useEffect(() => {
    getPetsData();
  }, [petsData]);

  return (
    <aside className="pets-list">
      {petsData.length === 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        <p>{petsData.join(", ")}</p>
      )}
    </aside>
  );
}
