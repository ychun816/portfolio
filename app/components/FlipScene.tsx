import { useState, useEffect, useMemo } from 'react';

function Face({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div style={style} className={`absolute inset-0 flex items-center justify-center p-8 ${className || ''}`}>
      <div className="max-w-4xl w-full">{children}</div>
    </div>
  );
}

function ProjectCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/4 border border-white/6 rounded-lg p-4 glass">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-[color:var(--muted)] mt-2">{desc}</p>
    </div>
  );
}

export default function FlipScene() {
  const [index, setIndex] = useState(0); // 0..3
  const [depth, setDepth] = useState(360);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % 4);
      if (e.key === 'ArrowLeft') setIndex((i) => (i + 3) % 4);
    }
    window.addEventListener('keydown', onKey);
    function onResize() {
      const d = Math.max(280, Math.min(window.innerWidth, window.innerHeight) * 0.35);
      setDepth(d);
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const projects = useMemo(
    () => [
      { title: 'Cool App', desc: 'A small app that shows things.' },
      { title: 'Design System', desc: 'Reusable components and tokens.' },
      { title: 'Open Source', desc: 'Libraries and tools I maintain.' },
    ],
    []
  );

  const resume = useMemo(
    () => [
      { when: '2024–Present', role: 'Frontend Engineer', org: 'Acme Inc.' },
      { when: '2021–2024', role: 'UI Developer', org: 'DesignCo' },
    ],
    []
  );

  const rotateY = `rotateY(${index * -90}deg)`;

  const faceStyle = (rot: number) => ({ transform: `rotateY(${rot}deg) translateZ(${depth}px)` });

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* top-left nav */}
      <div className="absolute top-6 left-6 z-30 flex gap-2">
        {['Intro', 'Projects', 'Resume', 'Contact'].map((label, i) => (
          <button
            key={label}
            onClick={() => setIndex(i)}
            className={`px-3 py-1 rounded ${i === index ? 'bg-white/10' : 'bg-white/6'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* page indicators bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-transform ${i === index ? 'bg-white scale-125' : 'bg-white/40'}`}
            aria-label={`Go to ${i}`}
          />
        ))}
      </div>

      <div className="scene w-full h-full" style={{ perspective: 1400 }}>
        <div
          className="cube relative w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transformStyle: 'preserve-3d', transform: rotateY }}
        >
          <Face className="face-front" style={faceStyle(0)}>
            <div className="p-8 rounded-lg glass">
              <h2 className="text-4xl font-bold mb-2">Intro</h2>
              <p className="text-[color:var(--muted)]">Welcome — I build web experiences. Use arrow keys or the nav to flip between sections.</p>
            </div>
          </Face>

          <Face className="face-right" style={faceStyle(90)}>
            <div className="p-8 rounded-lg glass grid grid-cols-1 sm:grid-cols-3 gap-4">
              {projects.map((p) => (
                <ProjectCard key={p.title} title={p.title} desc={p.desc} />
              ))}
            </div>
          </Face>

          <Face className="face-back" style={faceStyle(180)}>
            <div className="p-8 rounded-lg glass">
              <h2 className="text-3xl font-bold mb-4">Resume</h2>
              <ul className="space-y-4 text-[color:var(--muted)]">
                {resume.map((r) => (
                  <li key={r.role}>
                    <div className="font-semibold">{r.role} — <span className="text-sm text-[color:var(--muted)]">{r.org}</span></div>
                    <div className="text-sm">{r.when}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Face>

          <Face className="face-left" style={faceStyle(-90)}>
            <div className="p-8 rounded-lg glass max-w-md mx-auto">
              <h2 className="text-3xl font-bold mb-4">Contact</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const fd = new FormData(form);
                  const subject = encodeURIComponent(String(fd.get('subject') || 'Hello'));
                  const body = encodeURIComponent(String(fd.get('message') || ''));
                  window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
                }}
              >
                <div className="mb-3">
                  <input name="subject" placeholder="Subject" className="w-full p-2 rounded bg-transparent border border-white/6" />
                </div>
                <div className="mb-3">
                  <textarea name="message" placeholder="Message" rows={5} className="w-full p-2 rounded bg-transparent border border-white/6" />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="px-4 py-2 bg-[color:var(--accent)] text-white rounded">Send</button>
                </div>
              </form>
            </div>
          </Face>
        </div>
      </div>
    </div>
  );
}
