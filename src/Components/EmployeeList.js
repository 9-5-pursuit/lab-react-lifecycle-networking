// //import useEffect and import axios
// import React, {useEffect} from "react";
// import {useState} from 'react';
// import axios from "axios";
// import Employee from "./Employee";
// import "./EmployeeList.css";

// export const EmployeeList = () => {
//   // always set the default of the state to an empty array bc 
//   //we are working with and array. map need an array to work
//   const [employees, setEmployees] = useState([])

//   //get api infor inside of App.js
//   async function getData(){
//     // axios is like fetch but less typing, maybe easier to read to
//     try{
//       const result = await axios.get(
//         // `https://backend-vet-api.onrender.com/api/employees`
//         `https://vet-api-1.onrender.com/api/employees`
//       );
//       console.log(result.data);
//       // setData(result.data)
//     } catch(e){
//       console.log(e);}
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <main>
//       <h2>All Staff</h2>
//        <section className="employee-list">
//          {employees.map((item) => {
//            return <Employee key={item.id} {...item} />;
//          })}
//        </section>
//     </main>
//   );
// };

// export default EmployeeList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  async function getData() {
    try {
      const result = await axios.get(
        `https://vet-api-1.onrender.com/api/employees`
      );

      // console.log(result.data);
      setEmployees(result.data);
    } catch (e) {}
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((item) => {
          return <Employee key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};

export default EmployeeList;