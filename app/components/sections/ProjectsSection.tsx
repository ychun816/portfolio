'use client';

import SectionWrapper from '../SectionWrapper';

const projects = [
  {
    id: 1,
    name: 'Ft_transcendence-2FA-Authentication',
    description: 'Two-factor authentication system for secure user access and verification',
    url: 'https://github.com/ychun816/Ft_transcendence-2FA-Authentication',
    bgColor: '#ADD8E6', // Pastel blue
  },
  {
    id: 2,
    name: 'FT_transcendence-monitoring-system',
    description: 'Real-time monitoring and analytics system for application performance tracking',
    url: 'https://github.com/ychun816/FT_transcendence-monitoring-system',
    bgColor: '#DDA0DD', // Pastel purple
  },
  {
    id: 3,
    name: 'webserv',
    description: 'Custom HTTP web server implementation with request/response handling',
    url: 'https://github.com/ychun816/webserv',
    bgColor: '#FFB6D9', // Pastel pink
  },
  {
    id: 4,
    name: 'inception',
    description: 'Docker containerization and orchestration for microservices deployment',
    url: 'https://github.com/ychun816/inception',
    bgColor: '#FFFFE0', // Pastel yellow
  },
];

export default function ProjectsSection(){
  return (
    <SectionWrapper id="projects">
      <div className="w-full max-w-7xl">
        <h1 className="mb-16" style={{ fontSize: '60px', lineHeight: '1.1' }}>Projects</h1>
        
        {/* Horizontal Scrolling Container */}
        <div className="overflow-x-auto scroll-smooth">
          <div className="flex gap-6 min-w-min">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-80 group cursor-pointer"
                style={{
                  animation: `slideIn 0.6s ease-out ${index * 0.1}s backwards`,
                }}
              >
                {/* Project Card */}
                <div className="rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl flex flex-col" style={{ boxShadow: 'var(--shadow)', height: '420px' }}>
                  {/* Preview Window - 60% height */}
                  <div 
                    className="flex-1 relative overflow-hidden flex items-center justify-center"
                    style={{ backgroundColor: project.bgColor, minHeight: '252px' }}
                  >
                    {/* Neon green overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{ backgroundColor: '#39ff14' }} />
                    
                    {/* Placeholder with icon */}
                    <div className="text-center relative z-10">
                      <svg className="w-16 h-16 mx-auto text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <p className="text-gray-600 text-sm">GitHub Project</p>
                    </div>
                  </div>

                  {/* Project Info - 40% height */}
                  <div className="flex-1 p-4 bg-white/5 border border-white/10 backdrop-filter backdrop-blur-md overflow-hidden flex flex-col" style={{ minHeight: '168px' }}>
                    <h3 
                      className="font-semibold text-base transition-colors duration-300 line-clamp-2"
                      style={{
                        color: 'var(--foreground)',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(57, 255, 20, 0.4)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--foreground)'}
                    >
                      {project.name}
                    </h3>
                    <p className="text-[color:var(--foreground)] opacity-70 mt-2 text-sm leading-tight line-clamp-2 flex-1">
                      {project.description}
                    </p>
                    
                    {/* GitHub Link Indicator */}
                    <div className="mt-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold" style={{ color: 'rgba(57, 255, 20, 0.4)' }}>
                      <span>View on GitHub</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </SectionWrapper>
  )
}
