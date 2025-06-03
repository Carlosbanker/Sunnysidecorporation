import React, { useState } from 'react';
import { Globe, Heart, ShoppingBag, Code } from 'lucide-react';

interface Product {
  icon: JSX.Element;
  name: string;
  description: string;
  details: string;
  accentColor: string;
}

const ProductsSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const products: Product[] = [
    {
      icon: <Globe className="w-10 h-10" />,
      name: 'WebGrave',
      description: 'Digital memorial solution with barcoded gravestones, tribute pages, and monetization features for funeral homes.',
      details: 'Preserving memories in the digital age with QR-coded memorial sites, offering families a place to share stories, photos, and videos while providing funeral homes with new revenue streams.',
      accentColor: 'from-blue-500/20 to-purple-500/20'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      name: 'MediData',
      description: 'Centralized medical record system for clinics, hospitals, and health departments. Highly secure, scalable, and compliant.',
      details: 'A comprehensive health information system that connects patients, providers, and administrators through a secure platform, improving care coordination while maintaining strict privacy standards.',
      accentColor: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      name: 'Retail Solutions',
      description: 'POS and CRM for businesses with inventory control, staff management, loyalty, and support for multi-branch operations.',
      details: 'End-to-end retail management platform that handles everything from point-of-sale to customer relationships, inventory forecasting, and advanced analytics for business growth.',
      accentColor: 'from-green-500/20 to-cyan-500/20'
    },
    {
      icon: <Code className="w-10 h-10" />,
      name: 'DevSuite',
      description: 'Developer tools and custom software systems built for enterprise-scale integration, automation, and performance.',
      details: 'Professional development environment with APIs, libraries, and frameworks specifically designed for African businesses looking to create custom applications or integrate existing systems.',
      accentColor: 'from-orange-500/20 to-red-500/20'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flagship Products</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our innovative portfolio of software solutions addressing critical needs across different sectors.
          </p>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer ${activeProduct === index ? 'ring-2 ring-blue-400' : ''}`}
              onClick={() => setActiveProduct(activeProduct === index ? null : index)}
            >
              <div className="flex items-start">
                <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${product.accentColor} mr-4`}>
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <p className="text-gray-300 mt-1">{product.description}</p>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeProduct === index ? 'max-h-40 mt-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-400">{product.details}</p>
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