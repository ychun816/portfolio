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
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: '#faf8f5' }}>
      <style>{`
        @keyframes blobFloat1  { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(3%,4%) scale(1.04);} 66%{transform:translate(-4%,2%) scale(0.97);} }
        @keyframes blobFloat2  { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(-5%,-3%) scale(1.05);} 66%{transform:translate(3%,5%) scale(0.97);} }
        @keyframes blobFloat3  { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(4%,-4%) scale(0.97);} 66%{transform:translate(-2%,3%) scale(1.04);} }
        @keyframes blobFloat4  { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(-3%,4%) scale(1.03);} 66%{transform:translate(5%,-2%) scale(0.98);} }
        @keyframes blobFloat5  { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(4%,3%) scale(1.04);} 66%{transform:translate(-3%,-4%) scale(0.97);} }
        .day-blob { filter: blur(70px); }
        .db1 { animation: blobFloat1 18s ease-in-out infinite; }
        .db2 { animation: blobFloat2 22s ease-in-out infinite; }
        .db3 { animation: blobFloat3 20s ease-in-out infinite; }
        .db4 { animation: blobFloat4 24s ease-in-out infinite; }
        .db5 { animation: blobFloat5 19s ease-in-out infinite; }
        @keyframes filmGrain {
          0%,100%{ transform:translate(0,0); }
          10%{ transform:translate(-5%,-5%); }
          20%{ transform:translate(-10%,5%); }
          30%{ transform:translate(5%,-10%); }
          40%{ transform:translate(-5%,15%); }
          50%{ transform:translate(-10%,5%); }
          60%{ transform:translate(15%,0); }
          70%{ transform:translate(0,10%); }
          80%{ transform:translate(-15%,0); }
          90%{ transform:translate(10%,5%); }
        }
        .day-grain { animation: filmGrain 0.7s steps(1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .db1,.db2,.db3,.db4,.db5,.day-grain { animation: none !important; }
        }
      `}</style>

      {/* Blob 1 — soft violet/lavender, top-left */}
      <div
        className={`day-blob absolute rounded-full ${reduced ? '' : 'db1'}`}
        style={{
          left: '-28vw', top: '-18vh', width: '78vw', height: '78vh',
          mixBlendMode: 'multiply', opacity: 0.95,
          background: 'radial-gradient(ellipse at 42% 42%, rgba(180,138,242,0.82) 0%, rgba(200,160,255,0.52) 40%, transparent 75%)',
        }}
      />

      {/* Blob 2 — warm rose/pink, bottom-right */}
      <div
        className={`day-blob absolute rounded-full ${reduced ? '' : 'db2'}`}
        style={{
          right: '-24vw', bottom: '-18vh', width: '74vw', height: '74vh',
          mixBlendMode: 'multiply', opacity: 0.90,
          background: 'radial-gradient(ellipse at 40% 40%, rgba(255,148,205,0.80) 0%, rgba(255,170,220,0.50) 40%, transparent 75%)',
        }}
      />

      {/* Blob 3 — periwinkle blue, center */}
      <div
        className={`day-blob absolute rounded-full ${reduced ? '' : 'db3'}`}
        style={{
          left: '28vw', top: '22vh', width: '60vw', height: '60vh',
          mixBlendMode: 'multiply', opacity: 0.88,
          background: 'radial-gradient(ellipse at 45% 46%, rgba(115,168,255,0.75) 0%, rgba(140,188,255,0.46) 40%, transparent 75%)',
        }}
      />

      {/* Blob 4 — blush/light magenta, right-center */}
      <div
        className={`day-blob absolute rounded-full ${reduced ? '' : 'db4'}`}
        style={{
          right: '4vw', top: '32vh', width: '54vw', height: '54vh',
          mixBlendMode: 'multiply', opacity: 0.85,
          background: 'radial-gradient(ellipse at 38% 40%, rgba(232,135,195,0.74) 0%, rgba(248,158,215,0.44) 40%, transparent 75%)',
        }}
      />

      {/* Blob 5 — sky blue/lavender, bottom-left */}
      <div
        className={`day-blob absolute rounded-full ${reduced ? '' : 'db5'}`}
        style={{
          left: '4vw', bottom: '4vh', width: '54vw', height: '54vh',
          mixBlendMode: 'multiply', opacity: 0.82,
          background: 'radial-gradient(ellipse at 44% 45%, rgba(142,165,250,0.72) 0%, rgba(162,185,255,0.42) 40%, transparent 75%)',
        }}
      />

      {/* Animated film-grain overlay */}
      <svg
        className={`day-grain absolute pointer-events-none select-none`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '150%', height: '150%', top: '-25%', left: '-25%', opacity: 0.30, mixBlendMode: 'overlay' }}
        aria-hidden="true"
      >
        <defs>
          <filter id="grainDay" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#grainDay)" />
      </svg>
    </div>
  );
}
