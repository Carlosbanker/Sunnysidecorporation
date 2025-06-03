import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-950 flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 opacity-90">
          <span className="block">SunnySide Corporation</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed">
          Crafting intelligent software systems that centralize, automate, and scale operations for businesses, organizations, and governments across Africa.
        </p>
        <div className="mt-12">
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-blue-400 hover:bg-blue-300 transition-all duration-200 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;