"use client";

import SocialLinks from '../SocialLinks';
import SectionWrapper from '../SectionWrapper';
import FadeInUp from '../FadeInUp';

export default function HomeSection(){
  return (
    <SectionWrapper id="home">
      <div className="max-w-4xl w-full">
        {/* Scanner Header */}
        <FadeInUp delay={100}>
          <div
            className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 md:p-8"
            style={{
              boxShadow: 'var(--shadow)',
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 11px)'
            }}
          >
            {/* moving scanner bar */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute inset-y-0 -left-1/3 w-1/2 -skew-x-6"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(195,240,205,0.25) 50%, rgba(255,255,255,0) 100%)',
                  filter: 'blur(2px)',
                  animation: 'scanX 3s linear infinite'
                }}
              />
            </div>

            <h1
              className="text-left font-extrabold tracking-tight mb-4"
              style={{ fontSize: '40px', lineHeight: 1.1, color: 'var(--foreground)' }}
            >
              From Art Galleries to Cloud Infrastructure.
            </h1>

            <div className="space-y-4 text-left text-[color:var(--foreground)]/90">
              <p className="leading-relaxed">
                Hi! I’m Yichun Lin. I swapped curating exhibitions for
                <span className="text-[#C3F0CD] font-medium"> orchestrating containers</span>, bringing a Project Manager’s
                mindset to DevOps engineering. Born in Taiwan and forged at École 42 Paris, I build systems that are as
                resilient as they are elegant.
              </p>

              <p className="leading-relaxed">
                I don't just write scripts; I
                <span className="text-[#C3F0CD] font-medium"> design workflows</span>. My background in art management taught me how to handle chaos and
                deadlines, while École 42 gave me the technical grit to master
                <span className="text-[#C3F0CD] font-medium"> C/C++</span>,
                <span className="text-[#C3F0CD] font-medium"> Kubernetes</span>, and
                <span className="text-[#C3F0CD] font-medium"> CI/CD</span>. I view infrastructure as a canvas—it requires structure, automation, and
                precise execution to truly flow. Check out my
                <a
                  href="#projects"
                  className="ml-1 underline underline-offset-4 decoration-from-font hover:text-[#C3F0CD] transition-colors"
                >
                  Projects
                </a>
                .
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center px-4 py-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-sm font-semibold"
                >
                  Explore Projects
                </a>
                <a
                  href="https://www.linkedin.com/in/sophia-lin-profile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold underline underline-offset-4 hover:text-[#C3F0CD] transition-colors"
                >
                  connect
                </a>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* CTA Box */}
        <FadeInUp delay={200}>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-sm">
            <div className="text-sm md:text-base leading-relaxed text-[color:var(--foreground)]/90">
              <p>
                Currently seeking a DevOps/Cloud Internship in Paris. Let’s engineer something beautiful together.
              </p>
              <p className="mt-2">
                Always passionate to connect!{' '}
                <a
                  href="https://www.linkedin.com/in/sophia-lin-profile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-[#C3F0CD] transition-colors"
                >
                  connect
                </a>
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* Social Links / Icons */}
        <FadeInUp delay={300}>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </FadeInUp>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <svg className="w-6 h-6 animate-bounce opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </SectionWrapper>
  )
}

/* Scanner keyframes */
<style jsx>{`
  @keyframes scanX {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(140%); }
  }
`}</style>
