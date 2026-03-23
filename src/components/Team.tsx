import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import teamPhoto from '../assets/team.jpeg';

const teamMembers = [
  {
    name: 'Member Name',
    role: 'Executive Director',
    image: teamPhoto,
    description: 'With over 15 years of experience in community development, she leads the foundation\'s vision and strategic direction with passion and dedication.'
  },
  {
    name: 'Member Name',
    role: 'Program Manager',
    image: teamPhoto,
    description: 'Oversees all foundation programs ensuring they deliver maximum impact to communities across Rwanda through innovative approaches.'
  },
  {
    name: 'Member Name',
    role: 'Finance Officer',
    image: teamPhoto,
    description: 'Manages the foundation\'s financial resources with transparency and accountability, ensuring every donation creates lasting change.'
  },
  {
    name: 'Member Name',
    role: 'Community Outreach',
    image: teamPhoto,
    description: 'Builds strong relationships with local communities, identifying needs and connecting families with the support they deserve.'
  },
  {
    name: 'Member Name',
    role: 'Education Coordinator',
    image: teamPhoto,
    description: 'Designs and implements educational programs that empower children and youth with the knowledge and skills for a brighter future.'
  },
  {
    name: 'Member Name',
    role: 'Healthcare Lead',
    image: teamPhoto,
    description: 'Coordinates healthcare initiatives ensuring communities have access to essential medical services and health education programs.'
  },
];

const Team: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="team" className="min-h-screen py-20 sm:py-32 bg-white dark:bg-gray-900 bg-dots relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Our Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate individuals dedicated to transforming lives across Rwanda
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flip-card h-96 transition-all duration-700 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${flipped === index ? 'flipped' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setFlipped(flipped === index ? null : index)}
            >
              <div className={`flip-card-inner h-full ${flipped === index ? '[transform:rotateY(180deg)]' : ''}`}>

                {/* Front */}
                <div className="flip-card-front rounded-3xl overflow-hidden border-2 border-gray-100 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800">
                  <div className="h-2 w-full flex">
                    <div className="flex-1 bg-primary"></div>
                    <div className="flex-1 bg-accent"></div>
                    <div className="flex-1 bg-orange"></div>
                  </div>
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white/80 text-sm text-center">Click to learn more</p>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{member.name}</h3>
                    <p className="text-orange font-semibold text-sm uppercase tracking-wider">{member.role}</p>
                  </div>
                </div>

                {/* Back */}
                <div className="flip-card-back rounded-3xl overflow-hidden shadow-lg bg-primary flex flex-col">
                  <div className="h-2 w-full flex">
                    <div className="flex-1 bg-orange"></div>
                    <div className="flex-1 bg-accent"></div>
                    <div className="flex-1 bg-primary"></div>
                  </div>
                  <div className="flex flex-col items-center justify-center flex-1 p-8 text-white">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 mb-4 shadow-lg">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                    <div className="w-12 h-0.5 bg-white/30 mb-4"></div>
                    <p className="text-white/90 text-center leading-relaxed text-sm">{member.description}</p>
                    <div className="flex gap-3 mt-6">
                      <a href="#" className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition text-lg">📘</a>
                      <a href="#" className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition text-lg">🐦</a>
                      <a href="#" className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition text-lg">💼</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
