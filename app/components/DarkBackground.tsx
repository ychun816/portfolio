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

  .bg-blob { filter: blur(120px); transform-origin: center; }
  /* slow, organic floating motion for all blobs */
  @keyframes blobMove1 { 0% { transform: translate(-10%, -8%) scale(0.95); } 35% { transform: translate(12%, 10%) scale(1.02); } 100% { transform: translate(-10%, -8%) scale(0.95); } }
  @keyframes blobMove2 { 0% { transform: translate(15%, 5%) scale(1); } 40% { transform: translate(-12%, -15%) scale(1.08); } 100% { transform: translate(15%, 5%) scale(1); } }
  @keyframes blobMove3 { 0% { transform: translate(-5%, 20%) scale(1.05); } 38% { transform: translate(14%, -8%) scale(0.98); } 100% { transform: translate(-5%, 20%) scale(1.05); } }
  @keyframes blobMove4 { 0% { transform: translate(8%, -12%) scale(1.02); } 42% { transform: translate(-8%, 10%) scale(0.96); } 100% { transform: translate(8%, -12%) scale(1.02); } }
  @keyframes blobMove5 { 0% { transform: translate(-15%, 10%) scale(0.98); } 45% { transform: translate(10%, -5%) scale(1.04); } 100% { transform: translate(-15%, 10%) scale(0.98); } }
  .blob-1 { animation: blobMove1 24s cubic-bezier(.16,.8,.28,1) infinite; }
  .blob-2 { animation: blobMove2 28s cubic-bezier(.16,.8,.28,1) infinite; }
  .blob-3 { animation: blobMove3 26s cubic-bezier(.16,.8,.28,1) infinite; }
  .blob-4 { animation: blobMove4 30s cubic-bezier(.16,.8,.28,1) infinite; }
  .blob-5 { animation: blobMove5 32s cubic-bezier(.16,.8,.28,1) infinite; }

  /* very subtle slow rotation for refined sophistication */
  @keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  .rotate-slow { animation: rotateSlow 80s linear infinite; }

        /* reduce motion: disable animations */
        @media (prefers-reduced-motion: reduce) { .blob-1, .blob-2, .blob-3, .blob-4, .blob-5, .rotate-slow { animation: none !important; } }
      `}</style>

  {/* Gradient blobs (multiple layers with different palettes) — MUCH LARGER */}
      <div
        className={`absolute -left-96 -top-80 w-[1800px] h-[1800px] rounded-full opacity-80 bg-blob blob-1 ${reduced ? '' : 'rotate-slow'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 28% 28%, rgba(25,35,75,0.88), rgba(40,100,200,0.82) 12%, rgba(100,160,255,0.52) 28%, rgba(150,200,255,0.18) 48%, transparent 68%)'
        }}
      />

      <div
        className={`absolute -right-96 -bottom-72 w-[1600px] h-[1600px] rounded-full opacity-76 bg-blob blob-2 ${reduced ? '' : 'rotate-slow'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 25% 22%, rgba(30,20,70,0.88), rgba(100,80,220,0.62) 10%, rgba(180,120,255,0.42) 26%, rgba(150,180,255,0.12) 52%, transparent 70%)'
        }}
      />

      <div
        className={`absolute left-1/2 top-1/4 -translate-x-1/2 w-[1700px] h-[1700px] rounded-full opacity-68 bg-blob blob-3 ${reduced ? '' : 'rotate-slow'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 45% 45%, rgba(20,15,55,0.92), rgba(80,120,200,0.48) 14%, rgba(150,170,255,0.32) 32%, rgba(120,180,255,0.10) 56%, transparent 72%)'
        }}
      />

      {/* Blob 4 - right side, lower position */}
      <div
        className={`absolute -right-72 top-1/3 w-[1500px] h-[1500px] rounded-full opacity-70 bg-blob blob-4 ${reduced ? '' : ''}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 30% 35%, rgba(35,25,80,0.86), rgba(120,140,220,0.58) 12%, rgba(160,180,255,0.35) 30%, rgba(130,190,255,0.10) 55%, transparent 70%)'
        }}
      />

      {/* Blob 5 - left side, bottom area */}
      <div
        className={`absolute -left-80 bottom-0 w-[1550px] h-[1550px] rounded-full opacity-68 bg-blob blob-5 ${reduced ? '' : ''}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 35% 40%, rgba(25,30,75,0.88), rgba(100,140,230,0.52) 14%, rgba(150,180,255,0.32) 32%, rgba(120,170,240,0.08) 58%, transparent 72%)'
        }}
      />

      {/* small animated highlights for refined sophistication */}
  <div className={`absolute -top-8 left-[16%] w-[240px] h-[240px] rounded-full opacity-95 blur-[40px] mix-blend-screen highlight-1 ${reduced ? '' : 'blob-1'}`} style={{ background: 'linear-gradient(45deg, rgba(100,150,255,0.85), rgba(150,200,255,0.65))', transform: 'translateZ(0)' }} />
  <div className={`absolute bottom-[10%] right-[12%] w-[180px] h-[180px] rounded-full opacity-92 blur-[32px] mix-blend-screen highlight-2 ${reduced ? '' : 'blob-2'}`} style={{ background: 'linear-gradient(135deg, rgba(150,100,255,0.82), rgba(120,180,255,0.62))', transform: 'translateZ(0)' }} />

      {/* Animated SVG noise overlay (feTurbulence) — lightweight and GPU-friendly */}
      {/* layered noise: base coarse + finer grain for premium textured feel */}
      <svg className="absolute inset-0 w-full h-full opacity-28" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <filter id="noiseCoarse">
            <feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="2" stitchTiles="stitch" result="turbc" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.20" />
            </feComponentTransfer>
          </filter>
          <filter id="noiseFine">
            <feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="4" stitchTiles="stitch" result="turbf" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.30" />
            </feComponentTransfer>
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#noiseCoarse)" opacity="0.16" />
        <rect width="100%" height="100%" filter="url(#noiseFine)" opacity="0.12" />
        <animate xlinkHref="#noiseFine feTurbulence" attributeName="baseFrequency" dur="8s" values="1.6;1.3;1.6" repeatCount="indefinite" />
      </svg>

  {/* very subtle vignette - mostly transparent to let blobs shine */}
  <div className="absolute inset-0" style={{ background: 'radial-gradient(75% 55% at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.02) 45%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.20) 100%)', mixBlendMode: 'multiply' }} />
    </div>
  );
}
