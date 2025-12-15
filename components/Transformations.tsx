
import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Transformations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const transformations = [
    {
      name: "Arjun S.",
      program: "Hypertrophy V.02",
      result: "+10kg Muscle",
      duration: "6 Months",
      quote: "Being a vegetarian, I thought building muscle was impossible. Coach Aravindh's diet plan changed everything.",
      beforeImage: "/assets/images/transformations/arjun_before.png",
      afterImage: "/assets/images/transformations/arjun_after.png",
      stats: { before: "62kg", after: "72kg" }
    },
    {
      name: "Priya V.",
      program: "Shred Protocol",
      result: "-15kg Fat",
      duration: "4 Months",
      quote: "The nutrition plan was actually sustainable and traditional. Lost weight without missing home food.",
      beforeImage: "/assets/images/transformations/priya_before.png",
      afterImage: "/assets/images/transformations/priya_after.png",
      stats: { before: "75kg", after: "60kg" }
    },
    {
      name: "Rahul M.",
      program: "Powerlifting",
      result: "+80kg Total",
      duration: "8 Months",
      quote: "My deadlift went from 140kg to 220kg. The biomechanics feedback was absolute gold.",
      beforeImage: "/assets/images/transformations/rahul_before.png",
      afterImage: "/assets/images/transformations/rahul_after.png",
      stats: { before: "140kg DL", after: "220kg DL" }
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [transformations.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const current = transformations[currentIndex];

  // Handle slider dragging
  const handleSliderMove = (clientX: number, container: HTMLElement) => {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <h2 className="font-sport font-black italic text-4xl sm:text-5xl uppercase tracking-tighter text-white mb-4 text-center">
            Hall of <span className="text-lime-500 animate-pulse">Fame</span>
          </h2>
          <p className="text-neutral-400 text-center mb-16 text-lg">Real People. Real Results. Real Transformations.</p>
        </Reveal>

        {/* Main Before/After Comparison */}
        <div className="max-w-5xl mx-auto mb-16">
          <Reveal>
            <div className="relative bg-neutral-900 rounded-2xl overflow-hidden border-2 border-neutral-800 shadow-2xl">
              {/* Before/After Slider */}
              <div
                className="relative aspect-[16/9] overflow-hidden cursor-ew-resize select-none"
                onMouseDown={(e) => {
                  setIsDragging(true);
                  handleSliderMove(e.clientX, e.currentTarget);
                }}
                onMouseMove={(e) => {
                  if (isDragging) {
                    handleSliderMove(e.clientX, e.currentTarget);
                  }
                }}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchStart={(e) => {
                  setIsDragging(true);
                  handleSliderMove(e.touches[0].clientX, e.currentTarget);
                }}
                onTouchMove={(e) => {
                  if (isDragging) {
                    handleSliderMove(e.touches[0].clientX, e.currentTarget);
                  }
                }}
                onTouchEnd={() => setIsDragging(false)}
              >
                {/* After Image (Full) */}
                <div className="absolute inset-0">
                  <img
                    src={current.afterImage}
                    alt={`${current.name} After`}
                    className="w-full h-full object-cover object-top"
                    draggable="false"
                  />
                  <div className="absolute top-4 right-4 bg-lime-500 text-black px-4 py-2 rounded-lg font-bold uppercase text-sm skew-x-[-6deg] shadow-lg animate-float">
                    <span className="block skew-x-[6deg]">After</span>
                  </div>
                </div>

                {/* Before Image (Clipped) */}
                <div
                  className="absolute inset-0 transition-all duration-100 pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={current.beforeImage}
                    alt={`${current.name} Before`}
                    className="w-full h-full object-cover object-top"
                    draggable="false"
                  />
                  <div className="absolute top-4 left-4 bg-neutral-800 text-white px-4 py-2 rounded-lg font-bold uppercase text-sm skew-x-[-6deg] shadow-lg">
                    <span className="block skew-x-[6deg]">Before</span>
                  </div>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-lime-500 z-20 shadow-[0_0_20px_rgba(132,204,22,0.5)] pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center shadow-lg pointer-events-auto cursor-ew-resize">
                    <div className="flex gap-1">
                      <ChevronLeft className="w-4 h-4 text-black" />
                      <ChevronRight className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 pointer-events-none">
                  <div className="flex justify-between items-end">
                    <div className="flex gap-8">
                      <div>
                        <p className="text-neutral-400 text-xs uppercase mb-1">Before</p>
                        <p className="text-white font-bold text-2xl font-sport italic">{current.stats.before}</p>
                      </div>
                      <div className="flex items-center">
                        <ArrowRight className="w-6 h-6 text-lime-500" />
                      </div>
                      <div>
                        <p className="text-neutral-400 text-xs uppercase mb-1">After</p>
                        <p className="text-lime-500 font-bold text-2xl font-sport italic">{current.stats.after}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-neutral-400 text-xs uppercase mb-1">Duration</p>
                      <p className="text-white font-bold text-lg">{current.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Drag Instruction (shows on first load) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full pointer-events-none opacity-0 animate-pulse">
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Drag to Compare
                    <ChevronRight className="w-4 h-4" />
                  </p>
                </div>
              </div>

              {/* Transformation Details */}
              <div className="p-8 bg-neutral-900/50 backdrop-blur">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block bg-lime-500/10 border border-lime-500/30 px-3 py-1 rounded-full mb-3">
                      <span className="text-lime-400 text-xs font-bold uppercase">{current.program}</span>
                    </div>
                    <h3 className="font-sport font-black italic text-3xl text-white uppercase mb-2">{current.name}</h3>
                    <p className="text-lime-500 font-bold text-xl font-sport italic">{current.result}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                  <p className="text-neutral-300 italic text-lg leading-relaxed">"{current.quote}"</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-neutral-800 hover:bg-lime-500 text-white hover:text-black transition-all flex items-center justify-center group shadow-lg hover:shadow-lime-500/50"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <div className="flex gap-2">
              {transformations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentIndex
                    ? 'w-8 bg-lime-500'
                    : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-neutral-800 hover:bg-lime-500 text-white hover:text-black transition-all flex items-center justify-center group shadow-lg hover:shadow-lime-500/50"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
