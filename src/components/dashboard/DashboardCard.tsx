
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  className,
}) => {
  return (
    <div className={cn("neo-card px-6 py-5 animate-fade-up", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-500">{title}</p>
          <h3 className="text-2xl font-medium mt-1">{value}</h3>
          
          {trend && (
            <div className="flex items-center mt-1">
              <span 
                className={cn(
                  "text-xs font-medium",
                  trend.isPositive ? "text-emerald-600" : "text-rose-600"
                )}
              >
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
              <span className="text-xs text-neutral-500 ml-1">vs last month</span>
            </div>
          )}
        </div>
        
        {Icon && (
          <div className="h-10 w-10 rounded-lg bg-asa-500/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-asa-600" />
          </div>
        )}
      </div>
    </div>
  );
};
