import React from 'react';
import { ArrowLeft, Clock, User, Calendar, Share2, BookmarkPlus } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogData';
import { Reveal } from './Reveal';

interface BlogDetailProps {
    blogId: string;
    onBack: () => void;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ blogId, onBack }) => {
    const blog = blogPosts.find(b => b.id === blogId);

    if (!blog) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-white text-2xl font-bold mb-4">Blog not found</h2>
                    <button onClick={onBack} className="text-lime-400 hover:text-lime-300">
                        Go back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Image Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>

                {/* Back Button */}
                <div className="absolute top-8 left-4 sm:left-8 z-20">
                    <Reveal>
                        <button
                            onClick={onBack}
                            className="group flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-white hover:bg-black/70 hover:border-lime-500/50 transition-all"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Back</span>
                        </button>
                    </Reveal>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                    <div className="max-w-4xl mx-auto">
                        <Reveal delay={0.1}>
                            <div className="mb-4">
                                <span className="bg-lime-500 text-black text-xs font-black px-3 py-1 -skew-x-12 uppercase tracking-wider inline-block">
                                    <span className="block skew-x-12 flex items-center gap-1">
                                        <span>{blog.categoryIcon}</span>
                                        {blog.category}
                                    </span>
                                </span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <h1 className="font-sport font-black italic text-4xl sm:text-6xl uppercase tracking-tighter text-white mb-6 leading-tight">
                                {blog.title}
                            </h1>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-neutral-300">
                                <span className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-lime-500" />
                                    <span className="font-medium">{blog.author}</span>
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-lime-500" />
                                    {blog.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-lime-500" />
                                    {blog.readTime}
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
                {/* Introduction */}
                <Reveal delay={0.1}>
                    <div className="mb-12">
                        <p className="text-neutral-300 text-lg leading-relaxed first-letter:text-6xl first-letter:font-sport first-letter:font-black first-letter:italic first-letter:text-lime-500 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                            {blog.content.intro}
                        </p>
                    </div>
                </Reveal>

                {/* YouTube Video if available */}
                {blog.youtubeVideoId && (
                    <Reveal delay={0.2}>
                        <div className="mb-12 relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${blog.youtubeVideoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </Reveal>
                )}

                {/* Content Sections */}
                {blog.content.sections.map((section, index) => (
                    <Reveal key={index} delay={0.1 * (index + 3)}>
                        <section className="mb-12">
                            {/* Section Heading */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-12 h-1 bg-lime-500 skew-x-[-12deg]"></span>
                                    <h2 className="font-sport font-bold italic text-3xl text-white uppercase tracking-tight">
                                        {section.heading}
                                    </h2>
                                </div>
                                <p className="text-neutral-300 text-lg leading-relaxed">
                                    {section.content}
                                </p>
                            </div>

                            {/* Section Points */}
                            {section.points && section.points.length > 0 && (
                                <ul className="space-y-4">
                                    {section.points.map((point, pointIndex) => {
                                        // Check if point contains markdown bold (**text**)
                                        const parts = point.split(/(\*\*.*?\*\*)/g);

                                        return (
                                            <li key={pointIndex} className="flex items-start gap-4 group">
                                                <span className="flex-shrink-0 w-2 h-2 bg-lime-500 rounded-full mt-2.5 group-hover:scale-150 transition-transform"></span>
                                                <p className="text-neutral-400 leading-relaxed flex-1">
                                                    {parts.map((part, i) => {
                                                        if (part.startsWith('**') && part.endsWith('**')) {
                                                            return (
                                                                <strong key={i} className="text-white font-bold">
                                                                    {part.slice(2, -2)}
                                                                </strong>
                                                            );
                                                        }
                                                        return <span key={i}>{part}</span>;
                                                    })}
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </section>
                    </Reveal>
                ))}

                {/* Conclusion */}
                <Reveal delay={0.5}>
                    <div className="mt-16 p-8 bg-gradient-to-br from-lime-500/10 to-green-500/5 border-l-4 border-lime-500 rounded-r-lg">
                        <h3 className="font-sport font-bold italic text-2xl text-white uppercase mb-4 flex items-center gap-2">
                            <span className="text-lime-500">→</span>
                            Key Takeaway
                        </h3>
                        <p className="text-neutral-300 text-lg leading-relaxed">
                            {blog.content.conclusion}
                        </p>
                    </div>
                </Reveal>

                {/* Author Bio */}
                <Reveal delay={0.6}>
                    <div className="mt-16 p-8 bg-neutral-900/30 border border-white/5 rounded-lg">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-lime-500 to-green-600 rounded-full flex items-center justify-center">
                                <span className="font-sport font-black italic text-3xl text-black">A</span>
                            </div>
                            <div>
                                <h4 className="font-sport font-bold italic text-2xl text-white mb-2">
                                    {blog.author}
                                </h4>
                                <p className="text-neutral-400 leading-relaxed mb-4">
                                    NASM Certified Personal Trainer & CSCS. Mr. Tamilnadu & ICN Bodybuilding Nationals Champion.
                                    Specializing in natural bodybuilding, strength training, and evidence-based coaching for over 10 years.
                                </p>
                                <div className="flex gap-3">
                                    <a href="https://www.instagram.com/trainwitharavindh" target="_blank" rel="noopener noreferrer" className="text-lime-500 hover:text-lime-400 text-sm font-medium transition-colors">
                                        Follow on Instagram →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Related Articles CTA */}
                <Reveal delay={0.7}>
                    <div className="mt-16 text-center">
                        <button
                            onClick={onBack}
                            className="group relative px-8 py-4 bg-lime-500 hover:bg-lime-400 text-black font-black uppercase italic tracking-wider skew-x-[-12deg] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/40 w-full h-full transform skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                            <span className="block skew-x-[12deg] flex items-center gap-2 relative z-10">
                                <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
                                Back to All Articles
                            </span>
                        </button>
                    </div>
                </Reveal>
            </article>
        </div>
    );
};
