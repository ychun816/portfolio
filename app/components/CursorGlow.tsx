'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Primary blob follows cursor exactly
      if (glowRef.current) {
        glowRef.current.style.left = `${clientX}px`;
        glowRef.current.style.top = `${clientY}px`;
      }

      // Secondary blob with offset and slight lag
      if (blob2Ref.current) {
        setTimeout(() => {
          blob2Ref.current!.style.left = `${clientX + 80}px`;
          blob2Ref.current!.style.top = `${clientY - 80}px`;
        }, 30);
      }

      // Tertiary blob with different offset
      if (blob3Ref.current) {
        setTimeout(() => {
          blob3Ref.current!.style.left = `${clientX - 100}px`;
          blob3Ref.current!.style.top = `${clientY + 60}px`;
        }, 60);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Night mode: sapphire blue palette (matching NightBackground)
  const nightGradient1 = `radial-gradient(
    circle,
    rgba(100, 180, 240, 0.65) 0%,
    rgba(110, 190, 255, 0.55) 20%,
    rgba(120, 200, 260, 0.40) 40%,
    rgba(130, 210, 270, 0.20) 60%,
    transparent 80%
  )`;

  const nightGradient2 = `radial-gradient(
    circle,
    rgba(75, 160, 220, 0.60) 0%,
    rgba(95, 180, 250, 0.45) 25%,
    rgba(115, 200, 265, 0.30) 45%,
    rgba(125, 210, 270, 0.15) 65%,
    transparent 85%
  )`;

  const nightGradient3 = `radial-gradient(
    circle,
    rgba(195, 240, 205, 0.55) 0%,
    rgba(200, 245, 210, 0.40) 30%,
    rgba(205, 250, 215, 0.25) 50%,
    rgba(210, 255, 220, 0.12) 70%,
    transparent 90%
  )`;

  // Day mode: dreamy purple, pink, blue palette (matching DayBackground)
  const dayGradient1 = `radial-gradient(
    circle,
    rgba(180, 160, 240, 0.60) 0%,
    rgba(190, 170, 250, 0.50) 20%,
    rgba(200, 180, 260, 0.38) 40%,
    rgba(210, 190, 265, 0.20) 60%,
    transparent 80%
  )`;

  const dayGradient2 = `radial-gradient(
    circle,
    rgba(255, 160, 210, 0.58) 0%,
    rgba(245, 180, 220, 0.45) 25%,
    rgba(235, 200, 230, 0.30) 45%,
    rgba(225, 210, 240, 0.15) 65%,
    transparent 85%
  )`;

  const dayGradient3 = `radial-gradient(
    circle,
    rgba(140, 180, 255, 0.55) 0%,
    rgba(160, 195, 260, 0.40) 30%,
    rgba(180, 210, 270, 0.25) 50%,
    rgba(200, 225, 280, 0.12) 70%,
    transparent 90%
  )`;

  return (
    <>
      <style>{`
        @keyframes blobPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          25% { transform: translate(-50%, -50%) scale(1.15); }
          50% { transform: translate(-50%, -50%) scale(0.9); }
          75% { transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes blobWave {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          33% { transform: translate(-50%, -50%) scale(1.2) rotate(120deg); }
          66% { transform: translate(-50%, -50%) scale(0.95) rotate(240deg); }
        }
        @keyframes blobSway {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50% { transform: translate(-50%, -50%) scale(1.08) rotate(180deg); }
        }
        .cursor-glow-blob-1 {
          animation: blobPulse 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
        }
        .cursor-glow-blob-2 {
          animation: blobWave 4s cubic-bezier(0.26, 0.46, 0.44, 0.94) infinite;
        }
        .cursor-glow-blob-3 {
          animation: blobSway 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* Primary blob - main accent color */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-40 cursor-glow-blob-1"
        style={{
          width: '900px',
          height: '900px',
          background: theme === 'night' ? nightGradient1 : dayGradient1,
          filter: 'blur(80px)',
          opacity: theme === 'night' ? 1.0 : 0.90,
          mixBlendMode: theme === 'night' ? 'screen' : 'multiply',
        }}
      />

      {/* Secondary blob - offset, different color */}
      <div
        ref={blob2Ref}
        className="pointer-events-none fixed z-35 cursor-glow-blob-2"
        style={{
          width: '750px',
          height: '750px',
          background: theme === 'night' ? nightGradient2 : dayGradient2,
          filter: 'blur(75px)',
          opacity: theme === 'night' ? 0.85 : 0.80,
          mixBlendMode: theme === 'night' ? 'screen' : 'multiply',
        }}
      />

      {/* Tertiary blob - accent green for night / blue for day */}
      <div
        ref={blob3Ref}
        className="pointer-events-none fixed z-30 cursor-glow-blob-3"
        style={{
          width: '650px',
          height: '650px',
          background: theme === 'night' ? nightGradient3 : dayGradient3,
          filter: 'blur(65px)',
          opacity: theme === 'night' ? 0.90 : 0.75,
          mixBlendMode: theme === 'night' ? 'screen' : 'multiply',
        }}
      />
    </>
  );
}
