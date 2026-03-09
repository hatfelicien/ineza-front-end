import React, { useEffect } from 'react';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';

const Impact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const children = useCountUp(2500);
  const communities = useCountUp(50);
  const families = useCountUp(1000);
  const volunteers = useCountUp(100);

  useEffect(() => {
    if (isVisible) {
      children.start();
      communities.start();
      families.start();
      volunteers.start();
    }
  }, [isVisible]);

  return (
    <section id="impact" className="py-20 bg-gradient-to-r from-primary to-accent text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6">Our Impact</h2>
          <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Making a real difference in the lives of thousands across Rwanda
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-4 gap-8 mb-16">
          <div className={`text-center hover:scale-110 transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-3">
              <div className="text-6xl font-bold mb-2">{children.count.toLocaleString()}+</div>
            </div>
            <div className="text-green-100 font-semibold">Children Educated</div>
          </div>
          <div className={`text-center hover:scale-110 transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-3">
              <div className="text-6xl font-bold mb-2">{communities.count}+</div>
            </div>
            <div className="text-green-100 font-semibold">Communities Served</div>
          </div>
          <div className={`text-center hover:scale-110 transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-3">
              <div className="text-6xl font-bold mb-2">{families.count.toLocaleString()}+</div>
            </div>
            <div className="text-green-100 font-semibold">Families Supported</div>
          </div>
          <div className={`text-center hover:scale-110 transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-3">
              <div className="text-6xl font-bold mb-2">{volunteers.count}+</div>
            </div>
            <div className="text-green-100 font-semibold">Volunteers</div>
          </div>
        </div>

        <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 hover:bg-white/15 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-3xl font-bold mb-6 text-center">Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <p className="text-lg italic mb-4">
                "Thanks to Ineza Foundation, I was able to complete my education and now I'm a teacher helping other children in my community."
              </p>
              <p className="font-semibold">- Marie, Program Graduate</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <p className="text-lg italic mb-4">
                "The vocational training program gave me the skills to start my own business and support my family."
              </p>
              <p className="font-semibold">- Jean, Entrepreneur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
