import Reveal from '@/components/ui/Reveal';
import { Award } from 'lucide-react';

export default function AchievementsPage() {
  const items = [
    { title: 'Hackathon / Competition Name', org: 'Organizer Name', year: '2026', detail: 'Describe your placement or contribution.' },
    { title: 'Certification Title', org: 'Issuing Platform', year: '2025', detail: 'Skills covered in this certification.' },
  ];

  return (
    <div>
      <div className="bg-[var(--dark-bg)] text-white py-20 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Achievements & Certifications</h1>
        <p className="text-sm text-[var(--primary)] font-semibold">Home / Achievements</p>
      </div>

      <section className="py-20 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <Reveal key={item.title}>
            <div className="p-6 rounded-lg bg-[var(--light-bg)] flex gap-4 items-start">
              <div className="p-3 bg-[var(--primary)] text-white rounded shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[var(--primary)]">{item.year} • {item.org}</span>
                <h3 className="text-lg font-bold text-[var(--dark-bg)] mt-1">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{item.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}