import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Ineza Foundation" className="h-16 w-auto" />
              <span className="text-2xl font-bold">INEZA FOUNDATION</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Empowering communities through education and sustainable development. Building a brighter future for children and families in Rwanda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-primary p-3 rounded-full hover:scale-110 transition-all duration-300 text-2xl">
                📘
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary p-3 rounded-full hover:scale-110 transition-all duration-300 text-2xl">
                🐦
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary p-3 rounded-full hover:scale-110 transition-all duration-300 text-2xl">
                📷
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary p-3 rounded-full hover:scale-110 transition-all duration-300 text-2xl">
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">Our Programs</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">Our Impact</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">Contact Us</a></li>
              <li><Link to="/team" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">Our Team</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">Gallery</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">Blog</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Get Involved</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">Donate Now</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">Volunteer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">Partner With Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block">News & Events</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Ineza Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-accent transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-accent transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-accent transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
