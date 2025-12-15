import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
    const sizes = {
        sm: { height: 'h-8' },
        md: { height: 'h-10' },
        lg: { height: 'h-12' }
    };

    const currentSize = sizes[size];

    return (
        <div className={`relative ${className}`}>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-lime-500 blur-xl opacity-30 animate-pulse-slow"></div>

            {/* Logo Image */}
            <img
                src="/assets/images/logo-combined.png"
                alt="100KG Natty"
                className={`${currentSize.height} w-auto relative z-10 drop-shadow-[0_0_10px_rgba(132,204,22,0.6)]`}
            />
        </div>
    );
};
