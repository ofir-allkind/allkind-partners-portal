"use client";

import React, { useState, createContext, useContext } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export default function SidebarProvider({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarWidth = isCollapsed ? 64 : 256;

  return (
    <SidebarContext.Provider value={{ isCollapsed, sidebarWidth, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
} 