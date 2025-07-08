"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Menu, LogOut, LayoutDashboard, Contact } from 'lucide-react';
import { useSidebar } from './SidebarProvider';

const mainLinks = [
  { label: 'Dashboard', href: '#', active: true, icon: LayoutDashboard },
  { label: 'Contact us', href: '#', icon: Contact },
];

const appLinks = [
  // Example: { label: 'Doctor', href: '#' },
];

const otherLinks = [
  { label: 'Contact us', href: '#', icon: Contact },
];

export default function Sidebar() {
  const { isCollapsed, sidebarWidth, toggleSidebar } = useSidebar();
  const [showSignOutPopup, setShowSignOutPopup] = useState(false);

  const handleAvatarClick = () => {
    setShowSignOutPopup(!showSignOutPopup);
  };

  const handleSignOut = () => {
    // Add sign out logic here
    console.log('Signing out...');
    setShowSignOutPopup(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 z-30 p-2 text-gray-600 hover:text-gray-800 transition-all duration-300 ease-in-out"
        style={{ left: isCollapsed ? '20px' : `${sidebarWidth - 44}px` }}
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen z-20 border-r border-gray-200 flex flex-col shadow-sm overflow-y-auto transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
        style={{ backgroundColor: '#FCFBFE', height: '100vh' }}
      >
        {/* Logo Section */}
        <div className={`h-16 flex items-center ${isCollapsed ? 'px-4' : 'px-8'} border-b border-gray-100`}>
          {!isCollapsed && (
            <Link href="/">
              <Image src="/logo.png" alt="Allkind logo" width={120} height={40} className="object-contain cursor-pointer" priority />
            </Link>
          )}
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            {mainLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 transition-colors ${
                  link.active ? 'bg-gray-100 text-gray-900 shadow-sm' : 'hover:bg-gray-50'
                }`}
                title={isCollapsed ? link.label : undefined}
              >
                {isCollapsed ? (
                  <div className="w-4 h-4 bg-gray-300 rounded flex items-center justify-center">
                    <link.icon className="w-3 h-3 text-gray-600" />
                  </div>
                ) : (
                  <>
                    <link.icon className="w-4 h-4 mr-3" />
                    {link.label}
                  </>
                )}
              </a>
            ))}
          </div>

          {appLinks.length > 0 && (
            <div>
              {!isCollapsed && (
                <div className="text-xs text-gray-400 font-semibold px-4 mb-2 tracking-widest uppercase">Applications</div>
              )}
              <div className="flex flex-col gap-1">
                {appLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    title={isCollapsed ? link.label : undefined}
                  >
                    {isCollapsed ? (
                      <div className="w-4 h-4 bg-gray-300 rounded flex items-center justify-center">
                        <span className="text-xs">A</span>
                      </div>
                    ) : (
                      link.label
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 mt-auto relative">
          {isCollapsed ? (
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600">A</span>
            </div>
          ) : (
            <>
              <button 
                onClick={handleAvatarClick}
                className="flex items-center w-full gap-1 h-7 px-1 py-0 rounded transition-colors group items-center min-h-0" 
                style={{ backgroundColor: '#FCFBFE' }}
              >
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User avatar"
                  className="w-3 h-3 rounded-full object-cover"
                />
                <div className="flex-1 flex flex-col items-start text-left leading-tight justify-center">
                  <span className="font-medium text-gray-900 text-[10px] leading-tight">Amy Boardman</span>
                  <span className="text-[8px] text-gray-500 leading-tight">admin@allkind.inc</span>
                </div>
                <ChevronRight className={`w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-transform ${showSignOutPopup ? 'rotate-90' : ''}`} />
              </button>
              
              {/* Sign Out Popup */}
              {showSignOutPopup && (
                <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <button 
                    onClick={handleSignOut}
                    className="flex items-center w-full gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign out
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </aside>
    </>
  );
} 