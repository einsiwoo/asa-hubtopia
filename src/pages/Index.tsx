
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { AnnouncementCard } from '@/components/dashboard/AnnouncementCard';
import { EventCard } from '@/components/dashboard/EventCard';
import { MetricsChart } from '@/components/dashboard/MetricsChart';
import { QuickLinks } from '@/components/dashboard/QuickLinks';
import { Users, FileText, BookOpen, Activity, Database, BarChart, Briefcase, Globe } from 'lucide-react';

const metricsData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 59 },
  { name: 'Mar', value: 80 },
  { name: 'Apr', value: 81 },
  { name: 'May', value: 76 },
  { name: 'Jun', value: 90 },
];

const quickLinksData = [
  {
    title: 'Google Workspace',
    description: 'Access Gmail, Docs, Drive and Calendar',
    icon: Globe,
    url: 'https://workspace.google.com/'
  },
  {
    title: 'HR Portal',
    description: 'Manage your benefits and time off',
    icon: Users,
    url: '#'
  },
  {
    title: 'IT Support',
    description: 'Submit tickets and request equipment',
    icon: Database,
    url: '#'
  },
  {
    title: 'Company Handbook',
    description: 'Policies, procedures and guidelines',
    icon: BookOpen,
    url: '#'
  }
];

const Index = () => {
  return (
    <MainLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Employees"
          value="128"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Active Projects"
          value="24"
          icon={Briefcase}
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardCard
          title="Documents Added"
          value="357"
          icon={FileText}
          trend={{ value: 24, isPositive: true }}
        />
        <DashboardCard
          title="Server Uptime"
          value="99.98%"
          icon={Activity}
          trend={{ value: 0.01, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <MetricsChart
            title="Website Traffic"
            data={metricsData}
          />
        </div>
        
        <QuickLinks links={quickLinksData} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-xl font-medium text-neutral-900 mb-4">Company Announcements</h2>
          <div className="space-y-4">
            <AnnouncementCard
              title="Quarterly All-Hands Meeting Next Week"
              excerpt="Join us for our Q2 All-Hands meeting where we'll discuss company performance, upcoming projects, and recognize outstanding team members."
              date="June 12, 2023"
              author={{
                name: "Sarah Johnson",
                role: "CEO",
              }}
            />
            <AnnouncementCard
              title="New IT Security Policy Implementation"
              excerpt="We're rolling out new security policies starting next month. All employees must complete training by June 30."
              date="June 8, 2023"
              author={{
                name: "Michael Chen",
                role: "CTO",
              }}
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-medium text-neutral-900 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <EventCard
              title="Product Team Sprint Planning"
              date="Jun 15"
              time="10:00 AM - 12:00 PM"
              location="Conference Room A"
              attendees={12}
            />
            <EventCard
              title="New Employee Orientation"
              date="Jun 18"
              time="9:00 AM - 2:00 PM"
              location="Training Center"
              attendees={5}
            />
            <EventCard
              title="Design Team Workshop"
              date="Jun 22"
              time="1:00 PM - 4:00 PM"
              location="Innovation Lab"
              attendees={8}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
