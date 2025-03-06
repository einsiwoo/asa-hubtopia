
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { DocumentCard, DocumentProps } from '@/components/documents/DocumentCard';
import { Search, Plus, Filter, Grid, List } from 'lucide-react';

const documentsData: DocumentProps[] = [
  {
    id: 1,
    title: 'Employee Handbook 2023',
    type: 'pdf',
    size: '4.2 MB',
    lastModified: 'Jun 5, 2023',
    views: 128,
    url: '#'
  },
  {
    id: 2,
    title: 'Q2 Financial Report',
    type: 'xls',
    size: '1.8 MB',
    lastModified: 'May 28, 2023',
    views: 56,
    url: '#'
  },
  {
    id: 3,
    title: 'Product Roadmap 2023-2024',
    type: 'doc',
    size: '2.5 MB',
    lastModified: 'May 15, 2023',
    views: 87,
    url: '#'
  },
  {
    id: 4,
    title: 'Brand Guidelines',
    type: 'pdf',
    size: '8.7 MB',
    lastModified: 'Apr 30, 2023',
    views: 152,
    url: '#'
  },
  {
    id: 5,
    title: 'Company All-Hands Presentation',
    type: 'doc',
    size: '5.3 MB',
    lastModified: 'Apr 12, 2023',
    views: 203,
    url: '#'
  },
  {
    id: 6,
    title: 'API Documentation',
    type: 'pdf',
    size: '3.1 MB',
    lastModified: 'Mar 28, 2023',
    views: 76,
    url: '#'
  },
  {
    id: 7,
    title: 'Marketing Campaign Assets',
    type: 'img',
    size: '12.4 MB',
    lastModified: 'Mar 15, 2023',
    views: 98,
    url: '#'
  },
  {
    id: 8,
    title: 'Security Protocol Guidelines',
    type: 'pdf',
    size: '1.5 MB',
    lastModified: 'Feb 22, 2023',
    views: 45,
    url: '#'
  }
];

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const filteredDocuments = documentsData.filter(document =>
    document.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <MainLayout title="Documents">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-medium text-neutral-900">Documents</h2>
          <p className="text-neutral-500 mt-1">Manage and access company documents</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-full bg-white border border-neutral-200 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-asa-500/20 focus:border-asa-500/60"
            />
          </div>
          
          <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
            <button 
              className={`p-2 ${viewMode === 'grid' ? 'bg-neutral-100 text-neutral-900' : 'bg-white text-neutral-600'}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button 
              className={`p-2 ${viewMode === 'list' ? 'bg-neutral-100 text-neutral-900' : 'bg-white text-neutral-600'}`}
              onClick={() => setViewMode('list')}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
          
          <button className="flex items-center gap-1 px-3 py-2 bg-asa-500 text-white rounded-lg hover:bg-asa-600 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Upload</span>
          </button>
        </div>
      </div>
      
      <div className={viewMode === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
        : "grid grid-cols-1 gap-4"
      }>
        {filteredDocuments.map(document => (
          <DocumentCard key={document.id} document={document} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Documents;
