'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Night mode: accent green glow
  const nightGradient = `radial-gradient(
    circle,
    rgba(195, 240, 205, 0.25) 0%,
    rgba(195, 240, 205, 0.15) 25%,
    rgba(195, 240, 205, 0.08) 50%,
    transparent 70%
  )`;

  // Day mode: soft purple/lavender blend
  const dayGradient = `radial-gradient(
    circle,
    rgba(200, 180, 240, 0.20) 0%,
    rgba(220, 190, 250, 0.12) 30%,
    rgba(210, 185, 245, 0.06) 50%,
    transparent 70%
  )`;

  return (
    <>
      <style>{`
        @keyframes blobPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          25% { transform: translate(-50%, -50%) scale(1.1) rotate(90deg); }
          50% { transform: translate(-50%, -50%) scale(0.95) rotate(180deg); }
          75% { transform: translate(-50%, -50%) scale(1.05) rotate(270deg); }
        }
        .cursor-glow-blob {
          animation: blobPulse 4s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
        }
      `}</style>

      <div
        ref={glowRef}
        className="pointer-events-none fixed z-40 cursor-glow-blob"
        style={{
          width: '600px',
          height: '600px',
          background: theme === 'night' ? nightGradient : dayGradient,
          filter: 'blur(50px)',
          opacity: theme === 'night' ? 0.7 : 0.5,
          mixBlendMode: theme === 'night' ? 'screen' : 'multiply',
        }}
      />
    </>
  );
}
