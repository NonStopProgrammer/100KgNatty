import React, { useState } from 'react';
import { ChevronDown, Search, Dumbbell, Apple, CreditCard, Users, HelpCircle, ArrowLeft } from 'lucide-react';
import { Reveal } from './Reveal';

interface FAQProps {
    theme: 'dark' | 'light';
    onBack?: () => void;
}

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

const faqData: FAQItem[] = [
    // Training Questions
    {
        id: '1',
        question: 'How are the training programs customized for me?',
        answer: 'Every program is built from scratch based on your goals, experience level, available equipment, schedule, and any injuries or limitations. Coach Aravindh personally reviews your assessment and creates a program tailored specifically to you. No cookie-cutter templates here!',
        category: 'training'
    },
    {
        id: '2',
        question: 'How often will my program be updated?',
        answer: 'Your program is updated every 4-6 weeks based on your progress, feedback, and evolving goals. For Elite Prep clients, adjustments can be made weekly as your competition approaches. You\'ll never plateau with our progressive programming approach.',
        category: 'training'
    },
    {
        id: '3',
        question: 'Can I train at home or do I need a gym?',
        answer: 'Both options work! We\'ll design your program based on your available equipment. Whether you have a full commercial gym, a basic home setup, or just resistance bands and bodyweight, we can create an effective program. Just let us know your situation during assessment.',
        category: 'training'
    },
    {
        id: '4',
        question: 'What if I have an injury or physical limitation?',
        answer: 'We work around injuries, not through them. During your assessment, you\'ll share any limitations, and Coach Aravindh will program exercises that are safe for you while still driving progress. We also coordinate with physiotherapists when needed.',
        category: 'training'
    },
    // Nutrition Questions
    {
        id: '5',
        question: 'Do you provide vegetarian-friendly meal plans?',
        answer: 'Absolutely! Being based in Chennai, we specialize in Indian vegetarian nutrition. We\'ll show you how to hit your protein targets with paneer, dal, legumes, tofu, and strategic supplementation. Many of our most successful transformations are with vegetarian clients.',
        category: 'nutrition'
    },
    {
        id: '6',
        question: 'Will I have to give up my favorite foods?',
        answer: 'No extreme diets here! We follow an 80/20 approach where 80% of your diet supports your goals and 20% is flexible for social occasions and cravings. Sustainability is key to long-term results. We\'ll teach you how to fit your favorite foods into your macros.',
        category: 'nutrition'
    },
    {
        id: '7',
        question: 'Do you recommend supplements?',
        answer: 'We take a food-first approach, but strategically recommend proven supplements like whey protein, creatine, and vitamin D when beneficial. We never push expensive or unnecessary supplements. All recommendations are optional and based on your specific needs.',
        category: 'nutrition'
    },
    // Pricing & Payment
    {
        id: '8',
        question: 'What payment methods do you accept?',
        answer: 'We accept UPI (GPay, PhonePe, Paytm), bank transfers (NEFT/IMPS), and international cards via Razorpay. EMI options are available for 3-month and longer packages. We\'ll provide all details after your consultation.',
        category: 'pricing'
    },
    {
        id: '9',
        question: 'Is there a money-back guarantee?',
        answer: 'Yes! We offer a 30-day satisfaction guarantee. If you follow the program and don\'t see results within 30 days, we\'ll either revise your plan completely or provide a full refund. Your success is our priority.',
        category: 'pricing'
    },
    {
        id: '10',
        question: 'Can I upgrade my plan later?',
        answer: 'Absolutely! Many clients start with Hybrid and upgrade to Elite Prep. You can upgrade anytime, and we\'ll prorate your existing subscription. Downgrades are processed at the end of your current billing cycle.',
        category: 'pricing'
    },
    // Getting Started
    {
        id: '11',
        question: 'How do I get started?',
        answer: 'Simple! Click "Apply Now" to fill out our assessment form. Coach Aravindh will review your application and schedule a free 15-minute video call to discuss your goals. If we\'re a good fit, you\'ll receive your customized program within 48-72 hours of payment.',
        category: 'general'
    },
    {
        id: '12',
        question: 'How much time do I need per day?',
        answer: 'Training sessions are typically 45-75 minutes, 4-6 days per week depending on your program. Meal prep can take 2-3 hours on a weekend. Check-ins require 10-15 minutes weekly. We work with your schedule to make it sustainable.',
        category: 'general'
    },
    {
        id: '13',
        question: 'Is online coaching as effective as in-person?',
        answer: 'For most people, yes! Online coaching actually offers advantages: more affordable, learn to train independently, flexible scheduling, and access to top coaches regardless of location. All you need is a phone to record your form for video reviews.',
        category: 'general'
    },
    {
        id: '14',
        question: 'What results can I expect and how soon?',
        answer: 'Results vary by individual, but most clients see visible changes within 4-8 weeks when following the program consistently. Strength gains often come faster (2-4 weeks). We focus on sustainable progress—typically 0.5-1kg fat loss or 0.25-0.5kg muscle gain per week.',
        category: 'general'
    },
];

const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'training', label: 'Training', icon: Dumbbell },
    { id: 'nutrition', label: 'Nutrition', icon: Apple },
    { id: 'pricing', label: 'Pricing', icon: CreditCard },
    { id: 'general', label: 'Getting Started', icon: Users },
];

