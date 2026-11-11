export default function Hero() {
  return (
    <section className="py-24 flex flex-col items-start justify-center min-h-[80vh]">
      <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase mb-4">
        Software Developer
      </span>
      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
        Hi, I'm <span className="text-teal-400">Thrichethra Sivarajah</span>
      </h1>
      <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
        I craft responsive, high-performance web applications with Next.js, React, and modern web tools.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-teal-300 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900 transition"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}