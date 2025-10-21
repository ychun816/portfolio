"use client";

import { useEffect, useState } from 'react';

export default function DayBackground() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduced(mq.matches);
      const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
      if (mq.addEventListener) mq.addEventListener('change', handler);
      else mq.addListener(handler);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener('change', handler as any);
        else mq.removeListener(handler as any);
      };
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: '#faf8f6ff' }}>
      <style>{`
        @keyframes rotate-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-fast-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-rotate-fast {
          animation: rotate-fast 24s linear infinite;
        }
        .animate-rotate-fast-reverse {
          animation: rotate-fast-reverse 24s linear infinite;
        }
      `}</style>
      <style>{`
        .bg-blob { filter: blur(30px); transform-origin: center; }
        @keyframes blobMove1 { 0% { transform: translate(-8%, -6%) scale(0.98); } 35% { transform: translate(10%, 8%) scale(1.02); } 100% { transform: translate(-8%, -6%) scale(0.98); } }
        @keyframes blobMove2 { 0% { transform: translate(12%, 4%) scale(1); } 40% { transform: translate(-10%, -12%) scale(1.06); } 100% { transform: translate(12%, 4%) scale(1); } }
        @keyframes blobMove3 { 0% { transform: translate(-4%, 16%) scale(1.03); } 38% { transform: translate(12%, -6%) scale(0.99); } 100% { transform: translate(-4%, 16%) scale(1.03); } }
        @keyframes blobMove4 { 0% { transform: translate(6%, -10%) scale(1.01); } 42% { transform: translate(-6%, 8%) scale(0.97); } 100% { transform: translate(6%, -10%) scale(1.01); } }
        @keyframes blobMove5 { 0% { transform: translate(-12%, 8%) scale(0.99); } 45% { transform: translate(8%, -4%) scale(1.03); } 100% { transform: translate(-12%, 8%) scale(0.99); } }
        .blob-1 { animation: blobMove1 13s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-2 { animation: blobMove2 15s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-3 { animation: blobMove3 14s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-4 { animation: blobMove4 16s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-5 { animation: blobMove5 17s cubic-bezier(.2,.6,.3,.8) infinite; }
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
        }
        .grain-overlay {
          opacity: 0.15;
          mix-blend-mode: overlay;
        }
        @media (prefers-reduced-motion: reduce) { .blob-1, .blob-2, .blob-3, .blob-4, .blob-5, .grain-overlay { animation: none !important; } }
      `}</style>

      {/* Gradient blobs — soft blue, pink, purple palette */}
      <div
        className={`absolute -left-80 -top-60 w-[2000px] h-[2000px] rounded-full opacity-95 bg-blob blob-1 ${reduced ? '' : 'animate-rotate-fast'}`}
        style={{
          mixBlendMode: 'multiply',
          background: 'radial-gradient(closest-corner at 30% 30%, rgba(196, 181, 253, 0.75), rgba(196, 181, 253, 0.60) 20%, rgba(196, 181, 253, 0.45) 35%, rgba(196, 181, 253, 0.20) 60%, transparent 85%)'
        }}
      />

      <div
        className={`absolute -right-80 -bottom-60 w-[1800px] h-[1800px] rounded-full opacity-90 bg-blob blob-2 ${reduced ? '' : 'animate-rotate-fast-reverse'}`}
        style={{
          mixBlendMode: 'multiply',
          background: 'radial-gradient(closest-corner at 28% 25%, rgba(165, 200, 255, 0.70), rgba(165, 200, 255, 0.55) 15%, rgba(165, 200, 255, 0.40) 30%, rgba(165, 200, 255, 0.18) 55%, transparent 82%)'
        }}
      />

      <div
        className={`absolute left-1/2 top-1/4 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full opacity-90 bg-blob blob-3 ${reduced ? '' : 'animate-rotate-fast'}`}
        style={{
          mixBlendMode: 'multiply',
          background: 'radial-gradient(closest-corner at 45% 45%, rgba(249, 168, 212, 0.70), rgba(249, 168, 212, 0.55) 20%, rgba(249, 168, 212, 0.40) 40%, rgba(249, 168, 212, 0.18) 65%, transparent 85%)'
        }}
      />

      {/* Blob 4 - right side, lower position - soft purple */}
      <div
        className={`absolute -right-60 top-1/3 w-[1200px] h-[1200px] rounded-full opacity-90 bg-blob blob-4 ${reduced ? '' : 'animate-rotate-fast-reverse'}`}
        style={{
          mixBlendMode: 'multiply',
          background: 'radial-gradient(closest-corner at 32% 35%, rgba(196, 181, 253, 0.70), rgba(196, 181, 253, 0.55) 18%, rgba(196, 181, 253, 0.40) 35%, rgba(196, 181, 253, 0.18) 60%, transparent 82%)'
        }}
      />

      {/* Blob 5 - left side, bottom area - soft blue */}
      <div
        className={`absolute -left-60 bottom-0 w-[1300px] h-[1300px] rounded-full opacity-85 bg-blob blob-5 ${reduced ? '' : 'animate-rotate-fast'}`}
        style={{
          mixBlendMode: 'multiply',
          background: 'radial-gradient(closest-corner at 36% 40%, rgba(165, 200, 255, 0.65), rgba(165, 200, 255, 0.50) 20%, rgba(165, 200, 255, 0.35) 40%, rgba(165, 200, 255, 0.15) 65%, transparent 85%)'
        }}
      />

      {/* Animated grain overlay on blobs */}
      <svg className="absolute inset-0 w-full h-full grain-overlay opacity-100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <filter id="noiseGrainDay">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.85" />
            </feComponentTransfer>
          </filter>
          <filter id="noiseGrainDayFine">
            <feTurbulence type="fractalNoise" baseFrequency="2.0" numOctaves="5" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.80" />
            </feComponentTransfer>
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#noiseGrainDay)" opacity="0.85" />
        <rect width="100%" height="100%" filter="url(#noiseGrainDayFine)" opacity="0.75" />
      </svg>

      {/* Subtle vignette - lighter for day mode */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.3) 140%)' }} />
    </div>
  );
}
