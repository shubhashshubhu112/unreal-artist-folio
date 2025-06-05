
import React from 'react';
import { Star, Quote } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead Game Designer",
      company: "Indie Studio X",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Shubhash's technical artistry and attention to detail transformed our project. His shader work and optimization techniques helped us achieve the visual quality we dreamed of while maintaining 60fps performance."
    },
    {
      name: "Marcus Rodriguez",
      role: "Art Director",
      company: "Creative Games Corp",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Working with Shubhash was a game-changer. His ability to bridge the gap between artistic vision and technical implementation is unmatched. The custom tools he developed streamlined our entire pipeline."
    },
    {
      name: "Emily Watson",
      role: "VR Developer",
      company: "VR Innovations",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Shubhash's expertise in VR optimization was crucial for our project. He not only solved our performance issues but also mentored our team on best practices. His knowledge sharing approach is invaluable."
    },
    {
      name: "Alex Kim",
      role: "Technical Director",
      company: "AAA Studio",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "The level design work Shubhash delivered exceeded our expectations. His understanding of both technical constraints and creative possibilities resulted in environments that were both beautiful and optimized."
    },
    {
      name: "Diana Patel",
      role: "Freelance Developer",
      company: "Independent",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "As a mentee, I can't thank Shubhash enough for his guidance. His teaching approach and willingness to share knowledge helped me transition from junior to senior technical artist role."
    },
    {
      name: "James Thompson",
      role: "Studio Manager",
      company: "Startup Games",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Shubhash's contribution to our Epic Games challenge submission was instrumental. His technical expertise and creative problem-solving helped us deliver a project we're truly proud of."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Feedback from clients, collaborators, and mentees who have experienced 
              the impact of technical artistry and dedicated expertise firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Testimonials Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Quote className="w-8 h-8 text-blue-600 mr-3" />
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                          <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <ContactForm />
                
                {/* Stats Card */}
                <Card className="mt-8 bg-white/80 backdrop-blur-sm shadow-lg border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Satisfaction</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-light text-blue-600">98%</div>
                        <div className="text-sm text-gray-600">Satisfaction Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-blue-600">25+</div>
                        <div className="text-sm text-gray-600">Projects Completed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-blue-600">15+</div>
                        <div className="text-sm text-gray-600">Mentees Guided</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-blue-600">5★</div>
                        <div className="text-sm text-gray-600">Average Rating</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
