import React, { useState } from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomSelect from "../../ui/CustomSelect";

const CustomChart = ({ data, title, series, chartType = "bar" } ,flagToggle=false) => {
  const [activeKeys, setActiveKeys] = useState(
    Object.fromEntries(series.map((s) => [s.key, true]))
  );
  const [currentType, setCurrentType] = useState(chartType);

  const chartTypeOptions = [
    { 
      value: "bar", 
      label: "Bar Chart", 
      description: "Display data as vertical bars" 
    },
    { 
      value: "area", 
      label: "Area Chart", 
      description: "Display data as filled areas" 
    }
  ];

  const toggleKey = (key) => {
    setActiveKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <div className="text-sm font-medium text-gray-900 mb-2">{label}</div>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 mb-1">
              <div
                className="w-3 h-3 rounded"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-gray-700 capitalize">
                {series.find((s) => s.key === entry.dataKey)?.label || entry.dataKey}:{" "}
                {entry.value}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      {/* Header with dropdown */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {(!flagToggle&&(
          <>
          <div className="w-48">
          <CustomSelect
            options={chartTypeOptions}
            value={currentType}
            onChange={setCurrentType}
            placeholder="Select chart type..."
            size="sm"
          />
        </div>
          </>

        ))}
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          {currentType === "bar" ? (
            <RechartsBarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="period" stroke="#64748b" fontSize={12} tick={{ fill: "#64748b" }} />
              <YAxis stroke="#64748b" fontSize={12} tick={{ fill: "#64748b" }} />
              <Tooltip content={<CustomTooltip />} />

              {series.map(
                (s) =>
                  activeKeys[s.key] && (
                    <Bar
                      key={s.key}
                      dataKey={s.key}
                      fill={s.color}
                      radius={[2, 2, 0, 0]}
                    />
                  )
              )}
            </RechartsBarChart>
          ) : (
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                {series.map((s) => (
                  <linearGradient key={s.key} id={`gradient-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={s.color} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={s.color} stopOpacity={0.05} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="period" stroke="#64748b" fontSize={12} tick={{ fill: "#64748b" }} />
              <YAxis stroke="#64748b" fontSize={12} tick={{ fill: "#64748b" }} />
              <Tooltip content={<CustomTooltip />} />

              {series.map(
                (s) =>
                  activeKeys[s.key] && (
                    <Area
                      key={s.key}
                      type="monotone"
                      dataKey={s.key}
                      stroke={s.color}
                      fill={`url(#gradient-${s.key})`}
                      strokeWidth={2}
                    />
                  )
              )}
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Interactive Legend */}
      <div className="flex items-center gap-6 mt-6 justify-center">
        {series.map((s) => (
          <button
            key={s.key}
            onClick={() => toggleKey(s.key)}
            className={`flex items-center gap-2 transition-all duration-200 ${
              activeKeys[s.key] ? "opacity-100" : "opacity-50"
            } hover:opacity-75`}
          >
            <div
              className={`w-3 h-3 ${
                currentType === "area" ? "rounded-full" : "rounded"
              }`}
              style={{ backgroundColor: activeKeys[s.key] ? s.color : "#d1d5db" }}
            />
            <span className="text-sm text-gray-600">{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomChart;
