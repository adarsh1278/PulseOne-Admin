"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const UpcomingSurgeries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const surgeries = [
    {
      id: 1,
      doctor: "Smith White",
      specialty: "Oncologist",
      date: "Mon",
      day: "27",
      time: "10:30 AM",
      color: "bg-red-500"
    },
    {
      id: 2,
      doctor: "Bernardo James",
      specialty: "Radiologist",
      date: "Tue",
      day: "28",
      time: "2:30 PM",
      color: "bg-blue-500"
    },
    {
      id: 3,
      doctor: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      date: "Wed",
      day: "29",
      time: "11:00 AM",
      color: "bg-green-500"
    },
    {
      id: 4,
      doctor: "Dr. Michael Chen",
      specialty: "Neurologist",
      date: "Thu",
      day: "30",
      time: "3:15 PM",
      color: "bg-purple-500"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= surgeries.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? surgeries.length - 1 : prev - 1));
  };

  const getCurrentSurgery = () => {
    return surgeries[currentIndex];
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Upcoming Surgeries</h2>
        <div className="flex items-center space-x-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Surgery Card with Transition */}
      <div className="overflow-hidden">
        <div className="transition-all duration-500 ease-in-out">
          {(() => {
            const surgery = getCurrentSurgery();
            return (
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200">
                {/* Date */}
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">{surgery.date}</div>
                  <div className={`text-2xl font-bold text-white rounded-lg px-3 py-1 ${surgery.color}`}>
                    {surgery.day}
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{surgery.doctor}</h3>
                  <p className="text-gray-600 text-sm">{surgery.specialty}</p>
                </div>

                {/* Time */}
                <div className={`px-3 py-1 rounded-lg text-sm font-medium text-white ${surgery.color}`}>
                  {surgery.time}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSurgeries;
