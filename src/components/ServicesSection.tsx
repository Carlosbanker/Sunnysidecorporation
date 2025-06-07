import React from 'react';
import { Network, Cpu, LineChart, Shield, Globe, Code } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Enterprise Integration',
      description: 'Unified platforms for seamless operations',
      details: 'Connect your entire organization with intelligent data flow systems, real-time analytics, and cross-department collaboration tools.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI-Powered Automation',
      description: 'Smart systems for operational excellence',
      details: 'Transform your operations with AI-driven automation that handles complex tasks, predicts business trends, and optimizes resource allocation.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Solutions',
      description: 'Enterprise-grade protection systems',
      details: 'Protect your digital assets with our comprehensive security infrastructure and multi-layered protection systems.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'Complete business digitalization',
      details: 'Guide your organization through digital transformation with comprehensive solutions that maintain business continuity.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Analytics & Insights',
      description: 'Data-driven decision making',
      details: 'Transform raw data into actionable insights with advanced analytics platforms and real-time monitoring.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Development',
      description: 'Tailored software solutions',
      details: 'Build custom software solutions that perfectly match your business requirements using modern technologies.',
      color: 'bg-blue-50 text-blue-600'
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-thin text-black mb-8">Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            Comprehensive software solutions designed specifically for Africa's unique business landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-light text-black mb-4">{service.title}</h3>
              <p className="text-blue-600 font-light mb-6">{service.description}</p>
              <p className="text-gray-700 leading-relaxed font-light">{service.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;