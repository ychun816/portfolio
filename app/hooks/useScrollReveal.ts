"use client";

import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when an element enters the viewport
 * and trigger scroll-based animations
 * 
 * Returns:
 * - ref: ref to attach to the element you want to animate
 * - isVisible: boolean indicating if element is in viewport
 * - triggerProgress: 0-1 value for animation progress
 */
export function useScrollReveal(options = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [triggerProgress, setTriggerProgress] = useState(0);

  useEffect(() => {
    if (!elementRef.current) return;

    // Find the scrollable main container
    const scrollContainer = document.querySelector('main');
    if (!scrollContainer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Element is visible when it enters viewport - keep it visible once triggered
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Calculate progress based on how much of the element is visible
          const progress = Math.min(1, entry.intersectionRatio * 2);
          setTriggerProgress(progress);
        } else {
          // Only set invisible if element is above the viewport (scrolled past)
          // This prevents flickering and allows animations to stay visible
          if (entry.boundingClientRect.bottom < 0) {
            // Element is above viewport, but we keep it visible (one-time animation)
            // Uncomment below if you want animations to reset when scrolling back up
            // setIsVisible(false);
            // setTriggerProgress(0);
          }
        }
      },
      {
        root: scrollContainer, // Use the main container as the viewport
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px 0px 0px 0px', // Trigger animation when element enters viewport
      }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { elementRef, isVisible, triggerProgress };
}
