
import React from 'react';
import { Quote } from 'lucide-react';
import { Reveal } from './Reveal';

export const Transformations: React.FC = () => {
  const stories = [
    {
      name: "Arjun S.",
      program: "Hypertrophy V.02",
      result: "+10kg Muscle",
      quote: "Being a vegetarian, I thought building muscle was impossible. Coach Aravindh's diet plan changed everything.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Priya V.",
      program: "Shred Protocol",
      result: "-15kg Fat",
      quote: "The nutrition plan was actually sustainable and traditional. Lost weight without missing home food.",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Rahul M.",
      program: "Powerlifting",
      result: "+80kg Total",
      quote: "My deadlift went from 140kg to 220kg. The biomechanics feedback was absolute gold.",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-sport font-black italic text-4xl sm:text-5xl uppercase tracking-tighter text-white mb-12 text-center">
            Hall of <span className="text-lime-500 animate-pulse">Fame</span>
          </h2>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <Reveal key={idx} delay={idx * 0.2} width="100%">
              <article className="group cursor-pointer h-full">
                <div className="relative overflow-hidden aspect-[4/5] border-2 border-neutral-800 group-hover:border-lime-500 transition-all duration-300 rounded-lg shadow-2xl flex flex-col h-full">
                  <div className="absolute top-2 left-2 bg-black/80 backdrop-blur px-3 py-1 z-20 skew-x-[-12deg] group-hover:bg-lime-500 transition-colors">
                    <span className="text-lime-400 group-hover:text-black text-[10px] font-bold uppercase skew-x-[12deg] transition-colors">{story.program}</span>
                  </div>
                  
                  <div className="relative h-full w-full overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                     <Quote className="w-8 h-8 text-lime-500 mb-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                     <p className="text-neutral-300 italic text-sm mb-4 leading-relaxed group-hover:text-white transition-colors line-clamp-3">"{story.quote}"</p>
                     <div className="flex justify-between items-end border-t border-white/10 pt-4 group-hover:border-lime-500/50 transition-colors">
                        <div>
                          <h4 className="font-sport font-bold italic text-xl text-white uppercase">{story.name}</h4>
                        </div>
                        <div className="text-lime-400 font-bold font-sport italic text-lg shadow-lime-glow">{story.result}</div>
                     </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        
        {/* Marquee Text */}
        <div className="mt-20 border-y border-white/5 py-8 bg-lime-500/5 overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-4xl font-black italic uppercase text-transparent stroke-text opacity-30 hover:opacity-100 hover:text-lime-500/20 transition-all duration-300">
                Results Driven &bull; No Excuses &bull; Pure Natural &bull;
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
