
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { KanbanBoard } from '@/components/projects/KanbanBoard';
import { Plus, Filter, Search } from 'lucide-react';

const Projects = () => {
  return (
    <MainLayout title="Projects">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-medium text-neutral-900">Project Management</h2>
          <p className="text-neutral-500 mt-1">Track and manage active projects</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="pl-9 pr-4 py-2 w-64 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-asa-500/20 focus:border-asa-500/60"
            />
          </div>
          
          <button className="p-2 bg-white border border-neutral-200 rounded-lg text-neutral-700 hover:bg-neutral-50">
            <Filter className="h-5 w-5" />
          </button>
          
          <button className="flex items-center gap-1 px-3 py-2 bg-asa-500 text-white rounded-lg hover:bg-asa-600 transition-colors">
            <Plus className="h-4 w-4" />
            <span>New Project</span>
          </button>
        </div>
      </div>
      
      <KanbanBoard />
    </MainLayout>
  );
};

export default Projects;
