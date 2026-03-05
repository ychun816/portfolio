"use client";

import SectionWrapper from '@/components/ui/SectionWrapper';
import SVGTextClip from '@/components/ui/SVGTextClip';
import FadeInUp from '@/components/ui/FadeInUp';
import { RESUME_FILE } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function ResumeSection(){
  const { lang } = useLanguage();
  const t = translations[lang].resume;
  const resumeUrl = `/${encodeURIComponent(RESUME_FILE)}`;
  return (
    <SectionWrapper id="resume">
      <div className="max-w-4xl w-full">
        <SVGTextClip
          text={t.heading}
          className="mb-6 md:mb-12 class-display"
          style={{ fontSize: 'clamp(28px, 8vw, 60px)', lineHeight: '1.1' }}
        />
        
        {/* Resume PDF Viewer */}
        <FadeInUp delay={200}>
          <div className="mb-4 rounded-lg overflow-hidden bg-white/5 border border-white/10 p-3 md:p-8">
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
              {t.download}
            </a>
          </div>
        </FadeInUp>

        {/* Footer Text */}
        <FadeInUp delay={400}>
          <div className="text-center">
            <p className="text-base md:text-lg leading-relaxed text-[color:var(--foreground)] opacity-90">
              {t.footer1}{' '}
              <a
                href="#contact"
                className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-colors"
                style={{ textDecorationColor: 'var(--foreground)', color: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C3F0CD'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
              >
                {t.contactLink}
              </a>
              {' '}{t.footer2}{' '}
              <a
                href="mailto:sophia.lin168@protonmail.com"
                className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-colors"
                style={{ textDecorationColor: 'var(--foreground)', color: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C3F0CD'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
              >
                {t.emailLink}
              </a>
              {' '}{t.footer3}
            </p>
          </div>
        </FadeInUp>
      </div>
    </SectionWrapper>
  );
}
