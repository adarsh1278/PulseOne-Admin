import React from 'react';

const TimelineSection = ({ timelineData }) => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Timeline</h3>
            
            {/* Scrollable Timeline */}
            <div className="max-h-80 overflow-y-auto pr-2">
                <div className="space-y-4">
                    {timelineData.map((item, index) => (
                        <div key={item.id} className="relative">
                            {/* Timeline line */}
                            {index !== timelineData.length - 1 && (
                                <div className="absolute left-2 top-8 w-0.5 h-16 bg-gray-200"></div>
                            )}
                            
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                            
                            {/* Content */}
                            <div className="ml-8">
                                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                                    {item.time}
                                </div>
                                <div className="text-sm text-gray-900 mb-1">
                                    <span className="text-blue-500 font-medium">{item.doctor}</span>
                                    <span className="text-gray-600"> - {item.action}</span>
                                </div>
                                {item.details && (
                                    <div className="text-sm text-gray-600 mb-2">
                                        {item.details}
                                    </div>
                                )}
                                {item.hasPaymentLink && (
                                    <div className="flex items-center text-xs text-blue-500">
                                        <span>Payment Link</span>
                                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimelineSection;