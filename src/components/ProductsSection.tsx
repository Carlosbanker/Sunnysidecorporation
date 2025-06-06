import React, { useState } from 'react';
import { Globe, Heart, ShoppingBag, Code, ChevronDown, ChevronUp } from 'lucide-react';

interface Product {
  icon: JSX.Element;
  name: string;
  description: string;
  details: string;
  color: string;
  features: string[];
}

const ProductsSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const products: Product[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      name: 'WebGrave',
      description: 'Digital memorial solution with barcoded gravestones, tribute pages, and monetization features for funeral homes.',
      details: 'Preserving memories in the digital age with QR-coded memorial sites, offering families a place to share stories, photos, and videos while providing funeral homes with new revenue streams.',
      color: 'from-blue-500 to-purple-500',
      features: ['QR Code Integration', 'Digital Tributes', 'Revenue Generation', 'Family Sharing']
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: 'MediData',
      description: 'Centralized medical record system for clinics, hospitals, and health departments. Highly secure, scalable, and compliant.',
      details: 'A comprehensive health information system that connects patients, providers, and administrators through a secure platform, improving care coordination while maintaining strict privacy standards.',
      color: 'from-red-500 to-pink-500',
      features: ['HIPAA Compliant', 'Real-time Access', 'Multi-facility Support', 'Advanced Security']
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      name: 'Retail Solutions',
      description: 'POS and CRM for businesses with inventory control, staff management, loyalty, and support for multi-branch operations.',
      details: 'End-to-end retail management platform that handles everything from point-of-sale to customer relationships, inventory forecasting, and advanced analytics for business growth.',
      color: 'from-green-500 to-emerald-500',
      features: ['Multi-branch Support', 'Inventory Management', 'Customer Loyalty', 'Sales Analytics']
    },
    {
      icon: <Code className="w-8 h-8" />,
      name: 'DevSuite',
      description: 'Developer tools and custom software systems built for enterprise-scale integration, automation, and performance.',
      details: 'Professional development environment with APIs, libraries, and frameworks specifically designed for African businesses looking to create custom applications or integrate existing systems.',
      color: 'from-orange-500 to-yellow-500',
      features: ['API Integration', 'Custom Frameworks', 'Enterprise Scale', 'African-focused']
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Flagship Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our innovative portfolio of software solutions addressing critical needs across different sectors
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-4 bg-gradient-to-r ${product.color} rounded-2xl text-white mr-4`}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveProduct(activeProduct === index ? null : index)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {activeProduct === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeProduct === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{product.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;