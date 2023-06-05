// import React, { useState, useEffect } from "react";
// import Employee from "./Employee";
// import axios from "axios";
// import "./EmployeeList.css";

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get(
//           "https://backend-vet-api.onrender.com/api/employees"
//         );
//         setEmployees(response.data);
//       } catch (e) {
//         console.error("Error fetching employees:", e);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   return (
//     <main>
//       <h2>All Staff</h2>
//       <section>
//         {employees.map((employee) => (
//           <Employee key={employee} employee={employee} />
//         ))}
//       </section>
//     </main>
//   );
// };

// export default EmployeeList;

import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import axios from "axios";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://backend-vet-api.onrender.com/api/employees"
      );
      setEmployees(response.data);
    } catch (e) {
      console.error("Error fetching employees:", e);
    }
  };

  return (
    <main>
      <h2>All Staff</h2>
      <section>
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
