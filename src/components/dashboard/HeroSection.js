"use client"
import React from 'react';
import { Eye, Stethoscope, UserPlus } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white overflow-hidden min-h-[300px]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Leaf patterns */}
        <div className="absolute right-20 top-10 opacity-20">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 5C25 10 30 15 25 25C20 35 15 30 10 25C5 20 10 10 20 5Z" fill="white"/>
          </svg>
        </div>
        <div className="absolute right-32 bottom-16 opacity-15">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M25 8C30 13 35 18 30 28C25 38 20 33 15 28C10 23 15 13 25 8Z" fill="white"/>
          </svg>
        </div>
        <div className="absolute right-8 top-32 opacity-10">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M17.5 4C22 8 26 12 22 20C17.5 28 13 24 9 20C5 16 9 8 17.5 4Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between h-full">
        {/* Left Content */}
        <div className="flex-1 mb-6 lg:mb-0">
          <div className="mb-2">
            <span className="text-blue-100 text-base font-medium">Good Morning,</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
            Dr. Patrick Kim
          </h1>
          <p className="text-blue-100 text-lg mb-8">
            Your schedule today.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-cyan-400 rounded-2xl p-4 flex items-center space-x-3 min-w-[140px]">
              <div className="bg-cyan-500 rounded-xl p-2">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">9</div>
                <div className="text-sm text-cyan-50">Patients</div>
              </div>
            </div>
            
            <div className="bg-green-400 rounded-2xl p-4 flex items-center space-x-3 min-w-[140px]">
              <div className="bg-green-500 rounded-xl p-2">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-sm text-green-50">Surgeries</div>
              </div>
            </div>
            
            <div className="bg-orange-400 rounded-2xl p-4 flex items-center space-x-3 min-w-[140px]">
              <div className="bg-orange-500 rounded-xl p-2">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-sm text-orange-50">Discharges</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Illustration - Medical Team */}
        <div className="flex-shrink-0 relative">
          <div className="flex items-end space-x-2">
            {/* Doctor 1 */}
            <div className="relative">
              <div className="w-24 h-32 bg-white rounded-t-full relative overflow-hidden">
                <div className="absolute bottom-0 w-full h-20 bg-blue-600"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-800 rounded-full"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-50 rounded-full"></div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-100 rounded-full"></div>
              </div>
            </div>
            
            {/* Doctor 2 - Female */}
            <div className="relative">
              <div className="w-24 h-36 bg-white rounded-t-full relative overflow-hidden">
                <div className="absolute bottom-0 w-full h-20 bg-white"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-pink-50 rounded-full"></div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-100 rounded-full"></div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-pink-400"></div>
              </div>
            </div>
            
            {/* Doctor 3 - Nurse */}
            <div className="relative">
              <div className="w-24 h-32 bg-white rounded-t-full relative overflow-hidden">
                <div className="absolute bottom-0 w-full h-20 bg-green-500"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-700 rounded-full"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-50 rounded-full"></div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-100 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Background leaves for illustration */}
          <div className="absolute -right-8 top-0 opacity-30">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
              <path d="M30 10C35 15 40 20 35 35C30 50 25 45 20 35C15 25 20 15 30 10Z" fill="white"/>
              <path d="M45 20C48 25 50 30 47 40C45 50 42 47 39 40C36 33 38 25 45 20Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
