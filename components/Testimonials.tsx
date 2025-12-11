
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Marcus Thorne",
      role: "Professional Athlete",
      text: "PowerOn completely rewired how I approach my off-season. The data-driven programming is unmatched in the industry.",
      image: "https://picsum.photos/seed/user1/200/200"
    },
    {
      name: "Sarah Jenkins",
      role: "Executive",
      text: "Balancing a high-stress career and fitness was impossible until I joined the Performance tier. Efficiency and results.",
      image: "https://picsum.photos/seed/user2/200/200"
    },
    {
      name: "David Chen",
      role: "Bodybuilder",
      text: "The nutritional insight alone is worth the price. I reached single-digit body fat while feeling stronger than ever.",
      image: "https://picsum.photos/seed/user3/200/200"
    }
  ];

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-oswald font-bold mb-16 uppercase text-center">Elite <span className="text-[#CBFF00]">Voices</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 relative"
            >
              <div className="flex gap-1 text-[#CBFF00] mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#CBFF00" />)}
              </div>
              <p className="text-gray-300 italic mb-8">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.image} className="w-12 h-12 rounded-full border border-[#CBFF00]/30" alt={review.name} />
                <div>
                  <div className="font-bold uppercase tracking-tight">{review.name}</div>
                  <div className="text-xs text-[#CBFF00] uppercase tracking-widest">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
