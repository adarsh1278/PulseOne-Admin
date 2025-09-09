"use client"
import React, { useState } from 'react';

const ActivitySection = () => {
  const [hoveredBar, setHoveredBar] = useState(null);
  
  const activityData = [
    { day: 'S', value: 40, fullDay: 'Sunday' },
    { day: 'M', value: 85, fullDay: 'Monday' },
    { day: 'T', value: 60, fullDay: 'Tuesday' },
    { day: 'W', value: 95, fullDay: 'Wednesday' },
    { day: 'T', value: 45, fullDay: 'Thursday' },
    { day: 'F', value: 100, fullDay: 'Friday' },
    { day: 'S', value: 70, fullDay: 'Saturday' }
  ];

  const maxValue = Math.max(...activityData.map(item => item.value));

  return (
    <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-6 text-white h-full relative">
      <h2 className="text-xl font-semibold mb-6">Activity</h2>
      
      {/* Chart */}
      <div className="flex items-end justify-between h-32 mb-4 px-2">
        {activityData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center relative cursor-pointer group"
            onMouseEnter={() => setHoveredBar(index)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            {/* Tooltip */}
            {hoveredBar === index && (
              <div className="absolute -top-12 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-lg z-10 text-xs whitespace-nowrap">
                <div className="font-semibold">{item.fullDay}</div>
                <div>{item.value}% activity</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
              </div>
            )}
            
            <div 
              className={`bg-white rounded-lg mb-2 min-w-[16px] transition-all duration-200 ${
                hoveredBar === index ? 'opacity-100 shadow-lg' : 'opacity-80'
              }`}
              style={{ 
                height: `${(item.value / maxValue) * 80 + 12}px`,
                minHeight: '12px',
                width: '16px'
              }}
            ></div>
            <span className="text-sm text-green-100 font-medium">{item.day}</span>
          </div>
        ))}
      </div>
      
      {/* Stats */}
      <div className="text-green-100 text-sm">
        <span className="text-2xl font-bold text-white">60%</span> patients are higher<br />
        than last week.
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-4 right-4 opacity-10">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="25" stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="30" cy="30" r="15" stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="30" cy="30" r="5" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default ActivitySection;
