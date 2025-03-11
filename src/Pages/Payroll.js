import React, { useState } from "react";
import PayrollTable from "../components/PayrollTable";
import PayrollForm from "../components/PayrollForm";


const Payroll = () => {
  const [payrollData, setPayrollData] = useState([]);

  const addPayrollEntry = (entry) => {
    const netSalary =
      parseFloat(entry.salary) +
      parseFloat(entry.bonus || 0) -
      parseFloat(entry.deduction || 0);
    setPayrollData([...payrollData, { ...entry, netSalary }]);
  };

  const deleteEntry = (index) => {
    setPayrollData(payrollData.filter((_, i) => i !== index));
  };

  return (
    <div className="payroll-container">
      <h1 className="page-title">Payroll Management</h1>
      <div className="payroll-content">
        <div className="payroll-table">
          <PayrollTable payrollData={payrollData} deleteEntry={deleteEntry} />
        </div>
        <div className="payroll-form">
          <h2>Add Payroll Entry</h2>
          <PayrollForm addPayrollEntry={addPayrollEntry} />
        </div>
      </div>
    </div>
  );
};

export default Payroll;
