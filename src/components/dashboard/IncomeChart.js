"use client"
import React from 'react';

import CustomChart from '../resuable/charts/ChartComponent';

const IncomeChart = () => {
  const data = [
    { period: 'Jan', patients: 20, income: 25 },
    { period: 'Feb', patients: 35, income: 30 },
    { period: 'Mar', patients: 25, income: 40 },
    { period: 'Apr', patients: 45, income: 35 },
    { period: 'May', patients: 35, income: 50 },
    { period: 'Jun', patients: 40, income: 45 },
    { period: 'Jul', patients: 30, income: 55 },
    { period: 'Aug', patients: 35, income: 50 },
    { period: 'Sep', patients: 200, income: 290 },
    { period: 'Oct', patients: 40, income: 55 },
    { period: 'Nov', patients: 50, income: 65 },
    { period: 'Dec', patients: 55, income: 70 }
  ];

 

  return (
     <CustomChart
     flagToggle = {true}
     title="Income Overview"
     chartType="area"
   data={data}
  series={[
    { key: "patients", label: "Patient", color: "#3b82f6" },
    { key: "income", label: "Income", color: "#9ca3af" },
  ]}
/>

  );
};

export default IncomeChart;
