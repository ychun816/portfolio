"use client";

import SectionWrapper from '../SectionWrapper';
import SVGTextClip from '../SVGTextClip';
import FadeInUp from '../FadeInUp';

export default function ResumeSection(){
  const RESUME_FILE = 'LIN_Yichun_DevOps_CV_EN.pdf';
  const resumeUrl = `/${encodeURIComponent(RESUME_FILE)}`;
  return (
    <SectionWrapper id="resume">
      <div className="max-w-4xl w-full">
        <SVGTextClip
          text="Resume"
          className="mb-12 class-display"
          style={{ fontSize: '60px', lineHeight: '1.1' }}
        />
        
        {/* Resume PDF Viewer */}
        <FadeInUp delay={200}>
          <div className="mb-4 rounded-lg overflow-hidden bg-white/5 border border-white/10 p-8">
            <iframe
              src={resumeUrl}
              className="w-full h-64 md:h-[400px] rounded-lg"
              title="Resume PDF"
            />
          </div>
        </FadeInUp>

        {/* Download Button */}
        <FadeInUp delay={300}>
          <div className="flex justify-center mb-6">
            <a
              href={resumeUrl}
              download={RESUME_FILE}
              className="px-8 py-3 rounded-lg font-semibold transition-colors hover:text-[#C3F0CD]"
              style={{ backgroundColor: 'rgba(57, 255, 20, 0.4)', color: 'black' }}
            >
              Download PDF
            </a>
          </div>
        </FadeInUp>

        {/* Footer Text */}
        <FadeInUp delay={400}>
          <div className="text-center">
            <p className="text-base md:text-lg leading-relaxed text-[color:var(--foreground)] opacity-90">
              Feel free to reach out via {' '}
              <a 
                href="#contact" 
                className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-colors"
                style={{ textDecorationColor: 'var(--foreground)', color: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C3F0CD'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
              >
                contact form
              </a>
              {' '}or{' '}
              <a 
                href="mailto:sophia.lin168@protonmail.com"
                className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-colors"
                style={{ textDecorationColor: 'var(--foreground)', color: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C3F0CD'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
              >
                email me
              </a>
              {' '}if you'd like to discuss any opportunities!
            </p>
          </div>
        </FadeInUp>
      </div>
    </SectionWrapper>
  )
}
