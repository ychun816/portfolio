import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-[color:var(--accent)]">Hi — I'm building my portfolio</h1>
        <p className="text-lg text-slate-700 mb-8">A minimal starter built with Next.js and Tailwind. Quick, responsive, and ready for content.</p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="inline-flex items-center px-6 py-3 bg-[color:var(--accent)] text-white rounded-lg shadow hover:brightness-90">See projects</a>
          <a href="mailto:you@example.com" className="inline-flex items-center px-6 py-3 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-100">Contact</a>
        </div>
      </div>
    </div>
  );
}
