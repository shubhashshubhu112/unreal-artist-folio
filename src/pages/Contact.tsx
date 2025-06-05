
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "unreal.shubhu@gmail.com",
      href: "mailto:unreal.shubhu@gmail.com",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 90765 33088",
      href: "tel:+919076533088",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "shubhash-n",
      href: "https://www.linkedin.com/in/shubhash-n/",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@unrealshubhu",
      href: "https://www.instagram.com/unrealshubhu/",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to collaborate on your next project or discuss opportunities in 
            technical artistry and level design? I'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're looking for a technical artist for your next project, 
                  want to collaborate on open-source initiatives, or simply want to 
                  discuss the latest in Unreal Engine development, I'm always excited 
                  to connect with fellow creators and industry professionals.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                  >
                    <div className={`rounded-lg p-3 ${method.color} mr-4`}>
                      {method.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{method.label}</div>
                      <div className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                        {method.value}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-600 transition-colors" />
                  </a>
                ))}
              </div>

              {/* Additional Links */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Portfolio & Social Links
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Portfolio Drive
                  </a>
                  <a
                    href="https://www.artstation.com/shubhashn4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    ArtStation
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-light text-gray-900 mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell me about your project, collaboration idea, or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
