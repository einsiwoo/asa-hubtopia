
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { EmployeeCard, EmployeeProps } from '@/components/employees/EmployeeCard';
import { Filter, Search } from 'lucide-react';

const employeesData: EmployeeProps[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    department: 'Executive',
    email: 'sarah.johnson@asatech.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    department: 'Technology',
    email: 'michael.chen@asatech.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director of Marketing',
    department: 'Marketing',
    email: 'emily.rodriguez@asatech.com',
    phone: '+1 (555) 345-6789',
    location: 'Chicago, IL'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Senior Developer',
    department: 'Engineering',
    email: 'david.kim@asatech.com',
    phone: '+1 (555) 456-7890',
    location: 'Seattle, WA'
  },
  {
    id: 5,
    name: 'Jessica Martinez',
    role: 'UX Designer',
    department: 'Design',
    email: 'jessica.martinez@asatech.com',
    phone: '+1 (555) 567-8901',
    location: 'Austin, TX'
  },
  {
    id: 6,
    name: 'Marcus Johnson',
    role: 'Product Manager',
    department: 'Product',
    email: 'marcus.johnson@asatech.com',
    phone: '+1 (555) 678-9012',
    location: 'Boston, MA'
  },
  {
    id: 7,
    name: 'Sophia Patel',
    role: 'HR Manager',
    department: 'Human Resources',
    email: 'sophia.patel@asatech.com',
    phone: '+1 (555) 789-0123',
    location: 'Denver, CO'
  },
  {
    id: 8,
    name: 'James Wilson',
    role: 'Financial Analyst',
    department: 'Finance',
    email: 'james.wilson@asatech.com',
    phone: '+1 (555) 890-1234',
    location: 'Portland, OR'
  }
];

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredEmployees = employeesData.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <MainLayout title="Employee Directory">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-medium text-neutral-900">Employee Directory</h2>
          <p className="text-neutral-500 mt-1">View and search for employee information</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-full bg-white border border-neutral-200 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-asa-500/20 focus:border-asa-500/60"
            />
          </div>
          
          <button className="p-2 bg-white border border-neutral-200 rounded-lg text-neutral-700 hover:bg-neutral-50">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredEmployees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Employees;
