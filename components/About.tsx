
import React from 'react';
import { Award, Users, Clock, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <section className="bg-black relative z-20">
      {/* Stats Bar - Enhanced */}
      <div className="border-y border-lime-500/20 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 backdrop-blur-sm relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/5 to-transparent animate-shimmer"></div>

        {/* Glowing top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <Reveal delay={0.1} width="100%"><StatItem icon={<Award />} label="Certified Elite" sub="NASM CPT & CSCS" index={0} /></Reveal>
            <Reveal delay={0.2} width="100%"><StatItem icon={<Users />} label="500+ Clients" sub="Transformed Globally" index={1} /></Reveal>
            <Reveal delay={0.3} width="100%"><StatItem icon={<Clock />} label="10+ Years" sub="Industry Experience" index={2} /></Reveal>
            <Reveal delay={0.4} width="100%"><StatItem icon={<Zap />} label="Scientific" sub="Evidence Based" index={3} /></Reveal>
          </div>
        </div>

        {/* Glowing bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-50"></div>
      </div>

      {/* Main About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <Reveal>
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-lime-500 rounded-lg skew-x-[-3deg] transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 ease-out"></div>
              <div className="relative rounded-lg overflow-hidden border-2 border-neutral-800 bg-neutral-900 skew-x-[-3deg] group-hover:-translate-y-2 transition-transform duration-500">
                <img
                  src="/assets/images/coach-aravindh.png"
                  alt="Coach Aravindh - Tamil Bodybuilder"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.2}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="bg-lime-500 text-black text-xs font-black px-3 py-1 -skew-x-12 uppercase tracking-wider">
                  <span className="block skew-x-12">The Coach</span>
                </span>
              </div>
              <h2 className="font-sport font-black italic text-4xl sm:text-5xl uppercase tracking-tighter text-white mb-6 py-2 leading-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600 animate-shine bg-[length:200%_auto]">Perfect Machines</span>
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mb-8 border-l-4 border-lime-500 pl-6 py-2 hover:bg-white/5 transition-colors rounded-r-lg">
                <h3 className="font-sport font-bold italic text-2xl text-white uppercase tracking-wide mb-1">Coach Aravindh</h3>
                <p className="font-medium text-neutral-400 text-sm uppercase tracking-widest flex flex-col sm:flex-row gap-2 sm:items-center">
                  <span>Mr. Tamilnadu</span>
                  <span className="hidden sm:inline text-lime-500">•</span>
                  <span>ICN Bodybuilding Nationals</span>
                  <span className="hidden sm:inline text-lime-500">•</span>
                  <span>Natural Bodybuilder</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                I don't believe in quick fixes or cookie-cutter plans. My philosophy is built on the foundation of biomechanics, progressive overload, and nutritional science.
              </p>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Whether you are an elite athlete looking to shave seconds off your time, or someone looking to reclaim their health, we build the roadmap together. The Iron Core methodology transforms not just your body, but your mindset.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 p-4 border-l-4 border-lime-500 skew-x-[-12deg] hover:bg-lime-500/20 transition-all hover:scale-105 group cursor-pointer">
                  <div className="skew-x-[12deg]">
                    <h4 className="font-sport font-bold italic text-white text-xl group-hover:text-lime-400 transition-colors">Hypertrophy</h4>
                    <p className="text-sm text-neutral-500 mt-1">Muscle Growth Focus</p>
                  </div>
                </div>
                <div className="bg-neutral-900/50 p-4 border-l-4 border-lime-500/30 skew-x-[-12deg] hover:bg-lime-500/20 transition-all hover:scale-105 group cursor-pointer hover:border-lime-500">
                  <div className="skew-x-[12deg]">
                    <h4 className="font-sport font-bold italic text-white text-xl group-hover:text-lime-400 transition-colors">Strength</h4>
                    <p className="text-sm text-neutral-500 mt-1">Powerlifting Specific</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatItem = ({ icon, label, sub, index }: { icon: React.ReactNode, label: string, sub: string, index: number }) => (
  <div className={`p-8 flex flex-col items-center justify-center text-center group relative overflow-hidden transition-all duration-500 hover:bg-gradient-to-b hover:from-lime-500/10 hover:to-transparent ${index < 3 ? 'border-r border-white/5' : ''}`}>
    {/* Animated gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-lime-500/0 via-lime-500/5 to-lime-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Top glow line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>

    {/* Icon with glowing background */}
    <div className="relative mb-4 group-hover:scale-110 transition-transform duration-500">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-lime-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Icon container */}
      <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-lime-500/20 group-hover:border-lime-500/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]">
        <div className="w-7 h-7 text-lime-500 group-hover:text-lime-400 transition-colors duration-300 group-hover:rotate-12 transform">
          {icon}
        </div>
      </div>
    </div>

    {/* Label */}
    <span className="font-sport font-black italic uppercase text-xl text-white leading-tight mb-2 group-hover:text-lime-400 transition-colors duration-300 tracking-tight">
      {label}
    </span>

    {/* Subtitle */}
    <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider group-hover:text-neutral-300 transition-colors duration-300">
      {sub}
    </span>

    {/* Bottom accent line */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-lime-500 group-hover:w-16 transition-all duration-500 ease-out"></div>
  </div>
);
