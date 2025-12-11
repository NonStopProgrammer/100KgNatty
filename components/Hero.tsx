import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Zap, Target, Shield, Activity } from 'lucide-react';
import Scene3D from './Scene3D';
import StarBorder from './StarBorder';

const Hero: React.FC = () => {
  const words = "TRANSFORM YOUR REALITY".split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-black selection:bg-[#CBFF00] selection:text-black">
      {/* 3D Background */}
      <Scene3D />

      {/* Grid and Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
      
      {/* Animated Scanline */}
      <div className="scanline"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-30"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-sm bg-[#CBFF00]/10 border border-[#CBFF00]/20 text-[#CBFF00] mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#CBFF00] animate-pulse"></div>
              <span className="uppercase tracking-[0.4em] font-extrabold text-[10px]">Elite Performance Neural Link</span>
            </motion.div>

            <motion.h1 
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-8xl lg:text-[110px] font-oswald font-bold leading-[0.85] mb-8 uppercase tracking-tighter"
            >
              {words.map((word, index) => (
                <motion.span
                  variants={child}
                  key={index}
                  className="inline-block mr-4 last:mr-0"
                >
                  {word === "REALITY" ? (
                    <span className="text-[#CBFF00] drop-shadow-[0_0_25px_rgba(203,255,0,0.5)] italic underline decoration-4 underline-offset-8">
                      {word}
                    </span>
                  ) : word === "TRANSFORM" ? (
                    <span className="text-stroke">{word}</span>
                  ) : word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Shatter genetic limitations with India's premier athletic development lab. Precision engineering for the human machine.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
            >
              <StarBorder as="button" thickness={1.5} speed="5s" className="rounded-sm group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-[#CBFF00] text-black font-extrabold uppercase tracking-widest text-sm rounded-sm transition-all flex items-center justify-center gap-3"
                >
                  Start Protocol <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </motion.div>
              </StarBorder>
              
              <StarBorder as="button" thickness={1.5} speed="4s" color="#ffffff" className="rounded-sm group">
                <motion.div 
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className="px-12 py-5 border-2 border-white/10 text-white font-extrabold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 rounded-sm backdrop-blur-sm bg-black"
                >
                  View The Lab
                </motion.div>
              </StarBorder>
            </motion.div>

            {/* Micro Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-16 flex flex-wrap gap-10 justify-center lg:justify-start"
            >
              {[
                { icon: Target, label: 'Precision', val: '100%' },
                { icon: Shield, label: 'Resilience', val: '98.4%' },
                { icon: Activity, label: 'V02 Max', val: 'Elite' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <stat.icon size={16} className="text-[#CBFF00]" />
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
                    <div className="text-white font-bold font-oswald text-lg">{stat.val}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual: Elite Athlete with Acid Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 relative lg:h-[800px] w-full flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-2xl group">
              {/* Background Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#CBFF00]/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#CBFF00]/20 transition-all duration-1000"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80" 
                  alt="Elite Performance Athlete"
                  className="w-full h-full object-cover acid-glow-image grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Acid Highlight Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 border-[20px] border-black pointer-events-none"></div>
                
                {/* Tech HUD Elements */}
                <div className="absolute top-12 left-12 p-4 border-l border-t border-[#CBFF00] space-y-2 backdrop-blur-sm bg-black/20">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#CBFF00] rounded-full"></div>
                    <span className="text-[8px] text-[#CBFF00] font-bold uppercase tracking-widest">Target Locked</span>
                  </div>
                  <div className="text-xl font-oswald font-bold text-white leading-none">SUBJECT: ELITE</div>
                  <div className="text-[9px] text-gray-400 font-bold tracking-tighter">042-ALPHA-99</div>
                </div>

                <div className="absolute bottom-12 right-12 text-right p-4 border-r border-b border-[#CBFF00] backdrop-blur-sm bg-black/20">
                   <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Current Load</div>
                   <div className="text-3xl font-oswald font-bold text-[#CBFF00]">MAX OUTPUT</div>
                </div>

                {/* Pulsing Target Ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#CBFF00]/30 rounded-full animate-ping pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#CBFF00]/50 rounded-full pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;