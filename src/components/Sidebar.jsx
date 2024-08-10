import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Code, FileText, Home, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', to: '/' },
  { icon: Book, label: 'Guides', to: '/guides' },
  { icon: Code, label: 'API Reference', to: '/api' },
  { icon: FileText, label: 'Examples', to: '/examples' },
  { icon: Settings, label: 'Configuration', to: '/configuration' },
];

export const Sidebar = () => {
  return (
    <aside className="bg-white w-64 h-screen shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">DevDocs</h2>
      </div>
      <nav className="mt-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};