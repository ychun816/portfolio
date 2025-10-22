'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;

      const { clientX, clientY } = e;
      glowRef.current.style.left = `${clientX}px`;
      glowRef.current.style.top = `${clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-40 transition-opacity duration-300"
      style={{
        width: '500px',
        height: '500px',
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle, rgba(195, 240, 205, 0.15) 0%, rgba(195, 240, 205, 0.05) 40%, transparent 70%)`,
        filter: 'blur(40px)',
        opacity: 0.6,
      }}
    />
  );
}
