export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-teal-400">
          TS<span className="text-slate-400">.dev</span>
        </a>
        <ul className="flex space-x-6 text-sm font-medium text-slate-300">
          <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-teal-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-teal-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}