import React, { useState } from "react";

const PayrollForm = ({ addPayrollEntry }) => {
  const [employee, setEmployee] = useState({
    name: "",
    salary: "",
    bonus: "",
    deduction: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPayrollEntry(employee);
    setEmployee({ name: "", salary: "", bonus: "", deduction: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="payroll-form">
      <input type="text" name="name" placeholder="Employee Name" value={employee.name} onChange={handleChange} required />
      <input type="number" name="salary" placeholder="Basic Salary" value={employee.salary} onChange={handleChange} required />
      <input type="number" name="bonus" placeholder="Bonuses" value={employee.bonus} onChange={handleChange} />
      <input type="number" name="deduction" placeholder="Deductions" value={employee.deduction} onChange={handleChange} />
      <button type="submit">Add Payroll</button>
    </form>
  );
};

export default PayrollForm;
