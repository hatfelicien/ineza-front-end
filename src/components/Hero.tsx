import React from 'react';
import heroImage from '../assets/IMG_8991.jpg';
import logo from '../assets/logo.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-14 sm:pt-20 relative text-white min-h-screen flex items-center" style={{ overflow: 'hidden' }}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full px-4 py-10 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Empowering Communities Through Education
            </h1>
            <p className="text-sm sm:text-lg mb-6 text-gray-200 leading-relaxed">
              Building a brighter future for children and families in Rwanda through quality education, healthcare, and community development.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <button className="bg-gold text-white px-5 py-2.5 rounded-full font-semibold shadow-lg text-sm hover:bg-orange transition-all duration-300">
                Get Involved
              </button>
              <button className="bg-white text-primary px-5 py-2.5 rounded-full font-semibold shadow-lg text-sm hover:bg-gray-100 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10" style={{ lineHeight: 0 }}>
        <svg className="block w-full h-10 sm:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'rotate(180deg)' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50 dark:fill-gray-800" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
