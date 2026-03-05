"use client";

import { useEffect, useState } from 'react';

export default function NightBackground() {
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
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: '#0d0a17' }}>
      <style>{`
        @keyframes nblobFloat1 { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(3%,4%) scale(1.04);} 66%{transform:translate(-4%,2%) scale(0.97);} }
        @keyframes nblobFloat2 { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(-5%,-3%) scale(1.05);} 66%{transform:translate(3%,5%) scale(0.97);} }
        @keyframes nblobFloat3 { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(4%,-4%) scale(0.97);} 66%{transform:translate(-2%,3%) scale(1.04);} }
        @keyframes nblobFloat4 { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(-3%,4%) scale(1.03);} 66%{transform:translate(5%,-2%) scale(0.98);} }
        @keyframes nblobFloat5 { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(4%,3%) scale(1.04);} 66%{transform:translate(-3%,-4%) scale(0.97);} }
        .night-blob { filter: blur(70px); }
        .nb1 { animation: nblobFloat1 18s ease-in-out infinite; }
        .nb2 { animation: nblobFloat2 22s ease-in-out infinite; }
        .nb3 { animation: nblobFloat3 20s ease-in-out infinite; }
        .nb4 { animation: nblobFloat4 24s ease-in-out infinite; }
        .nb5 { animation: nblobFloat5 19s ease-in-out infinite; }
        @keyframes nightFilmGrain {
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
        .night-grain { animation: nightFilmGrain 0.7s steps(1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .nb1,.nb2,.nb3,.nb4,.nb5,.night-grain { animation: none !important; }
        }
      `}</style>

      {/* Blob 1 — deep violet/purple (dark analogue of day lavender), top-left */}
      <div
        className={`night-blob absolute rounded-full ${reduced ? '' : 'nb1'}`}
        style={{
          left: '-28vw', top: '-18vh', width: '78vw', height: '78vh',
          mixBlendMode: 'screen', opacity: 0.80,
          background: 'radial-gradient(ellipse at 42% 42%, rgba(105,45,210,0.92) 0%, rgba(125,65,230,0.56) 40%, transparent 75%)',
        }}
      />

      {/* Blob 2 — deep magenta/rose (dark analogue of day pink), bottom-right */}
      <div
        className={`night-blob absolute rounded-full ${reduced ? '' : 'nb2'}`}
        style={{
          right: '-24vw', bottom: '-18vh', width: '74vw', height: '74vh',
          mixBlendMode: 'screen', opacity: 0.75,
          background: 'radial-gradient(ellipse at 40% 40%, rgba(195,35,132,0.90) 0%, rgba(215,55,152,0.54) 40%, transparent 75%)',
        }}
      />

      {/* Blob 3 — deep blue/indigo (dark analogue of day periwinkle), center */}
      <div
        className={`night-blob absolute rounded-full ${reduced ? '' : 'nb3'}`}
        style={{
          left: '28vw', top: '22vh', width: '60vw', height: '60vh',
          mixBlendMode: 'screen', opacity: 0.72,
          background: 'radial-gradient(ellipse at 45% 46%, rgba(45,88,225,0.88) 0%, rgba(62,105,240,0.52) 40%, transparent 75%)',
        }}
      />

      {/* Blob 4 — crimson-rose (dark analogue of day blush), right-center */}
      <div
        className={`night-blob absolute rounded-full ${reduced ? '' : 'nb4'}`}
        style={{
          right: '4vw', top: '32vh', width: '54vw', height: '54vh',
          mixBlendMode: 'screen', opacity: 0.68,
          background: 'radial-gradient(ellipse at 38% 40%, rgba(175,28,108,0.86) 0%, rgba(195,48,128,0.50) 40%, transparent 75%)',
        }}
      />

      {/* Blob 5 — cobalt/indigo (dark analogue of day sky blue), bottom-left */}
      <div
        className={`night-blob absolute rounded-full ${reduced ? '' : 'nb5'}`}
        style={{
          left: '4vw', bottom: '4vh', width: '54vw', height: '54vh',
          mixBlendMode: 'screen', opacity: 0.65,
          background: 'radial-gradient(ellipse at 44% 45%, rgba(68,102,235,0.84) 0%, rgba(88,122,250,0.48) 40%, transparent 75%)',
        }}
      />

      {/* Animated film-grain overlay */}
      <svg
        className="night-grain absolute pointer-events-none select-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '150%', height: '150%', top: '-25%', left: '-25%', opacity: 0.22, mixBlendMode: 'overlay' }}
        aria-hidden="true"
      >
        <defs>
          <filter id="grainNight" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#grainNight)" />
      </svg>
    </div>
  );
}
