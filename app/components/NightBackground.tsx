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
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
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
          animation: rotate-fast 40s linear infinite;
        }
        .animate-rotate-fast-reverse {
          animation: rotate-fast-reverse 40s linear infinite;
        }
      `}</style>
      <style>{`
        .bg-blob { filter: blur(140px); transform-origin: center; }
        @keyframes blobMove1 { 0% { transform: translate(-8%, -6%) scale(0.98); } 35% { transform: translate(10%, 8%) scale(1.02); } 100% { transform: translate(-8%, -6%) scale(0.98); } }
        @keyframes blobMove2 { 0% { transform: translate(12%, 4%) scale(1); } 40% { transform: translate(-10%, -12%) scale(1.06); } 100% { transform: translate(12%, 4%) scale(1); } }
        @keyframes blobMove3 { 0% { transform: translate(-4%, 16%) scale(1.03); } 38% { transform: translate(12%, -6%) scale(0.99); } 100% { transform: translate(-4%, 16%) scale(1.03); } }
        @keyframes blobMove4 { 0% { transform: translate(6%, -10%) scale(1.01); } 42% { transform: translate(-6%, 8%) scale(0.97); } 100% { transform: translate(6%, -10%) scale(1.01); } }
        @keyframes blobMove5 { 0% { transform: translate(-12%, 8%) scale(0.99); } 45% { transform: translate(8%, -4%) scale(1.03); } 100% { transform: translate(-12%, 8%) scale(0.99); } }
        .blob-1 { animation: blobMove1 26s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-2 { animation: blobMove2 30s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-3 { animation: blobMove3 28s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-4 { animation: blobMove4 32s cubic-bezier(.2,.6,.3,.8) infinite; }
        .blob-5 { animation: blobMove5 34s cubic-bezier(.2,.6,.3,.8) infinite; }
        @media (prefers-reduced-motion: reduce) { .blob-1, .blob-2, .blob-3, .blob-4, .blob-5 { animation: none !important; } }
      `}</style>

      {/* Gradient blobs — soft blue and green palette */}
      <div
        className={`absolute -left-80 -top-60 w-[2000px] h-[2000px] rounded-full opacity-90 bg-blob blob-1 ${reduced ? '' : 'animate-rotate-fast'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 30% 30%, rgba(176,224,255,0.85), rgba(164,207,255,0.65) 20%, rgba(152,190,255,0.45) 35%, rgba(140,173,255,0.15) 60%, transparent 85%)'
        }}
      />

      <div
        className={`absolute -right-80 -bottom-60 w-[1800px] h-[1800px] rounded-full opacity-85 bg-blob blob-2 ${reduced ? '' : 'animate-rotate-fast-reverse'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 28% 25%, rgba(176,255,213,0.82), rgba(176,255,224,0.65) 15%, rgba(176,255,235,0.45) 30%, rgba(176,255,246,0.15) 55%, transparent 82%)'
        }}
      />

      <div
        className={`absolute left-1/2 top-1/4 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full opacity-80 bg-blob blob-3 ${reduced ? '' : 'animate-rotate-fast'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 45% 45%, rgba(176,255,192,0.80), rgba(176,255,203,0.55) 20%, rgba(176,255,214,0.35) 40%, rgba(176,255,225,0.12) 65%, transparent 85%)'
        }}
      />

      {/* Blob 4 - right side, lower position - soft mint green */}
      <div
        className={`absolute -right-60 top-1/3 w-[1200px] h-[1200px] rounded-full opacity-82 bg-blob blob-4 ${reduced ? '' : 'animate-rotate-fast-reverse'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 32% 35%, rgba(176,255,202,0.78), rgba(176,255,213,0.58) 18%, rgba(176,255,224,0.38) 35%, rgba(176,255,235,0.15) 60%, transparent 82%)'
        }}
      />

      {/* Blob 5 - left side, bottom area - soft aqua blue */}
      <div
        className={`absolute -left-60 bottom-0 w-[1300px] h-[1300px] rounded-full opacity-78 bg-blob blob-5 ${reduced ? '' : 'animate-rotate-fast'}`}
        style={{
          mixBlendMode: 'screen',
          background: 'radial-gradient(closest-corner at 36% 40%, rgba(176,242,255,0.75), rgba(176,233,255,0.52) 20%, rgba(176,224,255,0.32) 40%, rgba(176,215,255,0.12) 65%, transparent 85%)'
        }}
      />

      {/* Animated SVG noise overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-15" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <filter id="noiseCoarse">
            <feTurbulence type="fractalNoise" baseFrequency="0.30" numOctaves="2" stitchTiles="stitch" result="turbc" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.15" />
            </feComponentTransfer>
          </filter>
          <filter id="noiseFine">
            <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="3" stitchTiles="stitch" result="turbf" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.20" />
            </feComponentTransfer>
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#noiseCoarse)" opacity="0.12" />
        <rect width="100%" height="100%" filter="url(#noiseFine)" opacity="0.08" />
        <animate xlinkHref="#noiseFine feTurbulence" attributeName="baseFrequency" dur="10s" values="1.4;1.2;1.4" repeatCount="indefinite" />
      </svg>

      {/* Vignette effect - lighter for better blob visibility */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.7) 140%)' }} />
    </div>
  );
}
