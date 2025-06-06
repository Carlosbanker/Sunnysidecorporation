import React from 'react';
import { Mail, Globe, MapPin, Phone, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your operations with intelligent, centralized systems? Let's start the conversation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a 
            href="mailto:info@sunnysidecorporation.co.za" 
            className="group bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-blue-100 font-medium">info@sunnysidecorporation.co.za</p>
          </a>

          <a 
            href="https://www.sunnysidecorporation.co.za" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-2xl text-center hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Visit Website</h3>
            <p className="text-purple-100 font-medium">www.sunnysidecorporation.co.za</p>
          </a>

          <div className="group bg-gradient-to-br from-cyan-600 to-cyan-700 p-8 rounded-2xl text-center hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Headquarters</h3>
            <p className="text-cyan-100 font-medium">South Africa</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 max-w-3xl mx-auto">
            <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how SunnySide Corporation can transform your business operations with our intelligent software solutions.
            </p>
            <a 
              href="mailto:info@sunnysidecorporation.co.za?subject=Business Inquiry"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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