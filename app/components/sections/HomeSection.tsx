import SocialLinks from '../SocialLinks';

export default function HomeSection(){
  return (
    <section id="home" className="min-h-screen snap-start flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        {/* Main Title */}
        <h1 className="text-[70px] md:text-[70px] mb-12 md:mb-16" style={{ fontSize: '70px', lineHeight: '1.1' }}>
          Hello! I'm <span className="text-[color:var(--accent)]">Yichun LIN</span>
        </h1>
        <br />
        {/* Subtitle / Description */}
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-[color:var(--foreground)] opacity-90">
          I'm a Junior Cloud/DevOps Software Engineer from{' '}
          <a 
            href="https://42.fr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline decoration-solid underline-offset-2 hover:opacity-70 transition-opacity"
            style={{ textDecorationColor: 'var(--foreground)' }}
          >
            Ecole 42 in Paris
          </a>
          , eager to adapt to any new challenges to create effective solutions.
        </p>
        <br />
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-[color:var(--foreground)] opacity-90">
          Please check out my{' '}
          <a 
            href="#projects" 
            className="underline decoration-solid underline-offset-2 hover:opacity-70 transition-opacity"
            style={{ textDecorationColor: 'var(--foreground)' }}
          >
            PROJECTS!
          </a>
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-[color:var(--foreground)] opacity-90">
           Or {' '}
          <a 
            href="mailto:ychun8lin@gmail.com"
            className="underline decoration-solid underline-offset-2 hover:opacity-70 transition-opacity"
            style={{ textDecorationColor: 'var(--foreground)' }}
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
