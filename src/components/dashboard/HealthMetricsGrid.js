import React from 'react';
import MiniChart from '../charts/MiniChart';

const HealthMetricsGrid = ({ healthMetrics }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {healthMetrics.map((metric) => {
                const IconComponent = metric.icon;
                return (
                    <div key={metric.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        {/* Card Header */}
                        <div className="p-6 pb-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: metric.iconBg }}
                                >
                                    <IconComponent className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{metric.title}</h3>
                                    <p className="text-sm text-gray-500">{metric.subtitle}</p>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="px-6 pb-4">
                            <MiniChart
                                data={metric.chartData}
                                color={metric.color}
                            />
                        </div>

                        {/* Data Table */}
                        <div className="border-t border-gray-100">
                            {metric.tableData.map((row, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center px-6 py-3 border-b border-gray-50 last:border-b-0"
                                >
                                    <span className="text-sm text-gray-600">{row.date}</span>
                                    <span className="text-sm font-medium text-gray-900">{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default HealthMetricsGrid;