export const FAQ: React.FC<FAQProps> = ({ theme, onBack }) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [openItems, setOpenItems] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const isDark = theme === 'dark';

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const filteredFAQs = faqData.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = searchQuery === '' ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section
            id="faq"
            className={`py-24 ${isDark ? 'bg-neutral-950' : 'bg-neutral-50'} relative overflow-hidden transition-colors duration-500 min-h-screen`}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 left-0 w-96 h-96 ${isDark ? 'bg-lime-500/5' : 'bg-lime-500/10'} rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2`} />
                <div className={`absolute bottom-0 right-0 w-96 h-96 ${isDark ? 'bg-lime-500/5' : 'bg-lime-500/10'} rounded-full blur-3xl translate-x-1/2 translate-y-1/2`} />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Back Button - Only shown when onBack is provided (standalone page mode) */}
                {onBack && (
                    <Reveal>
                        <button
                            onClick={onBack}
                            className={`mb-8 flex items-center gap-2 px-4 py-2 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 group ${isDark
                                    ? 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800 hover:border-lime-500/50'
                                    : 'bg-white text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 border border-neutral-200 hover:border-lime-500 shadow-sm'
                                }`}
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            <span>Back to Home</span>
                        </button>
                    </Reveal>
                )}

                {/* Section Header */}
                <Reveal>
                    <div className="text-center mb-12">
                        <span className={`inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider ${isDark ? 'bg-lime-500/10 text-lime-400 border border-lime-500/20' : 'bg-lime-100 text-lime-700 border border-lime-200'
                            } rounded-full`}>
                            Got Questions?
                        </span>
                        <h2 className={`font-sport font-black italic text-4xl sm:text-5xl uppercase tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'
                            } mb-4`}>
                            Frequently Asked <span className="text-lime-500">Questions</span>
                        </h2>
                        <p className={`text-lg ${isDark ? 'text-neutral-400' : 'text-neutral-600'} max-w-2xl mx-auto`}>
                            Everything you need to know about training with 100KG NATTY
                        </p>
                    </div>
                </Reveal>

                {/* Search Bar */}
                <Reveal delay={0.1}>
                    <div className="mb-8">
                        <div className={`relative max-w-md mx-auto`}>
                            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-neutral-500' : 'text-neutral-400'
                                }`} />
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 ${isDark
                                    ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-lime-500/50 focus:bg-neutral-900/80'
                                    : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-lime-500 focus:shadow-lg'
                                    } outline-none`}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold ${isDark ? 'text-neutral-500 hover:text-lime-400' : 'text-neutral-400 hover:text-lime-600'
                                        } transition-colors`}
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                </Reveal>

                {/* Category Tabs */}
                <Reveal delay={0.15}>
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            const isActive = activeCategory === category.id;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${isActive
                                        ? 'bg-lime-500 text-black shadow-lg shadow-lime-500/25'
                                        : isDark
                                            ? 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                                            : 'bg-white text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 border border-neutral-200 shadow-sm'
                                        }`}
                                >
                                    <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-black' : ''
                                        }`} />
                                    <span className="hidden sm:inline">{category.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {filteredFAQs.length === 0 ? (
                        <Reveal>
                            <div className={`text-center py-12 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                                <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                <p className="text-lg font-medium">No questions found</p>
                                <p className="text-sm mt-1">Try adjusting your search or category filter</p>
                            </div>
                        </Reveal>
                    ) : (
                        filteredFAQs.map((faq, index) => {
                            const isOpen = openItems.includes(faq.id);
                            return (
                                <Reveal key={faq.id} delay={index * 0.05}>
                                    <div
                                        className={`rounded-xl border-2 overflow-hidden transition-all duration-300 ${isOpen
                                            ? isDark
                                                ? 'bg-neutral-900 border-lime-500/30 shadow-lg shadow-lime-500/10'
                                                : 'bg-white border-lime-500/50 shadow-lg shadow-lime-500/10'
                                            : isDark
                                                ? 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                                                : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggleItem(faq.id)}
                                            className="w-full flex items-center justify-between p-5 text-left"
                                        >
                                            <span className={`font-bold text-base sm:text-lg pr-4 ${isDark ? 'text-white' : 'text-neutral-900'
                                                }`}>
                                                {faq.question}
                                            </span>
                                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                                                ? 'bg-lime-500 rotate-180'
                                                : isDark
                                                    ? 'bg-neutral-800 text-neutral-400'
                                                    : 'bg-neutral-100 text-neutral-500'
                                                }`}>
                                                <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-black' : ''}`} />
                                            </div>
                                        </button>

                                        {/* Answer with smooth animation */}
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className={`px-5 pb-5 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                                <div className={`h-px mb-4 ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
                                                <p className="leading-relaxed">{faq.answer}</p>

                                                {/* Category Tag */}
                                                <div className="mt-4">
                                                    <span className={`inline-block px-2 py-1 text-xs font-bold uppercase tracking-wider rounded ${isDark
                                                        ? 'bg-lime-500/10 text-lime-400'
                                                        : 'bg-lime-100 text-lime-700'
                                                        }`}>
                                                        {categories.find(c => c.id === faq.category)?.label || faq.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })
                    )}
                </div>

                {/* CTA */}
                <Reveal delay={0.3}>
                    <div className={`mt-12 text-center p-8 rounded-2xl ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200 shadow-lg'
                        }`}>
                        <p className={`text-lg mb-4 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                            Still have questions? We're here to help!
                        </p>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('contact');
                                if (element) {
                                    const headerOffset = 80;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                }
                            }}
                            className="inline-block transform skew-x-[-12deg] bg-lime-500 hover:bg-lime-400 text-black font-black uppercase tracking-wider px-8 py-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,204,22,0.4)] hover:-translate-y-0.5"
                        >
                            <span className="block skew-x-[12deg]">Contact Us</span>
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
