
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, SunMedium, Moon } from 'lucide-react';
import StarBorder from './StarBorder';

interface NavbarProps {
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'dark', onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Results', href: '#results' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? (theme === 'light' ? 'bg-white/90 shadow-sm py-4' : 'bg-black/80 backdrop-blur-md py-4') : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#CBFF00] flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
            <Dumbbell size={24} className="text-black" />
          </div>
          <span className="text-2xl font-oswald font-bold tracking-tighter uppercase">100KG<span className="text-[#CBFF00]">Natty</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-[#CBFF00] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <SunMedium size={16} />}
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-[#CBFF00] transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <StarBorder as="button" thickness={2} speed="3s" className="rounded-sm group overflow-hidden">
            <div className="px-6 py-2 bg-black text-[#CBFF00] font-bold uppercase text-xs tracking-widest group-hover:bg-[#CBFF00] group-hover:text-black transition-all">
              Join Now
            </div>
          </StarBorder>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-4 md:hidden"
          >
            <button
              onClick={() => { onToggleTheme?.(); }}
              className="w-full py-3 mb-2 flex items-center justify-center gap-2 bg-white/5 text-white uppercase tracking-widest text-sm border border-white/10"
            >
              {theme === 'light' ? <Moon size={16} /> : <SunMedium size={16} />}
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 text-center text-lg font-oswald uppercase tracking-widest text-white hover:text-[#CBFF00]"
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-center mt-4">
              <StarBorder as="button" thickness={2} speed="3s" className="rounded-sm w-full max-w-[200px]">
                <div className="py-3 bg-black text-[#CBFF00] font-bold uppercase text-sm tracking-widest w-full">
                  Join Now
                </div>
              </StarBorder>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
