import { useState, useEffect } from "react";
import { handleAPI } from "./data/APIfunction";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]); // API gives array data

  useEffect(() => {
    handleAPI("employees", setEmployees);
  }, []);
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => {
          return (
            <Employee
              key={employee.id}
              // item={item} - spread op to simplify below
              {...employee}
            />
          );
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
