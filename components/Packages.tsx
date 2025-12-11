
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Packages: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      features: ["Custom Workout Plan", "Weekly Check-ins", "Nutrition Guide", "Discord Access"],
      recommended: false
    },
    {
      name: "Performance",
      price: "$299",
      period: "/month",
      features: ["Advanced Programming", "24/7 Priority Support", "Custom Macros", "Form Reviews", "Supplements Guide"],
      recommended: true
    },
    {
      name: "Elite Elite",
      price: "$599",
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
          <p className="text-gray-400">Scalable training solutions for every level of commitment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-10 flex flex-col ${plan.recommended ? 'bg-[#111] border-[#CBFF00]/50 border-2' : 'glass-card border-white/5 border'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#CBFF00] text-black font-bold uppercase text-[10px] tracking-widest px-4 py-1">
                  Most Popular
                </div>
              )}
              
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

              <button className={`w-full py-4 uppercase font-bold tracking-widest text-sm transition-all ${plan.recommended ? 'bg-[#CBFF00] text-black hover:bg-[#b8e600]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
