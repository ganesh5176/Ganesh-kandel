import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ganesh Kandel</h3>
            <p className="text-slate-400 mb-4">
              Computer Science Student & Aspiring Cybersecurity Professional
            </p>
            <p className="text-slate-500 text-sm">
              Based in Belfast, Northern Ireland
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/ganeshkandel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ganeshkandel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ganeshkandel1012@gmail.com"
                className="text-slate-400 hover:text-red-400 transition-colors duration-200 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              Available for part-time opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-500 text-sm">
              <span>© {currentYear} Ganesh Kandel. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-slate-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;