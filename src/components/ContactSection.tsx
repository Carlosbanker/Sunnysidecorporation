import React from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your operations with intelligent, centralized systems? Get in touch with our team.
          </p>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-3xl mx-auto">
          <a href="mailto:info@sunnysidecorporation.co.za" className="flex flex-col items-center text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 w-full md:w-auto transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/30 group">
            <div className="p-4 rounded-full bg-gray-800/50 group-hover:bg-blue-500/20 transition-colors duration-300 mb-4">
              <Mail className="h-6 w-6 text-blue-400" />
            </div>
            <p className="text-gray-300 font-medium">info@sunnysidecorporation.co.za</p>
          </a>

          <a href="https://www.sunnysidecorporation.co.za" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 w-full md:w-auto transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/30 group">
            <div className="p-4 rounded-full bg-gray-800/50 group-hover:bg-blue-500/20 transition-colors duration-300 mb-4">
              <Globe className="h-6 w-6 text-blue-400" />
            </div>
            <p className="text-gray-300 font-medium">www.sunnysidecorporation.co.za</p>
          </a>

          <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 w-full md:w-auto transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/30 group">
            <div className="p-4 rounded-full bg-gray-800/50 group-hover:bg-blue-500/20 transition-colors duration-300 mb-4">
              <MapPin className="h-6 w-6 text-blue-400" />
            </div>
            <p className="text-gray-300 font-medium">Headquarters: South Africa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;