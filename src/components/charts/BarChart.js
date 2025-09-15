import React, { useState } from 'react';

const BarChart = ({ data, title, colors }) => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const maxValue = Math.max(...data.flatMap(d => [d.requested, d.approved]));
  const chartHeight = 200;

  const handleMouseMove = (e, barData, period) => {
    setHoveredBar({ ...barData, period });
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredBar(null);
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 relative">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      
      <div className="relative">
        {/* Chart Container */}
        <div className="flex items-end justify-between h-48 gap-4">
          {data.map((item, index) => {
            const requestedHeight = (item.requested / maxValue) * chartHeight;
            const approvedHeight = (item.approved / maxValue) * chartHeight;
            
            return (
              <div key={index} className="flex flex-col items-center flex-1">
                {/* Bars Container */}
                <div className="flex items-end gap-1 mb-3" style={{ height: chartHeight }}>
                  {/* Requested Bar */}
                  <div
                    className="w-6 rounded-t cursor-pointer transition-opacity duration-200 hover:opacity-80"
                    style={{
                      height: `${requestedHeight}px`,
                      backgroundColor: colors.requested
                    }}
                    onMouseMove={(e) => handleMouseMove(e, { type: 'Requested', value: item.requested }, item.period)}
                    onMouseLeave={handleMouseLeave}
                  />
                  
                  {/* Approved Bar */}
                  <div
                    className="w-6 rounded-t cursor-pointer transition-opacity duration-200 hover:opacity-80"
                    style={{
                      height: `${approvedHeight}px`,
                      backgroundColor: colors.approved
                    }}
                    onMouseMove={(e) => handleMouseMove(e, { type: 'Approved', value: item.approved }, item.period)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                
                {/* Period Label */}
                <span className="text-xs text-gray-600 text-center">{item.period}</span>
              </div>
            );
          })}
        </div>
        
        {/* Legend */}
        <div className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded"
              style={{ backgroundColor: colors.requested }}
            />
            <span className="text-sm text-gray-600">Requested</span>
          </div>
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded"
              style={{ backgroundColor: colors.approved }}
            />
            <span className="text-sm text-gray-600">Approved</span>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredBar && (
        <div
          className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-3 pointer-events-none"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 60,
          }}
        >
          <div className="text-sm font-medium text-gray-900">{hoveredBar.period}</div>
          <div className="text-sm text-blue-600">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
            {hoveredBar.type}: {hoveredBar.value}
          </div>
        </div>
      )}
    </div>
  );
};

export default BarChart;