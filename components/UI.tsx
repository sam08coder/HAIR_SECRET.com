import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// --- Reveal Section (Scroll Animation) ---
export const RevealSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = "",
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon, className = "", ...props }) => {
  const baseStyles = "relative overflow-hidden px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 group hover-beam";
  
  const variants = {
    // Primary: Black background, White text (High contrast hint of black)
    primary: "bg-black text-white hover:bg-neutral-800 border border-transparent shadow-lg hover:shadow-xl",
    // Outline: Black border, black text
    outline: "bg-transparent text-black border border-black/20 hover:border-black hover:bg-black hover:text-white",
    // Ghost: Subtle hover
    ghost: "bg-transparent text-black hover:text-gold-500 p-0 hover-beam-none"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </button>
  );
};

// --- Card ---
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white border border-neutral-100 p-6 hover:-translate-y-2 transition-transform duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.15)] group ${className}`}>
      {children}
    </div>
  );
};