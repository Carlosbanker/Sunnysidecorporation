import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-8 md:mb-0">
            <span className="font-thin text-xl text-black">SunnySide Corporation</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 text-sm font-light">
              &copy; {new Date().getFullYear()} SunnySide Corporation. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2 font-light">
              Building a centralized, automated future for Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;