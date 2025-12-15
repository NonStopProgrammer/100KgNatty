
import React from 'react';
import { Instagram, Youtube, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-neutral-950 text-neutral-400 border-t border-neutral-800 pt-20 pb-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-sport font-black italic text-4xl tracking-tight text-white mb-6 group cursor-pointer">
              <span className="text-lime-500 group-hover:scale-110 transition-transform inline-block">100KG</span>
              <span className="group-hover:text-lime-400 transition-colors">NATTY</span>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-8 max-w-md text-base">
              Elite personal training and performance coaching for natural athletes. We don't just build bodies, we forge champions through dedication, science, and iron.
            </p>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-900 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 text-neutral-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-pink-500/50 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-900 hover:bg-blue-500 text-neutral-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-900 hover:bg-red-600 text-neutral-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-red-600/50 hover:scale-110"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-lime-500"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Programs', href: '#programs' },
                { label: 'Transformations', href: '#transformations' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-lime-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-lime-500 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-lime-500"></span>
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-lime-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-sm">
                  <p className="text-neutral-300 font-medium">Iron District Gym</p>
                  <p className="text-neutral-500">Chennai, TN 600001</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-lime-500 shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:coach@100kgnatty.com"
                  className="text-sm text-neutral-400 hover:text-lime-400 transition-colors"
                >
                  coach@100kgnatty.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-lime-500 shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-neutral-400 hover:text-lime-400 transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
              © 2025 100KG NATTY. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-neutral-500">
              <a href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</a>
              <span className="w-px h-4 bg-neutral-800"></span>
              <a href="#" className="hover:text-lime-400 transition-colors">Terms of Service</a>
              <span className="w-px h-4 bg-neutral-800"></span>
              <span className="text-neutral-600">Built with 💪 & Code</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
