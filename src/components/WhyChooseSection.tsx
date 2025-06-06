import React from 'react';
import { Check, Star, Award, Users, Shield, Zap } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Africa-Focused',
      description: 'Rooted in Africa\'s local business landscape'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Scalable Design',
      description: 'Designed for both public and private sector scalability'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Modern Technology',
      description: 'Combines simplicity, power, and futuristic design'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Local Support',
      description: 'Dedicated support team based in South Africa'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Continuous Innovation',
      description: 'Regular updates and feature enhancements'
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: 'Security First',
      description: 'Security and data protection as standard'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose SunnySide</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the difference with our comprehensive approach to digital transformation
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/20 rounded-xl text-white mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;