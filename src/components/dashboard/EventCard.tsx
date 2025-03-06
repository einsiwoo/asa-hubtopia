
import React from 'react';
import { cn } from '@/lib/utils';
import { Clock, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  attendees,
  className,
}) => {
  return (
    <div className={cn("neo-card p-5 hover:shadow-medium transition-shadow animate-fade-up", className)}>
      <div className="flex items-start">
        <div className="mr-4 flex-shrink-0 h-14 w-14 rounded-lg bg-asa-500/10 flex flex-col items-center justify-center">
          <span className="text-sm font-medium text-asa-600">{date.split(' ')[0]}</span>
          <span className="text-lg font-bold text-asa-700">{date.split(' ')[1]}</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-neutral-900 line-clamp-1">{title}</h3>
          
          <div className="mt-2 space-y-1">
            <div className="flex items-center text-sm text-neutral-600">
              <Clock className="h-3.5 w-3.5 mr-2 text-neutral-400" />
              <span>{time}</span>
            </div>
            
            <div className="flex items-center text-sm text-neutral-600">
              <MapPin className="h-3.5 w-3.5 mr-2 text-neutral-400" />
              <span>{location}</span>
            </div>
            
            <div className="flex items-center text-sm text-neutral-600">
              <Users className="h-3.5 w-3.5 mr-2 text-neutral-400" />
              <span>{attendees} attendees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
