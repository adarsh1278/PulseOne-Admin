"use client"
import React from 'react';
import { Star, Users, Scissors, DollarSign } from 'lucide-react';

const DoctorHeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
      {/* Hero Card with Doctor Image */}
      <div className="lg:col-span-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden flex items-center">
        {/* Doctor Illustration on Left */}
        <div className="flex-shrink-0 mr-6">
          <img 
            src="https://bootstrapget.com/demos/medflex-medical-admin-template/assets/images/doctor.svg" 
            alt="Doctor" 
            className="h-48 w-auto object-contain"
          />
        </div>

        {/* Content on Right */}
        <div className="flex-1">
          <p className="text-blue-100 mb-2 text-lg">Good Morning,</p>
          <h1 className="text-3xl font-bold mb-2">Dr. Jessika Linda</h1>
          <p className="text-blue-100 text-base mb-4">Gynecologist, MS, MD, MBBS</p>
          
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-white">You have total</span>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">18 appointments</span>
            <span className="text-white">today.</span>
          </div>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Patients Card */}
      <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-8 h-8 text-blue-600" />
        </div>
        <div className="text-4xl font-bold text-blue-600 mb-2">3809</div>
        <div className="text-gray-600 text-base mb-3">Patients</div>
        <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded font-medium">40% High</span>
      </div>

      {/* Surgeries and Earnings Cards */}
      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Scissors className="w-6 h-6 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-red-600 mb-1">906</div>
          <div className="text-gray-600 text-sm mb-2">Surgeries</div>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">26% High</span>
        </div>
        
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <DollarSign className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600 mb-1">$986K</div>
          <div className="text-gray-600 text-sm mb-2">Earnings</div>
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">30% High</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorHeroSection;
