"use client";

import { useEffect, useState } from 'react';

export default function NightBackground() {
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
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: '#08080b' }}>
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
        .blob-1 { animation: blobMove1 16s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-2 { animation: blobMove2 18s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-3 { animation: blobMove3 17s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-4 { animation: blobMove4 19s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-5 { animation: blobMove5 20s cubic-bezier(.2,.6,.3,.8) infinite; }
        @media (prefers-reduced-motion: reduce) { .blob-1, .blob-2, .blob-3, .blob-4, .blob-5 { animation: none !important; } }
      `}</style>

      {/* Gradient blobs — soft blue palette */}
      <div
        className={`absolute -left-80 -top-60 w-[2000px] h-[2000px] rounded-full opacity-55 bg-blob blob-1 ${reduced ? '' : 'animate-rotate-fast'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 30% 30%, rgba(150,200,255,0.85), rgba(140,190,255,0.65) 20%, rgba(130,180,255,0.45) 35%, rgba(120,170,255,0.15) 60%, transparent 85%)'
        }}
      />

      <div
        className={`absolute -right-80 -bottom-60 w-[1800px] h-[1800px] rounded-full opacity-50 bg-blob blob-2 ${reduced ? '' : 'animate-rotate-fast-reverse'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 28% 25%, rgba(160,210,255,0.82), rgba(150,200,255,0.65) 15%, rgba(140,190,255,0.45) 30%, rgba(130,180,255,0.15) 55%, transparent 82%)'
        }}
      />

      <div
        className={`absolute left-1/2 top-1/4 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full opacity-48 bg-blob blob-3 ${reduced ? '' : 'animate-rotate-fast'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 45% 45%, rgba(145,195,255,0.80), rgba(135,185,255,0.55) 20%, rgba(125,175,255,0.35) 40%, rgba(115,165,255,0.12) 65%, transparent 85%)'
        }}
      />

      {/* Blob 4 - right side, lower position - blue */}
      <div
        className={`absolute -right-60 top-1/3 w-[1200px] h-[1200px] rounded-full opacity-52 bg-blob blob-4 ${reduced ? '' : 'animate-rotate-fast-reverse'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 32% 35%, rgba(155,205,255,0.78), rgba(145,195,255,0.58) 18%, rgba(135,185,255,0.38) 35%, rgba(125,175,255,0.15) 60%, transparent 82%)'
        }}
      />

      {/* Blob 5 - left side, bottom area - blue */}
      <div
        className={`absolute -left-60 bottom-0 w-[1300px] h-[1300px] rounded-full opacity-45 bg-blob blob-5 ${reduced ? '' : 'animate-rotate-fast'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 36% 40%, rgba(150,200,255,0.75), rgba(140,190,255,0.52) 20%, rgba(130,180,255,0.32) 40%, rgba(120,170,255,0.12) 65%, transparent 85%)'
        }}
      />

      {/* Animated SVG noise overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <filter id="noiseCoarse">
            <feTurbulence type="fractalNoise" baseFrequency="0.30" numOctaves="2" stitchTiles="stitch" result="turbc" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.35" />
            </feComponentTransfer>
          </filter>
          <filter id="noiseFine">
            <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="3" stitchTiles="stitch" result="turbf" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.40" />
            </feComponentTransfer>
          </filter>
          <filter id="noiseUltraFine">
            <feTurbulence type="fractalNoise" baseFrequency="2.8" numOctaves="4" stitchTiles="stitch" result="turbu" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.25" />
            </feComponentTransfer>
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#noiseCoarse)" opacity="0.40" />
        <rect width="100%" height="100%" filter="url(#noiseFine)" opacity="0.35" />
        <rect width="100%" height="100%" filter="url(#noiseUltraFine)" opacity="0.25" />
        <animate xlinkHref="#noiseFine feTurbulence" attributeName="baseFrequency" dur="10s" values="1.4;1.2;1.4" repeatCount="indefinite" />
      </svg>

      {/* Vignette effect - darker for better contrast */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 25%, rgba(0,0,0,0.85) 140%)' }} />
    </div>
  );
}
