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
              className="text-right font-extrabold tracking-tight mb-8 relative overflow-hidden"
              style={{ fontSize: '28px', lineHeight: 1.15, color: 'var(--foreground)' }}
            >
              <span className="relative inline-block italic" style={{ animation: 'characterFlow 4s ease-in-out infinite' }}>
                From Art Galleries to Cloud Infrastructure.
              </span>
            </h1>

            <div className="space-y-6 text-left text-[color:var(--foreground)]/90" style={{ fontSize: '18px' }}>
              <p className="leading-relaxed">
                Hi! I’m Yichun Lin. I swapped curating exhibitions for
                <span className="text-[#C3F0CD] font-bold italic"> orchestrating containers</span>, bringing a Project Manager's mindset to DevOps engineering. Born in Taiwan and forged at École 42 Paris, I build systems that are as resilient as they are elegant.
              </p>

              <p className="leading-relaxed">
                I don't just write scripts; I
                <span className="text-[#C3F0CD] font-bold italic"> design workflows</span>. My background in art management taught me how to handle chaos and deadlines, while École 42 gave me the technical grit to master
                <span className="text-[#C3F0CD] font-bold italic"> C/C++</span>,
                <span className="text-[#C3F0CD] font-bold italic"> Kubernetes</span>, and
                <span className="text-[#C3F0CD] font-bold italic"> CI/CD</span>. I view infrastructure as a canvas—it requires structure, automation, and precise execution to truly flow.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center text-base font-semibold underline underline-offset-4 decoration-[#C3F0CD] hover:italic hover:font-bold hover:text-[#C3F0CD] transition-all"
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
          
          @keyframes emergingFlow {
            0% { 
              background-position: 200% center;
              opacity: 0;
              clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
            }
            20% {
              opacity: 0.4;
              clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%);
            }
            50% { 
              background-position: 0% center;
              opacity: 1;
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
            100% { 
              background-position: -200% center;
              opacity: 0.6;
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
          }
          
          @keyframes characterFlow {
            0% {
              transform: translateY(20px) scaleY(0.95);
              opacity: 0;
              letter-spacing: 0.1em;
            }
            25% {
              transform: translateY(10px) scaleY(0.98);
              opacity: 0.7;
            }
            50% {
              transform: translateY(0) scaleY(1);
              opacity: 1;
              letter-spacing: 0.02em;
            }
            75% {
              transform: translateY(-5px) scaleY(1.02);
              opacity: 0.8;
            }
            100% {
              transform: translateY(0) scaleY(1);
              opacity: 1;
              letter-spacing: 0.02em;
            }
          }
        `}</style>
        </div>
      </div>
    </SectionWrapper>
  )
}
