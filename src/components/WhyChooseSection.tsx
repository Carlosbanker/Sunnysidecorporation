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
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Experience the difference with our comprehensive approach to digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-8 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;