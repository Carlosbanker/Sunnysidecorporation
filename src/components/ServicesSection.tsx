import React from 'react';
import { Network, Cpu, LineChart, Shield, Globe, Code } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Network className="w-12 h-12 text-blue-400" />,
      title: 'Enterprise Integration',
      description: 'Unified platforms for seamless operations',
      details: 'Connect your entire organization with intelligent data flow systems, real-time analytics, and cross-department collaboration tools. Our integration solutions eliminate data silos and enable smooth information exchange across all business units.',
      features: ['Automated data synchronization', 'Cross-platform compatibility', 'Real-time updates', 'Custom workflows']
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-400" />,
      title: 'AI-Powered Automation',
      description: 'Smart systems for operational excellence',
      details: 'Transform your operations with AI-driven automation that handles complex tasks, predicts business trends, and optimizes resource allocation. Our solutions adapt to your specific needs while maintaining high accuracy and efficiency.',
      features: ['Machine learning algorithms', 'Predictive analytics', 'Process optimization', 'Automated reporting']
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: 'Security Solutions',
      description: 'Enterprise-grade protection systems',
      details: 'Protect your digital assets with our comprehensive security infrastructure. We implement multiple layers of protection while ensuring seamless access for authorized users.',
      features: ['End-to-end encryption', 'Access control', 'Threat detection', 'Compliance management']
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-400" />,
      title: 'Digital Transformation',
      description: 'Complete business digitalization',
      details: 'Guide your organization through digital transformation with our comprehensive solutions. We help you adopt new technologies while maintaining business continuity and improving operational efficiency.',
      features: ['Process digitization', 'Cloud migration', 'Digital workflow design', 'Change management']
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-400" />,
      title: 'Analytics & Insights',
      description: 'Data-driven decision making',
      details: 'Transform raw data into actionable insights with our advanced analytics platforms. Monitor KPIs, track performance metrics, and make informed decisions based on real-time data analysis.',
      features: ['Business intelligence', 'Custom dashboards', 'Performance metrics', 'Trend analysis']
    },
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      title: 'Custom Development',
      description: 'Tailored software solutions',
      details: 'Build custom software solutions that perfectly match your business requirements. Our development team creates scalable, maintainable, and efficient applications using modern technologies.',
      features: ['Agile development', 'Quality assurance', 'Continuous integration', 'Technical support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive software solutions designed specifically for Africa's unique business landscape, combining cutting-edge technology with practical implementation strategies.
          </p>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-900 to-blue-950/50 p-8 rounded-xl border border-gray-800 shadow-lg group hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800/50 rounded-xl mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-blue-300 mb-4">{service.description}</p>
              <p className="text-gray-400 mb-6">{service.details}</p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;