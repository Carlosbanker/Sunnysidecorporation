import React from 'react';
import { Sun, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-white ml-3">SunnySide Corporation</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              &copy; {new Date().getFullYear()} SunnySide Corporation. Made with 
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              in South Africa
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Building a centralized, automated future for Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;