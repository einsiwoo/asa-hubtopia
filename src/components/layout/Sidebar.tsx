import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  FileText, 
  BarChart4, 
  HardDrive, 
  Settings, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  isCollapsed: boolean;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, to, isCollapsed, isActive }) => {
  return (
    <Link
      to={to}
      className={cn(
        'sidebar-item',
        isActive && 'active'
      )}
    >
      <Icon className={cn("h-5 w-5", isActive ? "text-white" : "text-neutral-500")} />
      {!isCollapsed && (
        <span className="transition-all duration-300 whitespace-nowrap">
          {label}
        </span>
      )}
      {isCollapsed && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-neutral-900 text-white text-xs rounded-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
          {label}
        </div>
      )}
    </Link>
  );
};

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
    { icon: Users, label: 'Employees', to: '/employees' },
    { icon: FileText, label: 'Documents', to: '/documents' },
    { icon: FolderKanban, label: 'Projects', to: '/projects' },
    { icon: BarChart4, label: 'Analytics', to: '/analytics' },
    { icon: HardDrive, label: 'IT & DevOps', to: '/it' },
    { icon: Settings, label: 'Settings', to: '/settings' },
  ];

  return (
    <aside 
      className={cn(
        "h-screen bg-sidebar relative flex flex-col border-r border-neutral-200/50 transition-all duration-300 ease-in-out z-10",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center h-16 px-4 border-b border-neutral-200/50">
        <div className={cn(
          "flex items-center transition-all duration-300", 
          isCollapsed ? "justify-center w-full" : "justify-start"
        )}>
          {isCollapsed ? (
            <div className="h-8 w-8 flex items-center justify-center">
              <img src="/lovable-uploads/aa04ffa2-59dd-4a65-9729-b308b227401e.png" alt="Ása Tech Logo" className="h-8 w-auto" />
            </div>
          ) : (
            <>
              <div className="h-8 w-8 flex items-center justify-center mr-3">
                <img src="/lovable-uploads/aa04ffa2-59dd-4a65-9729-b308b227401e.png" alt="Ása Tech Logo" className="h-8 w-auto" />
              </div>
              <span className="text-lg font-medium text-neutral-900">Ása Tech</span>
            </>
          )}
        </div>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto scrollbar-none">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isCollapsed={isCollapsed}
            isActive={location.pathname === item.to}
          />
        ))}
      </nav>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 h-6 w-6 rounded-full bg-white shadow-neo-sm border border-neutral-200/50 flex items-center justify-center hover:shadow-neo transition-all duration-200"
      >
        {isCollapsed ? (
          <ChevronRight className="h-3 w-3 text-neutral-500" />
        ) : (
          <ChevronLeft className="h-3 w-3 text-neutral-500" />
        )}
      </button>
    </aside>
  );
};
