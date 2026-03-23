import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Programs: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const programs = [
    {
      icon: '📖',
      title: 'Education Support',
      description: 'Providing scholarships, school supplies, and tutoring to ensure every child has access to quality education.'
    },
    {
      icon: '🏥',
      title: 'Healthcare Access',
      description: 'Delivering essential healthcare services and health education to underserved communities.'
    },
    {
      icon: '💼',
      title: 'Skills Training',
      description: 'Empowering youth and adults with vocational training and entrepreneurship programs.'
    },
    {
      icon: '🌱',
      title: 'Community Development',
      description: 'Building sustainable infrastructure and supporting local initiatives for long-term growth.'
    },
    {
      icon: '👨👩👧',
      title: 'Family Support',
      description: 'Strengthening families through counseling, parenting programs, and economic assistance.'
    },
    {
      icon: '💻',
      title: 'Digital Literacy',
      description: 'Bridging the digital divide with computer training and technology access programs.'
    }
  ];

  return (
    <section id="programs" className="py-16 sm:py-20 bg-white dark:bg-gray-900 bg-dots relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Our Programs</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-sm sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive initiatives designed to create lasting impact in communities
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`flip-card h-52 sm:h-64 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flip-card-inner h-full">
                {/* Front */}
                <div className="flip-card-front bg-primary rounded-xl shadow-lg p-5 sm:p-8 flex flex-col items-center justify-center text-white">
                  <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">{program.icon}</div>
                  <h3 className="text-lg sm:text-2xl font-bold text-center">{program.title}</h3>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 sm:p-8 flex flex-col items-center justify-center border-2 border-primary">
                  <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed text-sm sm:text-base">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
