"use client";

import React from 'react';
import { useSidebar } from './SidebarProvider';

export default function MainContent({ children }) {
  const { sidebarWidth } = useSidebar();

  return (
    <main 
      className="bg-gray-50 min-h-screen transition-all duration-300 ease-in-out" 
      style={{ 
        marginLeft: `${sidebarWidth}px`, 
        marginTop: 0, 
        paddingTop: 0 
      }}
    >
      {children}
    </main>
  );
} 