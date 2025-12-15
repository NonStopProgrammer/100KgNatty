import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  y?: number; // Y offset for translation
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  className = "",
  delay = 0,
  duration = 0.8,
  y = 30,
  direction
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) observer.disconnect();
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(50px)';
      case 'right': return 'translateX(-50px)';
      case 'up': return 'translateY(50px)';
      case 'down': return 'translateY(-50px)';
      default: return `translateY(${y}px)`;
    }
  };

  return (
    <div ref={ref} style={{ width }} className={`relative ${className}`}>
      <div
        style={{
          transform: isVisible ? 'translate(0, 0)' : getInitialTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `all ${duration}s cubic-bezier(0.5, 0, 0, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </div>
  );
};