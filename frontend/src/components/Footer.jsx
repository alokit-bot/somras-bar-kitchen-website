import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { contactInfo } from '../mockData';

export const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'About', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-black border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-amber-500 mb-2">SOMRAS</h2>
            <p className="text-xs text-amber-300/70 tracking-widest mb-4">BAR & KITCHEN</p>
            <p className="text-gray-400 leading-relaxed mb-6">
              HSR Layout's favorite bar & kitchen, where every night tells a story.
            </p>
            <div className="flex items-center gap-2 text-amber-400">
              <span className="text-2xl font-bold">{contactInfo.rating}★</span>
              <span className="text-gray-400 text-sm">({contactInfo.reviews}+ reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{contactInfo.hours}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Stay updated with our latest events and special offers
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-900/20 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SOMRAS BAR & KITCHEN. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Made with passion in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
};
