
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  FileText, 
  File, 
  FileImage, 
  FileSpreadsheet, 
  Download, 
  Calendar, 
  Eye,
  Share2
} from 'lucide-react';

type DocumentType = 'pdf' | 'doc' | 'xls' | 'img' | 'other';

export interface DocumentProps {
  id: number;
  title: string;
  type: DocumentType;
  size: string;
  lastModified: string;
  views: number;
  url: string;
}

interface DocumentCardProps {
  document: DocumentProps;
  className?: string;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  document,
  className,
}) => {
  const getFileIcon = (type: DocumentType) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-8 w-8 text-rose-500" />;
      case 'doc':
        return <FileText className="h-8 w-8 text-blue-500" />;
      case 'xls':
        return <FileSpreadsheet className="h-8 w-8 text-emerald-500" />;
      case 'img':
        return <FileImage className="h-8 w-8 text-purple-500" />;
      default:
        return <File className="h-8 w-8 text-neutral-500" />;
    }
  };

  return (
    <div className={cn("neo-card p-5 hover:shadow-medium transition-shadow animate-fade-up group", className)}>
      <div className="flex items-start">
        <div className="mr-4 flex-shrink-0">
          {getFileIcon(document.type)}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium text-neutral-900 line-clamp-2">{document.title}</h3>
          
          <div className="flex items-center mt-2 text-xs text-neutral-500 space-x-4">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{document.lastModified}</span>
            </div>
            
            <div className="flex items-center">
              <Eye className="h-3 w-3 mr-1" />
              <span>{document.views} views</span>
            </div>
            
            <div>{document.size}</div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1.5 rounded-md hover:bg-neutral-100 transition-colors text-neutral-600">
          <Share2 className="h-4 w-4" />
        </button>
        
        <a 
          href={document.url} 
          download
          className="p-1.5 rounded-md hover:bg-neutral-100 transition-colors text-neutral-600"
        >
          <Download className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};
