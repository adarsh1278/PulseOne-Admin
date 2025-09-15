import React from 'react';
import { Star, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSection = ({ reviews }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case 'Excellent':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Bad':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Reviews</h3>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded border ${getBadgeColor(review.type)}`}>
                    {review.type}
                  </span>
                </div>
                
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  {review.comment}
                </p>
                
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">I recommend the doctor.</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-1 mt-3">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;