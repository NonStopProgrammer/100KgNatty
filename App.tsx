import React, { useEffect, useState } from 'react';
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
import StarBorder from './components/StarBorder';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const stats = [
    { label: 'Elite Clients', value: '500+', icon: Users },
    { label: 'Years Exp', value: '12+', icon: Timer },
    { label: 'Transformations', value: '250+', icon: Flame },
    { label: 'Natty Titles', value: 'Mr TN • ICN', icon: Trophy },
  ];

  const successStories = [
    {
      id: '01',
      title: 'Bench +22kg in 10 weeks',
      location: 'Chennai',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
      note: 'Lifetime natty — stronger joints, faster bar speed.'
    },
    {
      id: '02',
      title: 'Lean, strong, stress-proof',
      location: 'Bengaluru',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
      note: '8 kg fat down, lifts intact, sleep dialed.'
    },
    {
      id: '03',
      title: 'Stage-ready conditioning',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1507537509458-b8312d35a233?auto=format&fit=crop&w=1200&q=80',
      note: 'ICN prep — no PEDs, only precise programming and fueling.'
    },
  ];

  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  }, [theme]);

  return (
    <div className={`relative min-h-screen overflow-x-hidden selection:bg-[#CBFF00] selection:text-black ${theme === 'light' ? 'bg-white text-black' : 'bg-[#050505] text-white'}`}>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      
      <main>
        <Hero />
        
        {/* Performance Metrics Section */}
        <section className="py-16 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(203,255,0,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(203,255,0,0.06),transparent_30%)]"></div>
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="text-center group relative overflow-hidden"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-[#CBFF00]/0 via-[#CBFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{ opacity: [0.04, 0.08, 0.04] }}
                      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: i * 0.3 }}
                    />
                    <div className="flex justify-center mb-4 text-gray-500 group-hover:text-[#CBFF00] transition-colors duration-500 relative z-10">
                      <Icon size={24} />
                    </div>
                    <div className="text-4xl font-bold font-oswald text-white mb-1 relative z-10">{stat.value}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold relative z-10">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-10 text-center text-[#CBFF00] text-xs font-bold uppercase tracking-[0.35em]">
              “Train heavy, stay natty, outlast everyone.”
            </div>
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
                    Beyond simple exercise. Aravindh’s athletes are coached for resilient joints, clean strength, and year-round natty compliance.
                  </p>
                  <div className="mt-4 text-[#CBFF00] text-xs font-bold uppercase tracking-[0.3em]">
                    “Discipline is anabolic. Excuses are catabolic.”
                  </div>
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
                {successStories.map((story, idx) => (
                  <motion.div 
                    key={story.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.15 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/5] group overflow-hidden bg-[#111] rounded-sm"
                  >
                    <img 
                      src={story.image} 
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110" 
                      alt={story.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-[10px] text-[#CBFF00] font-bold uppercase tracking-[0.3em] mb-1">Case {story.id} • {story.location}</div>
                      <div className="text-white font-oswald text-2xl font-bold uppercase tracking-tight mb-3">{story.title}</div>
                      <div className="text-sm text-gray-300 mb-3">{story.note}</div>
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

      {/* Persistent AI Interface Trigger with StarBorder Effect */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-10 right-10 z-50"
      >
        <StarBorder 
          as="button" 
          thickness={3} 
          speed="3s" 
          className="rounded-full shadow-[0_0_30px_rgba(203,255,0,0.3)]"
          onClick={() => setIsChatOpen(true)}
        >
          <div className="w-16 h-16 bg-[#CBFF00] text-black rounded-full flex items-center justify-center">
            <Zap size={28} className="fill-current" />
          </div>
        </StarBorder>
      </motion.div>

      <AnimatePresence>
        {isChatOpen && (
          <AIConsultant onClose={() => setIsChatOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
