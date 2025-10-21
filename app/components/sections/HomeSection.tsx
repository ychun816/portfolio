import SocialLinks from '../SocialLinks';

export default function HomeSection(){
  return (
    <section id="home" className="min-h-screen snap-start flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        {/* Main Title */}
        <h1 className="mb-12 md:mb-16">
          Hello! I'm <span className="text-[color:var(--accent)]">Yichun LIN</span>
        </h1>
        
        {/* Subtitle / Description */}
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-[color:var(--foreground)] opacity-90">
          I'm a Junior Cloud/DevOps Software Engineer from{' '}
          <a 
            href="https://42.fr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-block group cursor-pointer"
          >
            <span className="relative">
              Ecole 42 in Paris
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[color:var(--foreground)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 4px)'
              }}></span>
            </span>
          </a>
          , eager to adapt to any new challenges to create effective solutions.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-[color:var(--foreground)] opacity-90">
          Please check out my{' '}
          <a 
            href="#projects" 
            className="relative inline-block group cursor-pointer"
          >
            <span className="relative">
              PROJECTS
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[color:var(--foreground)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 4px)'
              }}></span>
            </span>
          </a>
          ! Always passionate to{' '}
          <a 
            href="mailto:ychun8lin@gmail.com"
            className="relative inline-block group cursor-pointer"
          >
            <span className="relative">
              connect
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[color:var(--foreground)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 4px)'
              }}></span>
            </span>
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
