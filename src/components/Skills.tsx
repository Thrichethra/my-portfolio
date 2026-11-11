const skills = [
  'Next.js', 'React', 'TypeScript', 'JavaScript (ES6+)',
  'Tailwind CSS', 'Node.js', 'Git & GitHub', 'REST APIs',
  'HTML5 / CSS3', 'PostgreSQL', 'Vercel', 'UI/UX Design'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-800">
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 mb-8">Skills & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-center text-slate-200 font-medium hover:border-teal-400/50 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}