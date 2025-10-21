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

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Element is visible when it enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Calculate progress based on how much of the element is visible
          const progress = Math.min(1, entry.intersectionRatio * 2);
          setTriggerProgress(progress);
        } else if (entry.boundingClientRect.top > 0) {
          // Element hasn't reached viewport yet
          setIsVisible(false);
          setTriggerProgress(0);
        }
      },
      {
        root: scrollContainer, // Use the main container as the viewport
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px 0px -100px 0px', // Trigger animation slightly before element is fully visible
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
