
import React from 'react';
import { Bell, Search, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-16 border-b border-neutral-200 bg-white/70 backdrop-blur-sm sticky top-0 z-10">
      <div className="h-full flex items-center justify-between px-6">
        <h1 className="text-xl font-medium text-neutral-900">{title}</h1>
        
        <div className="flex items-center space-x-2">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search..."
              className={cn(
                "pl-9 pr-4 py-2 bg-neutral-100 rounded-lg text-sm text-neutral-900",
                "border border-transparent hover:border-neutral-200 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-asa-500/20 focus:border-asa-500/60 w-64"
              )}
            />
          </div>
          
          <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors">
            <Bell className="h-5 w-5 text-neutral-600" />
          </button>
          
          <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors">
            <HelpCircle className="h-5 w-5 text-neutral-600" />
          </button>
          
          <div className="pl-2 border-l border-neutral-200 ml-2">
            <button className="flex items-center space-x-2 p-1 rounded-lg hover:bg-neutral-100 transition-colors">
              <div className="h-8 w-8 bg-asa-500 rounded-full flex items-center justify-center text-white overflow-hidden">
                <img src="/lovable-uploads/6de802f1-c891-44db-beeb-7d9db5729c6d.png" alt="Ása Tech Logo" className="h-6 w-auto" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
