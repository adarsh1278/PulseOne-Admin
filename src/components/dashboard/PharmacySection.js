import React from 'react';

const PharmacySection = () => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Pharmacy</h3>
            
            {/* Pharmacy Illustration */}
            <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" className="text-blue-500">
                        <rect x="16" y="20" width="32" height="24" rx="2" fill="currentColor" opacity="0.2" />
                        <rect x="20" y="16" width="24" height="32" rx="2" fill="currentColor" opacity="0.3" />
                        <rect x="24" y="12" width="16" height="40" rx="2" fill="currentColor" opacity="0.4" />
                        <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.6" />
                        <path d="M28 32h8M32 28v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            
            {/* Spending Info */}
            <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">$980</div>
                <div className="text-sm text-gray-600 mb-2">Average Spending</div>
                <div className="text-sm text-green-600 font-medium mb-4">+20% vs last month</div>
                <p className="text-xs text-gray-500 leading-relaxed">
                    You can choose from over 1600 admin dashboard templates on Bootstrap Gallery.
                </p>
            </div>
        </div>
    );
};

export default PharmacySection;