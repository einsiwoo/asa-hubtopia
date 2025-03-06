
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, LucideIcon } from 'lucide-react';

interface QuickLinkProps {
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
}

const QuickLink: React.FC<QuickLinkProps> = ({ title, description, icon: Icon, url }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block neo-card p-4 hover:shadow-medium transition-all duration-200 group"
    >
      <div className="flex items-start">
        <div className="h-10 w-10 rounded-lg bg-asa-500/10 flex items-center justify-center mr-4">
          <Icon className="h-5 w-5 text-asa-600" />
        </div>
        
        <div className="flex-1">
          <h4 className="text-base font-medium text-neutral-900 flex items-center">
            {title}
            <ExternalLink className="h-3.5 w-3.5 ml-1 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h4>
          <p className="text-sm text-neutral-600 mt-1">{description}</p>
        </div>
      </div>
    </a>
  );
};

interface QuickLinksProps {
  links: QuickLinkProps[];
  className?: string;
}

export const QuickLinks: React.FC<QuickLinksProps> = ({ links, className }) => {
  return (
    <div className={cn("neo-card p-5 animate-fade-up", className)}>
      <h3 className="text-lg font-medium text-neutral-900 mb-4">Quick Links</h3>
      
      <div className="grid grid-cols-1 gap-3">
        {links.map((link, index) => (
          <QuickLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
};
