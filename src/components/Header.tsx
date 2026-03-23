import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'programs', 'impact', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  const homeLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#impact', label: 'Impact' },
    { href: '#contact', label: 'Contact' },
  ];

  const pageLinks = [
    { to: '/team', label: 'Team' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/blog', label: 'Blog' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-white dark:bg-gray-900 shadow-md'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform min-w-0">
            <img src={logo} alt="Ineza Foundation" className="h-8 sm:h-12 w-auto flex-shrink-0" />
            <span className="text-xs xs:text-sm sm:text-xl font-bold text-primary dark:text-accent leading-tight">INEZA<br className="xs:hidden" /> FOUNDATION</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Home anchor links */}
            {homeLinks.map(link => (
              isHome ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary dark:text-accent bg-primary/10 dark:bg-accent/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-accent transform origin-left transition-transform duration-300 ${
                    activeSection === link.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {link.label}
                </Link>
              )
            ))}

            {/* Divider */}
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>

            {/* Page links */}
            {pageLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  location.pathname === link.to
                    ? 'text-primary dark:text-accent bg-primary/10 dark:bg-accent/10'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-accent transform origin-left transition-transform duration-300 ${
                  location.pathname === link.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-2xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-300"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button className="bg-orange hover:bg-brown text-white px-6 py-3 rounded-full flex items-center gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold">
              <span>Donate</span>
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 animate-fade-in">
            {homeLinks.map(link => (
              isHome ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>
            {pageLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition ${
                  location.pathname === link.to
                    ? 'text-primary dark:text-accent bg-primary/10'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition font-medium"
            >
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <button className="w-full bg-orange hover:bg-brown text-white px-6 py-3 rounded-full flex items-center justify-center gap-3 transition-all duration-300 font-bold">
              <span>Donate</span>
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </button>
          </div>
        )}
      </nav>
      <div className="flex h-1">
        <div className="flex-1 bg-primary"></div>
        <div className="flex-1 bg-accent"></div>
        <div className="flex-1 bg-orange"></div>
      </div>
    </header>
  );
};

export default Header;
