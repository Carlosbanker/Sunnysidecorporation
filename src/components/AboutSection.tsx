import React from 'react';
import { Compass, Target, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Compass className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-bold text-white">Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To lead the development of a more centralized, automated, and digitally unified society across Africa—where every business, institution, and government can operate efficiently through smart, secure, and scalable systems.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-bold text-white">Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To empower local businesses, corporations, organizations, and governments by designing and deploying software solutions that streamline daily operations, reduce waste, increase collaboration, and unlock new potential for growth.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-bold text-white">Our Approach</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We build integrated, intelligent platforms that replace outdated processes with unified digital infrastructure, allow seamless data flow, support real-time decision-making, and enable institutions to grow without losing control.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Plan for a Centralized Society</h3>
          <p className="text-gray-300 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            We envision a world where technology eliminates the chaos of disconnected systems. SunnySide Corporation is building a foundation of integrated, intelligent platforms that:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">1</div>
              <p className="text-gray-300">Replace outdated processes with unified digital infrastructure</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">2</div>
              <p className="text-gray-300">Allow seamless data flow across public and private sectors</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">3</div>
              <p className="text-gray-300">Support real-time decision-making at every level of operation</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">4</div>
              <p className="text-gray-300">Enable institutions to grow without losing control or coherence</p>
            </div>
          </div>
          <p className="text-gray-300 italic text-center mt-8">
            Centralization doesn't mean control—it means clarity, speed, and synergy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;