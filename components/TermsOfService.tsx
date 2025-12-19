
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
    onBack: () => void;
    // Add missing theme property to fix TypeScript error in App.tsx
    theme: 'dark' | 'light';
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack, theme }) => {
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
                        Terms of <span className="text-lime-500">Service</span>
                    </h1>
                    <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-500'} mt-2`}>Last updated: December 15, 2025</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-none text-left">

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            1. Acceptance of Terms
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                By accessing and using 100KG NATTY's services, you accept and agree to be bound by the terms and provisions of this agreement.
                                If you do not agree to these terms, please do not use our services.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            2. Services Description
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                100KG NATTY provides personal training, nutrition coaching, and fitness programming services. Our services include:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Customized workout programs</li>
                                <li>Nutrition and meal planning</li>
                                <li>Form analysis and technique coaching</li>
                                <li>Progress tracking and accountability</li>
                                <li>Online and in-person training options</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            3. User Responsibilities
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>As a user of our services, you agree to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Provide accurate and complete information</li>
                                <li>Consult with a physician before beginning any fitness program</li>
                                <li>Follow instructions and guidelines provided by your coach</li>
                                <li>Maintain confidentiality of your account credentials</li>
                                <li>Use services only for lawful purposes</li>
                                <li>Not share or redistribute proprietary training materials</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            4. Health and Safety Disclaimer
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                                <strong className="text-red-400">IMPORTANT:</strong> Exercise and nutrition programs involve inherent risks.
                                You should consult with your physician before beginning any fitness program. 100KG NATTY is not responsible for any injuries
                                or health issues that may occur as a result of participating in our programs.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            5. Payment and Refunds
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>Payment terms:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>All fees must be paid in advance unless otherwise agreed</li>
                                <li>Prices are subject to change with 30 days notice</li>
                                <li>Refunds are provided on a case-by-case basis within 14 days of purchase</li>
                                <li>No refunds for services already rendered</li>
                                <li>Subscription cancellations must be made before the next billing cycle</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            6. Intellectual Property
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                All content, including but not limited to training programs, meal plans, videos, and written materials,
                                are the intellectual property of 100KG NATTY. You may not:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Reproduce or distribute our materials without permission</li>
                                <li>Use our content for commercial purposes</li>
                                <li>Remove copyright or proprietary notices</li>
                                <li>Share login credentials with others</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            7. Limitation of Liability
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                100KG NATTY shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                                resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the services.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            8. Termination
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                We reserve the right to terminate or suspend your access to our services at any time, without prior notice,
                                for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            9. Changes to Terms
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                We reserve the right to modify these terms at any time. We will notify users of any material changes via email
                                or through our website. Continued use of our services after changes constitutes acceptance of the new terms.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className={`font-sport font-bold italic text-2xl ${isDark ? 'text-white' : 'text-neutral-900'} uppercase mb-4 border-l-4 border-lime-500 pl-4`}>
                            10. Contact Information
                        </h2>
                        <div className={`${isDark ? 'text-neutral-300' : 'text-neutral-700'} leading-relaxed space-y-4 ml-6`}>
                            <p>
                                For questions about these Terms of Service, please contact us:
                            </p>
                            <div className={`${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-200 shadow-sm'} border p-4 rounded-lg mt-4`}>
                                <p className={`font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>100KG NATTY</p>
                                <p>Email: <a href="mailto:coach@100kgnatty.com" className="text-lime-500 hover:text-lime-400">coach@100kgnatty.com</a></p>
                                <p>Location: Navalur, Chennai, Tamilnadu</p>
                                <p>Phone: <a href="tel:+919876543210" className="text-lime-500 hover:text-lime-400">+91 98765 43210</a></p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};
