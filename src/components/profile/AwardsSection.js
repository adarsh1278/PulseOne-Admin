import React from 'react';

const AwardsSection = ({ awards }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Awards</h3>
      
      <div className="grid grid-cols-1 gap-4">
        {awards.map((award, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">❤️</div>
                  </div>
                </div>
                
                <h4 className="text-sm font-semibold text-blue-600 mb-1">
                  {award.title}
                </h4>
                
                <p className="text-xs text-gray-600 mb-3">
                  {award.subtitle}
                </p>
                
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {award.count}
                </div>
                
                <p className="text-xs text-gray-600">
                  {award.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;