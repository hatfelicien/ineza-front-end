import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Partners from './components/Partners';
import Impact from './components/Impact';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Partners />
      <Impact />
      <Team />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
