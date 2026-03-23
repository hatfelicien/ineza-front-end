import React, { useEffect } from 'react';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';

const stats = [
  { icon: '🎓', label: 'Children Educated', suffix: '+', color: 'bg-accent', countHook: 'children' },
  { icon: '🏘️', label: 'Communities Served', suffix: '+', color: 'bg-orange', countHook: 'communities' },
  { icon: '👨‍👩‍👧', label: 'Families Supported', suffix: '+', color: 'bg-gold', countHook: 'families' },
  { icon: '🤝', label: 'Volunteers', suffix: '+', color: 'bg-secondary', countHook: 'volunteers' },
];

const progress = [
  { label: 'Education Access', value: 87 },
  { label: 'Healthcare Reach', value: 74 },
  { label: 'Skills & Employment', value: 65 },
  { label: 'Community Development', value: 91 },
];

const testimonials = [
  {
    quote: 'Thanks to Ineza Foundation, I completed my education and now I\'m a teacher helping other children in my community.',
    name: 'Marie U.',
    role: 'Program Graduate · Teacher',
    avatar: 'MU',
    color: 'bg-accent',
  },
  {
    quote: 'The vocational training program gave me the skills to start my own business and support my family. I now employ 5 people.',
    name: 'Jean B.',
    role: 'Entrepreneur · Cohort 1',
    avatar: 'JB',
    color: 'bg-orange',
  },
];

const Impact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const children = useCountUp(2500);
  const communities = useCountUp(50);
  const families = useCountUp(1000);
  const volunteers = useCountUp(100);

  const counts = [children, communities, families, volunteers];

  useEffect(() => {
    if (isVisible) counts.forEach(c => c.start());
  }, [isVisible]);

  return (
    <section id="impact" className="py-20 sm:py-32 bg-primary dark:bg-gray-900 relative overflow-hidden">

      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 sm:w-72 h-36 sm:h-72 bg-orange/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-accent/20 text-accent text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 rounded-full uppercase tracking-widest mb-5">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Changing Lives,<br />Building Futures</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-green-100 max-w-2xl mx-auto leading-relaxed px-2">
            Every number represents a real person whose life has been transformed through our programs across Rwanda.
          </p>
        </div>

        {/* Stat Cards */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center hover:bg-white/20 hover:-translate-y-2 transition-all duration-500 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1 sm:mb-2 tabular-nums">
                {counts[i].count.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-green-200 font-semibold text-xs sm:text-sm uppercase tracking-wider leading-tight">{stat.label}</div>
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Progress + Testimonials */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">

          {/* Progress Bars */}
          <div className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-sm">📊</span>
              Program Reach
            </h3>
            <div className="space-y-5 sm:space-y-7">
              {progress.map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-green-100 font-medium text-sm">{item.label}</span>
                    <span className="text-accent font-bold text-sm">{item.value}%</span>
                  </div>
                  <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-yellow-300 rounded-full transition-all duration-1000"
                      style={{
                        width: isVisible ? `${item.value}%` : '0%',
                        transitionDelay: `${400 + i * 150}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className={`flex flex-col gap-4 sm:gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 flex-1">
                <div className="text-4xl sm:text-5xl text-accent/50 font-serif leading-none mb-3">"</div>
                <p className="text-green-100 leading-relaxed italic mb-5 sm:mb-6 text-sm sm:text-[15px]">{t.quote}</p>
                <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-white/10">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-accent text-xs font-medium truncate">{t.role}</p>
                  </div>
                  <div className="ml-auto text-yellow-300 text-sm tracking-tight flex-shrink-0">★★★★★</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Impact;
