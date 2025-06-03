import React from 'react';
import { Network, Cpu, LineChart } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Network className="w-12 h-12 text-blue-400" />,
      title: 'Centralized Systems',
      description: 'Unified platforms for cross-department operations',
      details: 'Connect your entire organization with seamless data flow and collaboration tools that eliminate silos and redundancy.'
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-400" />,
      title: 'Smart Automation',
      description: 'AI-driven tools to boost efficiency and reduce error',
      details: 'Let artificial intelligence handle repetitive tasks while your team focuses on innovation and growth strategies.'
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-400" />,
      title: 'Scalable Solutions',
      description: 'Modular software that grows with your business or institution',
      details: 'Our systems expand alongside your organization, maintaining performance and reliability from startup to enterprise scale.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Services</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive software solutions designed for Africa's unique business landscape, combining cutting-edge technology with practical implementation.
          </p>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-900 to-blue-950/50 p-8 rounded-xl border border-gray-800 text-center shadow-lg group hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800/50 rounded-xl mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-blue-300 mb-4">{service.description}</p>
              <p className="text-gray-400">{service.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;