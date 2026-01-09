"use client";

import SectionWrapper from '../SectionWrapper';
import SVGTextClip from '../SVGTextClip';
import FadeInUp from '../FadeInUp';

export default function IntroSection(){
  return (
    <SectionWrapper id="intro">
      <div className="w-full max-w-7xl">
        <SVGTextClip
          text="About Me"
          className="mb-16 class-display"
          style={{ fontSize: '60px', lineHeight: '1.1' }}
        />
        
        <div className="max-w-4xl w-full mx-auto">
        <FadeInUp delay={100}>
          <div className="relative mb-8">
            <h1
              className="text-left font-extrabold tracking-tight mb-8 relative overflow-hidden"
              style={{ fontSize: '42px', lineHeight: 1.15, color: 'var(--foreground)' }}
            >
              <span className="relative inline-block">
                From Art Galleries to Cloud Infrastructure.
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(195,240,205,0) 0%, rgba(195,240,205,0.4) 50%, rgba(195,240,205,0) 100%)',
                    backgroundSize: '200% 100%',
                    animation: 'flowingGlow 3s ease-in-out infinite',
                    filter: 'blur(8px)',
                  }}
                />
              </span>
            </h1>

            <div className="space-y-6 text-left text-[color:var(--foreground)]/90" style={{ fontSize: '18px' }}>
              <p className="leading-relaxed">
                Hi! I’m Yichun Lin. I swapped curating exhibitions for
                <span className="text-[#C3F0CD] font-medium"> orchestrating containers</span>, bringing a Project Manager’s mindset to DevOps engineering. Born in Taiwan and forged at École 42 Paris, I build systems that are as resilient as they are elegant.
              </p>

              <p className="leading-relaxed">
                I don't just write scripts; I
                <span className="text-[#C3F0CD] font-medium"> design workflows</span>. My background in art management taught me how to handle chaos and deadlines, while École 42 gave me the technical grit to master
                <span className="text-[#C3F0CD] font-medium"> C/C++</span>,
                <span className="text-[#C3F0CD] font-medium"> Kubernetes</span>, and
                <span className="text-[#C3F0CD] font-medium"> CI/CD</span>. I view infrastructure as a canvas—it requires structure, automation, and precise execution to truly flow. Check out my
                <a
                  href="#projects"
                  className="ml-1 underline underline-offset-4 decoration-from-font hover:text-[#C3F0CD] transition-colors"
                >
                  Projects
                </a>
                .
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center text-base font-semibold hover:italic hover:font-bold hover:text-[#C3F0CD] transition-all"
                >
                  Explore my projects!
                </a>
              </div>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={200}>
          <div className="mt-6 text-lg italic leading-relaxed text-[color:var(--foreground)]/90">
            <p>
              Currently seeking a DevOps/Cloud Internship in Paris. Let's engineer something beautiful together.
              Always passionate to{' '}
              <a
                href="https://www.linkedin.com/in/sophia-lin-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:italic hover:font-bold hover:text-[#C3F0CD] transition-all"
              >
                connect
              </a>
              !
            </p>
          </div>
        </FadeInUp>

        <style jsx>{`
          @keyframes flowingGlow {
            0% { 
              background-position: 200% center;
              opacity: 0.6;
            }
            50% { 
              background-position: 0% center;
              opacity: 1;
            }
            100% { 
              background-position: -200% center;
              opacity: 0.6;
            }
          }
        `}</style>
        </div>
      </div>
    </SectionWrapper>
  )
}
