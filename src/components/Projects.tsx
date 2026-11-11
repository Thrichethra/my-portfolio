const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A modern dark-mode developer portfolio website built with Next.js App Router and Tailwind CSS.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/Thrichethra',
    demo: '#'
  },
  {
    title: 'Web Application Project',
    description: 'Full-stack web application featuring user authentication, database management, and interactive UI.',
    tags: ['React', 'Node.js', 'TypeScript', 'REST API'],
    github: 'https://github.com/Thrichethra',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-slate-800">
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono bg-teal-400/10 text-teal-400 px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 text-sm font-medium">
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-teal-400 transition">
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}