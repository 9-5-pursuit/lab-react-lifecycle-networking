import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ employeeData, petData }) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeData.map((em) => {
          return (
            <Employee em={em} petData={petData} key={em.id}/>
          )
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
