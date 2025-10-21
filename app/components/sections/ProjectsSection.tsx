export default function ProjectsSection(){
  return (
    <section id="projects" className="min-h-screen snap-start flex items-center justify-center px-4">
      <div className="max-w-4xl">
        <h1 className="mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg glass">
            <h3 className="font-semibold">Project One</h3>
            <p className="text-[color:var(--muted)] mt-2">Short description of project one.</p>
          </div>
          <div className="p-6 rounded-lg glass">
            <h3 className="font-semibold">Project Two</h3>
            <p className="text-[color:var(--muted)] mt-2">Short description of project two.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
