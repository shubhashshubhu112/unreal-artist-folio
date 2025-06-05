
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
    const foundPost = posts.find(p => p.slug === slug);
    setPost(foundPost);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Navigation */}
            <div className="mb-8">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </div>

            {/* Post Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-light text-gray-900 mb-6">{post.title}</h1>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span className="mx-3">•</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span key={index} className="flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Button */}
              <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                      <Calendar className="w-8 h-8" />
                    </div>
                    <p className="text-sm">Featured Image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  {post.excerpt}
                </p>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {post.content}
                </div>
              </div>
            </div>

            {/* Video Section */}
            {post.videoUrl && (
              <div className="mb-12">
                <h2 className="text-2xl font-light text-gray-900 mb-6">Video Content</h2>
                <div className="relative rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-gray-100 to-gray-200 aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                        <Play className="w-8 h-8" />
                      </div>
                      <p className="text-sm">Video Player</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Related Posts */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-light text-gray-900 mb-8">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map((item) => (
                  <div key={item} className="group cursor-pointer">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Related Post {item}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Related Blog Post Title {item}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Brief excerpt of the related blog post...
                    </p>
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

export default BlogPost;
