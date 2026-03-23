import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.jpg';
import partner3 from '../assets/partner3.jpg';

const Partners: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const partners = [
    { logo: partner1, name: 'Partner 1' },
    { logo: partner2, name: 'Partner 2' },
    { logo: partner3, name: 'Partner 3' },
    { logo: partner1, name: 'Partner 1' },
    { logo: partner2, name: 'Partner 2' },
    { logo: partner3, name: 'Partner 3' },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white dark:bg-gray-900" style={{ overflow: 'hidden' }}>
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">Our Partners</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Working together to create lasting change in communities
          </p>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <div className="flex animate-scroll">
            {partners.concat(partners).map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-32 sm:w-52 mx-3 sm:mx-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-5 flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="max-h-16 sm:max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
