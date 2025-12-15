
import React from 'react';
import { Instagram, Youtube, Twitter, MapPin, Mail, Dumbbell } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1">
          <div className="flex items-center gap-2 font-sport font-black italic text-3xl tracking-tight text-white mb-6">
            <span className="text-lime-500">100KG</span><span>NATTY</span>
          </div>
          <p className="text-sm leading-relaxed mb-6 font-medium text-neutral-400">
            Elite personal training and performance coaching. We don't just build bodies, we forge character through iron.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-900 hover:bg-lime-500 hover:text-black transition-all"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-900 hover:bg-lime-500 hover:text-black transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-900 hover:bg-lime-500 hover:text-black transition-all"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6">Programs</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#" className="hover:text-lime-400 transition-colors">Hypertrophy</a></li>
            <li><a href="#" className="hover:text-lime-400 transition-colors">Strength</a></li>
            <li><a href="#" className="hover:text-lime-400 transition-colors">Fat Loss</a></li>
            <li><a href="#" className="hover:text-lime-400 transition-colors">Contest Prep</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6">Clients</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#" className="hover:text-lime-400 transition-colors">Login</a></li>
            <li><a href="#" className="hover:text-lime-400 transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-lime-400 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-lime-400 transition-colors">Apply Now</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-lime-500 shrink-0" />
              <span>Iron District Gym<br />Chennai, TN 600001</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-lime-500 shrink-0" />
              <span>coach@100kgnatty.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">© 2025 100KG NATTY. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-3 opacity-50 text-neutral-500">
           <Dumbbell className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};
