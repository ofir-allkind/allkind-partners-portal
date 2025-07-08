import React from 'react';

const mainLinks = [
  { label: 'Dashboard', icon: '📊', href: '#' },
  { label: 'Your Account', icon: '👤', href: '#' },
];

const appLinks = [
  { label: 'Partners', icon: '👥', href: '#' },
  { label: 'Reports', icon: '📄', href: '#' },
  { label: 'Settings', icon: '⚙️', href: '#' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Logo Section */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">AllKind</span>
        </div>
      </div>
      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-8">
        <div>
          {mainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium transition-colors mb-1"
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
        <div>
          <div className="text-xs text-gray-400 font-semibold px-3 mb-2 tracking-widest uppercase">Applications</div>
          {appLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium transition-colors mb-1"
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </nav>
      {/* Footer/Logout */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-red-600 hover:bg-red-50 font-medium transition-colors">
          <span className="text-lg">🚪</span>
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
} 