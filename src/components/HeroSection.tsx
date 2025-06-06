import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rotate-12 rounded-lg"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border border-blue-400/30 rotate-45"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
          <span className="text-sm text-white/90">Intelligent Systems for Africa</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            SunnySide
          </span>
          <br />
          <span className="text-4xl md:text-5xl font-light text-white/80">Corporation</span>
        </h1>
        
        <p className="mt-8 max-w-4xl mx-auto text-xl md:text-2xl text-white/70 leading-relaxed font-light">
          Crafting intelligent software systems that centralize, automate, and scale operations for businesses, organizations, and governments across Africa.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;