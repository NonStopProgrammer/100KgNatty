import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface ProgramsProps {
  onSelectProgram: (id: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
       <div className="absolute top-1/4 -right-20 w-96 h-96 bg-lime-500/10 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <h2 className="font-sport font-black italic text-4xl sm:text-6xl uppercase tracking-tighter text-white mb-12 text-center">
            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600 animate-shine bg-[length:200%_auto]">Protocol</span>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Program 1 */}
          <div className="md:col-span-2">
            <Reveal delay={0.1} width="100%">
              <div onClick={() => onSelectProgram('hypertrophy')} className="cursor-pointer relative h-96 group overflow-hidden border border-neutral-800 skew-y-1 md:skew-y-0 transform transition-all duration-500 hover:border-lime-500 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 z-10">
                  <span className="bg-lime-500 text-black text-[10px] font-black px-2 py-0.5 mb-3 inline-block -skew-x-12 uppercase tracking-wider group-hover:animate-pulse">
                     <span className="block skew-x-12">Best Seller</span>
                  </span>
                  <h3 className="font-sport font-black italic text-5xl text-white uppercase tracking-tight mb-2 group-hover:text-lime-400 transition-colors">Hypertrophy</h3>
                  <p className="text-neutral-300 font-medium max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">The ultimate muscle building blueprint. 12 weeks of high volume training designed to maximize fiber recruitment.</p>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur border border-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0 duration-300">
                  <ArrowUpRight className="text-lime-400 w-6 h-6" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Program 2 */}
          <Reveal delay={0.2} width="100%">
            <div onClick={() => onSelectProgram('shred')} className="cursor-pointer relative h-96 group overflow-hidden border border-neutral-800 skew-y-1 md:skew-y-0 transform transition-all duration-500 hover:border-lime-500 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="font-sport font-black italic text-4xl text-white uppercase tracking-tight mb-2 group-hover:text-lime-400 transition-colors">Shred</h3>
                <p className="text-neutral-300 font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Rapid fat loss while maintaining lean mass.</p>
              </div>
               <div className="absolute top-4 right-4 bg-black/50 backdrop-blur border border-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0 duration-300">
                  <ArrowUpRight className="text-lime-400 w-6 h-6" />
                </div>
            </div>
          </Reveal>

          {/* Program 3 */}
          <Reveal delay={0.3} width="100%">
            <div onClick={() => onSelectProgram('power')} className="cursor-pointer relative h-96 group overflow-hidden border border-neutral-800 skew-y-1 md:skew-y-0 transform transition-all duration-500 hover:border-lime-500 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="font-sport font-black italic text-4xl text-white uppercase tracking-tight mb-2 group-hover:text-lime-400 transition-colors">Power</h3>
                <p className="text-neutral-300 font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Focus on the big three: Squat, Bench, Deadlift.</p>
              </div>
               <div className="absolute top-4 right-4 bg-black/50 backdrop-blur border border-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0 duration-300">
                  <ArrowUpRight className="text-lime-400 w-6 h-6" />
                </div>
            </div>
          </Reveal>

          {/* Program 4 */}
          <div className="md:col-span-2">
            <Reveal delay={0.4} width="100%">
              <div onClick={() => onSelectProgram('hybrid')} className="cursor-pointer relative h-96 group overflow-hidden border border-neutral-800 skew-y-1 md:skew-y-0 transform transition-all duration-500 hover:border-lime-500 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 z-10">
                   <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 mb-3 inline-block -skew-x-12 uppercase tracking-wider group-hover:animate-bounce">
                     <span className="block skew-x-12">Limited Spots</span>
                  </span>
                  <h3 className="font-sport font-black italic text-4xl text-white uppercase tracking-tight mb-2 group-hover:text-lime-400 transition-colors">1-on-1 Hybrid Coaching</h3>
                  <p className="text-neutral-300 font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">The complete package. Weekly check-ins, form correction, and 24/7 support.</p>
                </div>
                 <div className="absolute top-4 right-4 bg-black/50 backdrop-blur border border-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0 duration-300">
                  <ArrowUpRight className="text-lime-400 w-6 h-6" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};