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
          ? 'text-theme bg-primary font-medium' 
          : 'text-gray-600 hover:text-theme hover:bg-primary-hover'
      }`}
      suppressHydrationWarning
    >
      {label}
    </button>
  );
};

export default SidebarSubItem;
