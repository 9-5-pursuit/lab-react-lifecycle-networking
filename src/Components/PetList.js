// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const PetList = ({ id }) => {
//   const [pet, setPet] = useState([]);

//   console.log(id);

//   useEffect(() => {
//     fetchPets();
//   }, []);

//   const fetchPets = async () => {
//     try {
//       const response = await axios.get(
//         `https://backend-vet-api.onrender.com/api/employees/${id}/pets`
//       );
//       setPet(response.data);
//     } catch (e) {
//       console.error("Error fetching pets:", e);
//     }
//   };

//   const petNames = pet.map((pet) => pet.name).join(", ");

//   return (
//     <aside className="pets-list">
//       {pet.length > 0 ? (
//         <p>{petNames}</p>
//       ) : (
//         <p>No pets listed for this employee.</p>
//       )}
//     </aside>
//   );
// };

// export default PetList;
import React, { useState, useEffect } from "react";
import axios from "axios";

const PetList = ({ id }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
    // eslint-disable-next-line
  }, [id]);

  const fetchPets = async () => {
    try {
      const response = await axios.get(
        `https://backend-vet-api.onrender.com/api/employees/${id}/pets`
      );
      setPets(response.data);
    } catch (e) {
      console.error("Error fetching pets:", e);
    }
  };

  const petNames = pets.map((pet) => pet.name).join(", ");

  return (
    <aside className="pets-list">
      {pets.length > 0 ? (
        <p>{petNames}</p>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
