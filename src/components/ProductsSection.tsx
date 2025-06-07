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
      color: 'bg-blue-50 text-blue-600',
      features: ['QR Code Integration', 'Digital Tributes', 'Revenue Generation', 'Family Sharing']
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: 'MediData',
      description: 'Centralized medical record system for clinics, hospitals, and health departments. Highly secure, scalable, and compliant.',
      details: 'A comprehensive health information system that connects patients, providers, and administrators through a secure platform, improving care coordination while maintaining strict privacy standards.',
      color: 'bg-blue-50 text-blue-600',
      features: ['HIPAA Compliant', 'Real-time Access', 'Multi-facility Support', 'Advanced Security']
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      name: 'Retail Solutions',
      description: 'POS and CRM for businesses with inventory control, staff management, loyalty, and support for multi-branch operations.',
      details: 'End-to-end retail management platform that handles everything from point-of-sale to customer relationships, inventory forecasting, and advanced analytics for business growth.',
      color: 'bg-blue-50 text-blue-600',
      features: ['Multi-branch Support', 'Inventory Management', 'Customer Loyalty', 'Sales Analytics']
    },
    {
      icon: <Code className="w-8 h-8" />,
      name: 'DevSuite',
      description: 'Developer tools and custom software systems built for enterprise-scale integration, automation, and performance.',
      details: 'Professional development environment with APIs, libraries, and frameworks specifically designed for African businesses looking to create custom applications or integrate existing systems.',
      color: 'bg-blue-50 text-blue-600',
      features: ['API Integration', 'Custom Frameworks', 'Enterprise Scale', 'African-focused']
    }
  ];

  return (
    <section id="products" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-thin text-black mb-8">Products</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            Our innovative portfolio of software solutions addressing critical needs across different sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center">
                    <div className={`p-4 ${product.color} rounded-2xl mr-6`}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-black">{product.name}</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveProduct(activeProduct === index ? null : index)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-full hover:bg-gray-50"
                  >
                    {activeProduct === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
                
                <p className="text-gray-700 mb-6 font-light leading-relaxed">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-light border border-gray-100"
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
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed font-light">{product.details}</p>
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