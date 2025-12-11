import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, Shield, Zap, Activity, TrendingUp } from 'lucide-react';
import { ServiceCardProps } from '../types';
import StarBorder from './StarBorder';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-card p-10 group relative overflow-hidden transition-colors hover:border-[#CBFF00]/50 flex flex-col"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
         {icon}
      </div>
      
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <StarBorder thickness={1.5} className="w-14 h-14 rounded-lg mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
           <div className="w-full h-full bg-black flex items-center justify-center text-white group-hover:bg-[#CBFF00] group-hover:text-black transition-all duration-500">
             {icon}
           </div>
        </StarBorder>
        
        <h3 className="text-2xl font-oswald font-bold mb-4 uppercase tracking-tight group-hover:text-[#CBFF00] transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 mt-auto">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#CBFF00]">View Details</span>
        <TrendingUp size={14} className="text-[#CBFF00]" />
      </div>

      {/* Subtle Glow Trail */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CBFF00]/0 via-transparent to-[#CBFF00]/5 pointer-events-none"></div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="programs" className="py-32 bg-[#050505] relative">
      {/* Background Section Glow */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#CBFF00]/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#CBFF00] font-bold uppercase tracking-[0.5em] text-[10px] mb-4"
            >
              Methodology
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-oswald font-bold uppercase leading-none"
            >
              Engineered for <span className="text-stroke">Peak</span> <br/>
              <span className="text-[#CBFF00]">Performance.</span>
            </motion.h2>
          </div>
          <div className="space-y-3 max-w-sm">
            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-gray-500 text-sm leading-relaxed"
            >
              Built by Aravindh — lifetime natural, Mr. Tamilnadu, ICN BodyBuilding Nationals — every protocol is field-tested, ethical, and brutally effective.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#CBFF00] text-xs font-bold uppercase tracking-[0.3em]"
            >
              “Train clean. Lift heavy. Stay natty.”
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            icon={<Target size={24} />}
            title="Hyper-Targeting"
            description="Isolating kinetic chains to eliminate structural weaknesses and explosive power leaks."
            delay={0.1}
          />
          <ServiceCard 
            icon={<Shield size={24} />}
            title="Bio-Shield"
            description="Injury-proofing focused on rotator cuffs, lumbar stability, and tendon conditioning. Weekly mobility audits to keep you lifting for decades."
            delay={0.2}
          />
          <ServiceCard 
            icon={<Zap size={24} />}
            title="Neural Drive"
            description="CNS priming blocks to sharpen motor unit recruitment, bar speed, and mind-muscle connection without frying your recovery."
            delay={0.3}
          />
          <ServiceCard 
            icon={<Activity size={24} />}
            title="Metabolic Map"
            description="Custom fueling strategies that turn your body into a high-octane performance machine."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
