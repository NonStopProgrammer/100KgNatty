import React from 'react';
import { ArrowLeft, Check, Calendar, Clock, BarChart, Target, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

interface ProgramDetailsProps {
  programId: string;
  onBack: () => void;
}

const programsData: Record<string, any> = {
  hypertrophy: {
    title: "Hypertrophy V.02",
    subtitle: "The Architect's Blueprint",
    description: "This is not just about moving weight; it's about maximizing mechanical tension and metabolic stress. The Hypertrophy V.02 protocol is a high-volume, scientifically periodized system designed to force adaptation in every muscle fiber.",
    image: "/assets/images/protocols/protocol_hypertrophy_1765792438697.png",
    stats: [
      { label: "Duration", value: "12 Weeks", icon: Calendar },
      { label: "Frequency", value: "5 Days/Week", icon: Clock },
      { label: "Intensity", value: "High Volume", icon: Zap },
      { label: "Level", value: "Intermediate", icon: BarChart },
    ],
    phases: [
      { name: "Phase 1: Accumulation", desc: "High volume, moderate intensity. Focus on work capacity and perfecting movement patterns." },
      { name: "Phase 2: Intensification", desc: "Lower volume, higher loads. Progressive overload is the primary driver here." },
      { name: "Phase 3: Peak Hypertrophy", desc: "incorporation of drop sets, supersets, and blood flow restriction training." }
    ],
    features: [
      "Customized Macronutrient targets",
      "Video form analysis for compound lifts",
      "Mobility and injury prevention routines",
      "Access to private community"
    ]
  },
  shred: {
    title: "Shred Protocol",
    subtitle: "Reveal The Work",
    description: "A precision-engineered fat loss program that prioritizes muscle retention. We utilize strategic refeeds and carbohydrate cycling to keep your metabolism firing while shedding adipose tissue.",
    image: "/assets/images/protocols/protocol_shred_1765792475041.png",
    stats: [
      { label: "Duration", value: "8-16 Weeks", icon: Calendar },
      { label: "Frequency", value: "4-6 Days/Week", icon: Clock },
      { label: "Type", value: "Metabolic", icon: Zap },
      { label: "Level", value: "All Levels", icon: BarChart },
    ],
    phases: [
      { name: "Phase 1: Metabolic Priming", desc: "Establishing maintenance calories and improving insulin sensitivity." },
      { name: "Phase 2: The Deficit", desc: "Strategic caloric reduction combined with increased NEAT and cardio." },
      { name: "Phase 3: The Polish", desc: "Water manipulation and carb loading strategies for a dry, hard look." }
    ],
    features: [
      "Carb cycling meal plans",
      "HIIT and LISS cardio protocols",
      "Supplement timing guide",
      "Weekly check-ins"
    ]
  },
  power: {
    title: "Power Monolith",
    subtitle: "Strength is Absolute",
    description: "Built for the big three: Squat, Bench, and Deadlift. This program is rooted in conjugate and linear periodization methods to break through plateaus and add serious weight to your total.",
    image: "/assets/images/protocols/protocol_powerlifting_1765792506192.png",
    stats: [
      { label: "Duration", value: "16 Weeks", icon: Calendar },
      { label: "Frequency", value: "4 Days/Week", icon: Clock },
      { label: "Focus", value: "SBD Max", icon: Target },
      { label: "Level", value: "Advanced", icon: BarChart },
    ],
    phases: [
      { name: "Block 1: Hypertrophy Base", desc: "Building the muscle necessary to move bigger weights." },
      { name: "Block 2: Strength Realization", desc: "Heavy triples and doubles. Refining technique under load." },
      { name: "Block 3: Peaking", desc: "Tapering volume to express maximal strength on test day." }
    ],
    features: [
      "RPE based autoregulation",
      "Competition day strategy",
      "Equipment selection guide",
      "Technique breakdown calls"
    ]
  },
  hybrid: {
    title: "1:1 Hybrid Coaching",
    subtitle: "The Elite Experience",
    description: "The complete package for those who demand the best. This is not a static PDF; this is a dynamic, evolving relationship where your programming changes as fast as your body does.",
    image: "/assets/images/protocols/protocol_contest_prep_1765792539931.png",
    stats: [
      { label: "Duration", value: "Ongoing", icon: Calendar },
      { label: "Support", value: "24/7 Access", icon: Clock },
      { label: "Style", value: "Fully Custom", icon: Target },
      { label: "Slots", value: "Limited", icon: BarChart },
    ],
    phases: [
      { name: "Initial Assessment", desc: "Full movement screen, lifestyle audit, and goal setting." },
      { name: "Micro-Cycles", desc: "Weekly program adjustments based on your bio-feedback." },
      { name: "Long Term Development", desc: "Year-long macrocycle planning for sustained progress." }
    ],
    features: [
      "Daily WhatsApp support",
      "Weekly video calls",
      "Full nutrition & supplementation management",
      "Travel & lifestyle accommodation"
    ]
  }
};

export const ProgramDetails: React.FC<ProgramDetailsProps> = ({ programId, onBack }) => {
  const program = programsData[programId];

  if (!program) return <div>Program not found</div>;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${program.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="absolute top-0 left-0 p-6 z-50">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-white/80 hover:text-lime-500 transition-colors uppercase font-bold italic tracking-wide"
          >
            <div className="bg-neutral-900/80 p-2 rounded-full border border-white/10 group-hover:border-lime-500 transition-colors">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Programs
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <span className="inline-block bg-lime-500 text-black text-xs font-black px-3 py-1 -skew-x-12 uppercase tracking-wider mb-4 animate-shine bg-[length:200%_auto]">
                <span className="block skew-x-12">Program Overview</span>
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-sport font-black italic text-5xl md:text-7xl uppercase text-white leading-none mb-4">
                {program.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl md:text-2xl text-neutral-300 font-medium italic">
                {program.subtitle}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <Reveal delay={0.3}>
              <div>
                <h2 className="font-sport font-bold italic text-3xl text-white uppercase mb-6">Mission Brief</h2>
                <p className="text-neutral-400 text-lg leading-relaxed border-l-4 border-lime-500 pl-6 hover:bg-white/5 transition-colors py-2 rounded-r">
                  {program.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div>
                <h2 className="font-sport font-bold italic text-3xl text-white uppercase mb-8">Phase Breakdown</h2>
                <div className="space-y-6">
                  {program.phases.map((phase: any, index: number) => (
                    <div key={index} className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg relative group hover:border-lime-500/50 transition-colors hover:-translate-y-1">
                      <div className="absolute top-0 left-0 w-1 h-full bg-neutral-800 group-hover:bg-lime-500 transition-colors"></div>
                      <h3 className="font-sport font-bold italic text-xl text-white uppercase mb-2 ml-2">{phase.name}</h3>
                      <p className="text-neutral-400 ml-2">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div>
                <h2 className="font-sport font-bold italic text-3xl text-white uppercase mb-6">What's Included</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {program.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-neutral-300 group">
                      <div className="p-1 rounded-full bg-neutral-800 group-hover:bg-lime-500 group-hover:text-black transition-colors">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="group-hover:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Sidebar Stats */}
          <div className="lg:col-span-1">
            <Reveal delay={0.6} direction="left">
              <div className="bg-neutral-900 border border-neutral-800 p-8 sticky top-24 rounded-xl hover:border-lime-500/30 transition-colors shadow-2xl">
                <h3 className="font-sport font-black italic text-2xl text-white uppercase mb-6 border-b border-white/10 pb-4">
                  Protocol Stats
                </h3>

                <div className="space-y-6 mb-8">
                  {program.stats.map((stat: any, index: number) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 bg-neutral-800 rounded text-lime-500 group-hover:bg-lime-500 group-hover:text-black transition-colors shadow-glow">
                        <stat.icon size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider group-hover:text-lime-500 transition-colors">{stat.label}</p>
                        <p className="text-white font-bold text-lg">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onBack();
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="block w-full py-4 bg-lime-500 hover:bg-lime-400 text-black font-black uppercase italic text-center tracking-wider skew-x-[-6deg] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(132,204,22,0.3)] group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                  <span className="block skew-x-[6deg] relative z-10">Join Protocol</span>
                </a>
                <p className="text-center text-neutral-500 text-xs mt-4 animate-pulse">
                  Limited spots available for this cohort.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
};