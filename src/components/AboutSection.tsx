import React from 'react';
import { Target, Eye, Lightbulb, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-thin text-black mb-8">About</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            Leading Africa's digital transformation through innovative, centralized solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="text-center bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-8">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-light text-black mb-6">Vision</h3>
            <p className="text-gray-700 leading-relaxed font-light">
              To lead the development of a more centralized, automated, and digitally unified society across Africa—where every business, institution, and government can operate efficiently through smart, secure, and scalable systems.
            </p>
          </div>

          <div className="text-center bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-8">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-light text-black mb-6">Mission</h3>
            <p className="text-gray-700 leading-relaxed font-light">
              To empower local businesses, corporations, organizations, and governments by designing and deploying software solutions that streamline daily operations, reduce waste, increase collaboration, and unlock new potential for growth.
            </p>
          </div>

          <div className="text-center bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-8">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-light text-black mb-6">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed font-light">
              We build integrated, intelligent platforms that replace outdated processes with unified digital infrastructure, allow seamless data flow, support real-time decision-making, and enable institutions to grow without losing control.
            </p>
          </div>
        </div>

        <div className="bg-white p-16 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-3xl font-thin text-black mb-8 text-center">Plan for a Centralized Society</h3>
          <p className="text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto text-lg font-light">
            We envision a world where technology eliminates the chaos of disconnected systems. SunnySide Corporation is building a foundation of integrated, intelligent platforms that:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              'Replace outdated processes with unified digital infrastructure',
              'Allow seamless data flow across public and private sectors',
              'Support real-time decision-making at every level of operation',
              'Enable institutions to grow without losing control or coherence'
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 text-lg font-light">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-blue-600 text-center mt-12 text-lg font-light italic">
            "Centralization doesn't mean control—it means clarity, speed, and synergy."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;