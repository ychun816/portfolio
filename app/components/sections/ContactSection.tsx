export default function ContactSection(){
  return (
    <section id="contact" className="min-h-screen snap-start flex items-center justify-center">
      <div className="max-w-2xl p-8 glass">
        <h2 className="text-3xl font-bold mb-2">Contact</h2>
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
