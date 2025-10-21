"use client";

import SocialLinks from '../SocialLinks';

export default function HomeSection(){
  return (
    <section id="home" className="min-h-screen snap-start flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-4xl w-full">
        {/* Main Title */}
        <h1 className="text-[60px] md:text-[60px]" style={{ fontSize: '60px', lineHeight: '1.1' }}>
          Hello! I'm <span className="text-[color:var(--accent)]">Yichun LIN</span>
        </h1>
        
        {/* Subtitle / Description */}
        <p className="text-base md:text-lg leading-relaxed mb-6 text-[color:var(--foreground)] opacity-90">
          I'm a Junior Cloud/DevOps Software Engineer from{' '}
          <a 
            href="https://42.fr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-opacity"
            style={{ textDecorationColor: 'var(--foreground)', color: 'inherit' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(57, 255, 20, 0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
          >
            Ecole 42 in Paris
          </a>
          , eager to adapt to any new challenges to create effective solutions.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed mb-6 text-[color:var(--foreground)] opacity-90">
          Please check out my{' '}
          <a 
            href="#projects" 
            className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-opacity"
            style={{ textDecorationColor: 'var(--foreground)', color: 'inherit' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(57, 255, 20, 0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
          >
            PROJECTS!
          </a>
        </p>
        
        <p className="text-base md:text-lg leading-relaxed mb-12 text-[color:var(--foreground)] opacity-90">
           Or {' '}
          <a 
            href="mailto:ychun8lin@gmail.com"
            className="underline decoration-solid underline-offset-2 hover:opacity-100 transition-opacity"
            style={{ textDecorationColor: 'var(--foreground)', color: 'inherit' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(57, 255, 20, 0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
          >
            EMAIL ME
          </a>
          !
        </p>

        {/* Social Links / Icons */}
        <SocialLinks />

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <svg className="w-6 h-6 animate-bounce opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
