"use client"
import React from 'react';

const CircularProgress = ({ percentage, color, size = 60, strokeWidth = 6 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-semibold text-gray-700">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

const HospitalEarnings = () => {
  const earningsData = [
    {
      id: 1,
      amount: "$4900",
      percentage: 20,
      color: "#3b82f6", // blue
      label: "OPD Revenue",
      trend: "up"
    },
    {
      id: 2,
      amount: "$750",
      percentage: 26,
      color: "#10b981", // green
      label: "Lab Revenue",
      trend: "down"
    },
    {
      id: 3,
      amount: "$560",
      percentage: 55,
      color: "#10b981", // green
      label: "Pharmacy",
      trend: "up"
    },
    {
      id: 4,
      amount: "$390",
      percentage: 40,
      color: "#06b6d4", // cyan
      label: "Surgery",
      trend: "up"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Hospital Earnings</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {earningsData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <CircularProgress 
                percentage={item.percentage} 
                color={item.color}
                size={60}
                strokeWidth={6}
              />
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {item.amount}
                </div>
                <div className={`text-sm font-medium ${
                  item.trend === 'up' ? 'text-blue-600' : 'text-red-500'
                }`}>
                  {item.percentage}%{item.trend === 'up' ? '↑' : '↓'}
                </div>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalEarnings;
