'use client';

import SectionWrapper from '../SectionWrapper';
import SVGTextClip from '../SVGTextClip';
import FadeInUp from '../FadeInUp';

const projects = [
  {
    id: 1,
    name: 'cloud-1',
    description: 'Deployed with AWS EC2 Cloud, Terraform, Ansible, Docker.',
    url: 'https://github.com/ychun816/cloud-1',
    bgColor: '#B0E0B0', // Pastel green
  },
  {
    id: 2,
    name: 'Inception of Things',
    description: 'Exploring Kubernetes clusters (K3s) and orchestration.',
    url: 'https://github.com/ychun816/inception-of-things',
    bgColor: '#FFD4B2', // Pastel orange
  },
  {
    id: 3,
    name: 'inception',
    description: 'Docker containerization and orchestration for microservices deployment',
    url: 'https://github.com/ychun816/inception',
    bgColor: '#FFFFE0', // Pastel yellow
  },
  {
    id: 4,
    name: 'Vue-la-la: Serverless Geospatial Platform',
    description: 'Architect a scalable AWS solution using Lambda and DynamoDB to power "Map-moiselle," a low-latency microservice for real-time location mapping.',
    url: 'https://github.com/ychun816/vue-la-la',
    bgColor: '#E6E6FA', // Pastel lavender
  },
  {
    id: 5,
    name: 'FT_transcendence-monitoring-system',
    description: 'Real-time monitoring and analytics system for application performance tracking',
    url: 'https://github.com/ychun816/FT_transcendence-monitoring-system',
    bgColor: '#DDA0DD', // Pastel purple
  },
  {
    id: 6,
    name: 'Ft_transcendence-2FA-Authentication',
    description: 'Two-factor authentication system for secure user access and verification',
    url: 'https://github.com/ychun816/Ft_transcendence-2FA-Authentication',
    bgColor: '#ADD8E6', // Pastel blue
  },
  {
    id: 7,
    name: 'webserv',
    description: 'Custom HTTP web server implementation with request/response handling',
    url: 'https://github.com/ychun816/webserv',
    bgColor: '#FFB6D9', // Pastel pink
  },
];

export default function ProjectsSection(){
  return (
    <SectionWrapper id="projects">
      <div className="w-full max-w-7xl">
        <SVGTextClip
          text="Projects"
          className="mb-16 class-display"
          style={{ fontSize: '60px', lineHeight: '1.1' }}
        />
        
        {/* Bento Grid Container */}
        <FadeInUp delay={200}>
          <div 
            className="grid gap-6 auto-rows-[300px]"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gridAutoFlow: 'dense',
            }}
          >
            {projects.map((project, index) => {
              // Create varying sizes for visual interest
              const sizes = [
                { colSpan: 1, rowSpan: 1 },
                { colSpan: 2, rowSpan: 1 },
                { colSpan: 1, rowSpan: 1 },
                { colSpan: 1, rowSpan: 2 },
                { colSpan: 1, rowSpan: 1 },
                { colSpan: 1, rowSpan: 1 },
                { colSpan: 2, rowSpan: 1 },
              ];
              
              const size = sizes[index] || { colSpan: 1, rowSpan: 1 };
              
              return (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                  style={{
                    gridColumn: `span ${Math.min(size.colSpan, 2)}`,
                    gridRow: `span ${Math.min(size.rowSpan, 2)}`,
                    animation: `fadeInScale 0.6s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  {/* Project Card */}
                  <div 
                    className="relative w-full h-full rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                    style={{ 
                      backgroundColor: project.bgColor,
                      boxShadow: 'var(--shadow)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {/* Animated grid background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                      backgroundImage: 'linear-gradient(90deg, rgba(57,255,20,0.1) 1px, transparent 1px), linear-gradient(rgba(57,255,20,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }} />
                    
                    {/* Neon green overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundColor: '#39ff14' }} />
                    
                    {/* Content container */}
                    <div className="relative z-10 w-full h-full flex flex-col p-6 bg-gradient-to-b from-transparent via-transparent to-black/40">
                      {/* Icon and title section */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 
                            className="font-semibold text-sm transition-colors duration-300 line-clamp-2"
                            style={{
                              color: 'var(--foreground)',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#C3F0CD'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--foreground)'}
                          >
                            {project.name}
                          </h3>
                        </div>
                        
                        <p className="text-[color:var(--foreground)] opacity-70 text-xs leading-tight line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Bottom action indicator */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold" style={{ color: '#C3F0CD' }}>
                          <span>View</span>
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-green-400 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </FadeInUp>
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
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </SectionWrapper>
  )
}
