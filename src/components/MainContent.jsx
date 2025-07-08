"use client";

import React from 'react';
import { useSidebar } from './SidebarProvider';

export default function MainContent({ children }) {
  const { sidebarWidth, isCollapsed } = useSidebar();

  return (
    <main 
      className="bg-gray-50 min-h-screen transition-all duration-300 ease-in-out flex-1" 
      style={{ 
        marginLeft: `${sidebarWidth}px`, 
        marginTop: 0, 
        paddingTop: 0,
        width: `calc(100vw - ${sidebarWidth}px)`
      }}
    >
      {children}
    </main>
  );
} 