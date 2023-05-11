import React from "react";
import { useFetch } from "./useFetch";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const {
    data: employees,
    isLoading,
    error,
  } = useFetch(`https://vet-api-1.onrender.com/api/employees`);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching employees: {error.message}</div>;
  }

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => (
          <Employee key={employee.id} {...employee} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
