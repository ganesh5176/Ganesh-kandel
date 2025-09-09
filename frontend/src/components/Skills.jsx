import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Code, Users } from 'lucide-react';

const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A combination of technical proficiency and strong interpersonal skills gained through education and practical experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-white">
                <Code className="w-6 h-6 text-blue-400" />
                <span>Technical Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {data.technical.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-slate-400 text-sm">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-slate-700"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-white">
                <Users className="w-6 h-6 text-green-400" />
                <span>Soft Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {data.soft.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors duration-200 py-2 px-4 text-center"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-slate-700 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-3">Key Strengths</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Strong communication skills developed through customer service roles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Leadership experience as Student Council Member</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ability to work under pressure in hospitality environments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cross-cultural communication in multiple languages</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;