import React, { useState } from 'react';
import { Send, Mail, MapPin, Instagram, Youtube, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      // Send email using EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_100kgnatty', // You'll need to configure this
          template_id: 'template_contact', // You'll need to configure this
          user_id: 'YOUR_EMAILJS_PUBLIC_KEY', // You'll need to configure this
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            goal: formData.goal,
            message: formData.message,
            to_email: 'coach@aravindhfitness.com'
          }
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', goal: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setIsSubmitting(false);
      setError(true);

      // Reset error message after 5 seconds
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <div className="w-full bg-black py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lime-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-sport font-black italic text-5xl sm:text-6xl uppercase tracking-tighter text-white mb-6">
              Ready to <span className="text-lime-500">Transform?</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Take the first step towards your fitness goals. Send me a message and let's discuss how I can help you achieve the body and confidence you deserve.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-3">
            <Reveal delay={0.2} width="100%">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label htmlFor="name" className="text-sm font-bold text-neutral-400 uppercase tracking-wide group-focus-within:text-lime-500 transition-colors">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 transition-all placeholder:text-neutral-600"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label htmlFor="email" className="text-sm font-bold text-neutral-400 uppercase tracking-wide group-focus-within:text-lime-500 transition-colors">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 transition-all placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label htmlFor="phone" className="text-sm font-bold text-neutral-400 uppercase tracking-wide group-focus-within:text-lime-500 transition-colors">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 transition-all placeholder:text-neutral-600"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label htmlFor="goal" className="text-sm font-bold text-neutral-400 uppercase tracking-wide group-focus-within:text-lime-500 transition-colors">Your Goal *</label>
                    <select
                      id="goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      required
                      className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 transition-all appearance-none text-neutral-400 focus:text-white"
                    >
                      <option value="" disabled>Select your goal</option>
                      <option value="hypertrophy">Muscle Gain</option>
                      <option value="fat_loss">Fat Loss</option>
                      <option value="strength">Strength</option>
                      <option value="contest">Competition Prep</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="message" className="text-sm font-bold text-neutral-400 uppercase tracking-wide group-focus-within:text-lime-500 transition-colors">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell me about your fitness journey and goals..."
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 transition-all placeholder:text-neutral-600 resize-none"
                  ></textarea>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 flex items-center gap-3 animate-fade-in-up">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-400 text-sm">
                      Failed to send message. Please email directly at <a href="mailto:coach@aravindhfitness.com" className="underline hover:text-red-300">coach@aravindhfitness.com</a>
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full py-4 font-black text-lg uppercase italic tracking-wider skew-x-[-12deg] transition-all flex items-center justify-center gap-2 group overflow-hidden relative ${submitted
                      ? 'bg-green-600 text-white cursor-default'
                      : error
                        ? 'bg-neutral-800 text-neutral-400 cursor-not-allowed'
                        : 'bg-lime-500 text-black hover:bg-lime-400 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(132,204,22,0.4)]'
                    }`}
                >
                  <div className={`absolute inset-0 bg-white/40 transform -translate-x-full transition-transform duration-500 skew-x-12 ${isSubmitting ? 'animate-shine' : 'group-hover:translate-x-full'}`}></div>
                  <span className="skew-x-[12deg] flex items-center gap-2 relative z-10">
                    {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                    {!isSubmitting && !submitted && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    {submitted && <CheckCircle className="w-5 h-5 animate-scale-in" />}
                  </span>
                </button>
              </form>
            </Reveal>
          </div>

          {/* Contact Info Section */}
          <div className="lg:col-span-2 space-y-8">
            <Reveal delay={0.4} width="100%">
              <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl backdrop-blur-sm hover:border-lime-500/30 transition-colors">
                <h3 className="font-sport font-bold italic text-xl text-white uppercase tracking-wide mb-6 border-b border-neutral-800 pb-4">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="p-3 bg-neutral-800 rounded-lg text-lime-500 group-hover:bg-lime-500 group-hover:text-black transition-all group-hover:scale-110 shadow-glow">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1 group-hover:text-lime-500 transition-colors">Email</p>
                      <a href="mailto:coach@aravindhfitness.com" className="text-white font-medium hover:text-lime-500 transition-colors">coach@aravindhfitness.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="p-3 bg-neutral-800 rounded-lg text-lime-500 group-hover:bg-lime-500 group-hover:text-black transition-all group-hover:scale-110 shadow-glow">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1 group-hover:text-lime-500 transition-colors">Location</p>
                      <p className="text-white font-medium">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5} width="100%">
              <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl backdrop-blur-sm hover:border-lime-500/30 transition-colors">
                <h3 className="font-sport font-bold italic text-xl text-white uppercase tracking-wide mb-6">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-neutral-800 text-neutral-400 rounded-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all hover:-translate-y-2 hover:shadow-lg">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-neutral-800 text-neutral-400 rounded-lg hover:bg-red-600 hover:text-white transition-all hover:-translate-y-2 hover:shadow-lg">
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center bg-neutral-800 text-neutral-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all hover:-translate-y-2 hover:shadow-lg">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Privacy Notice */}
            <Reveal delay={0.6} width="100%">
              <div className="bg-lime-500/10 border border-lime-500/30 p-4 rounded-lg">
                <p className="text-lime-500 text-xs text-center">
                  🔒 Your information is secure and will only be used to contact you about your fitness goals.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};