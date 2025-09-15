import React, { useState } from 'react';

const AreaChart = ({ data, title, colors }) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleLines, setVisibleLines] = useState({ cash: true, card: true });

  const maxValue = Math.max(...data.flatMap(d => [d.cash, d.card]));
  const width = 600;
  const height = 200;
  const padding = 40;

  const toggleLine = (lineType) => {
    setVisibleLines(prev => ({
      ...prev,
      [lineType]: !prev[lineType]
    }));
  };

  // Generate SVG path for area chart
  const generateAreaPath = (values, fillBottom = true) => {
    const stepX = (width - padding * 2) / (values.length - 1);
    
    const points = values.map((value, index) => {
      const x = padding + index * stepX;
      const y = height - padding - ((value / maxValue) * (height - padding * 2));
      return { x, y };
    });

    let path = `M ${points[0].x},${points[0].y}`;
    
    // Create smooth curve using bezier curves
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1];
      const currentPoint = points[i];
      const controlPointX = (prevPoint.x + currentPoint.x) / 2;
      
      path += ` Q ${controlPointX},${prevPoint.y} ${currentPoint.x},${currentPoint.y}`;
    }

    if (fillBottom) {
      path += ` L ${points[points.length - 1].x},${height - padding}`;
      path += ` L ${points[0].x},${height - padding}`;
      path += ' Z';
    }

    return path;
  };

  const generateLinePath = (values) => {
    const stepX = (width - padding * 2) / (values.length - 1);
    
    const points = values.map((value, index) => {
      const x = padding + index * stepX;
      const y = height - padding - ((value / maxValue) * (height - padding * 2));
      return { x, y };
    });

    let path = `M ${points[0].x},${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1];
      const currentPoint = points[i];
      const controlPointX = (prevPoint.x + currentPoint.x) / 2;
      
      path += ` Q ${controlPointX},${prevPoint.y} ${currentPoint.x},${currentPoint.y}`;
    }

    return path;
  };

  // Generate hover points
  const generateHoverPoints = (values, type) => {
    const stepX = (width - padding * 2) / (values.length - 1);
    
    return values.map((value, index) => {
      const x = padding + index * stepX;
      const y = height - padding - ((value / maxValue) * (height - padding * 2));
      return { x, y, value, index, type, period: data[index].period };
    });
  };

  const handlePointHover = (e, point) => {
    setHoveredPoint(point);
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  const cashValues = data.map(d => d.cash);
  const cardValues = data.map(d => d.card);
  const cashPoints = generateHoverPoints(cashValues, 'Cash');
  const cardPoints = generateHoverPoints(cardValues, 'Card');

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 relative">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      
      <div className="relative">
        {/* SVG Chart */}
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
          <defs>
            {/* Gradient for Cash */}
            <linearGradient id="cashGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.cash} stopOpacity="0.3" />
              <stop offset="100%" stopColor={colors.cash} stopOpacity="0.1" />
            </linearGradient>
            
            {/* Gradient for Card */}
            <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.card} stopOpacity="0.3" />
              <stop offset="100%" stopColor={colors.card} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Grid Lines */}
          {data.map((item, index) => {
            const stepX = (width - padding * 2) / (data.length - 1);
            const x = padding + index * stepX;
            return (
              <line
                key={`grid-${index}`}
                x1={x}
                y1={padding}
                x2={x}
                y2={height - padding}
                stroke="#d1d5db"
                strokeWidth="1"
                strokeDasharray="4,4"
                opacity="0.5"
              />
            );
          })}
          
          {/* Card Area (Background) */}
          {visibleLines.card && (
            <path
              d={generateAreaPath(cardValues)}
              fill="url(#cardGradient)"
            />
          )}
          
          {/* Cash Area (Foreground) */}
          {visibleLines.cash && (
            <path
              d={generateAreaPath(cashValues)}
              fill="url(#cashGradient)"
            />
          )}
          
          {/* Card Line */}
          {visibleLines.card && (
            <path
              d={generateLinePath(cardValues)}
              fill="none"
              stroke={colors.card}
              strokeWidth="2"
            />
          )}
          
          {/* Cash Line */}
          {visibleLines.cash && (
            <path
              d={generateLinePath(cashValues)}
              fill="none"
              stroke={colors.cash}
              strokeWidth="2"
            />
          )}

          {/* Data Points for Card */}
          {visibleLines.card && cardPoints.map((point, index) => (
            <circle
              key={`card-point-${index}`}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="white"
              stroke={colors.card}
              strokeWidth="2"
            />
          ))}

          {/* Data Points for Cash */}
          {visibleLines.cash && cashPoints.map((point, index) => (
            <circle
              key={`cash-point-${index}`}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="white"
              stroke={colors.cash}
              strokeWidth="2"
            />
          ))}

          {/* Hover Points for Cash */}
          {visibleLines.cash && cashPoints.map((point, index) => (
            <circle
              key={`cash-${index}`}
              cx={point.x}
              cy={point.y}
              r="12"
              fill="transparent"
              stroke="transparent"
              className="cursor-pointer"
              onMouseEnter={(e) => handlePointHover(e, point)}
              onMouseLeave={handleMouseLeave}
            />
          ))}

          {/* Hover Points for Card */}
          {visibleLines.card && cardPoints.map((point, index) => (
            <circle
              key={`card-${index}`}
              cx={point.x}
              cy={point.y}
              r="12"
              fill="transparent"
              stroke="transparent"
              className="cursor-pointer"
              onMouseEnter={(e) => handlePointHover(e, point)}
              onMouseLeave={handleMouseLeave}
            />
          ))}

          {/* Visible dots on hover */}
          {hoveredPoint && visibleLines[hoveredPoint.type.toLowerCase()] && (
            <circle
              cx={hoveredPoint.x}
              cy={hoveredPoint.y}
              r="4"
              fill={hoveredPoint.type === 'Cash' ? colors.cash : colors.card}
              stroke="white"
              strokeWidth="2"
            />
          )}
        </svg>
        
        {/* X-axis Labels */}
        <div className="flex justify-between mt-4 px-10">
          {data.map((item, index) => (
            <span key={index} className="text-xs text-gray-600">
              {item.period}
            </span>
          ))}
        </div>
        
        {/* Interactive Legend/Toggle Buttons */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={() => toggleLine('cash')}
            className={`flex items-center gap-2 px-3 py-2 rounded-md border transition-colors ${
              visibleLines.cash 
                ? 'bg-blue-50 border-blue-200 text-blue-700' 
                : 'bg-gray-50 border-gray-200 text-gray-400'
            }`}
          >
            <div 
              className={`w-3 h-3 rounded-full transition-colors ${
                visibleLines.cash ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
            <span className="text-sm font-medium">Cash</span>
          </button>
          
          <button
            onClick={() => toggleLine('card')}
            className={`flex items-center gap-2 px-3 py-2 rounded-md border transition-colors ${
              visibleLines.card 
                ? 'bg-gray-50 border-gray-300 text-gray-700' 
                : 'bg-gray-50 border-gray-200 text-gray-400'
            }`}
          >
            <div 
              className={`w-3 h-3 rounded-full transition-colors ${
                visibleLines.card ? 'bg-gray-500' : 'bg-gray-300'
              }`}
            />
            <span className="text-sm font-medium">Card</span>
          </button>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredPoint && (
        <div
          className="absolute z-50 bg-gray-900 text-white rounded-lg shadow-lg p-3 pointer-events-none text-sm whitespace-nowrap"
          style={{
            left: Math.min(hoveredPoint.x, width - 120),
            top: Math.max(hoveredPoint.y - 70, 10),
          }}
        >
          <div className="font-medium text-white">{hoveredPoint.period}</div>
          <div className="flex items-center gap-2 mt-1">
            <span 
              className={`inline-block w-3 h-3 rounded-full ${
                hoveredPoint.type === 'Cash' ? 'bg-blue-400' : 'bg-gray-400'
              }`}
            ></span>
            <span className="text-white">{hoveredPoint.type}: ${hoveredPoint.value}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AreaChart;