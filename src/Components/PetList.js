import axios from "axios";
import { useState, useEffect } from "react";

export const PetList = ({ employeeID }) => {
  const [petsToEmployee, setPetsToEmployee] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://vet-api-1.onrender.com/api/pets?employeeId=${employeeID}`
      );
      const result = response.data;
      console.log(result);
      const petArray = result.map((item) => item.name);
      setPetsToEmployee(petArray);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <aside className="pets-list">
      {petsToEmployee.length > 0 ? (
        <p>{petsToEmployee.join(",")}</p>
      ) : (
        <p>No pets listed for this employee</p>
      )}
    </aside>
  );
};

export default PetList;
