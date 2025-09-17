"use client"
import React from 'react';
import { Users, UserPlus, Stethoscope, Building2, DollarSign, ArrowRight, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const stats = [
    {
      id: 1,
      title: "New Patients",
      value: "890",
      change: "+40%",
      changeType: "increase",
      period: "this month",
      icon: UserPlus,
      color: "var(--color-theme)", // theme green
      bgColor: "bg-white",
      percentage: 75,
      addRoute: "/patient/add",
      viewRoute: "/patient/list",
      addText: "Add Patient"
    },
    {
      id: 2,
      title: "Total Patients",
      value: "360",
      change: "+30%",
      changeType: "increase",
      period: "this month",
      icon: Users,
      color: "var(--color-secondary)", // secondary blue
      bgColor: "bg-white",
      percentage: 60,
      addRoute: "/patient/add",
      viewRoute: "/patient/list",
      addText: "Add Patient"
    },
    {
      id: 3,
      title: "Total Doctors",
      value: "980",
      change: "+60%",
      changeType: "increase",
      period: "this month",
      icon: Stethoscope,
      color: "var(--color-warning)", // warning orange
      bgColor: "bg-white",
      percentage: 85,
      addRoute: "/doctor/add",
      viewRoute: "/doctor/list",
      addText: "Add Doctor"
    },
    {
      id: 4,
      title: "Total Clinics",
      value: "12",
      change: "+20%",
      changeType: "increase",
      period: "this month",
      icon: Building2,
      color: "var(--color-success)", // success green
      bgColor: "bg-white",
      percentage: 70,
      addRoute: "/clinic/add",
      viewRoute: "/clinic/list",
      addText: "Add Clinic"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className={`${stat.bgColor} border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300  group hover:border-theme`}
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
            
            <div className="space-y-3">
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
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <button 
                  onClick={() => router.push(stat.viewRoute)}
                  className="text-sm font-medium text-theme hover:text-theme-hover transition-colors cursor-pointer" 
                  suppressHydrationWarning
                >
                  View All
                </button>
                <button
                  onClick={() => router.push(stat.addRoute)}
                  className="flex items-center space-x-1 bg-theme hover:bg-theme-hover text-white px-3 py-1.5 rounded-lg transition-colors duration-200 text-sm font-medium cursor-pointer"
                  suppressHydrationWarning
                >
                  <Plus className="w-4 h-4" />
                  <span>{stat.addText}</span>
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
