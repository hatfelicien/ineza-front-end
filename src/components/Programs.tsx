import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const programs = [
  { icon: '📖', title: 'Education Support', description: 'Providing scholarships, school supplies, and tutoring to ensure every child has access to quality education.' },
  { icon: '🏥', title: 'Healthcare Access', description: 'Delivering essential healthcare services and health education to underserved communities.' },
  { icon: '💼', title: 'Skills Training', description: 'Empowering youth and adults with vocational training and entrepreneurship programs.' },
  { icon: '🌱', title: 'Community Development', description: 'Building sustainable infrastructure and supporting local initiatives for long-term growth.' },
  { icon: '👨‍👩‍👧', title: 'Family Support', description: 'Strengthening families through counseling, parenting programs, and economic assistance.' },
  { icon: '💻', title: 'Digital Literacy', description: 'Bridging the digital divide with computer training and technology access programs.' },
];

const Programs: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="programs" className="py-14 sm:py-20 bg-white dark:bg-gray-900">
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">

        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">Our Programs</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive initiatives designed to create lasting impact in communities
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`flip-card h-44 sm:h-56 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flip-card-inner h-full">
                <div className="flip-card-front bg-primary rounded-xl shadow-lg p-3 sm:p-6 flex flex-col items-center justify-center text-white">
                  <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">{program.icon}</div>
                  <h3 className="text-sm sm:text-lg font-bold text-center leading-tight">{program.title}</h3>
                </div>
                <div className="flip-card-back bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 sm:p-6 flex flex-col items-center justify-center border-2 border-primary">
                  <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed text-xs sm:text-sm">{program.description}</p>
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
