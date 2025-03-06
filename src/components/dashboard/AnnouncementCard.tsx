
import React from 'react';
import { cn } from '@/lib/utils';
import { CalendarDays } from 'lucide-react';

interface AnnouncementCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  className?: string;
}

export const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  title,
  excerpt,
  date,
  author,
  className,
}) => {
  return (
    <div className={cn("neo-card p-5 hover:shadow-medium transition-shadow animate-fade-up", className)}>
      <div className="flex items-start space-x-4">
        <div className="h-12 w-12 rounded-full bg-asa-100 flex items-center justify-center overflow-hidden flex-shrink-0">
          {author.avatar ? (
            <img src={author.avatar} alt={author.name} className="h-full w-full object-cover" />
          ) : (
            <span className="text-lg font-medium text-asa-600">{author.name.charAt(0)}</span>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-neutral-900 line-clamp-2">{title}</h3>
          <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{excerpt}</p>
          
          <div className="flex items-center justify-between mt-3">
            <div>
              <p className="text-sm font-medium text-neutral-900">{author.name}</p>
              <p className="text-xs text-neutral-500">{author.role}</p>
            </div>
            
            <div className="flex items-center text-xs text-neutral-500">
              <CalendarDays className="h-3 w-3 mr-1" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
