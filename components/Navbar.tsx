
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate: (sectionId?: string) => void;
  isHome: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, isHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Programs', href: 'programs' },
    { name: 'Results', href: 'transformations' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (sectionId === 'home') {
      onNavigate();
    } else {
      onNavigate(sectionId);
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-0' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">

            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex-shrink-0 group relative z-50 cursor-pointer">
              <Logo size="md" className="group-hover:scale-105 transition-transform duration-300" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-5 py-2 text-sm font-bold uppercase italic tracking-wide text-white hover:text-lime-400 skew-x-[-12deg] transition-all cursor-pointer group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative block skew-x-[12deg]">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="group relative px-6 py-2 ml-4 cursor-pointer overflow-hidden bg-lime-500 skew-x-[-12deg]"
              >
                <div className="absolute inset-0 w-full h-full bg-white/30 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12"></div>
                <span className="relative block skew-x-[12deg] text-sm font-bold uppercase italic tracking-wide text-black flex items-center gap-1">
                  Apply Now
                </span>
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-5">
              <button className="relative group" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? (
                  <X className="w-7 h-7 text-white animate-spin" />
                ) : (
                  <Menu className="w-7 h-7 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-sport font-bold italic text-white hover:text-lime-400 uppercase tracking-wider pl-4 border-l-2 border-transparent hover:border-lime-500 transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-lg font-sport font-black italic text-lime-500 uppercase tracking-wider pl-4 border-l-2 border-lime-500"
            >
              Start Training
            </a>
          </div>
        )}
      </header>
    </>
  );
};
