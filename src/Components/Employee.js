// import { useEffect, useState } from "react";
// import PetList from "./PetList";
// import axios from "axios";
// import "./Employee.css";

// export const Employee = () => {
//   const [postData, setPostData] = useState([]);

//   useEffect(() => {
//     fetchEmployee();
//   }, []);

//   async function fetchEmployee() {
//     try {
//       const result = await axios.get(
//         `https://backend-vet-api.onrender.com/api/employees`
//       );
//       setPostData(result.data);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   function getName(prefix, firstName, lastName, postfix) {
//     if (prefix !== "") {
//       return `${prefix} ${firstName} ${lastName} `;
//     }

//     if (postfix !== "") {
//       return `${firstName} ${lastName}, ${postfix}`;
//     }

//     return `${firstName} ${lastName}`;
//   }

//   function toggleShowData(id) {
//     setPostData((prevData) =>
//       prevData.map((employee) =>
//         employee.id === id
//           ? { ...employee, showData: !employee.showData }
//           : employee
//       )
//     );
//   }

//   return (
//     <>
//       {postData.map(
//         ({ id, prefix, firstName, lastName, postfix, showData }) => (
//           <article key={id} className="employee">
//             <h3>{getName(prefix, firstName, lastName, postfix)}</h3>
//             <h4>Staff Member Title</h4>
//             <button onClick={() => toggleShowData(id)}>
//               {showData ? <>Hide Pets</> : <>Show Pets</>}
//             </button>
//             {showData && <PetList id={id} />}
//           </article>
//         )
//       )}
//     </>
//   );
// };

// export default Employee;

import React, { useEffect, useState } from "react";
import PetList from "./PetList";
import axios from "axios";
import "./Employee.css";

const Employee = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetchEmployee();
  }, []);

  async function fetchEmployee() {
    try {
      const result = await axios.get(
        "https://backend-vet-api.onrender.com/api/employees"
      );
      setPostData(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  function getName(prefix, firstName, lastName, postfix) {
    if (prefix !== "") {
      return `${prefix} ${firstName} ${lastName}`;
    }

    if (postfix !== "") {
      return `${firstName} ${lastName}, ${postfix}`;
    }

    return `${firstName} ${lastName}`;
  }

  function toggleShowData(id) {
    setPostData((prevData) =>
      prevData.map((employee) =>
        employee.id === id
          ? { ...employee, showData: !employee.showData }
          : employee
      )
    );
  }

  return (
    <>
      {postData.map(
        ({ id, prefix, firstName, lastName, postfix, showData }) => (
          <article key={id} className="employee">
            <h3>{getName(prefix, firstName, lastName, postfix)}</h3>
            <h4>Staff Member Title</h4>
            <button onClick={() => toggleShowData(id)}>
              {showData ? <>Hide Pets</> : <>Show Pets</>}
            </button>
            {showData && <PetList id={id} />}
          </article>
        )
      )}
    </>
  );
};

export default Employee;
