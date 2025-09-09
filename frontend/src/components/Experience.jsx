import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Practical experience gained through various roles in hospitality and project-based work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-600"></div>
            
            <div className="space-y-12">
              {data.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-800"></div>
                  
                  <div className="ml-12 md:ml-20">
                    <Card className="bg-slate-700 border-slate-600 hover:bg-slate-650 transition-colors duration-200">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <CardTitle className="text-xl text-white mb-2 md:mb-0">
                            {experience.title}
                          </CardTitle>
                          <Badge variant="outline" className="border-blue-500 text-blue-400 w-fit">
                            {experience.type}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-slate-300">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-400">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {experience.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-slate-300">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills developed section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Skills Developed Through Experience</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Customer Service Excellence',
              'Team Leadership',
              'Problem Solving',
              'Cash Handling',
              'Inventory Management',
              'Health & Safety Compliance',
              'Cross-functional Collaboration',
              'Project Management',
              'Presentation Skills',
              'Creative Problem Solving'
            ].map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-slate-600 text-slate-200 hover:bg-blue-600 hover:text-white transition-colors duration-200 py-2 px-4"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;