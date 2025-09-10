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

const SurgeriesChart = () => {
  const data = {
    labels: ['Completed', 'Total'],
    datasets: [
      {
        data: [110, 50], // 110 completed out of 160 total
        backgroundColor: [
          '#EF4444', // Red for completed
          '#3B82F6', // Blue for remaining
        ],
        borderWidth: 0,
        cutout: '70%',
        circumference: 180,
        rotation: 270,
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
        backgroundColor: '#fff',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            const total = 160;
            const percentage = Math.round((context.parsed / total) * 100);
            return `${context.label}: ${context.parsed} (${percentage}%)`;
          }
        }
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Surgeries</h3>
      
      <div className="relative h-48 mb-4">
        <Doughnut data={data} options={options} />
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Total</div>
            <div className="text-2xl font-bold text-red-500">110</div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="text-sm text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded">22%</span>
          <span className="text-gray-600">male patients decreased than last month.</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded">38%</span>
          <span className="text-gray-600">female patients increase than last month.</span>
        </div>
      </div>
    </div>
  );
};

export default SurgeriesChart;
