"use client";

import { useEffect, useState, useRef } from 'react';
import { SECTION_IDS } from '@/lib/constants';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const lastActiveSectionRef = useRef<string>('home');

  useEffect(() => {
    const scrollContainer = document.querySelector('main');

    if (!scrollContainer) return;

    const handleScroll = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      const containerCenter = containerRect.height / 2;

      let closestSection = 'home';
      let closestDistance = Infinity;

      for (const section of SECTION_IDS) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calculate distance from section center to container center
          const sectionCenter = (rect.top + rect.bottom) / 2;
          const distance = Math.abs(sectionCenter - containerCenter);

          // Prioritize earlier sections when distances are very close (50px tolerance)
          if (
            distance < closestDistance - 50 ||
            (Math.abs(distance - closestDistance) <= 50 &&
              SECTION_IDS.indexOf(section) < SECTION_IDS.indexOf(closestSection as (typeof SECTION_IDS)[number]))
          ) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      }

      // Only update state if the active section changed
      if (lastActiveSectionRef.current !== closestSection) {
        lastActiveSectionRef.current = closestSection;
        setActiveSection(closestSection);
      }
    };

    // Initial check
    handleScroll();

    // Listen to scroll event on the container itself
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add hashchange listener for when navbar links are clicked
    const handleHashChange = () => setTimeout(handleScroll, 50);
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return activeSection;
}
