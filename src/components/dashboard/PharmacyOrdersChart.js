"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomChart from '../resuable/charts/ChartComponent';

const PharmacyOrdersChart = () => {
  const data = [
    { period: 'Jan', orders: 40 },
    { period: 'Feb', orders: 60 },
    { period: 'Mar', orders: 45 },
    { period: 'Apr', orders: 80 },
    { period: 'May', orders: 55 },
    { period: 'Jun', orders: 70 },
    { period: 'Jul', orders: 150 },
    { period: 'Aug', orders: 85 },
    { period: 'Sep', orders: 65 },
    { period: 'Oct', orders: 90 },
    { period: 'Nov', orders: 75 },
    { period: 'Dec', orders: 95 }
  ];

 
      return (
       <CustomChart
     flagToggle = {true}
     title="Pharmacy Orders Overview"
     chartType="area"
   data={data}
  series={[
    { key: "orders", label: "Orders", color: "#3b82f6" },
    
  ]}
/>
  );
};

export default PharmacyOrdersChart;
