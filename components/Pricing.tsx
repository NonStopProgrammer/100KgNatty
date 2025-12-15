
import React from 'react';
import { Check } from 'lucide-react';
import { Reveal } from './Reveal';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-500/5 skew-x-[-20deg] blur-3xl pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <h2 className="font-sport font-black italic text-4xl sm:text-5xl uppercase tracking-tighter text-white mb-6 text-center">
            Invest In <span className="text-lime-500">Yourself</span>
          </h2>
          <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-16">
            Choose the tier that fits your goals. Start your 100KG Natty journey today.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {/* Tier 1 */}
          <Reveal delay={0.2} width="100%">
            <div className="h-full bg-neutral-900 border border-neutral-800 p-8 relative group hover:border-white/20 transition-all hover:-translate-y-2 duration-300 flex flex-col">
              <h3 className="font-sport font-black italic text-2xl text-white uppercase mb-2 group-hover:text-lime-400 transition-colors">Self Guided</h3>
              <div className="text-4xl font-black text-neutral-200 mb-6">₹999<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
              <p className="text-neutral-400 text-sm mb-8">Perfect for experienced lifters who just need a structured Indian diet & plan.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                <ListItem text="Monthly Program Updates" />
                <ListItem text="Video Exercise Library" />
                <ListItem text="Indian Veg/Non-Veg Diets" />
                <ListItem text="Community Support" />
              </ul>
              <a href="#contact" className="block w-full py-4 text-center border-2 border-white/10 text-white font-bold italic uppercase hover:border-lime-500 hover:text-lime-400 transition-all skew-x-[-6deg] group-hover:shadow-[0_0_15px_rgba(132,204,22,0.3)]">
                <span className="block skew-x-[6deg]">Get Started</span>
              </a>
            </div>
          </Reveal>

          {/* Tier 2 (Featured) */}
          <Reveal delay={0.3} width="100%">
            <div className="h-full bg-neutral-900 border-2 border-lime-500 p-8 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(132,204,22,0.15)] hover:shadow-[0_0_50px_rgba(132,204,22,0.3)] hover:-translate-y-6 transition-all duration-300 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-lime-500 text-black text-[10px] font-black px-4 py-1 uppercase -skew-x-12 -mt-3 shadow-lg animate-float">
                <span className="block skew-x-12">Best Value</span>
              </div>
              <h3 className="font-sport font-black italic text-3xl text-white uppercase mb-2">Hybrid 1:1</h3>
              <div className="text-5xl font-black text-lime-400 mb-6">₹3,499<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
              <p className="text-neutral-300 text-sm mb-8">Professional oversight for serious transformation.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                <ListItem text="Customized Programming" highlight />
                <ListItem text="Bi-Weekly Check-in Calls" highlight />
                <ListItem text="Form Analysis (Video)" highlight />
                <ListItem text="Macro/Traditional Diet Guidance" />
                <ListItem text="24/7 WhatsApp Support" />
              </ul>
              <a href="#contact" className="block w-full py-4 text-center bg-lime-500 text-black font-black italic uppercase hover:bg-lime-400 hover:scale-105 transition-all skew-x-[-6deg] shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/40 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                <span className="block skew-x-[6deg]">Apply Now</span>
              </a>
            </div>
          </Reveal>

          {/* Tier 3 */}
          <Reveal delay={0.4} width="100%">
            <div className="h-full bg-neutral-900 border border-neutral-800 p-8 relative group hover:border-white/20 transition-all hover:-translate-y-2 duration-300 flex flex-col">
              <h3 className="font-sport font-black italic text-2xl text-white uppercase mb-2 group-hover:text-lime-400 transition-colors">Elite Prep</h3>
              <div className="text-4xl font-black text-neutral-200 mb-6">₹8,999<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
              <p className="text-neutral-400 text-sm mb-8">Full contest prep or complete lifestyle overhaul coaching.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                <ListItem text="Daily Check-ins" />
                <ListItem text="Personalized Meal Plans" />
                <ListItem text="Peak Week Strategy" />
                <ListItem text="Posing Coaching" />
                <ListItem text="Supplement Protocols" />
              </ul>
              <a href="#contact" className="block w-full py-4 text-center border-2 border-white/10 text-white font-bold italic uppercase hover:border-lime-500 hover:text-lime-400 transition-all skew-x-[-6deg] group-hover:shadow-[0_0_15px_rgba(132,204,22,0.3)]">
                <span className="block skew-x-[6deg]">Inquire</span>
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

const ListItem = ({ text, highlight = false }: { text: string, highlight?: boolean }) => (
  <li className="flex items-start gap-3">
    <div className={`mt-0.5 p-1 rounded-full flex items-center justify-center ${highlight ? 'bg-lime-500 text-black shadow-[0_0_10px_rgba(132,204,22,0.5)]' : 'bg-lime-500/20 text-lime-500'}`}>
      <Check size={14} strokeWidth={3} />
    </div>
    <span className={`text-sm font-medium ${highlight ? 'text-white' : 'text-neutral-300'}`}>{text}</span>
  </li>
);
