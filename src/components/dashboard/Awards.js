"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Trophy, Medal, Star } from 'lucide-react';

const Awards = () => {
  const [currentAward, setCurrentAward] = useState(0);

  const awards = [
    {
      id: 1,
      title: "Best Doctor 2024",
      year: "2024",
      icon: Trophy,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      description: "Excellence in Patient Care"
    },
    {
      id: 2,
      title: "Medical Excellence",
      year: "2023",
      icon: Award,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      description: "Outstanding Service Award"
    },
    {
      id: 3,
      title: "Innovation Award",
      year: "2022",
      icon: Medal,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      description: "Medical Innovation Recognition"
    }
  ];

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAward((prev) => (prev + 1) % awards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [awards.length]);

  const nextAward = () => {
    setCurrentAward((prev) => (prev + 1) % awards.length);
  };

  const prevAward = () => {
    setCurrentAward((prev) => (prev - 1 + awards.length) % awards.length);
  };

  const current = awards[currentAward];
  const IconComponent = current.icon;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Awards</h3>
        <div className="flex gap-2">
          <button 
            onClick={prevAward}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
          </button>
          <button 
            onClick={nextAward}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors group"
          >
            <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
          </button>
        </div>
      </div>

      {/* Award Display */}
      <div className="relative overflow-hidden h-64">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentAward * 100}%)` }}
        >
          {awards.map((award, index) => {
            const AwardIcon = award.icon;
            return (
              <div key={award.id} className="w-full flex-shrink-0 h-full">
                <div className={`${award.bgColor} rounded-xl p-6 h-full flex flex-col items-center justify-center text-center`}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${award.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                    <AwardIcon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {award.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {award.description}
                  </p>
                  <div className="text-3xl font-bold text-blue-500">
                    4
                  </div>
                  <p className="text-sm text-gray-500">
                    Awards received in {award.year}.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {awards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentAward(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentAward 
                ? 'bg-blue-500 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Awards;
