
import React from 'react';
import { Mail, Phone, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "unreal.shubhu@gmail.com",
      href: "mailto:unreal.shubhu@gmail.com"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Phone",
      value: "+91 90765 33088",
      href: "tel:+919076533088"
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/shubhash-n/"
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      label: "Instagram",
      value: "@unrealshubhu",
      href: "https://www.instagram.com/unrealshubhu/"
    }
  ];

  const portfolioLinks = [
    {
      label: "ArtStation Portfolio",
      href: "https://www.artstation.com/shubhashn4"
    },
    {
      label: "Portfolio Drive Folder",
      href: "#"
    }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Skills', href: '/skills' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Shubhash Nath Thakur</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Technical Artist & Level Designer specializing in Unreal Engine, 
              shader development, and procedural generation. Bridging art and technology 
              through innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/shubhash-n/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/unrealshubhu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.artstation.com/shubhashn4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-2">
              {portfolioLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a 
                    href={contact.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-start"
                  >
                    <span className="mr-3 mt-1">{contact.icon}</span>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div>{contact.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Shubhash Nath Thakur. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Technical Artist & Level Designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
