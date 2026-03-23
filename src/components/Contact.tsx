import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-14 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">

        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join us in making a difference. Reach out to learn more about our work or get involved.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">

          {/* Info cards */}
          <div className={`space-y-3 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {[
              { icon: '📍', title: 'Visit Us', text: 'Kigali, Rwanda' },
              { icon: '📧', title: 'Email Us', text: 'info@inezafoundation.org' },
              { icon: '📱', title: 'Call Us', text: '+250 XXX XXX XXX' },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-xl shadow-md flex items-center gap-4">
                <span className="text-2xl sm:text-3xl flex-shrink-0">{icon}</span>
                <div className="min-w-0">
                  <h4 className="font-bold text-sm sm:text-base text-gray-800 dark:text-white">{title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm break-all">{text}</p>
                </div>
              </div>
            ))}
            <div className="bg-primary text-white p-4 sm:p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-sm sm:text-base mb-2">Office Hours</h4>
              <p className="text-xs sm:text-sm mb-1">Monday – Friday: 8:00 AM – 5:00 PM</p>
              <p className="text-xs sm:text-sm">Saturday: 9:00 AM – 1:00 PM</p>
            </div>
          </div>

          {/* Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <form className="bg-white dark:bg-gray-700 p-4 sm:p-8 rounded-2xl shadow-xl">
              <h3 className="text-base sm:text-xl font-bold text-gray-800 dark:text-white mb-4">Send us a Message</h3>
              <div className="space-y-3">
                <input type="text" placeholder="Your Name"
                  className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary transition" />
                <input type="email" placeholder="Your Email"
                  className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary transition" />
                <input type="text" placeholder="Subject"
                  className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary transition" />
                <textarea placeholder="Your Message" rows={4}
                  className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary transition resize-none" />
                <button type="submit"
                  className="w-full bg-primary hover:bg-accent text-white py-3 rounded-lg font-bold text-sm transition-all duration-300 shadow-md">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
