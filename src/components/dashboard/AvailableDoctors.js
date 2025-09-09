"use client"
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const AvailableDoctors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const doctors = [
    {
      id: 1,
      name: "Bernardo James",
      specialty: "Pediatrics",
      rating: 4,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      id: 2,
      name: "Bshton Cozei",
      specialty: "Gynecologist",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      id: 3,
      name: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594824475518-94b8cfe946b6?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      rating: 4,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face&auto=format"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= doctors.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? doctors.length - 1 : prevIndex - 1
    );
  };

  // Get current doctor to display (1 at a time)
  const getCurrentDoctor = () => {
    return doctors[currentIndex];
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Available Doctors</h2>
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

      {/* Doctor Card with Transition */}
      <div className="overflow-hidden">
        <div className="transition-all duration-500 ease-in-out">
          {(() => {
            const doctor = getCurrentDoctor();
            return (
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{doctor.specialty}</p>
                  <div className="flex items-center space-x-1">
                    {renderStars(doctor.rating)}
                    <span className="text-sm font-medium text-gray-700 ml-2">{doctor.rating}</span>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default AvailableDoctors;
