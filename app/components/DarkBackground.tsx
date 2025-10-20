"use client";

import { useEffect, useState } from 'react';

export default function DarkBackground() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduced(mq.matches);
      const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
      // matchMedia.addEventListener may not exist in older browsers, fallback to addListener
      if (mq.addEventListener) mq.addEventListener('change', handler);
      else mq.addListener(handler);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener('change', handler as any);
        else mq.removeListener(handler as any);
      };
    }
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <style>{`

  .bg-blob { filter: blur(100px); transform-origin: center; }
  /* slower, more refined organic motion */
  @keyframes blobMove1 { 0% { transform: translate(-8%, -5%) scale(0.95); } 40% { transform: translate(8%, 15%) scale(1.02); } 100% { transform: translate(-8%, -5%) scale(0.95); } }
  @keyframes blobMove2 { 0% { transform: translate(18%, 8%) scale(1); } 45% { transform: translate(-10%, -12%) scale(1.08); } 100% { transform: translate(18%, 8%) scale(1); } }
  @keyframes blobMove3 { 0% { transform: translate(-4%, 18%) scale(1.05); } 50% { transform: translate(14%, -8%) scale(0.98); } 100% { transform: translate(-4%, 18%) scale(1.05); } }
  .blob-1 { animation: blobMove1 18s cubic-bezier(.16,.8,.28,1) infinite; }
  .blob-2 { animation: blobMove2 22s cubic-bezier(.16,.8,.28,1) infinite; }
  .blob-3 { animation: blobMove3 20s cubic-bezier(.16,.8,.28,1) infinite; }

  /* very subtle slow rotation for refined sophistication */
  @keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  .rotate-slow { animation: rotateSlow 80s linear infinite; }

        /* reduce motion: disable animations */
        @media (prefers-reduced-motion: reduce) { .blob-1, .blob-2, .blob-3, .rotate-slow { animation: none !important; } }
      `}</style>

  {/* Gradient blobs (multiple layers with different palettes) */}
      <div
        className={`absolute -left-56 -top-40 w-[1100px] h-[1100px] rounded-full opacity-75 bg-blob blob-1 ${reduced ? '' : 'rotate-slow'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 25% 25%, rgba(15,20,35,0.92), rgba(20,50,90,0.88) 15%, rgba(60,100,150,0.28) 38%, rgba(100,150,200,0.08) 60%, transparent 72%)'
        }}
      />

      <div
        className={`absolute -right-72 -bottom-32 w-[900px] h-[900px] rounded-full opacity-68 bg-blob blob-2 ${reduced ? '' : 'rotate-slow'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 22% 18%, rgba(12,10,25,0.92), rgba(40,80,130,0.36) 14%, rgba(120,100,180,0.24) 35%, rgba(80,140,200,0.08) 58%, transparent 74%)'
        }}
      />

      <div
        className={`absolute left-1/2 top-[30%] -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-55 bg-blob blob-3 ${reduced ? '' : 'rotate-slow'}`}
        style={{
          background: 'radial-gradient(closest-corner at 48% 48%, rgba(8,6,18,0.94), rgba(50,60,110,0.28) 18%, rgba(100,110,180,0.12) 40%, rgba(70,100,140,0.06) 62%, transparent 76%)'
        }}
      />

      {/* small animated highlights for refined sophistication */}
  <div className={`absolute -top-8 left-[16%] w-[240px] h-[240px] rounded-full opacity-90 blur-[40px] mix-blend-screen highlight-1 ${reduced ? '' : 'blob-1'}`} style={{ background: 'linear-gradient(45deg, rgba(80,120,180,0.72), rgba(100,150,220,0.48))', transform: 'translateZ(0)' }} />
  <div className={`absolute bottom-[10%] right-[12%] w-[180px] h-[180px] rounded-full opacity-85 blur-[32px] mix-blend-screen highlight-2 ${reduced ? '' : 'blob-2'}`} style={{ background: 'linear-gradient(135deg, rgba(100,80,160,0.65), rgba(80,140,200,0.45))', transform: 'translateZ(0)' }} />

      {/* Animated SVG noise overlay (feTurbulence) — lightweight and GPU-friendly */}
      {/* layered noise: base coarse + finer grain for stronger contrast and sophistication */}
      <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <filter id="noiseCoarse">
            <feTurbulence type="fractalNoise" baseFrequency="0.38" numOctaves="2" stitchTiles="stitch" result="turbc" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.22" />
            </feComponentTransfer>
          </filter>
          <filter id="noiseFine">
            <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="4" stitchTiles="stitch" result="turbf" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.32" />
            </feComponentTransfer>
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#noiseCoarse)" opacity="0.18" />
        <rect width="100%" height="100%" filter="url(#noiseFine)" opacity="0.12" />
        <animate xlinkHref="#noiseFine feTurbulence" attributeName="baseFrequency" dur="8s" values="1.8;1.4;1.8" repeatCount="indefinite" />
      </svg>

  {/* softer vignette to boost readability while keeping depth */}
  <div className="absolute inset-0" style={{ background: 'radial-gradient(65% 45% at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 35%, rgba(0,0,0,0.24) 65%, rgba(0,0,0,0.48) 100%)', mixBlendMode: 'multiply' }} />
    </div>
  );
}
