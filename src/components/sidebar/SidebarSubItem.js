import React from 'react';

const SidebarSubItem = ({ label, onClick, isActive = false }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-2 rounded transition-all duration-200 ease-in-out ${
        isActive 
          ? 'text-blue-600 bg-blue-50 font-medium' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {label}
    </button>
  );
};

export default SidebarSubItem;
