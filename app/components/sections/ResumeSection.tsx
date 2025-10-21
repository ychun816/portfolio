"use client";

export default function ResumeSection(){
  return (
    <section id="resume" className="min-h-screen snap-start flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <h1 className="mb-12" style={{ fontSize: '60px', lineHeight: '1.1' }}>Resume</h1>
        
        {/* Resume PDF Viewer */}
        <div className="mb-4 rounded-lg overflow-hidden bg-white/5 border border-white/10 p-8">
          <iframe
            src="/LIN-Yichun_Resume_20251021.pdf"
            className="w-full h-64 md:h-[400px] rounded-lg"
            title="Resume PDF"
          />
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-6">
          <a
            href="/LIN-Yichun_Resume_20251021.pdf"
            download="LIN-Yichun_Resume_20251021.pdf"
            className="px-8 py-3 rounded-lg font-semibold hover:opacity-60 transition-opacity"
            style={{ backgroundColor: 'rgba(57, 255, 20, 0.4)', color: 'black' }}
          >
            Download PDF
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-base md:text-lg leading-relaxed text-[color:var(--foreground)] opacity-90">
            Feel free to reach out via {' '}
            <a 
              href="#contact" 
              className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-opacity"
              style={{ textDecorationColor: 'var(--foreground)', color: 'inherit' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(57, 255, 20, 0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
            >
              contact form
            </a>
            {' '}or{' '}
            <a 
              href="mailto:ychun8lin@gmail.com"
              className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-opacity"
              style={{ textDecorationColor: 'var(--foreground)', color: 'inherit' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(57, 255, 20, 0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
            >
              email me
            </a>
            {' '}if you'd like to discuss any opportunities!
          </p>
        </div>
      </div>
    </section>
  )
}
