"use client"
import React from 'react';
import { Star } from 'lucide-react';

const PatientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Nick Morrow",
      rating: 5,
      review: "Dr.Jessika listens to you very patiently & gives you sufficient time to say your problems. She diagnosed in no time & i was able to recover quickly, not just diagnosing correctly, she helped me in changing my lifestyle habits.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      name: "Carole Dodson",
      rating: 4,
      review: "She is very supportive and suggest well. Good surgeon known from past 10 years. My mother was a renal transplant patient but in most risky condition she treated her in day care procedure and avoided hospital admission.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      rating: 5,
      review: "Excellent doctor with great bedside manner. Very thorough in her examinations and takes time to explain everything clearly. Highly recommend!",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 4,
      name: "Michael Chen",
      rating: 5,
      review: "Outstanding medical care and attention to detail. Dr. Jessika took the time to explain my condition thoroughly and provided excellent treatment options.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 5,
      name: "Emily Davis",
      rating: 4,
      review: "Very professional and knowledgeable. The appointment was efficient and she answered all my questions with patience.",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Patient Reviews</h3>
      
      {/* Scrollable container with fixed height */}
      <div className="h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-base">{review.name}</h4>
                  <div className="flex gap-1 mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed ml-16">
                {review.review}
              </p>
              <div className="flex gap-1 mt-3 ml-16">
                {renderStars(review.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientReviews;
