import React from 'react';
import { Network, Cpu, LineChart, Shield, Globe, Code } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Enterprise Integration',
      description: 'Unified platforms for seamless operations',
      details: 'Connect your entire organization with intelligent data flow systems, real-time analytics, and cross-department collaboration tools.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI-Powered Automation',
      description: 'Smart systems for operational excellence',
      details: 'Transform your operations with AI-driven automation that handles complex tasks, predicts business trends, and optimizes resource allocation.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Solutions',
      description: 'Enterprise-grade protection systems',
      details: 'Protect your digital assets with our comprehensive security infrastructure and multi-layered protection systems.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'Complete business digitalization',
      details: 'Guide your organization through digital transformation with comprehensive solutions that maintain business continuity.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Analytics & Insights',
      description: 'Data-driven decision making',
      details: 'Transform raw data into actionable insights with advanced analytics platforms and real-time monitoring.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Development',
      description: 'Tailored software solutions',
      details: 'Build custom software solutions that perfectly match your business requirements using modern technologies.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions designed specifically for Africa's unique business landscape
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-blue-600 font-medium mb-4">{service.description}</p>
              <p className="text-gray-600 leading-relaxed">{service.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;