"use client"
import { useState, useEffect } from "react";
import Sidebar from "@/component/sideBar";
import Navbar from "@/component/navBar";
import Breadcrumb from "@/component/breadcrumb";

export default function LayoutClient({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On mobile, start with sidebar closed
      if (mobile) {
        setIsSidebarCollapsed(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar toggleSidebar={toggleSidebar} />
      </div>
      
      {/* Main Content Area */}
      <div className="flex flex-row pt-14 h-full w-full relative">
        {/* Sidebar - Desktop: Normal, Mobile: Overlay */}
        <div className={`${
          isMobile 
            ? `fixed left-0 top-14 h-[calc(100vh-3.5rem)] z-40 transition-transform duration-300 ease-in-out ${
                isSidebarCollapsed ? '-translate-x-full' : 'translate-x-0'
              }`
            : 'flex-shrink-0 relative'
        }`}>
          <Sidebar isCollapsed={!isMobile && isSidebarCollapsed} />
        </div>

        {/* Mobile Overlay Background */}
        {isMobile && !isSidebarCollapsed && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 top-14"
            onClick={toggleSidebar}
          />
        )}
        
        {/* Content Area with Breadcrumb */}
        <div className={`flex-1 h-full flex flex-col ${isMobile ? 'w-full' : ''}`}>
          {/* Fixed Breadcrumb */}
          <div className="flex-shrink-0">
            <Breadcrumb />
          </div>
          
          {/* Scrollable Children Content */}
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
