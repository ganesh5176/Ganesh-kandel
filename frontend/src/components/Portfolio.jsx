import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { mockData } from './mock';

const Portfolio = () => {
  const [data, setData] = useState(mockData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Experience data={data.experience} />
        <Projects data={data.projects} />
        <Contact data={data.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;