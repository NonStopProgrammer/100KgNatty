
import React from 'react';
import { Award, Users, Clock, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

interface AboutProps {
  theme: 'dark' | 'light';
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`${isDark ? 'bg-black' : 'bg-white'} relative z-20 transition-colors duration-500`}>
      {/* Stats Bar - Clean Design */}
      <div className={`border-y ${isDark ? 'border-white/5 bg-black' : 'border-black/5 bg-neutral-50'} relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <Reveal delay={0.1} width="100%"><StatItem icon={<Award />} label="Certified Elite" sub="NASM CPT & CSCS" index={0} theme={theme} /></Reveal>
            <Reveal delay={0.2} width="100%"><StatItem icon={<Users />} label="500+ Clients" sub="Transformed Globally" index={1} theme={theme} /></Reveal>
            <Reveal delay={0.3} width="100%"><StatItem icon={<Clock />} label="10+ Years" sub="Industry Experience" index={2} theme={theme} /></Reveal>
            <Reveal delay={0.4} width="100%"><StatItem icon={<Zap />} label="Scientific" sub="Evidence Based" index={3} theme={theme} /></Reveal>
          </div>
        </div>
      </div>

      {/* Main About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <Reveal>
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-lime-500 rounded-lg skew-x-[-3deg] transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 ease-out"></div>
              <div className={`relative rounded-lg overflow-hidden border-2 ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-neutral-100'} skew-x-[-3deg] group-hover:-translate-y-2 transition-transform duration-500`}>
                <img
                  src="/assets/images/coach-aravindh.png"
                  alt="Coach Aravindh - Tamil Bodybuilder"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/60' : 'bg-gradient-to-t from-black/30'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
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
              <h2 className={`font-sport font-black italic text-4xl sm:text-5xl uppercase tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'} mb-6 py-2 leading-tight`}>
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600 animate-shine bg-[length:200%_auto]">Perfect Machines</span>
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <div className={`mb-8 border-l-4 border-lime-500 pl-6 py-2 ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-colors rounded-r-lg`}>
                <h3 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase tracking-wide mb-1`}>Coach Aravindh</h3>
                <p className={`font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'} text-sm uppercase tracking-widest flex flex-col sm:flex-row gap-2 sm:items-center`}>
                  <span>Mr. Tamilnadu</span>
                  <span className="hidden sm:inline text-lime-500">•</span>
                  <span>ICN Bodybuilding Nationals</span>
                  <span className="hidden sm:inline text-lime-500">•</span>
                  <span>Natural Bodybuilder</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'} text-lg mb-6 leading-relaxed`}>
                I don't believe in quick fixes or cookie-cutter plans. My philosophy is built on the foundation of biomechanics, progressive overload, and nutritional science.
              </p>
              <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'} text-lg mb-8 leading-relaxed`}>
                Whether you are an elite athlete looking to shave seconds off your time, or someone looking to reclaim their health, we build the roadmap together. The Iron Core methodology transforms not just your body, but your mindset.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="grid grid-cols-2 gap-4">
                <div className={`relative ${isDark ? 'bg-neutral-900/50' : 'bg-neutral-100'} p-4 border-l-4 border-lime-500 skew-x-[-12deg] hover:scale-105 group cursor-pointer overflow-hidden transition-all duration-300`}>
                  <span className={`absolute inset-0 ${isDark ? 'bg-white/5' : 'bg-black/5'} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out`}></span>

                  <div className="relative skew-x-[12deg]">
                    <h4 className={`font-sport font-bold italic ${isDark ? 'text-white' : 'text-neutral-900'} text-xl group-hover:text-lime-500 transition-colors duration-300`}>Hypertrophy</h4>
                    <p className={`text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-600'} mt-1 group-hover:text-neutral-400 transition-colors duration-300`}>Muscle Growth Focus</p>
                  </div>
                </div>
                <div className={`relative ${isDark ? 'bg-neutral-900/50' : 'bg-neutral-100'} p-4 border-l-4 border-lime-500/30 skew-x-[-12deg] hover:scale-105 group cursor-pointer overflow-hidden transition-all duration-300 hover:border-lime-500`}>
                  <span className={`absolute inset-0 ${isDark ? 'bg-white/5' : 'bg-black/5'} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out`}></span>

                  <div className="relative skew-x-[12deg]">
                    <h4 className={`font-sport font-bold italic ${isDark ? 'text-white' : 'text-neutral-900'} text-xl group-hover:text-lime-500 transition-colors duration-300`}>Strength</h4>
                    <p className={`text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-600'} mt-1 group-hover:text-neutral-400 transition-colors duration-300`}>Powerlifting Specific</p>
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

const StatItem = ({ icon, label, sub, index, theme }: { icon: React.ReactNode, label: string, sub: string, index: number, theme: 'dark' | 'light' }) => {
  const isDark = theme === 'dark';
  return (
    <div className={`p-8 flex flex-col items-center justify-center text-center group relative overflow-hidden transition-all duration-300 cursor-pointer ${index < 3 ? isDark ? 'border-r border-white/5' : 'border-r border-black/5' : ''}`}>
      <span className={`absolute inset-0 ${isDark ? 'bg-white/5' : 'bg-black/5'} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out`}></span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      <div className="relative mb-4 w-8 h-8 text-lime-500 group-hover:text-lime-600 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <span className={`relative font-sport font-black italic uppercase text-xl ${isDark ? 'text-white' : 'text-neutral-900'} leading-tight mb-2 group-hover:text-lime-600 transition-colors duration-300 tracking-tight`}>
        {label}
      </span>
      <span className={`relative text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-600'} font-semibold uppercase tracking-wider group-hover:text-neutral-400 transition-colors duration-300`}>
        {sub}
      </span>
    </div>
  );
};
