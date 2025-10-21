"use client";

import { useScrollReveal } from '../hooks/useScrollReveal';

interface SVGTextClipProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  highlightSpans?: number[]; // Indices of spans to highlight (e.g., [1] for accent color)
}

/**
 * Component that wraps text with fade-in + slide-up animation
 * Same as FadeInUp but with support for highlighting spans
 * Each word gets its own animation staggered in sequence
 */
export default function SVGTextClip({
  text,
  className = '',
  style = {},
  highlightSpans = [],
}: SVGTextClipProps) {
  const { elementRef, isVisible } = useScrollReveal();
  const words = text.split(' ');

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
        ...style,
      }}
    >
      {/* Render each word with staggered animation */}
      {words.map((word, wordIndex) => {
        const isHighlighted = highlightSpans.includes(wordIndex);
        const wordDelay = isVisible ? wordIndex * 30 : 0; // 30ms delay per word

        return (
          <span
            key={wordIndex}
            style={{
              display: 'inline-block',
              marginRight: '0.25em',
              color: isHighlighted ? 'var(--accent)' : 'var(--foreground)',
              transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: `${wordDelay}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0px)' : 'translateY(10px)',
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
