import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import WhyChooseSection from './components/WhyChooseSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "SunnySide Corporation | Intelligent Systems for Africa";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="font-sans text-white bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;