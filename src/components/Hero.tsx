import React from 'react';
import heroImage from '../assets/IMG_8991.jpg';
import logo from '../assets/logo.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in-up text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-left leading-tight">
              Empowering Communities Through Education
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in delay-200 leading-relaxed">
              Building a brighter future for children and families in Rwanda through quality education, healthcare, and community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-400 justify-center md:justify-start">
              <button className="bg-gold text-white px-8 py-3 rounded-full hover:bg-orange hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Get Involved
              </button>
              <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white/30 backdrop-blur-md h-56 sm:h-72 md:h-80 rounded-lg flex items-center justify-center animate-fade-in-right hover:scale-105 transition-transform duration-500 border border-white/40 p-6 sm:p-8 shadow-2xl mx-auto w-full max-w-sm md:max-w-none">
            <img src={logo} alt="Ineza Foundation Logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'rotate(180deg)' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50 dark:fill-gray-800"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
