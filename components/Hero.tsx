import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
      title1: 'Forge Your',
      title2: 'Legacy',
      subtitle: 'Elite personal training designed to shatter your limits. Scientifically backed programming for hypertrophy and strength.',
      accent: 'text-lime-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
      title1: 'Defy The',
      title2: 'Odds',
      subtitle: 'Transform your physique with high-intensity coaching. Discipline is the bridge between goals and accomplishment.',
      accent: 'text-cyan-500',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative h-[650px] sm:h-[800px] w-full bg-black overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
            index === activeSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-20">
            <div className="max-w-5xl pt-10">
              <Reveal delay={0.1}>
                <div className={`inline-flex items-center gap-2 mb-4 transition-all duration-700`}>
                  <span className="bg-lime-500 text-black text-xs font-black px-3 py-1 -skew-x-12 uppercase tracking-wider shadow-[0_0_15px_rgba(132,204,22,0.6)] animate-pulse-slow">
                    <span className="block skew-x-12">Accepting New Clients</span>
                  </span>
                </div>
              </Reveal>
              
              <div className="overflow-hidden pb-4">
                <h1 className={`font-sport font-black italic text-6xl sm:text-8xl lg:text-9xl leading-none text-white mb-6 uppercase tracking-tighter drop-shadow-lg transition-all duration-700 delay-200 transform ${index === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                  {slide.title1} <br /> 
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-600 animate-shine bg-[length:200%_100%]`}>{slide.title2}</span>
                </h1>
              </div>
              
              <div className={`transition-all duration-700 delay-300 ${index === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                 <p className="text-neutral-300 text-lg sm:text-xl font-medium max-w-lg mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
              
              <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${index === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <button 
                  onClick={() => handleScroll('programs')} 
                  className="cursor-pointer group relative px-8 py-4 bg-lime-500 hover:bg-lime-400 text-black font-black uppercase italic tracking-wider skew-x-[-12deg] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/40 w-full h-full transform skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                  <span className="block skew-x-[12deg] flex items-center gap-2 relative z-10">
                    Start Training <ArrowRight className="w-5 h-5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button 
                  onClick={() => handleScroll('about')} 
                  className="cursor-pointer group relative px-8 py-4 bg-transparent border-2 border-white/20 hover:border-lime-400 hover:bg-white/5 text-white font-bold uppercase italic tracking-wider skew-x-[-12deg] transition-all overflow-hidden"
                >
                   <div className="absolute inset-0 bg-white/10 w-full h-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="block skew-x-[12deg] relative z-10">About Coach</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Decorative */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
    </div>
  );
};