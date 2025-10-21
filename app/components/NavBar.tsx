export default function NavBar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex gap-6 text-lg" style={{ color: 'inherit' }}>
        <li><a href="#home" className="px-3 py-1 hover:underline">Home</a></li>
        <li><a href="#intro" className="px-3 py-1 hover:underline">Intro</a></li>
        <li><a href="#projects" className="px-3 py-1 hover:underline">Projects</a></li>
        <li><a href="#resume" className="px-3 py-1 hover:underline">Resume</a></li>
        <li><a href="#contact" className="px-3 py-1 hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}
