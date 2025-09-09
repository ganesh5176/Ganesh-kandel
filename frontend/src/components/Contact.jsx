import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-xl mb-4">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a 
                      href={`mailto:${data.email}`}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <a 
                      href={`tel:${data.phone}`}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {data.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-slate-300">{data.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Availability</h4>
                    <p className="text-slate-300">{data.availability}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Let's Connect</h3>
                <p className="text-slate-300 mb-4">
                  Whether you're looking for a collaborator on a project, need help with development work, 
                  or just want to discuss the latest in tech and cybersecurity, I'd love to hear from you.
                </p>
                <div className="space-y-2 text-slate-400">
                  <p>• Currently seeking part-time opportunities</p>
                  <p>• Open to freelance projects</p>
                  <p>• Available for consultation</p>
                  <p>• Happy to mentor fellow students</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-700 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-600 border-slate-500 text-white placeholder-slate-400 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-600 border-slate-500 text-white placeholder-slate-400 focus:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-600 border-slate-500 text-white placeholder-slate-400 focus:border-blue-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-slate-600 border-slate-500 text-white placeholder-slate-400 focus:border-blue-500 resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-all duration-200 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;