import React from 'react';
import { Star } from 'lucide-react';

const DoctorCard = ({ doctor, onBookAppointment, onViewProfile }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-50" />
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      );
    }
    
    return stars;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200 p-6">
      {/* Doctor Image */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
          />
        </div>
      </div>

      {/* Doctor Info */}
      <div className="text-center">
        <h3 
          className="text-lg font-semibold text-gray-900 mb-1 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => onViewProfile && onViewProfile(doctor)}
        >
          {doctor.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-2">{doctor.specialization}</p>
        
        <p className="text-gray-500 text-xs mb-3">
          {doctor.experience} Years Experience
        </p>

        {/* Rating */}
        <div className="flex justify-center items-center gap-1 mb-4">
          {renderStars(doctor.rating)}
        </div>

        {/* Book Appointment Button */}
        <button
          onClick={() => onBookAppointment && onBookAppointment(doctor)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;