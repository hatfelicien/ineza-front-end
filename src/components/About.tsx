import React, { useEffect } from 'react';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import aboutImage from '../assets/about.jpg';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const students = useCountUp(500);
  const programs = useCountUp(15);
  const years = useCountUp(10);

  useEffect(() => {
    if (isVisible) { students.start(); programs.start(); years.start(); }
  }, [isVisible]);

  return (
    <section id="about" className="py-14 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">

        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">About Ineza Foundation</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Dedicated to transforming lives through sustainable development and education initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className={`rounded-lg overflow-hidden border-2 border-accent transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img src={aboutImage} alt="About Ineza Foundation" className="w-full h-48 sm:h-72 md:h-96 object-cover" />
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white mb-3">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
              The Ineza Foundation is committed to creating lasting change in communities across Rwanda. We believe that education is the key to breaking the cycle of poverty and building a prosperous future.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Through our comprehensive programs, we provide access to quality education, healthcare services, and economic opportunities that empower individuals and strengthen communities.
            </p>

            <div ref={ref} className="grid grid-cols-3 gap-3 mt-4">
              {[
                { count: students.count, label: 'Students' },
                { count: programs.count, label: 'Programs' },
                { count: years.count, label: 'Years' },
              ].map(({ count, label }) => (
                <div key={label} className="text-center">
                  <div className="text-base sm:text-2xl font-bold text-primary bg-white dark:bg-gray-700 rounded-full w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center mx-auto shadow-lg">
                    {count}+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mt-2 font-semibold text-xs sm:text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
