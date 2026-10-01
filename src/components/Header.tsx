import React, { useState } from 'react';
import { Search, ShieldAlert, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string, param?: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'learn', label: 'Learn' },
    { id: 'stay-safe', label: 'Stay Safe' },
    { id: 'scam-alerts', label: 'Scam Alerts' },
    { id: 'what-to-do', label: 'What To Do' },
    { id: 'resources', label: 'Resources' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus:outline-none focus:ring-2 focus:ring-[#0E7490] rounded px-1.5 py-1"
            aria-label="أمان Amān Homepage"
          >
            <div className="flex items-baseline space-x-2">
              <span className="font-arabic font-bold text-2xl sm:text-3xl text-[#0B1F33] tracking-tight group-hover:text-[#0E7490] transition-colors">
                أمان
              </span>
              <span className="text-sm font-semibold tracking-wider text-[#5F6B76] border-l border-gray-300 pl-2 uppercase font-sans">
                Amān
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-[#0B1F33] font-semibold bg-gray-100'
                      : 'text-[#5F6B76] hover:text-[#0B1F33] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 text-xs text-[#5F6B76] bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md transition-colors"
              aria-label="Search guides and alerts"
            >
              <Search className="w-3.5 h-3.5 text-gray-500" />
              <span>Search</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono text-gray-400 bg-white border border-gray-200 rounded">
                Ctrl K
              </kbd>
            </button>

            <button
              onClick={() => handleNavClick('what-to-do')}
              className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#0B1F33] hover:bg-[#132c45] rounded-md transition-colors shadow-sm"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Help</span>
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-md"
              aria-label="Open Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-[#FFFFFF] px-4 pt-3 pb-5 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-md text-base font-medium ${
                currentTab === item.id
                  ? 'bg-gray-100 text-[#0B1F33] font-semibold'
                  : 'text-[#5F6B76] hover:bg-gray-50 hover:text-[#0B1F33]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('what-to-do')}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0B1F33] rounded-md"
            >
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Emergency Guidance (Get Help)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
