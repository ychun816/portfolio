'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const blob4Ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Custom cursor follows exactly
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
      
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

      // Quaternary blob - mustard/amber accent at lower right
      if (blob4Ref.current) {
        setTimeout(() => {
          blob4Ref.current!.style.left = `${clientX + 180}px`;
          blob4Ref.current!.style.top = `${clientY + 180}px`;
        }, 45);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
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

  // Day mode: matching DayBackground palette with more pink and soft blue
  const dayGradient1 = `radial-gradient(
    circle,
    rgba(255, 180, 220, 0.68) 0%,
    rgba(245, 170, 210, 0.58) 15%,
    rgba(235, 160, 200, 0.42) 30%,
    transparent 50%
  )`;

  const dayGradient2 = `radial-gradient(
    circle,
    rgba(170, 200, 255, 0.65) 0%,
    rgba(180, 210, 260, 0.55) 18%,
    rgba(190, 220, 270, 0.35) 35%,
    transparent 55%
  )`;

  const dayGradient3 = `radial-gradient(
    circle,
    rgba(220, 180, 240, 0.62) 0%,
    rgba(210, 170, 230, 0.48) 20%,
    rgba(200, 160, 220, 0.32) 40%,
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
    rgba(255, 200, 200, 0.72) 0%,
    rgba(245, 190, 185, 0.48) 15%,
    transparent 45%
  )`;

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
        @keyframes cursorGlow {
          0%, 100% { 
            box-shadow: 0 0 15px 3px currentColor, 0 0 30px 6px currentColor, 0 0 45px 9px currentColor;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            box-shadow: 0 0 20px 5px currentColor, 0 0 40px 10px currentColor, 0 0 60px 15px currentColor;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0) rotate(0deg); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(180deg); }
        }
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
          25% { transform: translate(-50%, -50%) scale(1.08) rotate(90deg); }
          50% { transform: translate(-50%, -50%) scale(1.14) rotate(180deg); }
          75% { transform: translate(-50%, -50%) scale(1.10) rotate(270deg); }
        }
        .cursor-glow-blob-4 {
          animation: blobAmber 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
      `}</style>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50"
        style={{
          width: isHovering ? '24px' : '16px',
          height: isHovering ? '24px' : '16px',
          transition: 'width 0.2s, height 0.2s',
        }}
      >
        {/* Main cursor dot */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: isHovering ? '12px' : '8px',
            height: isHovering ? '12px' : '8px',
            borderRadius: '50%',
            backgroundColor: theme === 'night' ? '#C3F0CD' : '#FF69B4',
            transform: 'translate(-50%, -50%)',
            animation: 'cursorGlow 1.5s ease-in-out infinite',
            color: theme === 'night' ? '#C3F0CD' : '#FF69B4',
            transition: 'all 0.2s ease',
          }}
        />
        
        {/* Sparkle particles */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: theme === 'night' ? '#64B4F0' : '#FFC0CB',
              animation: `sparkle 2s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateX(${isHovering ? '18px' : '12px'})`,
              transition: 'transform 0.2s',
            }}
          />
        ))}
        
        {/* Outer ring on hover */}
        {isHovering && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: `2px solid ${theme === 'night' ? '#C3F0CD' : '#FF69B4'}`,
              transform: 'translate(-50%, -50%)',
              opacity: 0.4,
            }}
          />
        )}
      </div>

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
          opacity: theme === 'night' ? 0.40 : 0.35,
          mixBlendMode: theme === 'night' ? 'screen' : 'multiply',
        }}
      />
    </>
  );
}
