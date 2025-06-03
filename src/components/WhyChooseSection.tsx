import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const reasons = [
    'Rooted in Africa\'s local business landscape',
    'Designed for both public and private sector scalability',
    'Combines simplicity, power, and futuristic design',
    'Dedicated support team based in South Africa',
    'Continuous innovation and feature updates',
    'Security and data protection as standard'
  ];

  return (
    <section className="py-20 bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why SunnySide</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-blue-400" />
                </div>
                <p className="ml-3 text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;