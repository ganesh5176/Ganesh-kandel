import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Code, CheckCircle } from 'lucide-react';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating problem-solving skills and programming expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {data.map((project, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Code className="w-6 h-6 text-blue-400" />
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <Badge variant="outline" className="border-green-500 text-green-400">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-slate-700 text-slate-200 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-slate-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3 pt-4">
                    <Button
                      size="sm"
                      className="bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center mt-12">
          <div className="bg-slate-800 rounded-lg p-8 max-w-2xl mx-auto border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">More Projects Coming Soon</h3>
            <p className="text-slate-400 mb-6">
              I'm constantly working on new projects and expanding my portfolio. 
              Check back regularly or follow my GitHub for the latest updates.
            </p>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              onClick={() => window.open('https://github.com/ganeshkandel', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Follow on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;