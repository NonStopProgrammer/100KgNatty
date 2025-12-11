
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Play, ArrowRight, Activity, Zap } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero: React.FC = () => {
  const words = "POWER ON YOUR POTENTIAL".split(" ");

  // Explicitly typing variants to resolve potential index signature and inference issues
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Using 'as const' on the transition type to ensure it is inferred as a literal "spring"
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
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* 3D Visual Element */}
      <Scene3D />

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#CBFF00]/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#CBFF00] mb-8"
            >
              <Zap size={14} className="fill-[#CBFF00]" />
              <span className="uppercase tracking-[0.4em] font-bold text-[10px]">Version 2.5 Elite Engine</span>
            </motion.div>

            <motion.h1 
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-7xl md:text-9xl font-oswald font-bold leading-[0.85] mb-8 uppercase tracking-tighter"
            >
              {words.map((word, index) => (
                <motion.span
                  variants={child}
                  key={index}
                  className="inline-block mr-4 last:mr-0"
                >
                  {word === "POTENTIAL" ? (
                    <span className="text-[#CBFF00] drop-shadow-[0_0_15px_rgba(203,255,0,0.3)]">{word}</span>
                  ) : word === "ON" ? (
                    <span className="text-stroke">{word}</span>
                  ) : word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              The world's most advanced athletic development platform. We combine human physiology with AI precision to shatter your limits.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#000000' }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-[#CBFF00] text-black font-extrabold uppercase tracking-widest text-xs hover:shadow-[0_0_50px_rgba(203,255,0,0.4)] transition-all flex items-center justify-center gap-3 rounded-sm"
              >
                Initiate Protocol <ArrowRight size={18} />
              </motion.button>
              
              <motion.button 
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="px-12 py-5 bg-white/5 border border-white/10 text-white font-extrabold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 rounded-sm"
              >
                Watch Lab Tests
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Side Performance Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-1 hidden lg:block perspective-1000"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#CBFF00] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative glass-card p-10 rounded-2xl border-white/10">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <div className="text-4xl font-oswald font-bold text-white mb-1">REAL-TIME</div>
                    <div className="text-[#CBFF00] text-xs font-bold tracking-[0.3em] uppercase">Vitals Monitoring</div>
                  </div>
                  <Activity className="text-[#CBFF00] animate-pulse" size={32} />
                </div>
                
                <div className="space-y-8">
                  {[
                    { label: 'Strength Index', val: '92%', color: '#CBFF00' },
                    { label: 'Neural Recovery', val: '88%', color: '#ffffff' },
                    { label: 'Hydration Level', val: '95%', color: '#CBFF00' }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-3">
                        <span className="text-gray-500">{stat.label}</span>
                        <span style={{ color: stat.color }}>{stat.val}</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: stat.val }}
                          transition={{ delay: 1.5 + (i * 0.2), duration: 1 }}
                          className="h-full"
                          style={{ backgroundColor: stat.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
