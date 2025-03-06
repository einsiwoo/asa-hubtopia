
import React from 'react';
import { Bell, Search, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-16 bg-white/70 backdrop-blur-sm border-b border-neutral-200/50 sticky top-0 z-10">
      <div className="h-full flex items-center justify-between px-6">
        <h1 className="text-xl font-medium text-neutral-900">{title}</h1>
        
        <div className="flex items-center space-x-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search..."
              className="input-field pl-9 pr-4 w-64"
            />
          </div>
          
          <button className="p-2 rounded-lg hover:bg-neutral-100 transition-all duration-200 relative group">
            <Bell className="h-5 w-5 text-neutral-600" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-rose-500 rounded-full"></span>
            <span className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-xs px-1.5 py-0.5 rounded-full">3</span>
          </button>
          
          <button className="p-2 rounded-lg hover:bg-neutral-100 transition-all duration-200">
            <HelpCircle className="h-5 w-5 text-neutral-600" />
          </button>
          
          <div className="pl-3 border-l border-neutral-200">
            <button className="flex items-center space-x-2 p-1 rounded-lg hover:bg-neutral-100 transition-all duration-200">
              <div className="h-8 w-8 bg-white rounded-full shadow-neo-sm flex items-center justify-center overflow-hidden">
                <img src="/lovable-uploads/aa04ffa2-59dd-4a65-9729-b308b227401e.png" alt="Ása Tech Logo" className="h-6 w-auto" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
