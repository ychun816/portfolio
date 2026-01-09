"use client";

import SocialLinks from '../SocialLinks';
import SectionWrapper from '../SectionWrapper';
import SVGTextClip from '../SVGTextClip';
import FadeInUp from '../FadeInUp';

export default function HomeSection(){
  return (
    <SectionWrapper id="home">
      <div className="text-center max-w-4xl w-full">
        {/* Main Title with SVG Clip Animation */}
        <SVGTextClip
          text="Hello! I'm LIN Yichun"
          highlightSpans={[1, 2, 3]}
          className="mb-8 class-display"
          style={{ fontSize: '60px', lineHeight: '1.1' }}
        />
        
        {/* Subtitle / Description with Fade-In-Up */}
        <FadeInUp className="text-base md:text-lg leading-relaxed mb-6 text-[color:var(--foreground)] opacity-90" delay={200}>
          I'm a Junior Cloud/DevOps Software Engineer from{' '}
          <a 
            href="https://42.fr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-colors"
            style={{ textDecorationColor: '#C3F0CD', color: 'inherit' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C3F0CD'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
          >
            Ecole 42 Paris
          </a>
          , eager to adapt to new challenges and create effective solutions.
        </FadeInUp>
        
        <FadeInUp className="text-base md:text-lg leading-relaxed mb-12 text-[color:var(--foreground)] opacity-90" delay={300}>
          Please check out my{' '}
          <a 
            href="#projects" 
            className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-colors"
            style={{ textDecorationColor: '#C3F0CD', color: 'inherit' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C3F0CD'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
          >
            projects
          </a>
          , or{' '}
          <a 
            href="#resume" 
            className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-colors"
            style={{ textDecorationColor: '#C3F0CD', color: 'inherit' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C3F0CD'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
          >
            resume
          </a>
          !
        </FadeInUp>

        {/* Social Links / Icons */}
        <FadeInUp delay={400}>
          <SocialLinks />
        </FadeInUp>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <svg className="w-6 h-6 animate-bounce opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </SectionWrapper>
  )
}
