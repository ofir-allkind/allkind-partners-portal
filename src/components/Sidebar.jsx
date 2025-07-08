import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const mainLinks = [
  { label: 'Home', href: '#', active: true },
];

const appLinks = [
  // Example: { label: 'Doctor', href: '#' },
];

const otherLinks = [
  // Example: { label: 'Payment', href: '#' },
];

export default function Sidebar() {
  return (
    <aside
      className="fixed top-0 left-0 h-screen w-64 z-20 border-r border-gray-200 flex flex-col shadow-sm overflow-y-auto max-h-screen"
      style={{ backgroundColor: '#FCFBFE' }}
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center px-8 border-b border-gray-100">
        <Image src="/logo.png" alt="Allkind logo" width={120} height={40} className="object-contain" priority />
      </div>
      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          {mainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 transition-colors
                ${link.active ? 'bg-gray-100 text-gray-900 shadow-sm' : 'hover:bg-gray-50'}
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
        {appLinks.length > 0 && (
          <div>
            <div className="text-xs text-gray-400 font-semibold px-4 mb-2 tracking-widest uppercase">Applications</div>
            <div className="flex flex-col gap-1">
              {appLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
        {otherLinks.length > 0 && (
          <div>
            <div className="text-xs text-gray-400 font-semibold px-4 mb-2 tracking-widest uppercase">Others</div>
            <div className="flex flex-col gap-1">
              {otherLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* User Profile Section - DEBUG: This is the sidebar user card */}
      <div className="p-4 mt-auto">
        <button className="flex items-center w-full gap-1 h-7 px-1 py-0 rounded transition-colors group items-center min-h-0" style={{ backgroundColor: '#FCFBFE' }}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User avatar"
            className="w-3 h-3 rounded-full object-cover"
          />
          <div className="flex-1 flex flex-col items-start text-left leading-tight justify-center">
            <span className="font-medium text-gray-900 text-[10px] leading-tight">Amy Boardman</span>
            <span className="text-[8px] text-gray-500 leading-tight">admin@allkind.inc</span>
          </div>
          <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-gray-600" />
        </button>
      </div>
    </aside>
  );
} 