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
          ? 'bg-primary text-theme border-r-2 border-theme' 
          : 'text-gray-700 hover:bg-primary-hover hover:text-theme'
      } ${className}`}
      suppressHydrationWarning
    >
      <div className="flex items-center space-x-3">
        <Icon size={20} className={isActive ? 'text-theme' : 'text-gray-600 group-hover:text-theme transition-colors duration-200'} />
        {!isCollapsed && <span className="font-medium">{label}</span>}
      </div>
      {!isCollapsed && hasArrow && (
        <ChevronRight size={16} className="text-gray-400 group-hover:text-theme transition-colors duration-200" />
      )}
    </button>
  );
};

export default SidebarItem