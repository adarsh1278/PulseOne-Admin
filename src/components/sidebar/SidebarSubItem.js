"use client";
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

const SidebarSubItem = ({ label, onClick = () => {}, link = "" }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = link && pathname.includes(link);

  return (
    <button
      onClick={() => {
        router.push(link || "/");
        onClick();
      }}
      className={`w-full text-left  cursor-pointer p-2 rounded transition-all duration-200 ease-in-out ${
        isActive 
          ? 'text-blue-600 bg-blue-50 font-medium' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
      suppressHydrationWarning
    >
      {label}
    </button>
  );
};

export default SidebarSubItem;
