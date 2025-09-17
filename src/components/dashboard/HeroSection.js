"use client"
import React from 'react';
import { Eye, Stethoscope } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-2xl p-6 md:p-8 text-white overflow-hidden min-h-[280px]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Organic shapes and leaves */}
        <div className="absolute right-16 top-8 opacity-15">
          <svg width="50" height="60" viewBox="0 0 50 60" fill="none">
            <path d="M25 5C30 12 35 18 32 32C28 45 22 40 18 32C14 24 18 12 25 5Z" fill="white"/>
          </svg>
        </div>
        <div className="absolute right-32 bottom-12 opacity-10">
          <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
            <path d="M20 8C25 15 30 20 27 30C23 40 17 35 13 30C9 25 13 15 20 8Z" fill="white"/>
          </svg>
        </div>
        <div className="absolute right-6 top-28 opacity-20">
          <svg width="30" height="35" viewBox="0 0 30 35" fill="none">
            <path d="M15 4C18 8 22 12 20 20C17 28 13 25 10 20C7 15 10 8 15 4Z" fill="white"/>
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
            Admin
          </h1>
          <p className="text-blue-100 text-lg mb-8">
            Welcome to dashbaord
          </p>
          
      
        </div>
        
        {/* Right Illustration - Medical Team */}
        <div className="flex-shrink-0 relative">
          <div className="flex items-end space-x-3">
            {/* Doctor 1 - Female with stethoscope */}
            <div className="relative">
              <div className="w-28 h-36 relative">
                {/* Body */}
                <div className="absolute bottom-0 w-full h-24 bg-white rounded-t-3xl"></div>
                {/* Head */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-200 rounded-full"></div>
                {/* Hair */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-18 h-12 bg-amber-800 rounded-full"></div>
                {/* Stethoscope */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-600"></div>
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full"></div>
                {/* Folder */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-orange-400 rounded"></div>
              </div>
            </div>
            
            {/* Doctor 2 - Male with stethoscope */}
            <div className="relative">
              <div className="w-28 h-40 relative">
                {/* Body */}
                <div className="absolute bottom-0 w-full h-28 bg-blue-500 rounded-t-3xl"></div>
                {/* Head */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-100 rounded-full"></div>
                {/* Hair */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-18 h-10 bg-gray-800 rounded-full"></div>
                {/* Stethoscope */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gray-200"></div>
                <div className="absolute top-26 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-200 rounded-full"></div>
                {/* White coat collar */}
                <div className="absolute top-18 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-white rounded-t-xl"></div>
              </div>
            </div>
          </div>
          
          {/* Background leaves for illustration */}
          <div className="absolute -right-8 -top-4 opacity-25">
            <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
              <path d="M40 10C45 17 50 24 47 40C43 55 37 50 33 40C29 30 33 17 40 10Z" fill="white"/>
              <path d="M60 20C63 27 65 34 62 45C59 55 55 52 52 45C49 38 52 27 60 20Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
