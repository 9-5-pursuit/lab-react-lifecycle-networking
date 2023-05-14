import React, { useEffect, useState } from "react";
import axios from "axios";

export const PetList = ({ employeeId }) => {
  const [petNamesArray, setPetNamesArray] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  // isFetching is used for axios intercept.

  useEffect(() => {
    getPetList();
  }, []);

  async function getPetList() {
    try {
      const result = await axios.get(
        `https://vet-api-1.onrender.com/api/pets?employeeId=${employeeId}`
      );
      let petDataArray = result.data.map((item) => item.name);

      setPetNamesArray(petDataArray);
      setIsFetching(false);
    } catch (e) {}
  }

  return (
    <>
      <aside className="pets-list">
        {!isFetching && petNamesArray.length === 0 ? (
          <p>No pets listed for this employee.</p>
        ) : (
          <p>{petNamesArray.join(",")}</p>
        )}
      </aside>
    </>
  );
};

export default PetList;
