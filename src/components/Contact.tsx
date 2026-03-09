import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 bg-waves relative overflow-hidden flex items-center">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join us in making a difference. Reach out to learn more about our work or get involved.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-start gap-6 group">
              <div className="text-5xl group-hover:scale-110 transition-transform">📍</div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">Visit Us</h4>
                <p className="text-gray-600 dark:text-gray-300">Kigali, Rwanda</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-start gap-6 group">
              <div className="text-5xl group-hover:scale-110 transition-transform">📧</div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">Email Us</h4>
                <p className="text-gray-600 dark:text-gray-300">info@inezafoundation.org</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-start gap-6 group">
              <div className="text-5xl group-hover:scale-110 transition-transform">📱</div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">Call Us</h4>
                <p className="text-gray-600 dark:text-gray-300">+250 XXX XXX XXX</p>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
              <h4 className="font-bold text-2xl mb-4">Office Hours</h4>
              <p className="mb-2">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <form className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send us a Message</h3>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl"
                >
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
