
import React from 'react';
import { ArrowRight, ChevronDown, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Home = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Artistry",
      description: "Advanced shader development and rendering optimization"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Level Design",
      description: "Immersive environments with optimal performance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Tool Development",
      description: "Custom pipeline solutions and automation"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Image */}
              <div className="relative inline-block">
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                    SNT
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="space-y-4 text-center lg:text-left">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight">
                  Shubhash Nath Thakur
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 font-light">
                  Technical Artist & Level Designer
                </p>
                <p className="text-lg text-blue-600 font-medium">
                  Bridging Art & Technology through Unreal Engine
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/portfolio">
                    View Portfolio
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-8">
              Crafting Digital Experiences
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              I specialize in technical artistry and level design, with deep expertise in Unreal Engine 5.5+, 
              shader development, and procedural generation. My passion lies in bridging the gap between 
              creative vision and technical implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-light text-blue-600">5.5+</div>
              <div className="text-gray-600">Unreal Engine Expertise</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-blue-600">2022</div>
              <div className="text-gray-600">Game Design Graduate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-blue-600">Epic</div>
              <div className="text-gray-600">Games Challenge Participant</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
