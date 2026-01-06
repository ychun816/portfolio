'use client';

import SectionWrapper from '../SectionWrapper';
import SVGTextClip from '../SVGTextClip';
import FadeInUp from '../FadeInUp';

const certificates = [
  {
    id: 1,
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Certified',
    description: 'Obtained the certificate and the skills of AWS Cloud Services & Computing',
    url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    bgColor: '#FFD699', // Pastel orange
  },
  {
    id: 2,
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: '2026',
    description: 'Preparing and set to pass in 2026',
    url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    bgColor: '#B5E7A0', // Pastel green
  },
];

export default function CertificatesSection() {
  return (
    <SectionWrapper id="certificates">
      <div className="w-full max-w-7xl">
        <SVGTextClip
          text="Certificates"
          className="mb-16 class-display"
          style={{ fontSize: '60px', lineHeight: '1.1' }}
        />
        
        {/* Horizontal Scrolling Container */}
        <FadeInUp delay={200}>
          <div className="overflow-x-auto scroll-smooth">
            <div className="flex gap-6 min-w-min">
              {certificates.map((cert, index) => (
                <a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  style={{
                    animation: `slideIn 0.6s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  {/* Certificate Card */}
                  <div className="rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl flex flex-col" style={{ boxShadow: 'var(--shadow)', height: '420px' }}>
                    {/* Preview Window - 60% height */}
                    <div 
                      className="flex-1 relative overflow-hidden flex items-center justify-center"
                      style={{ backgroundColor: cert.bgColor, minHeight: '252px' }}
                    >
                      {/* Neon green overlay on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{ backgroundColor: '#39ff14' }} />
                      
                      {/* Placeholder with icon */}
                      <div className="text-center relative z-10">
                        <svg className="w-16 h-16 mx-auto text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <p className="text-gray-600 text-sm">Certificate</p>
                      </div>
                    </div>

                    {/* Certificate Info - 40% height */}
                    <div className="flex-1 p-4 bg-white/5 border border-white/10 backdrop-filter backdrop-blur-md overflow-hidden flex flex-col" style={{ minHeight: '168px' }}>
                      <h3 
                        className="font-semibold text-base transition-colors duration-300 line-clamp-2"
                        style={{
                          color: 'var(--foreground)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#C3F0CD'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--foreground)'}
                      >
                        {cert.name}
                      </h3>
                      <p className="text-[color:var(--foreground)] opacity-80 mt-1 text-xs font-medium">
                        {cert.issuer} • {cert.date}
                      </p>
                      <p className="text-[color:var(--foreground)] opacity-70 mt-2 text-sm leading-tight line-clamp-2 flex-1">
                        {cert.description}
                      </p>
                      
                      {/* View Certificate Link Indicator */}
                      <div className="mt-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold" style={{ color: '#C3F0CD' }}>
                        <span>View Certificate</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </SectionWrapper>
  );
}
