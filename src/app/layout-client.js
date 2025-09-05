"use client"
import { useState } from "react";
import Sidebar from "@/component/sideBar";
import Navbar from "@/component/navBar";
import Breadcrumb from "@/component/breadcrumb";

export default function LayoutClient({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

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
      <div className="flex flex-row pt-14 h-full w-full">
        {/* Sidebar */}
        <div className="flex-shrink-0">
          <Sidebar isCollapsed={isSidebarCollapsed} />
        </div>
        
        {/* Content Area with Breadcrumb */}
        <div className="flex-1 h-full flex flex-col">
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
