
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin } from 'lucide-react';

export interface EmployeeProps {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
}

interface EmployeeCardProps {
  employee: EmployeeProps;
  className?: string;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  className,
}) => {
  return (
    <div className={cn("neo-card p-5 hover:shadow-medium transition-shadow animate-fade-up", className)}>
      <div className="flex flex-col items-center text-center">
        <div className="h-20 w-20 rounded-full bg-asa-100 flex items-center justify-center overflow-hidden">
          {employee.avatar ? (
            <img src={employee.avatar} alt={employee.name} className="h-full w-full object-cover" />
          ) : (
            <span className="text-3xl font-medium text-asa-600">{employee.name.charAt(0)}</span>
          )}
        </div>
        
        <h3 className="mt-3 text-lg font-medium text-neutral-900">{employee.name}</h3>
        <p className="text-sm text-asa-600 font-medium">{employee.role}</p>
        <p className="text-xs text-neutral-500 mt-1">{employee.department}</p>
        
        <div className="w-full mt-4 pt-4 border-t border-neutral-200 space-y-2">
          <div className="flex items-center text-sm text-neutral-700">
            <Mail className="h-3.5 w-3.5 mr-2 text-neutral-400" />
            <span className="truncate">{employee.email}</span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-700">
            <Phone className="h-3.5 w-3.5 mr-2 text-neutral-400" />
            <span>{employee.phone}</span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-700">
            <MapPin className="h-3.5 w-3.5 mr-2 text-neutral-400" />
            <span>{employee.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
