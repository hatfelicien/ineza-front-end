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
    <section className="py-20 bg-primary dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-white/80 text-xl mb-10 leading-relaxed">
            Subscribe to our newsletter and be the first to hear about our programs, impact stories, and upcoming events.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 animate-fade-in-up">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">You're subscribed!</h3>
              <p className="text-white/80">Thank you for joining our community. We'll keep you updated with our latest news and stories.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-white/60 hover:text-white underline transition text-sm"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl focus:outline-none focus:border-white/60 transition"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl focus:outline-none focus:border-white/60 transition"
                />
              </div>

              <div className="flex flex-wrap gap-3 mb-6 justify-center">
                {['Programs & Events', 'Impact Stories', 'Volunteer Opportunities', 'Donation Updates'].map(topic => (
                  <label key={topic} className="flex items-center gap-2 text-white/80 text-sm cursor-pointer hover:text-white transition">
                    <input type="checkbox" className="accent-orange w-4 h-4" defaultChecked />
                    {topic}
                  </label>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-orange hover:bg-brown text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
              >
                Subscribe to Newsletter
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="text-white/50 text-xs mt-4">No spam, ever. Unsubscribe at any time.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
