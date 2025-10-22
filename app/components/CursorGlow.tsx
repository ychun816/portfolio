'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const blob4Ref = useRef<HTMLDivElement>(null);
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

      // Quaternary blob - mustard/amber accent
      if (blob4Ref.current) {
        setTimeout(() => {
          blob4Ref.current!.style.left = `${clientX - 60}px`;
          blob4Ref.current!.style.top = `${clientY - 60}px`;
        }, 45);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Night mode: sapphire blue palette (matching NightBackground)
  const nightGradient1 = `radial-gradient(
    circle,
    rgba(100, 180, 240, 0.45) 0%,
    rgba(110, 190, 255, 0.35) 15%,
    rgba(120, 200, 260, 0.25) 30%,
    transparent 50%
  )`;

  const nightGradient2 = `radial-gradient(
    circle,
    rgba(75, 160, 220, 0.40) 0%,
    rgba(95, 180, 250, 0.30) 18%,
    rgba(115, 200, 265, 0.18) 35%,
    transparent 55%
  )`;

  const nightGradient3 = `radial-gradient(
    circle,
    rgba(195, 240, 205, 0.40) 0%,
    rgba(200, 245, 210, 0.28) 20%,
    rgba(205, 250, 215, 0.18) 40%,
    transparent 60%
  )`;

  // Day mode: mustard yellow and blue palette
  const dayGradient1 = `radial-gradient(
    circle,
    rgba(220, 160, 80, 0.68) 0%,
    rgba(210, 150, 70, 0.58) 15%,
    rgba(200, 140, 60, 0.42) 30%,
    transparent 50%
  )`;

  const dayGradient2 = `radial-gradient(
    circle,
    rgba(140, 180, 255, 0.65) 0%,
    rgba(160, 195, 260, 0.55) 18%,
    rgba(180, 210, 270, 0.35) 35%,
    transparent 55%
  )`;

  const dayGradient3 = `radial-gradient(
    circle,
    rgba(230, 190, 100, 0.62) 0%,
    rgba(220, 180, 90, 0.48) 20%,
    rgba(210, 170, 80, 0.32) 40%,
    transparent 60%
  )`;

  // Mustard/Amber accent for both themes
  const nightAmberGradient = `radial-gradient(
    circle,
    rgba(220, 160, 80, 0.55) 0%,
    rgba(210, 150, 70, 0.40) 20%,
    rgba(200, 140, 60, 0.22) 40%,
    transparent 60%
  )`;

  const dayAmberGradient = `radial-gradient(
    circle,
    rgba(255, 200, 100, 0.60) 0%,
    rgba(240, 185, 85, 0.45) 20%,
    rgba(225, 170, 70, 0.28) 40%,
    transparent 60%
  )`;

  return (
    <>
      <style>{`
        @keyframes blobPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.08); }
        }
        @keyframes blobWave {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          25% { transform: translate(-50%, -50%) scale(1.06) rotate(45deg); }
          50% { transform: translate(-50%, -50%) scale(1.1) rotate(90deg); }
          75% { transform: translate(-50%, -50%) scale(1.05) rotate(180deg); }
        }
        @keyframes blobSway {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          25% { transform: translate(-50%, -50%) scale(1.03) rotate(45deg); }
          50% { transform: translate(-50%, -50%) scale(1.07) rotate(90deg); }
          75% { transform: translate(-50%, -50%) scale(1.04) rotate(180deg); }
        }
        .cursor-glow-blob-1 {
          animation: blobPulse 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
        .cursor-glow-blob-2 {
          animation: blobWave 3.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
        .cursor-glow-blob-3 {
          animation: blobSway 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
        @keyframes blobAmber {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50% { transform: translate(-50%, -50%) scale(1.12) rotate(180deg); }
        }
        .cursor-glow-blob-4 {
          animation: blobAmber 2.2s ease-in-out infinite;
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
          opacity: theme === 'night' ? 0.55 : 1.0,
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
          opacity: theme === 'night' ? 0.48 : 0.92,
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
          opacity: theme === 'night' ? 0.50 : 0.88,
          mixBlendMode: theme === 'night' ? 'screen' : 'multiply',
        }}
      />

      {/* Quaternary blob - mustard/amber accent */}
      <div
        ref={blob4Ref}
        className="pointer-events-none fixed z-25 cursor-glow-blob-4"
        style={{
          width: '550px',
          height: '550px',
          background: theme === 'night' ? nightAmberGradient : dayAmberGradient,
          filter: 'blur(70px)',
          opacity: theme === 'night' ? 0.40 : 0.78,
          mixBlendMode: theme === 'night' ? 'screen' : 'multiply',
        }}
      />
    </>
  );
}
