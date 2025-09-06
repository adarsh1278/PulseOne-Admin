"use client"
import React from 'react';
import { 
  Calendar, 
  Users, 
  UserCheck, 
  Activity, 
  Bed, 
  UserX 
} from 'lucide-react';

const MetricsGrid = () => {
  const metrics = [
    {
      id: 1,
      title: "Appointments",
      value: "639",
      icon: Calendar,
      bgColor: "bg-blue-600",
      iconBg: "bg-blue-700"
    },
    {
      id: 2,
      title: "Doctors",
      value: "83",
      icon: Users,
      bgColor: "bg-blue-600",
      iconBg: "bg-blue-700"
    },
    {
      id: 3,
      title: "Staff",
      value: "296",
      icon: UserCheck,
      bgColor: "bg-blue-600",
      iconBg: "bg-blue-700"
    },
    {
      id: 4,
      title: "Operations",
      value: "49",
      icon: Activity,
      bgColor: "bg-blue-600",
      iconBg: "bg-blue-700"
    },
    {
      id: 5,
      title: "Admitted",
      value: "372",
      icon: Bed,
      bgColor: "bg-blue-600",
      iconBg: "bg-blue-700"
    },
    {
      id: 6,
      title: "Discharged",
      value: "253",
      icon: UserX,
      bgColor: "bg-blue-600",
      iconBg: "bg-blue-700"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.id}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{metric.value}</h3>
                <p className="text-gray-600 font-medium text-sm md:text-base">{metric.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsGrid;
