
import React from 'react';
import { Code, Palette, Cog, Lightbulb, Users, Zap } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Art Development",
      description: "Custom shader development, material creation, and rendering pipeline optimization for Unreal Engine projects.",
      features: ["HLSL Shader Programming", "Material Editor Expertise", "Rendering Optimization", "Custom Tool Creation"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Level Design & World Building",
      description: "Immersive environment design with focus on gameplay flow, visual storytelling, and performance optimization.",
      features: ["Environment Design", "Lighting & Atmosphere", "Performance Optimization", "Gameplay Flow Design"]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Pipeline & Tool Development",
      description: "Custom workflow solutions and automation tools to streamline art production and development processes.",
      features: ["Python Scripting", "Asset Pipeline Tools", "Automation Solutions", "Documentation & Training"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Procedural Generation",
      description: "Advanced procedural systems for dynamic content creation and efficient asset generation workflows.",
      features: ["Procedural Modeling", "Dynamic Systems", "Asset Variation", "Performance Solutions"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentoring & Training",
      description: "Knowledge sharing through one-on-one mentoring, team training, and educational content creation.",
      features: ["Individual Mentoring", "Team Workshops", "Documentation", "Best Practices"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Comprehensive optimization strategies for VR/AR applications and real-time rendering systems.",
      features: ["Frame Rate Optimization", "Memory Management", "LOD Implementation", "Platform Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
              Services & Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized technical artistry and development services for game studios, 
              independent developers, and creative teams working with Unreal Engine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Services Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 rounded-lg p-3 text-blue-600 mr-4">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-900">
                          {service.title}
                        </CardTitle>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
