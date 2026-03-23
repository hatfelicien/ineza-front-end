import React, { useEffect } from 'react';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import aboutImage from '../assets/about.jpg';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const students = useCountUp(500);
  const programs = useCountUp(15);
  const years = useCountUp(10);

  useEffect(() => {
    if (isVisible) {
      students.start();
      programs.start();
      years.start();
    }
  }, [isVisible]);

  return (
    <section id="about" className="py-14 sm:py-20 bg-gray-50 dark:bg-gray-800 bg-pattern relative overflow-hidden">
      <div className="w-full px-4 sm:px-6">
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">About Ineza Foundation</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dedicated to transforming lives through sustainable development and education initiatives
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className={`bg-accent/20 h-52 sm:h-72 md:h-96 rounded-lg overflow-hidden transition-all duration-1000 border-2 border-accent ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <img src={aboutImage} alt="About Ineza Foundation" className="w-full h-full object-cover" />
          </div>
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              The Ineza Foundation is committed to creating lasting change in communities across Rwanda. We believe that education is the key to breaking the cycle of poverty and building a prosperous future.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Through our comprehensive programs, we provide access to quality education, healthcare services, and economic opportunities that empower individuals and strengthen communities.
            </p>
            <div ref={ref} className="grid grid-cols-3 gap-2 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-lg xs:text-xl sm:text-4xl font-bold text-primary bg-white dark:bg-gray-700 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-1 sm:mb-2 shadow-lg">{students.count}+</div>
                <div className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-2 font-semibold text-xs sm:text-base">Students</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-lg xs:text-xl sm:text-4xl font-bold text-primary bg-white dark:bg-gray-700 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-1 sm:mb-2 shadow-lg">{programs.count}+</div>
                <div className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-2 font-semibold text-xs sm:text-base">Programs</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-lg xs:text-xl sm:text-4xl font-bold text-primary bg-white dark:bg-gray-700 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-1 sm:mb-2 shadow-lg">{years.count}+</div>
                <div className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-2 font-semibold text-xs sm:text-base">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
