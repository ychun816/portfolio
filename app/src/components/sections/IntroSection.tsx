"use client";

import SectionWrapper from '@/components/ui/SectionWrapper';
import SVGTextClip from '@/components/ui/SVGTextClip';
import FadeInUp from '@/components/ui/FadeInUp';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function IntroSection(){
  const { lang } = useLanguage();
  const t = translations[lang].intro;
  return (
    <SectionWrapper id="intro">
      <div className="w-full max-w-7xl">
        <SVGTextClip
          text={t.heading}
          className="mb-8 md:mb-16 class-display"
          style={{ fontSize: 'clamp(28px, 8vw, 60px)', lineHeight: '1.1' }}
        />
        
        <div className="max-w-4xl w-full mx-auto">
        <FadeInUp delay={100}>
          <div className="relative mb-8">
            <h1
              className="text-right font-extrabold tracking-tight mb-8 relative overflow-hidden"
              style={{ fontSize: 'clamp(18px, 4vw, 28px)', lineHeight: 1.15, color: 'var(--foreground)' }}
            >
              <span className="relative inline-block italic" style={{ animation: 'characterFlow 4s ease-in-out infinite' }}>
                {t.tagline}
              </span>
            </h1>

            <div className="space-y-4 md:space-y-6 text-left text-[color:var(--foreground)]/90 text-sm md:text-base lg:text-lg">
              <p className="leading-relaxed">
                {t.p1Before}
                <span className="text-[#C3F0CD] font-bold italic">{t.p1Highlight}</span>
                {t.p1After}
              </p>

              <p className="leading-relaxed">
                {t.p2Before}
                <span className="text-[#C3F0CD] font-bold italic">{t.p2Highlight1}</span>
                {t.p2Middle}
                <span className="text-[#C3F0CD] font-bold italic">{t.p2Highlight2}</span>,{' '}
                <span className="text-[#C3F0CD] font-bold italic">{t.p2Highlight3}</span>, and{' '}
                <span className="text-[#C3F0CD] font-bold italic">{t.p2Highlight4}</span>
                {t.p2After}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center text-base font-semibold underline underline-offset-4 decoration-[#C3F0CD] hover:italic hover:font-bold hover:text-[#C3F0CD] transition-all"
                >
                  {t.cta}
                </a>
              </div>
            </div>
          </div>
        </FadeInUp>
        <FadeInUp delay={200}>
          <div className="mt-6 text-lg italic leading-relaxed text-[color:var(--foreground)]/90">
            <p>
              {t.closing}{' '}
              <a
                href="https://www.linkedin.com/in/sophia-lin-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:italic hover:font-bold hover:text-[#C3F0CD] transition-all"
              >
                {t.connectLink}
              </a>
              {t.closingSuffix}
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
