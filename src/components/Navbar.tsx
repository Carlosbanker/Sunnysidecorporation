import React, { useState, useEffect } from 'react';
import { Menu, X, SunMoon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md py-2 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <SunMoon className="h-8 w-8 text-blue-400 mr-2" />
            <span className="font-bold text-xl text-white">SunnySide</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#products"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;