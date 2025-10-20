import DarkBackground from '../components/DarkBackground';

export default function Home() {
  return (
    <>
      <DarkBackground />
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center glass">
          <h1 className="text-5xl font-extrabold mb-4 text-[color:var(--accent)]">Hi — I'm building my portfolio</h1>
          <p className="text-lg text-[color:var(--muted)] mb-8">A minimal starter built with Next.js and Tailwind. Quick, responsive, and ready for content.</p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="inline-flex items-center px-6 py-3 bg-[color:var(--accent)] text-white rounded-lg shadow hover:brightness-90">See projects</a>
            <a href="mailto:you@example.com" className="inline-flex items-center px-6 py-3 border border-white/6 rounded-lg text-[color:var(--foreground)]/90 hover:bg-white/2">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}
