
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            {/* Profile Image */}
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                  SNT
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors group"
              >
                View Portfolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-8">
            Crafting Digital Experiences
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            I specialize in technical artistry and level design, with deep expertise in Unreal Engine 5.5+, 
            shader development, and procedural generation. My passion lies in bridging the gap between 
            creative vision and technical implementation, developing tools and workflows that empower 
            artistic expression while maintaining optimal performance.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From Epic Games challenges to mentoring fellow developers, I'm committed to pushing the 
            boundaries of what's possible in real-time 3D experiences and contributing to the 
            open-source community.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
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
