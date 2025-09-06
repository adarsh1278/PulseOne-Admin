"use client"
import React from 'react';
import { Eye, Stethoscope, FlaskConical, DollarSign, ArrowRight } from 'lucide-react';

const CircularProgress = ({ percentage, color, size = 80, strokeWidth = 8 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center`} style={{ backgroundColor: color }}>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            {/* Icon will be placed here */}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCards = () => {
  const stats = [
    {
      id: 1,
      title: "New Patients",
      value: "890",
      change: "+40%",
      changeType: "increase",
      period: "this month",
      icon: Eye,
      color: "#10b981", // green
      bgColor: "bg-white",
      percentage: 75
    },
    {
      id: 2,
      title: "OPD Patients",
      value: "360",
      change: "+30%",
      changeType: "increase",
      period: "this month",
      icon: Stethoscope,
      color: "#3b82f6", // blue
      bgColor: "bg-white",
      percentage: 60
    },
    {
      id: 3,
      title: "Lab tests",
      value: "980",
      change: "+60%",
      changeType: "increase",
      period: "this month",
      icon: FlaskConical,
      color: "#f97316", // orange
      bgColor: "bg-white",
      percentage: 85
    },
    {
      id: 4,
      title: "Total Earnings",
      value: "$98000",
      change: "+20%",
      changeType: "increase",
      period: "this month",
      icon: DollarSign,
      color: "#eab308", // yellow
      bgColor: "bg-white",
      percentage: 70
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className={`${stat.bgColor} border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="relative">
                <CircularProgress 
                  percentage={stat.percentage} 
                  color={stat.color}
                  size={80}
                  strokeWidth={6}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: stat.color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-gray-400 group-hover:text-gray-600 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.title}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: stat.color }}
                  >
                    <span>{stat.change}</span>
                  </div>
                  <span className="text-xs text-gray-500">{stat.period}</span>
                </div>
                
                <button className="text-sm font-medium group-hover:text-blue-600 transition-colors" style={{ color: stat.color }}>
                  View All
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
