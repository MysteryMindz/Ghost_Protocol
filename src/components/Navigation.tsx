import React from 'react';
import { LogOut } from 'lucide-react';
import { User } from '../App';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

interface NavigationProps {
  items: NavigationItem[];
  currentPage: string;
  onPageChange: (page: string) => void;
  currentUser: User | null;
  onLogout: () => void;
}

function Navigation({ items, currentPage, onPageChange, currentUser, onLogout }: NavigationProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl border-r border-gray-200 z-50">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold">
          GP<span className="text-blue-600">link</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">Educational Platform</p>
      </div>

      {/* User Profile */}
      {currentUser && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {currentUser.name}
              </p>
              <p className="text-xs text-gray-500 capitalize">
                {currentUser.type}
                {currentUser.verified && (
                  <span className="ml-1 text-green-500">✓</span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Items */}
      <nav className="flex-1 py-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                currentPage === item.id
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors duration-200"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Navigation;