import React, { useState, useEffect } from 'react';

interface ScrollProgressIndicatorProps {
  theme: 'dark' | 'light';
}

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'transformations', label: 'Results' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
];

export const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({ theme }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      // Show progress bar after scrolling past hero
      setIsVisible(window.scrollY > 100);

      // Determine active section
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      {/* Progress Bar Container */}
      <div className={`relative h-1 ${isDark ? 'bg-neutral-900/80' : 'bg-neutral-200/80'} backdrop-blur-sm`}>
        {/* Gradient Progress Fill */}
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-lime-600 via-lime-500 to-lime-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Glow Effect */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-4 bg-lime-400 blur-md opacity-80" />
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
        
        {/* Progress Percentage Tooltip */}
        <div 
          className={`absolute -bottom-8 transform -translate-x-1/2 px-2 py-0.5 rounded text-xs font-bold transition-opacity duration-300 ${
            isVisible && scrollProgress > 5 ? 'opacity-100' : 'opacity-0'
          } ${isDark ? 'bg-neutral-900 text-lime-400' : 'bg-white text-lime-600 shadow-sm'}`}
          style={{ left: `${scrollProgress}%` }}
        >
          {Math.round(scrollProgress)}%
        </div>
      </div>

      {/* Section Markers */}
      <div className={`flex justify-center gap-1 sm:gap-2 py-2 ${
        isDark ? 'bg-black/90' : 'bg-white/90'
      } backdrop-blur-sm border-b ${isDark ? 'border-neutral-800/50' : 'border-neutral-200/50'}`}>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            className={`group relative px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded ${
              activeSection === section.id
                ? 'text-lime-500'
                : isDark 
                  ? 'text-neutral-500 hover:text-neutral-300' 
                  : 'text-neutral-400 hover:text-neutral-600'
            }`}
          >
            {section.label}
            {/* Active Indicator Dot */}
            <span className={`absolute left-1/2 -bottom-1 w-1 h-1 rounded-full bg-lime-500 transform -translate-x-1/2 transition-all duration-300 ${
              activeSection === section.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`} />
            {/* Hover Underline */}
            <span className={`absolute left-0 right-0 -bottom-0.5 h-0.5 bg-lime-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
              activeSection === section.id ? 'scale-x-100' : ''
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
};
