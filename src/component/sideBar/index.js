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

const Sidebar = () => {
  const [isDoctorsOpen, setIsDoctorsOpen] = useState(true);
  const [isPatientsOpen, setIsPatientsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDoctors = () => setIsDoctorsOpen(!isDoctorsOpen);
  const togglePatients = () => setIsPatientsOpen(!isPatientsOpen);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-72'} h-screen flex flex-col`}>
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleSidebar}
            className="p-1 hover:bg-blue-700 rounded"
          >
            <Menu size={20} />
          </button>
          {!isCollapsed && (
            <>
              <div className="bg-white rounded-lg p-2">
                <BarChart3 className="text-blue-600" size={20} />
              </div>
              <span className="font-bold text-xl">Medflex</span>
            </>
          )}
        </div>
      </div>

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
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {/* Hospital Dashboard */}
        <div className="bg-blue-50 rounded-lg">
          <a href="#" className="flex items-center space-x-3 p-3 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
            <Home size={20} />
            {!isCollapsed && <span className="font-medium">Hospital Dashboard</span>}
          </a>
        </div>

        {/* Medical Dashboard */}
        <a href="#" className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Building2 size={20} />
          {!isCollapsed && <span>Medical Dashboard</span>}
        </a>

        {/* Dentist Dashboard */}
        <a href="#" className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Stethoscope size={20} />
          {!isCollapsed && <span>Dentist Dashboard</span>}
        </a>

        {/* Doctors Section */}
        <div>
          <button 
            onClick={toggleDoctors}
            className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Users size={20} />
              {!isCollapsed && <span>Doctors</span>}
            </div>
            {!isCollapsed && (
              isDoctorsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />
            )}
          </button>
          
          {isDoctorsOpen && !isCollapsed && (
            <div className="ml-6 mt-2 space-y-2">
              <a href="#" className="block p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors">
                Doctors Dashboard
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors">
                Doctors List
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors">
                Doctors Cards
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors">
                Doctors Profile
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors">
                Add Doctor
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors">
                Edit Doctor
              </a>
            </div>
          )}
        </div>

        {/* Patients Section */}
        <div>
          <button 
            onClick={togglePatients}
            className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Heart size={20} />
              {!isCollapsed && <span>Patients</span>}
            </div>
            {!isCollapsed && (
              isPatientsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />
            )}
          </button>
          
          {isPatientsOpen && !isCollapsed && (
            <div className="ml-6 mt-2 space-y-2">
              <a href="#" className="block p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors">
                Patients List
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors">
                Patient Records
              </a>
              <a href="#" className="block p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors">
                Add Patient
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Emergency Contact */}
      <div className="p-4">
        <div className="bg-green-500 text-white rounded-lg p-4 hover:bg-green-600 transition-colors cursor-pointer">
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