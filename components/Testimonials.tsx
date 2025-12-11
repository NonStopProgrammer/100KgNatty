
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Arjun Raj",
      role: "Powerlifter • Chennai",
      text: "Aravindh fixed my squat pattern and sleep in 6 weeks. Zero PEDs, just precise cues and recovery work.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80&sat=-20"
    },
    {
      name: "Meera Subramanian",
      role: "Founder • Chennai",
      text: "Between late-night calls and flights, the natty-friendly programming kept me leaner and calmer than ever.",
      image: "https://images.unsplash.com/photo-1524504388940-25e0ea74a3ad?auto=format&fit=crop&w=200&q=80&sat=-20"
    },
    {
      name: "Rahul Verma",
      role: "Consultant • Delhi",
      text: "Dropped 9 kg while hitting PRs. Every check-in felt like having a national champ in my corner.",
      image: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?auto=format&fit=crop&w=200&q=80&sat=-20"
    },
    {
      name: "Priya Kulkarni",
      role: "Product Lead • Mumbai",
      text: "Lean mass up, stress down. The habit tracking and joint prep blocks are gold for busy lifters.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80&sat=-20"
    },
    {
      name: "Sanjay Iyer",
      role: "Coach • Coimbatore",
      text: "Used Aravindh’s templates for my athletes. Clean strength gains without burnout — truly natty-friendly.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80&sat=-20"
    },
    {
      name: "Zoya Khan",
      role: "Designer • Hyderabad",
      text: "Knee pain gone, posture fixed. The mobility primers before lifts were the missing link for me.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80&sat=-20"
    }
  ];

  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black via-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black via-black to-transparent pointer-events-none z-10"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-oswald font-bold uppercase">Client Results</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-2xl mx-auto">Real lifters, coached by Aravindh. Clean strength gains, better recovery, and stage-worthy conditioning.</p>
        </div>
        
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 32, ease: 'linear' } }}
          >
            {marqueeReviews.map((review, i) => (
              <motion.div
                key={`${review.name}-${i}`}
                whileHover={{ scale: 1.03, y: -6 }}
                className="glass-card p-8 relative w-[320px] md:w-[360px] lg:w-[380px] flex-shrink-0 overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#CBFF00]/0 via-[#CBFF00]/10 to-transparent opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="flex gap-1 text-[#CBFF00] mb-6 relative z-10">
                  {[...Array(5)].map((_, starIdx) => <Star key={starIdx} size={16} fill="#CBFF00" />)}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed relative z-10">"{review.text}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <img src={review.image} className="w-12 h-12 rounded-full border border-[#CBFF00]/30 object-cover" alt={review.name} />
                  <div>
                    <div className="font-bold uppercase tracking-tight">{review.name}</div>
                    <div className="text-xs text-[#CBFF00] uppercase tracking-widest">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
