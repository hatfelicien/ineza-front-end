import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Partners from './components/Partners';
import Impact from './components/Impact';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Login from './admin/pages/Login';
import Dashboard from './admin/Dashboard';

const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <Programs />
    <Partners />
    <Impact />
    <Newsletter />
    <Contact />
  </>
);

const App: React.FC = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={
          isAdminLoggedIn
            ? <Dashboard onLogout={() => setIsAdminLoggedIn(false)} />
            : <Login onLogin={() => setIsAdminLoggedIn(true)} />
        } />
        <Route path="/*" element={
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
