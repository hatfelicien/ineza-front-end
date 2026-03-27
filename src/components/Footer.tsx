import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="w-full px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto">

          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">

            {/* Logo + description */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Ineza Foundation" className="h-10 sm:h-14 w-auto" />
                <span className="text-base sm:text-xl font-bold leading-tight">INEZA FOUNDATION</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                Empowering communities through education and sustainable development. Building a brighter future for children and families in Rwanda.
              </p>
              <div className="flex gap-3">
                <a href="https://web.facebook.com/InezafoundationRwanda/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-primary p-2.5 rounded-full hover:scale-110 transition-all duration-300">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/inezafoundation/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-primary p-2.5 rounded-full hover:scale-110 transition-all duration-300">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://x.com/inezafoundation" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-primary p-2.5 rounded-full hover:scale-110 transition-all duration-300">
                  <FaXTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-3 text-accent uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About Us' },
                  { href: '#programs', label: 'Our Programs' },
                  { href: '#impact', label: 'Our Impact' },
                  { href: '#contact', label: 'Contact Us' },
                ].map(l => (
                  <li key={l.href}>
                    <a href={l.href} className="text-gray-400 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block text-sm">{l.label}</a>
                  </li>
                ))}
                {[
                  { to: '/team', label: 'Our Team' },
                  { to: '/gallery', label: 'Gallery' },
                  { to: '/blog', label: 'Blog' },
                ].map(l => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-gray-400 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block text-sm">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-3 text-accent uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-2">
                {['Donate Now','Volunteer','Partner With Us','Careers','News & Events'].map(l => (
                  <li key={l}>
                    <a
                      href={l === 'Donate Now' ? 'https://givebutter.com/jjoyfoundation-ineza-general?gbtid=8c69052705d14c249720f1b0e1f85afa' : '#'}
                      target={l === 'Donate Now' ? '_blank' : undefined}
                      rel={l === 'Donate Now' ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col items-center gap-3">
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              &copy; {new Date().getFullYear()} Ineza Foundation. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <a href="#" className="text-gray-400 hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-accent transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-accent transition">Cookie Policy</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
