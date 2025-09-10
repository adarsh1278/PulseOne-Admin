"use client"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PatientsType = () => {
  const data = {
    labels: ['Male', 'Female', 'Kids'],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: [
          '#3B82F6', // Blue
          '#EF4444', // Red
          '#F59E0B', // Orange
        ],
        borderWidth: 0,
        cutout: '60%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#000',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#333',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Patients Type</h3>
      
      <div className="relative h-48 mb-6">
        <Doughnut data={data} options={options} />
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-600">Male</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-sm text-gray-600">Female</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <span className="text-sm text-gray-600">Kids</span>
        </div>
      </div>

      {/* Statistics */}
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded">15%</span>
          <span className="text-gray-600">male patients decreased than last month.</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded">20%</span>
          <span className="text-gray-600">female patients increase than last month.</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded">60%</span>
          <span className="text-gray-600">kid patients increase than last month.</span>
        </div>
      </div>
    </div>
  );
};

export default PatientsType;
