export default function ContactSection(){
  return (
    <section id="contact" className="min-h-screen snap-start flex items-center justify-center px-4">
      <div className="max-w-2xl">
        <h1 className="mb-12">Contact</h1>
        <form className="mt-4 flex flex-col gap-3">
          <input className="p-3 rounded bg-transparent border border-white/6" placeholder="Your name" />
          <input className="p-3 rounded bg-transparent border border-white/6" placeholder="Email" />
          <textarea className="p-3 rounded bg-transparent border border-white/6" rows={4} placeholder="Message" />
          <button className="px-4 py-2 bg-[color:var(--accent)] rounded text-white">Send</button>
        </form>
      </div>
    </section>
  )
}
