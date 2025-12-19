
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
    onBack: () => void;
    // Add missing theme property to fix TypeScript error in App.tsx
    theme: 'dark' | 'light';
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack, theme }) => {
    // Implement theme logic consistent with other components
    const isDark = theme === 'dark';

    return (
        <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-neutral-900'} transition-colors duration-500`}>
            {/* Header */}
            <div className={`${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-200 shadow-sm'} border-b`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <button
                        onClick={onBack}
                        className={`group flex items-center gap-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'} hover:text-lime-500 transition-colors mb-6`}
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </button>
                    <h1 className={`font-sport font-black italic text-4xl sm:text-5xl uppercase tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                        Privacy <span className="text-lime-500">Policy</span>
                    </h1>
                    <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-500'} mt-2`}>Last updated: December 15, 2025</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-none text-left">

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            1. Information We Collect
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                We collect information that you provide directly to us when you:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Register for our training programs</li>
                                <li>Contact us through our website or email</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Participate in surveys or promotions</li>
                            </ul>
                            <p>
                                This may include your name, email address, phone number, fitness goals, health information, and payment details.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            2. How We Use Your Information
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>We use the information we collect to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Provide, maintain, and improve our training services</li>
                                <li>Process your transactions and send related information</li>
                                <li>Send you technical notices, updates, and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Develop personalized training and nutrition plans</li>
                                <li>Monitor and analyze trends, usage, and activities</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            3. Information Sharing and Disclosure
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                We do not share, sell, or rent your personal information to third parties except in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>With your consent</li>
                                <li>To comply with legal obligations</li>
                                <li>To protect our rights and prevent fraud</li>
                                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            4. Data Security
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
                                However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            5. Your Rights
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>You have the right to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Access and receive a copy of your personal data</li>
                                <li>Correct inaccurate or incomplete data</li>
                                <li>Request deletion of your personal data</li>
                                <li>Object to or restrict processing of your data</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            6. Cookies and Tracking
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                We use cookies and similar tracking technologies to track activity on our website and hold certain information.
                                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            7. Contact Us
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className={`${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-200 shadow-sm'} border p-4 rounded-lg mt-4`}>
                                <p className={`font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>100KG NATTY</p>
                                <p>Email: <a href="mailto:coach@100kgnatty.com" className="text-lime-500 hover:text-lime-400">coach@100kgnatty.com</a></p>
                                <p>Location: Navalur, Chennai, Tamilnadu</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};
