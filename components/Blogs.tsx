
import React, { useState } from 'react';
import { ArrowLeft, Clock, User, Calendar, BookOpen, Search, Filter } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { Reveal } from './Reveal';

interface BlogsProps {
    onBack: () => void;
    onSelectBlog: (blogId: string) => void;
    theme: 'dark' | 'light';
}

export const Blogs: React.FC<BlogsProps> = ({ onBack, onSelectBlog, theme }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const isDark = theme === 'dark';

    const categories = ['All', 'Training Tips', 'Nutrition', 'Success Story', 'Science', 'Program Guide'];

    const filteredBlogs = blogPosts.filter(blog => {
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-500`}>
            {/* Hero Section */}
            <div className={`relative ${isDark ? 'bg-gradient-to-b from-neutral-950 to-black border-white/5' : 'bg-gradient-to-b from-neutral-50 to-white border-black/5'} border-b overflow-hidden`}>
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${isDark ? 'bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]'} bg-[size:40px_40px] opacity-30`}></div>

                {/* Glow Effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-left">
                    {/* Back Button */}
                    <Reveal>
                        <button
                            onClick={onBack}
                            className={`group mb-8 flex items-center gap-2 ${isDark ? 'text-neutral-400 hover:text-lime-400' : 'text-neutral-600 hover:text-lime-600'} transition-colors`}
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Back to Home</span>
                        </button>
                    </Reveal>

                    {/* Title */}
                    <Reveal delay={0.1}>
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="bg-lime-500 text-black text-xs font-black px-3 py-1 -skew-x-12 uppercase tracking-wider">
                                    <span className="block skew-x-12">Knowledge Base</span>
                                </span>
                            </div>
                            <h1 className={`font-sport font-black italic text-5xl sm:text-7xl uppercase tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'} mb-4`}>
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600 animate-shine bg-[length:200%_auto]">Iron</span> Blog
                            </h1>
                            <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'} text-lg max-w-2xl`}>
                                Science-backed training tips, nutrition guides, and success stories to fuel your fitness journey.
                            </p>
                        </div>
                    </Reveal>

                    {/* Search & Filter */}
                    <Reveal delay={0.2}>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            {/* Search Bar */}
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className={`w-full ${isDark ? 'bg-neutral-900/50 border-white/10 text-white' : 'bg-neutral-100 border-black/10 text-neutral-900'} border rounded-lg pl-12 pr-4 py-3 placeholder:text-neutral-500 focus:outline-none focus:border-lime-500/50 transition-colors`}
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="relative">
                                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className={`appearance-none ${isDark ? 'bg-neutral-900/50 border-white/10 text-white' : 'bg-neutral-100 border-black/10 text-neutral-900'} border rounded-lg pl-12 pr-10 py-3 focus:outline-none focus:border-lime-500/50 transition-colors cursor-pointer`}
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </Reveal>

                    {/* Category Pills */}
                    <Reveal delay={0.3}>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category, index) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${selectedCategory === category
                                            ? 'bg-lime-500 text-black scale-105 shadow-md'
                                            : `${isDark ? 'bg-neutral-900/50 text-neutral-400 border-white/10 hover:bg-neutral-800' : 'bg-neutral-100 text-neutral-600 border-black/10 hover:bg-neutral-200'} hover:text-current border`
                                        }`}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {filteredBlogs.length === 0 ? (
                    <div className="text-center py-20">
                        <BookOpen className={`w-16 h-16 ${isDark ? 'text-neutral-800' : 'text-neutral-200'} mx-auto mb-4`} />
                        <p className="text-neutral-500 text-lg">No articles found. Try a different search or category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog, index) => (
                            <Reveal key={blog.id} delay={index * 0.1} width="100%">
                                <article
                                    onClick={() => onSelectBlog(blog.id)}
                                    className={`group cursor-pointer ${isDark ? 'bg-neutral-900/30 border-white/5' : 'bg-white border-black/10 shadow-sm'} border rounded-lg overflow-hidden hover:border-lime-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)] text-left`}
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black via-black/40' : 'from-black/60 via-transparent'} to-transparent`}></div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-lime-500 text-black text-xs font-black px-3 py-1 -skew-x-12 uppercase tracking-wider">
                                                <span className="block skew-x-12 flex items-center gap-1">
                                                    <span>{blog.categoryIcon}</span>
                                                    {blog.category}
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <User className="w-3.5 h-3.5" />
                                                {blog.author}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {blog.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {blog.readTime}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className={`font-sport font-bold italic text-xl ${isDark ? 'text-white' : 'text-neutral-900'} mb-3 group-hover:text-lime-500 transition-colors line-clamp-2`}>
                                            {blog.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'} text-sm leading-relaxed line-clamp-3 mb-4`}>
                                            {blog.excerpt}
                                        </p>

                                        {/* Read More */}
                                        <div className="flex items-center gap-2 text-lime-500 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                                            <span>Read Article</span>
                                            <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className={`border-t ${isDark ? 'border-white/5 bg-gradient-to-b from-black to-neutral-950' : 'border-black/5 bg-gradient-to-b from-white to-neutral-50'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <Reveal>
                        <div className="text-center">
                            <h2 className={`font-sport font-black italic text-4xl sm:text-5xl uppercase tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'} mb-4`}>
                                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">Transform?</span>
                            </h2>
                            <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'} text-lg mb-8 max-w-2xl mx-auto`}>
                                Stop reading and start training. Apply for personalized coaching and get the results you deserve.
                            </p>
                            <button
                                onClick={onBack}
                                className="group relative px-8 py-4 bg-lime-500 hover:bg-lime-400 text-black font-black uppercase italic tracking-wider skew-x-[-12deg] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/40 w-full h-full transform skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                                <span className="block skew-x-[12deg] flex items-center gap-2 relative z-10">
                                    Start Your Journey
                                    <ArrowLeft className="w-5 h-5 rotate-180 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};
