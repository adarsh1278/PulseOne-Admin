"use client"
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const AppointmentsChart = () => {
  const data = [
    { month: 'Jan', appointments: 80 },
    { month: 'Feb', appointments: 95 },
    { month: 'Mar', appointments: 70 },
    { month: 'Apr', appointments: 120 },
    { month: 'May', appointments: 85 },
    { month: 'Jun', appointments: 110 },
    { month: 'Jul', appointments: 90 },
    { month: 'Aug', appointments: 140 },
    { month: 'Sep', appointments: 100 },
    { month: 'Oct', appointments: 160 },
    { month: 'Nov', appointments: 130 },
    { month: 'Dec', appointments: 180 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-lg">
          <p className="text-sm font-semibold text-gray-900 mb-1">{`${label}`}</p>
          <p className="text-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-blue-500"></span>
            <span className="text-gray-600">Appointments: {payload[0].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Appointments</h3>
          <p className="text-sm text-gray-500">
            <span className="text-blue-500 font-semibold">33%</span> higher than last year.
          </p>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
              domain={[0, 'dataMax + 20']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="appointments" 
              fill="#3B82F6" 
              radius={[4, 4, 0, 0]}
              maxBarSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppointmentsChart;
