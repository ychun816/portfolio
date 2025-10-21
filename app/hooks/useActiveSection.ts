"use client";

import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'intro', 'projects', 'resume', 'contact'];
      const viewportCenter = window.innerHeight / 2;
      let closestSection = 'home';
      let closestDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionCenter = (rect.top + rect.bottom) / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          
          // Find the section closest to the center of the viewport
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      }

      console.log('Active section updated:', closestSection);
      setActiveSection(closestSection);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add hashchange listener for when navbar links are clicked
    window.addEventListener('hashchange', () => {
      // Small delay to let the browser finish scrolling
      setTimeout(handleScroll, 50);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);

  return activeSection;
}
