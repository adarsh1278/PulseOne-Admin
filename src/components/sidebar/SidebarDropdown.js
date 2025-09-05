import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const SidebarDropdown = ({ 
  icon: Icon, 
  label, 
  children, 
  isCollapsed = false,
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    if (!isCollapsed) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <button 
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 ease-in-out group"
      >
        <div className="flex items-center space-x-3">
          <Icon size={20} className="text-gray-600 group-hover:text-blue-600" />
          {!isCollapsed && <span className="font-medium">{label}</span>}
        </div>
        {!isCollapsed && (
          <div className="transition-transform duration-200 ease-in-out">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>
        )}
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen && !isCollapsed ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="ml-6 mt-2 space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarDropdown;
