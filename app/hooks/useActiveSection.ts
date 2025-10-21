"use client";

import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'intro', 'projects', 'resume', 'contact'];
      let currentSection = 'home';
      let maxVisibility = 0;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Calculate how much of the section is visible in the viewport
          const viewportHeight = window.innerHeight;
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          
          // Calculate visible portion
          let visibleTop = Math.max(0, elementTop);
          let visibleBottom = Math.min(viewportHeight, elementBottom);
          let visibleHeight = Math.max(0, visibleBottom - visibleTop);
          let visibility = visibleHeight / viewportHeight;
          
          // If section is in viewport and has more visibility than current max, it's the active section
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Call immediately on mount
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}
