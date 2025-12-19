
import React from 'react';
import { Instagram, Youtube, MapPin, Mail } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <footer className={`${isDark ? 'bg-gradient-to-b from-black to-neutral-950 text-neutral-400 border-neutral-800' : 'bg-gradient-to-b from-neutral-100 to-white text-neutral-600 border-neutral-200'} border-t pt-20 pb-8 relative overflow-hidden transition-colors duration-500`}>
      {/* Animated background */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent`}></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className={`flex items-center gap-2 font-sport font-black italic text-4xl tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'} mb-6 group cursor-pointer`}>
              <span className="text-lime-500 group-hover:scale-110 transition-transform inline-block">100KG</span>
              <span className="group-hover:text-lime-600 transition-colors">NATTY</span>
            </div>
            <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'} leading-relaxed mb-8 max-w-md text-base`}>
              Elite personal training and performance coaching for natural athletes. We don't just build bodies, we forge champions through dedication, science, and iron.
            </p>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className={`${isDark ? 'text-white' : 'text-neutral-900'} font-bold uppercase tracking-wider text-sm mb-4`}>Connect With Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/trainwitharavindh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-12 h-12 flex items-center justify-center rounded-xl ${isDark ? 'bg-neutral-900 text-neutral-400' : 'bg-white shadow-md text-neutral-600'} hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-pink-500/50 hover:scale-110`}
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="https://www.youtube.com/@aravindhanbusekar2528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-12 h-12 flex items-center justify-center rounded-xl ${isDark ? 'bg-neutral-900 text-neutral-400' : 'bg-white shadow-md text-neutral-600'} hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-red-600/50 hover:scale-110`}
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-neutral-900'} font-bold uppercase tracking-wider mb-6 text-sm flex items-center gap-2`}>
              <span className="w-8 h-px bg-lime-500"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home', icon: null },
                { label: 'About', href: '#about', icon: null },
                { label: 'Programs', href: '#programs', icon: null },
                { label: 'Transformations', href: '#transformations', icon: null },
                { label: 'Pricing', href: '#pricing', icon: null },
                { label: 'FAQ', href: '/faq', icon: null },
                { label: 'Blog', href: '/blog', icon: null },
                { label: 'Contact', href: '#contact', icon: null }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'} hover:text-lime-600 transition-colors text-sm font-medium flex items-center gap-2 group`}
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
            <h4 className={`${isDark ? 'text-white' : 'text-neutral-900'} font-bold uppercase tracking-wider mb-6 text-sm flex items-center gap-2`}>
              <span className="w-8 h-px bg-lime-500"></span>
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-lime-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-sm">
                  <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-800'} font-medium`}>Navalur</p>
                  <p className={`${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>Chennai, Tamilnadu</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-lime-500 shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:coach@100kgnatty.com"
                  className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'} hover:text-lime-600 transition-colors`}
                >
                  coach@100kgnatty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${isDark ? 'border-neutral-800/50' : 'border-black/5'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
              © 2025 100KG NATTY. All Rights Reserved.
            </p>
            <div className={`flex items-center gap-6 text-xs text-neutral-500`}>
              <a href="/privacy-policy" className="hover:text-lime-600 transition-colors">Privacy Policy</a>
              <span className={`w-px h-4 ${isDark ? 'bg-neutral-800' : 'bg-black/10'}`}></span>
              <a href="/terms-of-service" className="hover:text-lime-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
