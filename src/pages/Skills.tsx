
import React from 'react';
import { Code, Palette, Cpu, Wrench, Camera, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Unreal Engine",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
      skills: [
        "Unreal Engine 5.5+",
        "Blueprint Visual Scripting",
        "Level Design & World Building",
        "Performance Optimization",
        "Lighting & Rendering Systems",
        "Material Editor & Shader Development"
      ]
    },
    {
      title: "Technical Art",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      skills: [
        "HLSL Shader Programming",
        "Procedural Generation",
        "Asset Optimization",
        "Rendering Pipeline Development",
        "Custom Tool Creation",
        "Technical Documentation"
      ]
    },
    {
      title: "Performance & Optimization",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
      skills: [
        "Performance Profiling",
        "LOD Systems Implementation",
        "Occlusion Culling Strategies",
        "Memory Management",
        "Frame Rate Optimization",
        "Platform-Specific Optimization"
      ]
    },
    {
      title: "Tools & Scripting",
      icon: <Wrench className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600",
      skills: [
        "Python Scripting",
        "Git Version Control",
        "Perforce",
        "Maya/Blender Integration",
        "Custom Pipeline Tools",
        "Automation Scripts"
      ]
    },
    {
      title: "Design & Media",
      icon: <Camera className="w-6 h-6" />,
      color: "bg-pink-100 text-pink-600",
      skills: [
        "UI/UX Design Principles",
        "Adobe Creative Suite",
        "Video Editing & VFX",
        "3D Modeling Fundamentals",
        "Motion Graphics",
        "Brand Design"
      ]
    },
    {
      title: "Collaboration",
      icon: <Users className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-600",
      skills: [
        "Team Leadership",
        "Mentoring & Training",
        "Cross-Functional Communication",
        "Agile Development",
        "Code Review & Documentation",
        "Open Source Contribution"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive toolkit spanning technical artistry, engine development, 
            and creative problem-solving across the entire game development pipeline.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className={`rounded-lg p-3 ${category.color} mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start text-gray-600">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Proficiencies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
            Technical Proficiencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Unreal Engine</span>
                  <span className="text-blue-600 font-semibold">Expert</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Shader Development</span>
                  <span className="text-blue-600 font-semibold">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Level Design</span>
                  <span className="text-blue-600 font-semibold">Expert</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Performance Optimization</span>
                  <span className="text-blue-600 font-semibold">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Python Scripting</span>
                  <span className="text-blue-600 font-semibold">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Team Leadership</span>
                  <span className="text-blue-600 font-semibold">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
