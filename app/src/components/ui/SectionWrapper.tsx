"use client";

import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={`min-h-screen snap-start flex items-center justify-center px-4 py-16 ${className}`}
    >
      {children}
    </section>
  );
}
