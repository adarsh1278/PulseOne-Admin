import React from 'react';

const HealthActivityChart = ({ healthActivityData }) => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Health Activity</h3>
            
            {/* Radar Chart Container */}
            <div className="relative w-full h-64 flex items-center justify-center">
                <svg width="200" height="200" viewBox="0 0 200 200" className="transform rotate-0">
                    {/* Grid lines */}
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                        </pattern>
                    </defs>

                    {/* Hexagon grid */}
                    {[20, 40, 60, 80, 100].map((radius, index) => (
                        <polygon
                            key={index}
                            points={healthActivityData.map((_, i) => {
                                const angle = (i * 60 - 90) * Math.PI / 180;
                                const x = 100 + radius * Math.cos(angle);
                                const y = 100 + radius * Math.sin(angle);
                                return `${x},${y}`;
                            }).join(' ')}
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="1"
                        />
                    ))}

                    {/* Axis lines */}
                    {healthActivityData.map((_, index) => {
                        const angle = (index * 60 - 90) * Math.PI / 180;
                        const x = 100 + 100 * Math.cos(angle);
                        const y = 100 + 100 * Math.sin(angle);
                        return (
                            <line
                                key={index}
                                x1="100"
                                y1="100"
                                x2={x}
                                y2={y}
                                stroke="#e5e7eb"
                                strokeWidth="1"
                            />
                        );
                    })}

                    {/* Data polygon */}
                    <polygon
                        points={healthActivityData.map((item) => {
                            const angle = (item.angle - 90) * Math.PI / 180;
                            const x = 100 + item.value * Math.cos(angle);
                            const y = 100 + item.value * Math.sin(angle);
                            return `${x},${y}`;
                        }).join(' ')}
                        fill="rgba(59, 130, 246, 0.2)"
                        stroke="#3b82f6"
                        strokeWidth="2"
                    />

                    {/* Data points */}
                    {healthActivityData.map((item, index) => {
                        const angle = (item.angle - 90) * Math.PI / 180;
                        const x = 100 + item.value * Math.cos(angle);
                        const y = 100 + item.value * Math.sin(angle);
                        return (
                            <circle
                                key={index}
                                cx={x}
                                cy={y}
                                r="3"
                                fill="#3b82f6"
                            />
                        );
                    })}

                    {/* Labels */}
                    {healthActivityData.map((item, index) => {
                        const angle = (item.angle - 90) * Math.PI / 180;
                        const x = 100 + 110 * Math.cos(angle);
                        const y = 100 + 110 * Math.sin(angle);
                        return (
                            <text
                                key={index}
                                x={x}
                                y={y}
                                textAnchor="middle"
                                dominantBaseline="central"
                                className="text-xs text-gray-600 fill-current"
                            >
                                {item.activity}
                            </text>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

export default HealthActivityChart;