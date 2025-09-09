import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            {data.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            {data.title}
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href={data.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href={data.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${data.social.email}`}
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-blue-400 transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;