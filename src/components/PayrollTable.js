import React from "react";


const PayrollTable = ({ payrollData, deleteEntry }) => {
  return (
    <table className = "payroll-table">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Basic Salary</th>
          <th>Bonuses</th>
          <th>Deductions</th>
          <th>Net Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {payrollData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>${item.salary}</td>
            <td>${item.bonus}</td>
            <td>${item.deduction}</td>
            <td>${item.netSalary}</td>
            <td>
              <button className="delete-btn" onClick={() => deleteEntry(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PayrollTable;
