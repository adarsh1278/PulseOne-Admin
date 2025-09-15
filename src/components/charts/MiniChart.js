import React from 'react';

const MiniChart = ({ data, color, type = 'area' }) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;
  
  // Generate SVG path for area chart
  const generatePath = () => {
    const width = 280;
    const height = 60;
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - minValue) / range) * height;
      return `${x},${y}`;
    });
    
    const pathData = `M ${points.join(' L ')} L ${width},${height} L 0,${height} Z`;
    return pathData;
  };

  const generateLine = () => {
    const width = 280;
    const height = 60;
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - minValue) / range) * height;
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="w-full h-16 relative">
      <svg width="100%" height="64" className="overflow-visible">
        {/* Area fill */}
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <path
          d={generatePath()}
          fill={`url(#gradient-${color})`}
          className="drop-shadow-sm"
        />
        
        {/* Line */}
        <path
          d={generateLine()}
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="drop-shadow-sm"
        />
      </svg>
    </div>
  );
};

export default MiniChart;