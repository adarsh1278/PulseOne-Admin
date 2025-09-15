import React, { useState } from 'react';

const SimpleAreaChart = ({ data, title, colors }) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [activeLines, setActiveLines] = useState({ cash: true, card: true });

  const width = 600;
  const height = 200;
  const padding = 40;
  
  const maxValue = Math.max(...data.flatMap(d => [d.cash, d.card]));
  const stepX = (width - padding * 2) / (data.length - 1);

  // Generate smooth path for area
  const createSmoothPath = (values, isArea = false) => {
    const points = values.map((value, index) => ({
      x: padding + index * stepX,
      y: height - padding - ((value / maxValue) * (height - padding * 2))
    }));

    let path = `M ${points[0].x},${points[0].y}`;
    
    // Create smooth curves
    for (let i = 1; i < points.length; i++) {
      const cp1x = points[i - 1].x + (points[i].x - points[i - 1].x) / 3;
      const cp1y = points[i - 1].y;
      const cp2x = points[i].x - (points[i].x - points[i - 1].x) / 3;
      const cp2y = points[i].y;
      
      path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${points[i].x},${points[i].y}`;
    }

    if (isArea) {
      path += ` L ${points[points.length - 1].x},${height - padding}`;
      path += ` L ${points[0].x},${height - padding} Z`;
    }

    return path;
  };

  const toggleLine = (type) => {
    setActiveLines(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const handleHover = (e, pointData) => {
    const rect = e.target.getBoundingClientRect();
    setHoveredPoint({
      ...pointData,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 relative">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      
      <div className="relative">
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
          <defs>
            <linearGradient id="cashGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {data.map((_, index) => (
            <line
              key={`grid-${index}`}
              x1={padding + index * stepX}
              y1={padding}
              x2={padding + index * stepX}
              y2={height - padding}
              stroke="#e5e7eb"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
          ))}

          {/* Card area (background) */}
          {activeLines.card && (
            <path
              d={createSmoothPath(data.map(d => d.card), true)}
              fill="url(#cardGradient)"
            />
          )}

          {/* Cash area (foreground) */}
          {activeLines.cash && (
            <path
              d={createSmoothPath(data.map(d => d.cash), true)}
              fill="url(#cashGradient)"
            />
          )}

          {/* Card line */}
          {activeLines.card && (
            <path
              d={createSmoothPath(data.map(d => d.card))}
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2.5"
            />
          )}

          {/* Cash line */}
          {activeLines.cash && (
            <path
              d={createSmoothPath(data.map(d => d.cash))}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2.5"
            />
          )}

          {/* Data points */}
          {data.map((item, index) => {
            const x = padding + index * stepX;
            const cashY = height - padding - ((item.cash / maxValue) * (height - padding * 2));
            const cardY = height - padding - ((item.card / maxValue) * (height - padding * 2));

            return (
              <g key={index}>
                {/* Card point */}
                {activeLines.card && (
                  <circle
                    cx={x}
                    cy={cardY}
                    r="4"
                    fill="white"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => handleHover(e, { period: item.period, type: 'Card', value: item.card })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                )}
                
                {/* Cash point */}
                {activeLines.cash && (
                  <circle
                    cx={x}
                    cy={cashY}
                    r="4"
                    fill="white"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    className="cursor-pointer"
                    onMouseEnter={(e) => handleHover(e, { period: item.period, type: 'Cash', value: item.cash })}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between mt-4 px-10">
          {data.map((item, index) => (
            <span key={index} className="text-sm text-gray-600">
              {item.period}
            </span>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={() => toggleLine('cash')}
            className={`flex items-center gap-2 transition-opacity ${
              activeLines.cash ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm font-medium text-gray-700">Cash</span>
          </button>
          
          <button
            onClick={() => toggleLine('card')}
            className={`flex items-center gap-2 transition-opacity ${
              activeLines.card ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <span className="text-sm font-medium text-gray-700">Card</span>
          </button>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredPoint && (
        <div
          className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-3 pointer-events-none"
          style={{
            left: hoveredPoint.x + 10,
            top: hoveredPoint.y - 70,
          }}
        >
          <div className="text-sm font-medium text-gray-900">{hoveredPoint.period}</div>
          <div className="flex items-center gap-2 mt-1">
            <div 
              className={`w-3 h-3 rounded-full ${
                hoveredPoint.type === 'Cash' ? 'bg-blue-500' : 'bg-gray-400'
              }`}
            />
            <span className="text-sm text-gray-700">
              {hoveredPoint.type}: ${hoveredPoint.value}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleAreaChart;