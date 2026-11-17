'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';

const allProjects = [
  { title: 'Project One', category: 'web', desc: 'Full-stack web app built with Next.js and Tailwind.', stack: 'Next.js, TypeScript' },
  { title: 'Project Two', category: 'mobile', desc: 'Cross-platform mobile app with real-time sync.', stack: 'Flutter, Firebase' },
  { title: 'Project Three', category: 'uiux', desc: 'Complete UI/UX case study and interactive prototype.', stack: 'Figma, User Research' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="bg-[var(--dark-bg)] text-white py-20 text-center">
        <h1 className="text-4xl font-extrabold mb-2">My Projects</h1>
        <p className="text-sm text-[var(--primary)] font-semibold">Home / Projects</p>
      </div>

      <section className="py-20 max-w-6xl mx-auto px-6">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'web', label: 'Web Development' },
            { id: 'mobile', label: 'Mobile Apps' },
            { id: 'uiux', label: 'UI/UX Design' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded font-bold text-sm transition ${
                filter === tab.id
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-[var(--light-bg)] text-[var(--dark-bg)] hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((proj) => (
            <Reveal key={proj.title}>
              <div className="bg-[var(--light-bg)] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition p-6">
                <span className="text-xs font-bold uppercase text-[var(--primary)]">{proj.stack}</span>
                <h3 className="text-xl font-bold text-[var(--dark-bg)] mt-2 mb-3">{proj.title}</h3>
                <p className="text-slate-600 text-sm">{proj.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}