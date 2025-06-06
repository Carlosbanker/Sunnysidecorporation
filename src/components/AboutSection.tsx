import React from 'react';
import { Target, Eye, Lightbulb, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About SunnySide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading Africa's digital transformation through innovative, centralized solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To lead the development of a more centralized, automated, and digitally unified society across Africa—where every business, institution, and government can operate efficiently through smart, secure, and scalable systems.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To empower local businesses, corporations, organizations, and governments by designing and deploying software solutions that streamline daily operations, reduce waste, increase collaboration, and unlock new potential for growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Approach</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We build integrated, intelligent platforms that replace outdated processes with unified digital infrastructure, allow seamless data flow, support real-time decision-making, and enable institutions to grow without losing control.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-12 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Plan for a Centralized Society</h3>
          <p className="text-gray-300 leading-relaxed mb-8 text-center max-w-4xl mx-auto text-lg">
            We envision a world where technology eliminates the chaos of disconnected systems. SunnySide Corporation is building a foundation of integrated, intelligent platforms that:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              'Replace outdated processes with unified digital infrastructure',
              'Allow seamless data flow across public and private sectors',
              'Support real-time decision-making at every level of operation',
              'Enable institutions to grow without losing control or coherence'
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-blue-300 italic text-center mt-10 text-lg font-medium">
            "Centralization doesn't mean control—it means clarity, speed, and synergy."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;