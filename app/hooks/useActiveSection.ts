"use client";

import { useEffect, useState, useRef } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const lastActiveSectionRef = useRef<string>('home');

  useEffect(() => {
    // Find the scrollable container (the main element)
    const scrollContainer = document.querySelector('main');
    
    if (!scrollContainer) {
      console.warn('Scroll container not found');
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'intro', 'certificates', 'projects',  'resume', 'contact'];
      
      // Get the bounding rect of the scroll container
      const containerRect = scrollContainer.getBoundingClientRect();
      const containerCenter = containerRect.height / 2;
      
      let closestSection = 'home';
      let closestDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calculate distance from section center to container center
          const sectionCenter = (rect.top + rect.bottom) / 2;
          const distance = Math.abs(sectionCenter - containerCenter);
          
          console.log(`${section}: distance=${distance.toFixed(0)}, top=${rect.top.toFixed(0)}, bottom=${rect.bottom.toFixed(0)}`);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      }

      // Only update state if the section actually changed
      if (lastActiveSectionRef.current !== closestSection) {
        console.log('>>> Active section changed to:', closestSection);
        lastActiveSectionRef.current = closestSection;
        setActiveSection(closestSection);
      }
    };

    // Initial check
    handleScroll();

    // Listen to scroll event on the container itself
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add hashchange listener for when navbar links are clicked
    const handleHashChange = () => {
      console.log('Hash changed');
      setTimeout(handleScroll, 50);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return activeSection;
}
