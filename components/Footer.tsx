
import React from 'react';
import { Instagram, Twitter, Youtube, Mail, Dumbbell } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#CBFF00] flex items-center justify-center">
                <Dumbbell size={18} className="text-black" />
              </div>
              <span className="text-xl font-oswald font-bold tracking-tighter uppercase">Power<span className="text-[#CBFF00]">On</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Excellence in human performance. We build machines, not just muscles.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#CBFF00] hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#CBFF00] transition-colors">Our Programs</a></li>
              <li><a href="#" className="hover:text-[#CBFF00] transition-colors">Client Results</a></li>
              <li><a href="#" className="hover:text-[#CBFF00] transition-colors">Coaching Team</a></li>
              <li><a href="#" className="hover:text-[#CBFF00] transition-colors">Member Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#CBFF00] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#CBFF00] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#CBFF00] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#CBFF00] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Get weekly performance tips straight to your inbox.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#CBFF00] flex-grow" />
              <button className="bg-[#CBFF00] text-black font-bold uppercase text-[10px] px-4 tracking-widest">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} PowerOn Elite Performance Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
