"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const IncomeChart = () => {
  const data = [
    { month: 'Jan', patients: 20, income: 25 },
    { month: 'Feb', patients: 35, income: 30 },
    { month: 'Mar', patients: 25, income: 40 },
    { month: 'Apr', patients: 45, income: 35 },
    { month: 'May', patients: 35, income: 50 },
    { month: 'Jun', patients: 40, income: 45 },
    { month: 'Jul', patients: 30, income: 55 },
    { month: 'Aug', patients: 35, income: 50 },
    { month: 'Sep', patients: 200, income: 290 },
    { month: 'Oct', patients: 40, income: 55 },
    { month: 'Nov', patients: 50, income: 65 },
    { month: 'Dec', patients: 55, income: 70 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-1">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm flex items-center">
              <span 
                className="inline-block w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="capitalize">{entry.name}:</span>
              <span className="ml-1 font-medium">{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Income</h2>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="patients" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2, fill: '#fff' }}
              name="Patients"
            />
            <Line 
              type="monotone" 
              dataKey="income" 
              stroke="#10b981" 
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2, fill: '#fff' }}
              name="Income"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-600">Patients</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-600">Income</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeChart;
