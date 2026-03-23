import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Newsletter: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
    setName('');
  };

  return (
    <section className="py-14 sm:py-20 bg-primary dark:bg-gray-900 relative" style={{ overflow: 'hidden' }}>
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-20 -translate-y-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/5 rounded-full translate-x-28 translate-y-28 pointer-events-none" />

      <div ref={ref} className="relative z-10 w-full px-4 sm:px-6">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">Stay in the Loop</h2>
          <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
            Subscribe to our newsletter and be the first to hear about our programs, impact stories, and upcoming events.
          </p>

          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="text-xl font-bold text-white mb-2">You're subscribed!</h3>
              <p className="text-white/80 text-sm">Thank you for joining our community.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-white/60 hover:text-white underline text-sm transition">
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-8">
              <div className="flex flex-col gap-3 mb-4">
                <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl focus:outline-none focus:border-white/60 transition" />
                <input type="email" placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)} required
                  className="w-full px-3 py-2.5 text-sm bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl focus:outline-none focus:border-white/60 transition" />
              </div>

              <div className="flex flex-col gap-2 mb-5 text-left">
                {['Programs & Events', 'Impact Stories', 'Volunteer Opportunities', 'Donation Updates'].map(topic => (
                  <label key={topic} className="flex items-center gap-2 text-white/80 text-xs sm:text-sm cursor-pointer">
                    <input type="checkbox" className="accent-orange w-4 h-4 flex-shrink-0" defaultChecked />
                    {topic}
                  </label>
                ))}
              </div>

              <button type="submit"
                className="w-full bg-orange hover:bg-brown text-white py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                Subscribe to Newsletter
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="text-white/50 text-xs mt-3">No spam, ever. Unsubscribe at any time.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
