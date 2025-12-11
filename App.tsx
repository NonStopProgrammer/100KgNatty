import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Timer, 
  Trophy,
  Flame,
  Zap,
  ChevronRight
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const stats = [
    { label: 'Elite Clients', value: '500+', icon: Users },
    { label: 'Years Exp', value: '12+', icon: Timer },
    { label: 'Transformations', value: '250+', icon: Flame },
    { label: 'Pro Certs', value: '18', icon: Trophy },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#CBFF00] selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Performance Metrics Section */}
        <section className="py-16 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-4 text-gray-500 group-hover:text-[#CBFF00] transition-colors duration-500">
                    <Icon size={24} />
                  </div>
                  <div className="text-4xl font-bold font-oswald text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <Features />
        
        <section id="results" className="py-32 bg-black relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(203,255,0,0.03)_0%,_transparent_60%)]"></div>
           <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                <div className="max-w-2xl">
                  <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-5xl md:text-7xl font-oswald font-bold mb-6 uppercase leading-[0.9] tracking-tighter"
                  >
                    Engineered<br/>
                    <span className="text-[#CBFF00] drop-shadow-[0_0_20px_rgba(203,255,0,0.2)]">Success.</span>
                  </motion.h2>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                    Beyond simple exercise. We deliver precise physiological adaptations tailored to your unique genetic blueprint.
                  </p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-black font-extrabold uppercase tracking-widest text-[10px] hover:bg-[#CBFF00] transition-all flex items-center gap-3 rounded-sm"
                >
                  Explore The Lab <ChevronRight size={16} />
                </motion.button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: item * 0.15 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/5] group overflow-hidden bg-[#111] rounded-sm"
                  >
                    <img 
                      src={`https://images.unsplash.com/photo-${[
                        '1534438327276-14e5300c3a48', 
                        '1581009146145-b5ef03a74b1b', 
                        '1571019613454-1cb2f99b2d8b'
                      ][item-1]}?auto=format&fit=crop&w=800&q=80`} 
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110" 
                      alt="Performance"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-[10px] text-[#CBFF00] font-bold uppercase tracking-[0.3em] mb-2">Subject 0{item}</div>
                      <div className="text-white font-oswald text-2xl font-bold uppercase tracking-tight mb-4">Functional Peak Reached</div>
                      <div className="h-1 w-0 bg-[#CBFF00] group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
           </div>
        </section>

        <Packages />
        
        <Testimonials />
      </main>

      <Footer />

      {/* Persistent AI Interface Trigger */}
      <motion.button 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-10 right-10 w-16 h-16 bg-[#CBFF00] text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(203,255,0,0.3)] z-50 accent-glow"
      >
        <Zap size={28} className="fill-current" />
      </motion.button>

      <AnimatePresence>
        {isChatOpen && (
          <AIConsultant onClose={() => setIsChatOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;