import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Plus } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
    setPosts(storedPosts);
  }, []);

  const defaultPosts = [
    {
      title: "Advanced Shader Techniques in Unreal Engine 5.5",
      excerpt: "Exploring the latest shader development techniques and optimization strategies for modern real-time rendering.",
      date: "2024-05-15",
      readTime: "8 min read",
      tags: ["Shaders", "Unreal Engine", "Optimization"],
      slug: "advanced-shader-techniques-unreal-engine-5-5",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Procedural Level Generation: Best Practices",
      excerpt: "A comprehensive guide to implementing efficient procedural generation systems for level design.",
      date: "2024-04-28",
      readTime: "12 min read",
      tags: ["Procedural Generation", "Level Design", "Blueprints"],
      slug: "procedural-level-generation-best-practices",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Performance Optimization for VR Applications",
      excerpt: "Essential techniques for maintaining 90fps performance in VR environments using Unreal Engine.",
      date: "2024-04-10",
      readTime: "10 min read",
      tags: ["VR", "Performance", "Optimization"],
      slug: "performance-optimization-vr-applications",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Building Custom Tools with Python and Unreal",
      excerpt: "Step-by-step guide to creating custom pipeline tools that streamline your development workflow.",
      date: "2024-03-22",
      readTime: "15 min read",
      tags: ["Python", "Tools", "Pipeline"],
      slug: "building-custom-tools-python-unreal",
      image: "/api/placeholder/400/200"
    },
    {
      title: "The Art of Technical Art: Bridging Creativity and Code",
      excerpt: "Insights into the technical artist role and how to effectively communicate between art and engineering teams.",
      date: "2024-03-05",
      readTime: "6 min read",
      tags: ["Technical Art", "Career", "Collaboration"],
      slug: "the-art-technical-art-bridging-creativity-code",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Epic Games Challenge: Lessons Learned",
      excerpt: "Reflections on participating in Epic Games' level design challenge and key takeaways for aspiring developers.",
      date: "2024-02-18",
      readTime: "9 min read",
      tags: ["Epic Games", "Level Design", "Learning"],
      slug: "epic-games-challenge-lessons-learned",
      image: "/api/placeholder/400/200"
    }
  ];

  const allPosts = [...posts, ...defaultPosts];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div className="text-center flex-1">
              <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
                Blog & Insights
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Technical insights, tutorials, and thoughts on game development, 
                technical artistry, and the latest in Unreal Engine development.
              </p>
            </div>
            <Link 
              to="/admin/blog/new"
              className="ml-8 inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {allPosts.map((post, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <Link to={`/blog/${post.slug}`}>
                          <div className="h-48 md:h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-l-lg flex items-center justify-center hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer">
                            <div className="text-center text-gray-500">
                              <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                                <Calendar className="w-8 h-8" />
                              </div>
                              <p className="text-sm">Article Preview</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <Link to={`/blog/${post.slug}`}>
                            <CardTitle className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                              {post.title}
                            </CardTitle>
                          </Link>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <span className="mx-3">•</span>
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{post.readTime}</span>
                          </div>
                          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link to={`/blog/${post.slug}`}>
                            <Button variant="outline" className="group">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </div>
                    </div>
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

export default Blog;
