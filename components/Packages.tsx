import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import StarBorder from './StarBorder';

const Packages: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹7,999",
      period: "/month",
      features: ["Custom Workout Plan", "Weekly Check-ins", "Nutrition Guide", "Discord Access"],
      recommended: false
    },
    {
      name: "Performance",
      price: "₹14,999",
      period: "/month",
      features: ["Advanced Programming", "24/7 Priority Support", "Custom Macros", "Form Reviews", "Supplements Guide"],
      recommended: true
    },
    {
      name: "Elite",
      price: "₹29,999",
      period: "/month",
      features: ["Daily Communication", "Bloodwork Analysis", "Grocery Concierge", "Bi-Weekly Video Calls", "Full Lifestyle Design"],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4 uppercase">Choose Your <span className="text-[#CBFF00]">Path</span></h2>
          <p className="text-gray-400">INR pricing, coached directly by Aravindh. Scalable training solutions for every level of commitment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative p-10 flex flex-col overflow-hidden ${plan.recommended ? 'bg-[#111] border-[#CBFF00]/50 border-2 shadow-[0_10px_50px_rgba(203,255,0,0.15)]' : 'glass-card border-white/5 border'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#CBFF00] text-black font-bold uppercase text-[10px] tracking-widest px-4 py-1">
                  Most Popular
                </div>
              )}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#CBFF00]/0 via-[#CBFF00]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-oswald font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-gray-400">
                    <Check size={16} className="text-[#CBFF00]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <StarBorder as="button" thickness={1.5} color={plan.recommended ? "#CBFF00" : "#ffffff"} className="w-full group">
                <div className={`w-full py-4 uppercase font-bold tracking-widest text-sm transition-all ${plan.recommended ? 'bg-[#CBFF00] text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                  Select Plan
                </div>
              </StarBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
