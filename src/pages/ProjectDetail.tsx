
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Play, Calendar, Tag } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
    const foundProject = projects.find(p => p.slug === slug);
    setProject(foundProject);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-blue-600 hover:text-blue-700">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Navigation */}
            <div className="mb-8">
              <Link 
                to="/portfolio" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </div>

            {/* Project Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-light text-gray-900 mb-4">{project.title}</h1>
              <p className="text-xl text-blue-600 font-medium mb-6">{project.subtitle}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(project.createdAt).toLocaleDateString()}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span key={index} className="flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Image/Video */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                      <Play className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Project Media</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-light text-gray-900 mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Project Links */}
            {project.links && project.links.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-light text-gray-900 mb-6">Project Links</h2>
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                      {getIcon(link.type)}
                      <span className="ml-2">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Images/Media */}
            <div className="mb-12">
              <h2 className="text-2xl font-light text-gray-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="relative rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-gray-100 to-gray-200 aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                          <Play className="w-6 h-6" />
                        </div>
                        <p className="text-xs">Media {item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
    </div>
  );
};

export default ProjectDetail;
