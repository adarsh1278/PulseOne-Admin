"use client"
import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  Stethoscope, 
  Users, 
  Heart, 
  ChevronDown,
  ChevronRight,
  Phone,
  Menu,
  BarChart3
} from 'lucide-react';

const Sidebar = ({ isCollapsed = false }) => {
  const [isDoctorsOpen, setIsDoctorsOpen] = useState(true);
  const [isPatientsOpen, setIsPatientsOpen] = useState(false);

  const toggleDoctors = () => setIsDoctorsOpen(!isDoctorsOpen);
  const togglePatients = () => setIsPatientsOpen(!isPatientsOpen);

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-72'} h-full flex flex-col`}>
      {/* Header */}
     

      {/* User Profile */}
      {!isCollapsed && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='20' fill='%23666'/%3E%3Cpath d='M20 80 Q50 60 80 80 L80 100 L20 100 Z' fill='%23666'/%3E%3C/svg%3E" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Nick Gonzalez</h3>
              <p className="text-sm text-gray-600">Dept Admin</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto hide-scrollbar">
        {/* Hospital Dashboard */}
        <div className="bg-blue-50 rounded-lg">
          <a href="#" className="flex items-center space-x-3 p-3 text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-200 ease-in-out">
            <Home size={20} />
            {!isCollapsed && <span className="font-medium">Hospital Dashboard</span>}
          </a>
        </div>

        {/* Medical Dashboard */}
        <a href="#" className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 ease-in-out">
          <Building2 size={20} />
          {!isCollapsed && <span>Medical Dashboard</span>}
        </a>

        {/* Dentist Dashboard */}
        <a href="#" className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 ease-in-out">
          <Stethoscope size={20} />
          {!isCollapsed && <span>Dentist Dashboard</span>}
        </a>

        {/* Doctors Section */}
        <div>
          <button 
            onClick={toggleDoctors}
            className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 ease-in-out"
          >
            <div className="flex items-center space-x-3">
              <Users size={20} />
              {!isCollapsed && <span>Doctors</span>}
            </div>
            {!isCollapsed && (
              <div className="transition-transform duration-200 ease-in-out">
                {isDoctorsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </div>
            )}
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isDoctorsOpen && !isCollapsed ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="ml-6 mt-2 space-y-2">
              <a href="#" className="block p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 ease-in-out">
                Doctors Dashboard
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 ease-in-out">
                Doctors List
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 ease-in-out">
                Doctors Cards
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 ease-in-out">
                Doctors Profile
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 ease-in-out">
                Add Doctor
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 ease-in-out">
                Edit Doctor
              </a>
            </div>
          </div>
        </div>

        {/* Patients Section */}
        <div>
          <button 
            onClick={togglePatients}
            className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 ease-in-out"
          >
            <div className="flex items-center space-x-3">
              <Heart size={20} />
              {!isCollapsed && <span>Patients</span>}
            </div>
            {!isCollapsed && (
              <div className="transition-transform duration-200 ease-in-out">
                {isPatientsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </div>
            )}
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isPatientsOpen && !isCollapsed ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="ml-6 mt-2 space-y-2">
              <a href="#" className="block p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 ease-in-out">
                Patients List
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 ease-in-out">
                Patient Records
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-200 ease-in-out">
                Add Patient
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Emergency Contact */}
      <div className="p-4">
        <div className="bg-green-500 text-white rounded-lg p-4 hover:bg-green-600 transition-all duration-200 ease-in-out cursor-pointer hover:shadow-lg">
          <div className="flex items-center space-x-3">
            <Phone size={20} />
            {!isCollapsed && (
              <div>
                <p className="font-medium">Emergency Contact</p>
                <p className="text-lg font-bold">09876543210</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;