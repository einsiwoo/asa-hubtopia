
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MainLayout } from '@/components/layout/MainLayout';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout title="Page Not Found">
      <div className="flex flex-col items-center justify-center py-16">
        <div className="h-32 w-32 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
          <span className="text-6xl font-medium text-neutral-300">404</span>
        </div>
        
        <h1 className="text-3xl font-medium text-neutral-900 mb-2">Page Not Found</h1>
        <p className="text-neutral-600 text-center max-w-md mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <Link 
          to="/" 
          className="flex items-center gap-2 px-5 py-2.5 bg-asa-500 text-white rounded-lg hover:bg-asa-600 transition-colors"
        >
          <Home className="h-4 w-4" />
          <span>Back to Dashboard</span>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
