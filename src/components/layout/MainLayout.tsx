
import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-neutral-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Header title={title} />
        <div className={cn("py-6 px-6 animate-fade-in")}>
          {children}
        </div>
      </main>
    </div>
  );
};
