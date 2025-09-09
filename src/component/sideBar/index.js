"use client"
import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  Stethoscope, 
  Users, 
  Heart, 
  Phone,
  Calendar,
  Building,
  CreditCard,
  UserPlus,
  DollarSign,
  Bed,
  Truck,
  CalendarDays,
  Image,
  UserCircle
} from 'lucide-react';
import SidebarItem from '../../components/sidebar/SidebarItem';
import SidebarDropdown from '../../components/sidebar/SidebarDropdown';
import SidebarSubItem from '../../components/sidebar/SidebarSubItem';

const Sidebar = ({ isCollapsed = false, isHovered = false }) => {
  const [activeItem, setActiveItem] = useState('medical-dashboard');
  
  // Determine if content should be shown (either not collapsed or being hovered)
  const showContent = !isCollapsed || isHovered;

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ease-in-out ${
      isCollapsed && !isHovered ? 'w-16' : 'w-72'
    } h-full flex flex-col border-r border-gray-200 overflow-hidden`}>
      
      {/* User Profile */}
      {showContent && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face&auto=format" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className={`transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
              <h3 className="font-semibold text-gray-800">Nick Gonzalez</h3>
              <p className="text-sm text-gray-600">Dept Admin</p>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed Profile Icon */}
      {!showContent && (
        <div className="p-3 border-b border-gray-200 flex justify-center">
          <div className="w-10 h-10 bg-blue-100 rounded-full overflow-hidden flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face&auto=format" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto overflow-x-hidden hide-scrollbar">
        
        {/* Dashboard Items */}
        <SidebarItem
          icon={Home}
          label="Hospital Dashboard"
          isActive={activeItem === 'hospital-dashboard'}
          isCollapsed={!showContent}
          onClick={() => setActiveItem('hospital-dashboard')}
        />

        <SidebarItem
         link={"/medical/dashboard"}
          icon={Building2}
          label="Medical Dashboard"
          isActive={activeItem === 'medical-dashboard'}
          isCollapsed={!showContent}
          onClick={() => setActiveItem('medical-dashboard')}
        />

        <SidebarItem
          icon={Stethoscope}
          label="Dentist Dashboard"
          isActive={activeItem === 'dentist-dashboard'}
          isCollapsed={!showContent}
          onClick={() => setActiveItem('dentist-dashboard')}
        />

        {/* Doctors Dropdown */}
        <SidebarDropdown
          icon={Users}
          label="Doctors"
          isCollapsed={!showContent}
          defaultOpen={true}
        >
          <SidebarSubItem label="Doctors Dashboard" />
          <SidebarSubItem label="Doctors List" />
          <SidebarSubItem label="Doctors Cards" />
          <SidebarSubItem label="Doctors Profile" />
          <SidebarSubItem label="Add Doctor" />
          <SidebarSubItem label="Edit Doctor" />
        </SidebarDropdown>

        {/* Patients Dropdown */}
        <SidebarDropdown
          icon={Heart}
          label="Patients"
          isCollapsed={!showContent}
        >
          <SidebarSubItem label="Patients List" />
          <SidebarSubItem label="Patient Records" />
          <SidebarSubItem label="Add Patient" />
          <SidebarSubItem label="Patient History" />
        </SidebarDropdown>

        {/* Staff Dropdown */}
        <SidebarDropdown
          icon={UserCircle}
          label="Staff"
          isCollapsed={!showContent}
        >
          <SidebarSubItem label="Staff List" />
          <SidebarSubItem label="Staff Profile" />
          <SidebarSubItem label="Add Staff" />
          <SidebarSubItem label="Staff Schedule" />
        </SidebarDropdown>

        {/* Appointments Dropdown */}
        <SidebarDropdown
          icon={Calendar}
          label="Appointments"
          isCollapsed={!showContent}
        >
          <SidebarSubItem label="All Appointments" />
          <SidebarSubItem label="Today's Appointments" />
          <SidebarSubItem label="Book Appointment" />
          <SidebarSubItem label="Appointment History" />
        </SidebarDropdown>

        {/* Departments Dropdown */}
        <SidebarDropdown
          icon={Building}
          label="Departments"
          isCollapsed={!showContent}
        >
          <SidebarSubItem label="All Departments" />
          <SidebarSubItem label="Cardiology" />
          <SidebarSubItem label="Neurology" />
          <SidebarSubItem label="Orthopedics" />
          <SidebarSubItem label="Pediatrics" />
        </SidebarDropdown>

        {/* Accounts Dropdown */}
        <SidebarDropdown
          icon={CreditCard}
          label="Accounts"
          isCollapsed={!showContent}
        >
          <SidebarSubItem label="Billing" />
          <SidebarSubItem label="Payments" />
          <SidebarSubItem label="Insurance" />
          <SidebarSubItem label="Reports" />
        </SidebarDropdown>

        {/* Human Resources */}
        <SidebarItem
          icon={UserPlus}
          label="Human Resources"
          isActive={activeItem === 'hr'}
          isCollapsed={!showContent}
          hasArrow={true}
          onClick={() => setActiveItem('hr')}
        />

        {/* Salaries */}
        <SidebarItem
          icon={DollarSign}
          label="Salaries"
          isActive={activeItem === 'salaries'}
          isCollapsed={!showContent}
          hasArrow={true}
          onClick={() => setActiveItem('salaries')}
        />

        {/* Rooms */}
        <SidebarItem
          icon={Bed}
          label="Rooms"
          isActive={activeItem === 'rooms'}
          isCollapsed={!showContent}
          hasArrow={true}
          onClick={() => setActiveItem('rooms')}
        />

        {/* Ambulance */}
        <SidebarItem
          icon={Truck}
          label="Ambulance"
          isActive={activeItem === 'ambulance'}
          isCollapsed={!showContent}
          hasArrow={true}
          onClick={() => setActiveItem('ambulance')}
        />

        {/* Event Management */}
        <SidebarItem
          icon={CalendarDays}
          label="Event Management"
          isActive={activeItem === 'events'}
          isCollapsed={!showContent}
          hasArrow={true}
          onClick={() => setActiveItem('events')}
        />

        {/* Gallery */}
        <SidebarItem
          icon={Image}
          label="Gallery"
          isActive={activeItem === 'gallery'}
          isCollapsed={!showContent}
          hasArrow={true}
          onClick={() => setActiveItem('gallery')}
        />

      </nav>

      {/* Emergency Contact */}
      <div className="p-3 border-t border-gray-200">
        <div className="bg-green-500 text-white rounded-lg p-3 hover:bg-green-600 transition-all duration-200 ease-in-out cursor-pointer hover:shadow-lg">
          <div className="flex items-center space-x-3">
            <Phone size={20} />
            {showContent && (
              <div className={`transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                <p className="font-medium text-sm">Emergency Contact</p>
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