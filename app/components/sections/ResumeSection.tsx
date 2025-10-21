export default function ResumeSection(){
  return (
    <section id="resume" className="min-h-screen snap-start flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <h1 className="mb-12">Resume</h1>
        
        {/* Resume PDF Viewer */}
        <div className="mb-12 rounded-lg overflow-hidden bg-white/5 border border-white/10 p-8">
          <iframe
            src="/resume.pdf"
            className="w-full h-96 md:h-[600px] rounded-lg"
            title="Resume PDF"
          />
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-12">
          <a
            href="/resume.pdf"
            download="Yichun-LIN-Resume.pdf"
            className="px-8 py-3 bg-[#39ff14] text-black rounded-lg font-semibold hover:opacity-80 transition-opacity"
          >
            Download PDF
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-lg md:text-xl leading-relaxed text-[color:var(--foreground)] opacity-90">
            Feel free to reach out through the{' '}
            <a 
              href="#contact" 
              className="underline decoration-solid underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ textDecorationColor: 'var(--foreground)' }}
            >
              contact form
            </a>
            {' '}or directly{' '}
            <a 
              href="mailto:ychun8lin@gmail.com"
              className="underline decoration-solid underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ textDecorationColor: 'var(--foreground)' }}
            >
              email me
            </a>
            {' '}if you'd like to discuss any opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
