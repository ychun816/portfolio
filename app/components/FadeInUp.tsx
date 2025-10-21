"use client";

import { useScrollReveal } from '../hooks/useScrollReveal';

interface FadeInUpProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number; // Additional delay in milliseconds
}

/**
 * Component that fades in and slides up when it enters the viewport
 * Perfect for paragraphs, section headings, and other body content
 */
export default function FadeInUp({
  children,
  className = '',
  style = {},
  delay = 0,
}: FadeInUpProps) {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
