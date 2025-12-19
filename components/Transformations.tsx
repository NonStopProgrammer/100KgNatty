
import React, { useState, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface TransformationsProps {
  theme: 'dark' | 'light';
}

export const Transformations: React.FC<TransformationsProps> = ({ theme }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'dark';

  const transformations = [
    {
      name: "Arjun S.",
      program: "Hypertrophy",
      result: "+10kg Muscle",
      duration: "6 Months",
      quote: "Being a vegetarian, I thought building muscle was impossible. Coach's diet plan changed everything.",
      beforeImage: "/assets/images/transformations/transform_arjun_before_new_1765792584807.png",
      afterImage: "/assets/images/transformations/transform_arjun_after_new_1765792620925.png",
      stats: { before: "62kg", after: "72kg" },
      rating: 5
    },
    {
      name: "Priya V.",
      program: "Shred Protocol",
      result: "-15kg Fat",
      duration: "4 Months",
      quote: "The nutrition plan was sustainable and traditional. Lost weight without missing home food.",
      beforeImage: "/assets/images/transformations/priya_before.png",
      afterImage: "/assets/images/transformations/priya_after.png",
      stats: { before: "75kg", after: "60kg" },
      rating: 5
    },
    {
      name: "Rahul M.",
      program: "Powerlifting",
      result: "+80kg Total",
      duration: "8 Months",
      quote: "My deadlift went from 140kg to 220kg. The biomechanics feedback was absolute gold.",
      beforeImage: "/assets/images/transformations/rahul_before.png",
      afterImage: "/assets/images/transformations/rahul_after.png",
      stats: { before: "140kg DL", after: "220kg DL" },
      rating: 5
    },
    {
      name: "Vikram K.",
      program: "Hybrid Coaching",
      result: "+12kg Muscle",
      duration: "10 Months",
      quote: "The 1-on-1 coaching made all the difference. Form corrections and weekly check-ins kept me accountable.",
      beforeImage: "/assets/images/transformations/transform_vikram_before_1765794690429.png",
      afterImage: "/assets/images/transformations/transform_vikram_after_1765794720630.png",
      stats: { before: "68kg", after: "80kg" },
      rating: 5
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`py-24 ${isDark ? 'bg-black' : 'bg-white'} relative overflow-hidden transition-colors duration-500`}>
      {/* Animated background */}
      <div className={`absolute top-0 left-0 w-96 h-96 ${isDark ? 'bg-lime-500/5' : 'bg-lime-500/10'} rounded-full blur-3xl animate-pulse-slow`}></div>
      <div className={`absolute bottom-0 right-0 w-96 h-96 ${isDark ? 'bg-lime-500/5' : 'bg-lime-500/10'} rounded-full blur-3xl animate-pulse-slow`} style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <h2 className={`font-sport font-black italic text-4xl sm:text-5xl uppercase tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'} mb-4 text-center`}>
            Hall of <span className="text-lime-500 animate-pulse">Fame</span>
          </h2>
          <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'} text-center mb-16 text-lg`}>Real People. Real Results. Real Transformations.</p>
        </Reveal>

        {/* Scroll Container with Navigation */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full ${isDark ? 'bg-neutral-900/90' : 'bg-white/90 shadow-md'} backdrop-blur border-2 border-lime-500/30 hover:border-lime-500 ${isDark ? 'text-white' : 'text-neutral-900'} hover:bg-lime-500 hover:text-black transition-all flex items-center justify-center shadow-lg hover:shadow-lime-500/50 -translate-x-6 hover:scale-110`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4 px-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {transformations.map((transformation, idx) => (
              <div key={idx} className="flex-shrink-0 w-[350px]">
                <div className="group cursor-pointer h-full">
                  {/* Before/After Images */}
                  <div className={`relative aspect-[3/4] overflow-hidden rounded-xl border-2 ${isDark ? 'border-neutral-800' : 'border-neutral-200'} mb-4 group-hover:border-lime-500 transition-all duration-300`}>
                    {/* Before Image */}
                    <div className="absolute inset-0">
                      <img
                        src={transformation.beforeImage}
                        alt={`${transformation.name} Before`}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className={`absolute top-3 left-3 ${isDark ? 'bg-neutral-900/90' : 'bg-white/90 shadow-sm'} backdrop-blur-sm px-3 py-1 rounded-md`}>
                        <span className={`${isDark ? 'text-white' : 'text-neutral-900'} text-xs font-bold uppercase`}>Before</span>
                      </div>
                    </div>

                    {/* After Image - Slides in on hover */}
                    <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                      <img
                        src={transformation.afterImage}
                        alt={`${transformation.name} After`}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-3 right-3 bg-lime-500 px-3 py-1 rounded-md">
                        <span className="text-black text-xs font-bold uppercase">After</span>
                      </div>
                    </div>

                    {/* Stats Overlay */}
                    <div className={`absolute bottom-0 left-0 right-0 ${isDark ? 'bg-gradient-to-t from-black via-black/90' : 'bg-gradient-to-t from-black/80 via-black/40'} to-transparent p-4`}>
                      <div className="flex justify-between items-end text-sm">
                        <div>
                          <p className="text-neutral-300 text-xs uppercase">Before</p>
                          <p className="text-white font-bold font-sport italic">{transformation.stats.before}</p>
                        </div>
                        <div className="text-lime-500 text-xl">→</div>
                        <div className="text-right">
                          <p className="text-neutral-300 text-xs uppercase">After</p>
                          <p className="text-lime-500 font-bold font-sport italic">{transformation.stats.after}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Card */}
                  <div className={`${isDark ? 'bg-neutral-900/50 border-neutral-800 hover:bg-neutral-900' : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100 shadow-sm'} backdrop-blur border rounded-xl p-5 group-hover:border-lime-500/30 transition-all duration-300`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-left">
                        <h3 className={`font-sport font-black italic text-xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-1`}>{transformation.name}</h3>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(transformation.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-lime-500 text-lime-500" />
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lime-500 font-bold text-sm font-sport italic">{transformation.result}</p>
                        <p className={`${isDark ? 'text-neutral-500' : 'text-neutral-600'} text-xs`}>{transformation.duration}</p>
                      </div>
                    </div>

                    {/* Program Badge */}
                    <div className={`inline-block ${isDark ? 'bg-lime-500/10 border-lime-500/30' : 'bg-lime-500/5 border-lime-500/20'} border px-2 py-1 rounded-md mb-3`}>
                      <span className="text-lime-600 text-xs font-bold uppercase">{transformation.program}</span>
                    </div>

                    {/* Quote */}
                    <div className="flex items-start gap-2 text-left">
                      <Quote className="w-4 h-4 text-lime-500 flex-shrink-0 mt-0.5" />
                      <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} text-sm italic leading-relaxed line-clamp-3`}>"{transformation.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full ${isDark ? 'bg-neutral-900/90' : 'bg-white/90 shadow-md'} backdrop-blur border-2 border-lime-500/30 hover:border-lime-500 ${isDark ? 'text-white' : 'text-neutral-900'} hover:bg-lime-500 hover:text-black transition-all flex items-center justify-center shadow-lg hover:shadow-lime-500/50 translate-x-6 hover:scale-110`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
