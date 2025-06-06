import React from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Ready to transform your operations with intelligent, centralized systems? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a 
            href="mailto:info@sunnysidecorporation.co.za" 
            className="group bg-gray-50 p-12 rounded-3xl text-center hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Email Us</h3>
            <p className="text-gray-600 font-light">info@sunnysidecorporation.co.za</p>
          </a>

          <a 
            href="https://www.sunnysidecorporation.co.za" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group bg-gray-50 p-12 rounded-3xl text-center hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Visit Website</h3>
            <p className="text-gray-600 font-light">www.sunnysidecorporation.co.za</p>
          </a>

          <div className="group bg-gray-50 p-12 rounded-3xl text-center hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Headquarters</h3>
            <p className="text-gray-600 font-light">South Africa</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gray-50 p-12 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-6">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-8 font-light">
              Let's discuss how SunnySide Corporation can transform your business operations with our intelligent software solutions.
            </p>
            <a 
              href="mailto:info@sunnysidecorporation.co.za?subject=Business Inquiry"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Conversation
              <Mail className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;