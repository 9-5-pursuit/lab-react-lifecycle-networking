import { useState, useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";
import { useFetch } from "./useFetch";

export const Employee = ({
  firstName,
  lastName,
  title,
  prefix,
  postfix,
  id,
}) => {
  const [pets, setPets] = useState([]);
  const [showPets, setShowPets] = useState(false);

  const name = `${prefix ? prefix + " " : ""}${firstName} ${lastName}${
    postfix ? ", " + postfix : ""
  }`;

  const { data, error, loading } = useFetch(
    `https://vet-api-1.onrender.com/api/pets?employeeId=${id}`
  );

  useEffect(() => {
    if (data) {
      setPets(data);
    }
  }, [data]);

  return (
    <article className="employee">
      <h3>{name}</h3>
      <h4>{title}</h4>
      <button onClick={() => setShowPets(!showPets)}>
        {showPets ? "Hide Pets" : "Show Pets"}
      </button>
      {error && <div>Error fetching pets: {error.message}</div>}
      {loading && <div>Loading pets...</div>}
      {showPets && <PetList pets={pets} />}
    </article>
  );
};

export default Employee;
