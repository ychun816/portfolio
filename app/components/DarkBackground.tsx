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
        className={`absolute -left-96 -top-80 w-[1800px] h-[1800px] rounded-full opacity-78 bg-blob blob-1 ${reduced ? '' : 'rotate-slow'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 28% 28%, rgba(30,45,80,0.88), rgba(50,90,160,0.72) 12%, rgba(80,140,200,0.32) 28%, rgba(100,150,220,0.12) 48%, transparent 68%)'
        }}
      />

      <div
        className={`absolute -right-96 -bottom-72 w-[1600px] h-[1600px] rounded-full opacity-72 bg-blob blob-2 ${reduced ? '' : 'rotate-slow'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 25% 22%, rgba(20,15,45,0.88), rgba(60,100,170,0.48) 10%, rgba(130,110,200,0.28) 26%, rgba(100,160,240,0.08) 52%, transparent 70%)'
        }}
      />

      <div
        className={`absolute left-1/2 top-1/4 -translate-x-1/2 w-[1700px] h-[1700px] rounded-full opacity-60 bg-blob blob-3 ${reduced ? '' : 'rotate-slow'}`}
        style={{
          background: 'radial-gradient(closest-corner at 45% 45%, rgba(15,12,35,0.92), rgba(70,90,160,0.32) 14%, rgba(120,140,200,0.18) 32%, rgba(90,130,180,0.06) 56%, transparent 72%)'
        }}
      />

      {/* Blob 4 - right side, lower position */}
      <div
        className={`absolute -right-72 top-1/3 w-[1500px] h-[1500px] rounded-full opacity-65 bg-blob blob-4 ${reduced ? '' : ''}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 30% 35%, rgba(25,20,55,0.86), rgba(80,110,180,0.40) 12%, rgba(110,130,200,0.22) 30%, rgba(90,140,200,0.08) 55%, transparent 70%)'
        }}
      />

      {/* Blob 5 - left side, bottom area */}
      <div
        className={`absolute -left-80 bottom-0 w-[1550px] h-[1550px] rounded-full opacity-62 bg-blob blob-5 ${reduced ? '' : ''}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 35% 40%, rgba(18,25,50,0.88), rgba(70,100,170,0.38) 14%, rgba(100,140,210,0.20) 32%, rgba(80,130,190,0.06) 58%, transparent 72%)'
        }}
      />

      {/* small animated highlights for refined sophistication */}
  <div className={`absolute -top-8 left-[16%] w-[240px] h-[240px] rounded-full opacity-90 blur-[40px] mix-blend-screen highlight-1 ${reduced ? '' : 'blob-1'}`} style={{ background: 'linear-gradient(45deg, rgba(80,120,180,0.72), rgba(100,150,220,0.48))', transform: 'translateZ(0)' }} />
  <div className={`absolute bottom-[10%] right-[12%] w-[180px] h-[180px] rounded-full opacity-85 blur-[32px] mix-blend-screen highlight-2 ${reduced ? '' : 'blob-2'}`} style={{ background: 'linear-gradient(135deg, rgba(100,80,160,0.65), rgba(80,140,200,0.45))', transform: 'translateZ(0)' }} />

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
