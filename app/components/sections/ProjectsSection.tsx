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
            className="grid gap-3 sm:gap-4 lg:gap-5"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gridAutoRows: '260px',
              gridAutoFlow: 'dense',
            }}
          >
            {projects.map((project, index) => {
              // Create varying sizes for masonry effect like techunt.fr
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
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl"
                  style={{
                    gridColumn: `span ${Math.min(size.colSpan, 2)}`,
                    gridRow: `span ${Math.min(size.rowSpan, 2)}`,
                    animation: `floatIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.12}s backwards`,
                  }}
                >
                  {/* Glowing border effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `conic-gradient(from 0deg, ${project.bgColor}, rgba(255,255,255,0.5), ${project.bgColor})`,
                      padding: '1px',
                    }}
                  >
                    <div className="absolute inset-1 rounded-2xl" style={{ backgroundColor: project.bgColor }} />
                  </div>
                  
                  {/* Background with gradient overlay */}
                  <div 
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{ 
                      backgroundColor: project.bgColor,
                      backgroundImage: `linear-gradient(135deg, ${project.bgColor} 0%, rgba(255,255,255,0.1) 100%)`,
                    }}
                  />
                  
                  {/* Animated floating particles/lights on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                    <div 
                      className="absolute w-full h-full"
                      style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      }}
                    />
                  </div>
                  
                  {/* Content container */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    {/* Top icon and accent */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" style={{
                        boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2)',
                      }}>
                        <svg className="w-6 h-6 text-black group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      
                      {/* Accent line with glow */}
                      <div 
                        className="w-8 h-1 rounded-full group-hover:w-12 transition-all duration-300"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.3)',
                          boxShadow: '0 0 12px rgba(255,255,255,0.3), 0 0 24px rgba(255,255,255,0.1)',
                        }}
                      />
                    </div>
                    
                    {/* Content area - positioned at bottom */}
                    <div className="flex flex-col gap-3">
                      {/* Project title */}
                      <div>
                        <h3 
                          className="font-bold transition-all duration-300 group-hover:translate-y-0 translate-y-1 line-clamp-2"
                          style={{
                            fontSize: size.colSpan === 2 ? '16px' : '14px',
                            lineHeight: '1.2',
                            color: 'rgba(0,0,0,0.85)',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,0,0,0.85)'}
                        >
                          {project.name}
                        </h3>
                      </div>
                      
                      {/* Project description */}
                      <p 
                        className="text-xs leading-relaxed transition-all duration-300 opacity-80 group-hover:opacity-100 line-clamp-2"
                        style={{
                          color: 'rgba(0,0,0,0.65)',
                        }}
                      >
                        {project.description}
                      </p>
                      
                      {/* Bottom action - appears on hover with glow */}
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 pt-1 border-t border-black/10 group-hover:border-black/30">
                        <span className="text-xs font-semibold text-black/70 group-hover:text-black transition-colors duration-300">View</span>
                        <svg className="w-4 h-4 text-black/70 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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
        
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </SectionWrapper>
  )
}
