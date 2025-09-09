import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  link,
  isActive = false, 
  isCollapsed = false, 
  hasArrow = false,
  onClick,
  className = ""
}) => {
  const router = useRouter();
  return (
    <button
      onClick={()=>{
         router.push(link||"/")
         onClick();
      }}
      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ease-in-out group ${
        isActive 
          ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-600' 
          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
      } ${className}`}
      suppressHydrationWarning
    >
      <div className="flex items-center space-x-3">
        <Icon size={20} className={isActive ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'} />
        {!isCollapsed && <span className="font-medium">{label}</span>}
      </div>
      {!isCollapsed && hasArrow && (
        <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-600" />
      )}
    </button>
  );
};

export default SidebarItem