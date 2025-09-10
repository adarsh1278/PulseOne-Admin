"use client"
import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const PatientsChart = () => {
  const data = [
    { month: 'Jan', newPatients: 80, returnPatients: 60 },
    { month: 'Feb', newPatients: 120, returnPatients: 90 },
    { month: 'Mar', newPatients: 100, returnPatients: 70 },
    { month: 'Apr', newPatients: 140, returnPatients: 110 },
    { month: 'May', newPatients: 110, returnPatients: 85 },
    { month: 'Jun', newPatients: 130, returnPatients: 100 },
    { month: 'Jul', newPatients: 160, returnPatients: 120 },
    { month: 'Aug', newPatients: 140, returnPatients: 105 },
    { month: 'Sep', newPatients: 180, returnPatients: 140 },
    { month: 'Oct', newPatients: 200, returnPatients: 160 },
    { month: 'Nov', newPatients: 170, returnPatients: 130 },
    { month: 'Dec', newPatients: 220, returnPatients: 180 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-lg">
          <p className="text-sm font-semibold text-gray-900 mb-2">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm flex items-center gap-2">
              <span 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="text-gray-600">
                {entry.dataKey === 'newPatients' ? 'New Patients' : 'Return Patients'}: {entry.value}
              </span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Patients</h3>
          <p className="text-sm text-gray-500">
            <span className="text-blue-500 font-semibold">20%</span> higher than last year.
          </p>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="none" stroke="#f8f9fa" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={false}
              domain={[0, 'dataMax + 50']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="newPatients" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#3B82F6', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="returnPatients" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#10B981', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-600">New Patients</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-600">Return Patients</span>
        </div>
      </div>
    </div>
  );
};

export default PatientsChart;
