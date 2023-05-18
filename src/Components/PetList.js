import { useEffect, useState } from "react";
import axios from "axios";

export const PetList = ({ employeeId }) => {
  const [petArray, setPetArray] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    handleFetchPets();
  }, []);

  async function handleFetchPets() {
    try {
      setIsFetching(true);

      ///api/pets?employeeId=vlJtFOU
      let result = await axios.get(
        `https://vet-api-1.onrender.com/api/pets?employeeId=${employeeId}`
      );

      let dataArray = result.data.map((item) => item.name);

      setPetArray(dataArray);
      setIsFetching(false);
    } catch (e) {}
  }

  return (
    <aside className="pets-list">
      {!isFetching && petArray.length === 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        <p>{petArray.join(",")}</p>
      )}
    </aside>
  );
};

export default PetList;
