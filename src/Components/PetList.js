import axios from "axios";
import { useEffect, useState } from "react";

export const PetList = ({ employeeID, showPets }) => {
  const [employeePet, setEmployeePet] = useState([]);

  useEffect(() => {
    getPets();
  }, []);
  async function getPets() {
    try {
      const response = await axios.get(
        `https://vet-api-1.onrender.com/api/pets`
      );
      // console.log(response.data);

      setEmployeePet(response.data);
      //console.log(employeePet);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <aside className="pets-list">
      {showPets ? (
        <>
          {employeePet.length === 0 ? (
            <p>No pets listed for this employee.</p>
          ) : (
            <ul>
              {employeePet.map((item) => {
                //let result;
                if (item.employeeId === employeeID) {
                  return <li key={item.id}>{item.name}</li>;
                  //result = item.name;
                } else {
                  return <></>;
                }
                //return <li key={item.id}>{result}</li>;
              })}
            </ul>
          )}
        </>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
