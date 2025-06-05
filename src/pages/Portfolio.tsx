
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Play, Plus } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
    setProjects(storedProjects);
  }, []);

  const defaultProjects = [
    {
      title: "Project Titan",
      subtitle: "Epic Games Level Design Challenge",
      description: "A collaborative level design project showcasing advanced Unreal Engine techniques, procedural generation, and optimization strategies. Received positive feedback from Epic Games reviewers for innovative design approach and technical execution.",
      tags: ["Unreal Engine 5", "Level Design", "Procedural Generation", "Optimization"],
      image: "/api/placeholder/600/400",
      slug: "project-titan",
      links: [
        { type: "external", url: "#", label: "View Project" },
        { type: "video", url: "#", label: "Demo Video" }
      ]
    },
    {
      title: "Shader Development Toolkit",
      subtitle: "Custom Unreal Engine Tools",
      description: "A comprehensive collection of custom shaders and material functions designed to streamline the art production pipeline. Includes procedural texturing tools, performance-optimized effects, and artist-friendly parameter interfaces.",
      tags: ["HLSL", "Material Editor", "Tool Development", "Pipeline"],
      image: "/api/placeholder/600/400",
      links: [
        { type: "github", url: "#", label: "Source Code" },
        { type: "external", url: "#", label: "Documentation" }
      ]
    },
    {
      title: "VR Environment Optimization",
      subtitle: "Performance-First Level Design",
      description: "Optimization-focused level design for VR applications at MergeXR Studios. Implemented LOD systems, occlusion culling strategies, and custom rendering solutions to maintain 90fps performance across various VR platforms.",
      tags: ["VR", "Performance", "LOD Systems", "Rendering"],
      image: "/api/placeholder/600/400",
      links: [
        { type: "external", url: "#", label: "Case Study" }
      ]
    }
  ];

  const allProjects = [...projects, ...defaultProjects];

  const getIcon = (type) => {
    switch (type) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'video':
        return <Play className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
                Portfolio
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A showcase of technical artistry, level design, and tool development 
                projects that demonstrate the intersection of creativity and technology.
              </p>
            </div>
            <Link 
              to="/admin/portfolio/new"
              className="ml-8 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-16">
                {allProjects.map((project, index) => (
                  <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                    {/* Project Image */}
                    <div className="flex-1">
                      <Link to={`/portfolio/${project.slug}`}>
                        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 aspect-video hover:shadow-xl transition-shadow cursor-pointer">
                          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                                <Play className="w-8 h-8" />
                              </div>
                              <p className="text-sm">Project Preview</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Project Details */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <Link to={`/portfolio/${project.slug}`}>
                          <h3 className="text-3xl font-light text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                            {project.title}
                          </h3>
                        </Link>
                        <p className="text-lg text-blue-600 font-medium mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3">
                        <Link
                          to={`/portfolio/${project.slug}`}
                          className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors group"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Link>
                        {project.links && project.links.slice(0, 2).map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors group"
                          >
                            {getIcon(link.type)}
                            <span className="ml-2">{link.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
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

      {/* Portfolio Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8">
            View More Work
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore my complete portfolio and connect with me on various platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Portfolio Drive Folder
            </a>
            <a
              href="https://www.artstation.com/shubhashn4"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              ArtStation Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
