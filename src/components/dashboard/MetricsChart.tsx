
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface MetricsChartProps {
  title: string;
  data: Array<{
    name: string;
    value: number;
  }>;
  className?: string;
}

export const MetricsChart: React.FC<MetricsChartProps> = ({
  title,
  data,
  className,
}) => {
  return (
    <div className={cn("neo-card p-5 animate-fade-up", className)}>
      <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
      
      <div className="h-64 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#26a69a" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#26a69a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f3f5" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#868e96' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#868e96' }}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'white', 
                border: '1px solid #dee2e6',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#26a69a" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
