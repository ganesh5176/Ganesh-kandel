import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, Users, Globe } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHx3b3Jrc3BhY2V8ZW58MHx8fHwxNzU3NDM3MDQxfDA&ixlib=rb-4.1.0&q=85"
          alt="Professional tech workspace"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-slate-800/90"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-slate-700/80 backdrop-blur-sm border-slate-600">
              <CardContent className="p-8">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I'm studying computer science.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <GraduationCap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white">Education</h4>
                    <p className="text-sm text-slate-400">BSc Computer Science</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white">Expected Grade</h4>
                    <p className="text-sm text-slate-400">A*A*A in Cyber Security</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white">Experience</h4>
                    <p className="text-sm text-slate-400">2+ Years Customer Service</p>
                  </div>
                  <div className="text-center">
                    <Globe className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white">Languages</h4>
                    <p className="text-sm text-slate-400">English, Hindi, Nepali</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Key Highlights</h3>
            <div className="space-y-4">
              {data.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-slate-300 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Personal Interests</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-slate-600/80 backdrop-blur-sm text-slate-200">
                  Cybersecurity
                </Badge>
                <Badge variant="secondary" className="bg-slate-600/80 backdrop-blur-sm text-slate-200">
                  AI & Machine Learning
                </Badge>
                <Badge variant="secondary" className="bg-slate-600/80 backdrop-blur-sm text-slate-200">
                  Fitness & Gym
                </Badge>
                <Badge variant="secondary" className="bg-slate-600/80 backdrop-blur-sm text-slate-200">
                  Volunteer Work
                </Badge>
                <Badge variant="secondary" className="bg-slate-600/80 backdrop-blur-sm text-slate-200">
                  Mental Health Advocacy
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;