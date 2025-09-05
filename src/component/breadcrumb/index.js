"use client"
import React, { useState } from 'react';
import { Home, ChevronRight } from 'lucide-react';

const Breadcrumb = ({ currentPage = "Dashboard" }) => {
  const [activeFilter, setActiveFilter] = useState('Today');
  
  const timeFilters = [
    { label: 'Today', value: 'today' },
    { label: '7d', value: '7d' },
    { label: '2w', value: '2w' },
    { label: '1m', value: '1m' },
    { label: '3m', value: '3m' },
    { label: '6m', value: '6m' },
    { label: '1y', value: '1y' }
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-sm">
          <div className="flex items-center space-x-2 text-blue-600">
            <Home size={16} />
            <span className="font-medium">Home</span>
          </div>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-gray-600 font-medium">{currentPage}</span>
        </div>

        {/* Time Filter Buttons */}
        <div className="flex items-center space-x-2">
          {timeFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.label)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out ${
                activeFilter === filter.label
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
