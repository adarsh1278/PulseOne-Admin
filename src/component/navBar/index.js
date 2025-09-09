"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  Home,
  ChevronRight,
  Menu,
  BarChart3,
  Calendar,
  FileText,
  ShoppingCart,
  UserCheck,
  Clock,
  Eye
} from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const profileRef = useRef(null);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const notifications = [
    {
      id: 1,
      type: 'invoice',
      title: 'Invoices',
      description: '23 invoices have been paid to the MediCare Labs.',
      time: '10:20AM Today',
      color: 'bg-red-500'
    },
    {
      id: 2,
      type: 'purchase',
      title: 'Purchased',
      description: '28 new surgical equipments have been purchased.',
      time: '04:30PM Today',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      type: 'appointment',
      title: 'Appointed',
      description: 'New appointment scheduled with Dr. Smith.',
      time: '2 hours ago',
      color: 'bg-green-500'
    }
  ];

  const timeFilters = ['today', '7d', '2w'];
  const activityFilters = ['3m', '6m', '1y'];

  if (!isMounted) {
    return (
      <nav className="bg-blue-600 text-white px-4 md:px-6 py-1 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="p-1 hover:bg-blue-700 rounded transition-colors">
            <Menu size={20} />
          </button>
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="bg-white rounded-lg p-1.5 md:p-2">
              <BarChart3 className="text-blue-600" size={20} />
            </div>
            <span className="text-lg md:text-2xl font-bold hidden sm:block">PlusOne</span>
            <span className="text-lg font-bold sm:hidden">MF</span>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white text-gray-800 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>
        <div className="lg:hidden">
          <button className="p-2 hover:bg-blue-700 rounded-full transition-colors">
            <Search size={20} />
          </button>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="hidden md:flex w-8 h-6 bg-white rounded overflow-hidden">
            <div className="w-1/3 bg-blue-600"></div>
            <div className="w-1/3 bg-white"></div>
            <div className="w-1/3 bg-red-600"></div>
          </div>
          <button className="hidden md:block p-2 hover:bg-blue-700 rounded-full transition-colors">
            <Settings size={20} />
          </button>
          <div className="relative">
            <button className="p-2 hover:bg-blue-700 rounded-full transition-colors relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
          <div className="relative hidden md:block">
            <button className="p-2 hover:bg-blue-700 rounded-full transition-colors">
              <Calendar size={20} />
            </button>
          </div>
          <div className="relative">
            <button className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-1 md:p-2 transition-colors">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs md:text-sm">JB</span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-blue-600 text-white px-4 md:px-6 py-1 flex items-center justify-between shadow-lg">
      {/* Left Side - Logo and Menu */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <button 
          className="p-1 hover:bg-blue-700 rounded transition-colors"
          onClick={toggleSidebar}
          suppressHydrationWarning
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="bg-white rounded-lg p-1.5 md:p-2">
            <BarChart3 className="text-blue-600" size={20} />
          </div>
          <span className="text-lg md:text-2xl font-bold hidden sm:block">


            PlusOne
          </span>
          <span className="text-lg font-bold sm:hidden">MF</span>
        </div>
      </div>

      {/* Center - Search Bar */}
      <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white text-gray-800 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            suppressHydrationWarning
          />
        </div>
      </div>

      {/* Mobile Search Button */}
      <div className="lg:hidden">
        <button className="p-2 hover:bg-blue-700 rounded-full transition-colors" suppressHydrationWarning>
          <Search size={20} />
        </button>
      </div>

      {/* Right Side - Icons and Profile */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* French Flag - Hidden on mobile */}
        <div className="hidden md:flex w-8 h-6 bg-white rounded overflow-hidden">
          <div className="w-1/3 bg-blue-600"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-red-600"></div>
        </div>

        {/* Settings Icon - Hidden on mobile */}
        <button className="hidden md:block p-2 hover:bg-blue-700 rounded-full transition-colors" suppressHydrationWarning>
          <Settings size={20} />
        </button>

        {/* Notifications with Dropdown */}
        <div className="relative">
          <button 
            className="p-2 hover:bg-blue-700 rounded-full transition-colors relative"
            onMouseEnter={() => setIsNotificationOpen(true)}
            onMouseLeave={() => setIsNotificationOpen(false)}
            suppressHydrationWarning
          >
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Notifications Dropdown */}
          {isNotificationOpen && (
            <div 
              className="absolute right-0 mt-2 w-72 md:w-80 bg-white rounded-lg shadow-xl border z-50 text-gray-800"
              onMouseEnter={() => setIsNotificationOpen(true)}
              onMouseLeave={() => setIsNotificationOpen(false)}
            >
              <div className="p-3 md:p-4 border-b">
                <h3 className="font-semibold text-base md:text-lg">Notifications</h3>
              </div>
              <div className="max-h-80 md:max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-3 md:p-4 border-b hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-3">
                      <div className={`w-3 h-3 rounded-full ${notification.color} mt-2`}></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm md:text-base">{notification.title}</h4>
                        <p className="text-xs md:text-sm text-gray-600 mt-1">{notification.description}</p>
                        <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 md:p-4 bg-gray-50">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base" suppressHydrationWarning>
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Activity Dropdown - Hidden on mobile */}
        <div className="relative hidden md:block">
          <button 
            className="p-2 hover:bg-blue-700 rounded-full transition-colors"
            onMouseEnter={() => setIsActivityOpen(true)}
            onMouseLeave={() => setIsActivityOpen(false)}
            suppressHydrationWarning
          >
            <Calendar size={20} />
          </button>

          {/* Activity Dropdown */}
          {isActivityOpen && (
            <div 
              className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50 text-gray-800"
              onMouseEnter={() => setIsActivityOpen(true)}
              onMouseLeave={() => setIsActivityOpen(false)}
            >
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Activity</h3>
                  <div className="flex space-x-1">
                    {activityFilters.map((filter) => (
                      <button
                        key={filter}
                        className={`px-3 py-1 rounded text-sm transition-colors ${
                          filter === '3m' 
                            ? 'bg-gray-200 text-gray-800' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        suppressHydrationWarning
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <FileText className="text-red-600" size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Invoice processed</p>
                      <p className="text-xs text-gray-500">15 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <ShoppingCart className="text-blue-600" size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Equipment ordered</p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <UserCheck className="text-green-600" size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Patient registered</p>
                      <p className="text-xs text-gray-500">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors" suppressHydrationWarning>
                  View all activity
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile with Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-1 md:p-2 transition-colors"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            suppressHydrationWarning
          >
            <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs md:text-sm">JB</span>
            </div>
          </button>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <div 
              className="absolute right-0 mt-2 w-56 md:w-64 bg-white rounded-lg shadow-xl border z-50 text-gray-800"
            >
              <div className="p-3 md:p-4 border-b">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-sm md:text-base">JB</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">James Bruton</h3>
                    <p className="text-xs md:text-sm text-gray-600">Admin</p>
                  </div>
                </div>
                <div className="mt-3 md:mt-4 flex space-x-1">
                  {timeFilters.map((filter) => (
                    <button
                      key={filter}
                      className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm transition-colors ${
                        filter === 'today' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      suppressHydrationWarning
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-2">
                <button className="w-full flex items-center space-x-3 p-2 md:p-3 hover:bg-gray-100 rounded-lg transition-colors" suppressHydrationWarning>
                  <User size={18} />
                  <span className="text-sm md:text-base">Profile</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-2 md:p-3 hover:bg-gray-100 rounded-lg transition-colors" suppressHydrationWarning>
                  <Settings size={18} />
                  <span className="text-sm md:text-base">Settings</span>
                </button>
              </div>
              <div className="p-2 border-t">
                <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2 text-sm md:text-base" suppressHydrationWarning>
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

     
    </nav>
  );
};

export default Navbar;