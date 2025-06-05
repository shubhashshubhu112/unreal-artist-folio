
import React from 'react';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: "Technical Artist | Level Designer",
      company: "MergeXR Studios",
      period: "2023 - Present",
      description: [
        "Developed complex shader systems and procedural generation tools",
        "Optimized rendering pipelines for VR/AR applications",
        "Created level design workflows and documentation standards",
        "Mentored junior artists in technical implementation"
      ]
    },
    {
      title: "Video Editor",
      company: "Nalli Silk Sarees Pvt Ltd",
      period: "2022 - 2023",
      description: [
        "Produced high-quality marketing and promotional content",
        "Implemented efficient video production workflows",
        "Collaborated with design teams on brand consistency",
        "Managed post-production timelines and deliverables"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Passionate about creating immersive digital experiences through 
            the intersection of art and technology.
          </p>
        </div>
      </section>

      {/* Personal Bio */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              My journey in technical artistry began with a fascination for how creative vision 
              translates into interactive experiences. With a strong foundation in Unreal Engine 
              and a deep understanding of both artistic principles and technical constraints, 
              I specialize in creating tools, shaders, and workflows that empower creative teams.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I believe in the power of mentorship and open-source collaboration. Whether it's 
              contributing to community projects, sharing knowledge through tutorials, or helping 
              fellow developers overcome technical challenges, I'm committed to fostering growth 
              within the gamedev community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not crafting shaders or designing levels, you'll find me exploring new 
              techniques in procedural generation, contributing to open-source projects, or 
              mentoring aspiring technical artists in their journey to bridge art and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Education</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full p-3">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Game Design and Development
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  Unreal Engine Specialization
                </p>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Arena Animation, Varanasi</span>
                  <span className="mx-3">•</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2022</span>
                </div>
                <p className="text-gray-600">
                  Comprehensive program covering game design principles, Unreal Engine development, 
                  3D modeling, animation, and technical art fundamentals with a focus on industry-standard 
                  workflows and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
