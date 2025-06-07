import React from 'react';
import { ArrowRight } from 'lucide-react';
import DataVisualization from './DataVisualization';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Animated Data Visualization Background */}
      <div className="absolute inset-0">
        <DataVisualization />
      </div>

      {/* Content overlay */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-16 border border-gray-100 shadow-2xl">
          <h1 className="text-6xl md:text-8xl font-thin tracking-tight text-gray-900 mb-8 leading-tight">
            <span className="font-ultralight">SunnySide</span>
            <br />
            <span className="text-4xl md:text-5xl font-ultralight text-gray-600">Corporation</span>
          </h1>
          
          <p className="mt-8 max-w-4xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            Intelligent software systems that centralize, automate, and scale operations for businesses across Africa.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;