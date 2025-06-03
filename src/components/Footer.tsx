import React from 'react';
import { SunMoon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <SunMoon className="h-6 w-6 text-blue-400 mr-2" />
            <span className="font-bold text-lg text-white">SunnySide Corporation</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SunnySide Corporation. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Building a centralized, automated future for Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;