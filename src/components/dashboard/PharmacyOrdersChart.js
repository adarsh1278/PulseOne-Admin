"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PharmacyOrdersChart = () => {
  const data = [
    { month: 'Jan', orders: 40 },
    { month: 'Feb', orders: 60 },
    { month: 'Mar', orders: 45 },
    { month: 'Apr', orders: 80 },
    { month: 'May', orders: 55 },
    { month: 'Jun', orders: 70 },
    { month: 'Jul', orders: 150 },
    { month: 'Aug', orders: 85 },
    { month: 'Sep', orders: 65 },
    { month: 'Oct', orders: 90 },
    { month: 'Nov', orders: 75 },
    { month: 'Dec', orders: 95 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-1">{label}</p>
          <p className="text-sm flex items-center">
            <span className="inline-block w-3 h-3 rounded-full mr-2 bg-blue-500"></span>
            <span>Orders:</span>
            <span className="ml-1 font-medium">{payload[0].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Pharmacy Orders</h2>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="orders" 
              fill="#3b82f6" 
              radius={[4, 4, 0, 0]}
              maxBarSize={20}
              name="Orders"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PharmacyOrdersChart;
