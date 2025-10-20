import { useState, useEffect } from 'react';

function Face({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div style={style} className={`absolute inset-0 flex items-center justify-center p-8 ${className || ''}`}>
      <div className="max-w-4xl w-full">{children}</div>
    </div>
  );
}

export default function FlipScene() {
  const [index, setIndex] = useState(0); // 0..3

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % 4);
      if (e.key === 'ArrowLeft') setIndex((i) => (i + 3) % 4);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const rotateY = `rotateY(${index * -90}deg)`;

  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div className="absolute top-6 left-6 z-20 flex gap-2">
        <button onClick={() => setIndex(0)} className="px-3 py-1 rounded bg-white/6">Intro</button>
        <button onClick={() => setIndex(1)} className="px-3 py-1 rounded bg-white/6">Projects</button>
        <button onClick={() => setIndex(2)} className="px-3 py-1 rounded bg-white/6">Resume</button>
        <button onClick={() => setIndex(3)} className="px-3 py-1 rounded bg-white/6">Contact</button>
      </div>

      <div className="scene w-full h-full perspective-1000">
        <div
          className="cube relative w-full h-full transition-transform duration-700"
          style={{ transformStyle: 'preserve-3d', transform: rotateY }}
        >
          <Face className="face-front bg-transparent">
            <div className="p-8 rounded-lg glass">
              <h2 className="text-4xl font-bold mb-2">Intro</h2>
              <p className="text-slate-300">Welcome — this is the intro section. Use arrow keys or nav to flip.</p>
            </div>
          </Face>

          <Face className="face-right" style={{ transform: 'rotateY(90deg) translateZ(0)' } as any}>
            <div className="p-8 rounded-lg glass">
              <h2 className="text-4xl font-bold mb-2">Projects</h2>
              <p className="text-slate-300">Project cards will live here.</p>
            </div>
          </Face>

          <Face className="face-back" style={{ transform: 'rotateY(180deg) translateZ(0)' } as any}>
            <div className="p-8 rounded-lg glass">
              <h2 className="text-4xl font-bold mb-2">Resume</h2>
              <p className="text-slate-300">A short resume or link to PDF.</p>
            </div>
          </Face>

          <Face className="face-left" style={{ transform: 'rotateY(-90deg) translateZ(0)' } as any}>
            <div className="p-8 rounded-lg glass">
              <h2 className="text-4xl font-bold mb-2">Contact</h2>
              <p className="text-slate-300">Contact information and form.</p>
            </div>
          </Face>
        </div>
      </div>
    </div>
  );
}
