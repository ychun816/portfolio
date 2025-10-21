export default function IntroSection(){
  return (
    <section id="intro" className="min-h-screen snap-start flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <h1 className="text-[60px] md:text-[60px]" style={{ fontSize: '60px', lineHeight: '1.1' }}>About Me</h1>
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-[color:var(--foreground)] opacity-90">
          <p>
            Hi! I'm Yichun Lin, a Taiwan-born engineer blending my love for art with my passion for cloud and DevOps. I transitioned from project management in the art world to software engineering, and moved to Paris, the city where creativity meets technology, to build a career in DevOps and cloud engineering.
          </p>

          <p>
            At École 42 Paris, I gained solid, practical experience in programming and scripting including C, C++, TypeScript, JavaScript, and Bash. I also mastered DevOps and infrastructure tools like Docker, Docker Compose, Kubernetes, and CI/CD pipelines (GitHub Actions, GitLab CI), as well as system administration and monitoring with Linux (Debian, Ubuntu), networking, web servers (NGINX, Apache), file systems, shell scripting, and Prometheus/Grafana. Check out{' '}
            <a 
              href="#projects" 
              className="underline decoration-solid underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ textDecorationColor: 'var(--foreground)' }}
            >
              my Projects
            </a>
            .
          </p>

          <p>
            I combine creativity from art, leadership from project management, and engineering precision to design cloud solutions that don't just work — they flow.
          </p>

          <p>
            I'm currently seeking a Cloud or DevOps internship in Paris, where I can build, automate, and scale systems in a city that inspires both innovation and creativity.
          </p>

          <p className="pt-4">
            Always passionate to{' '}
            <a 
              href="https://www.linkedin.com/in/sophia-lin-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-solid underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ textDecorationColor: 'var(--foreground)' }}
            >
              connect
            </a>
            !
          </p>
        </div>
      </div>
    </section>
  )
}
