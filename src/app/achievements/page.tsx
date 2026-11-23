'use client';

import Reveal from '@/components/ui/Reveal';
import { Award, Trophy, GraduationCap, Users } from 'lucide-react';

export default function AchievementsPage() {
  const items = [
    {
      title: 'Champion in Group Singing — Stagecraft',
      org: 'IIT Student Union',
      year: '2026',
      category: 'Award',
      icon: Trophy,
      detail:
        'Won the Group Singing Championship at Stagecraft, the annual talent show organized by the Student Union of the Informatics Institute of Technology.',
    },
    {
      title: 'Champion in Group Singing — Stagecraft',
      org: 'IIT Student Union',
      year: '2024',
      category: 'Award',
      icon: Trophy,
      detail:
        'Secured first place in the Group Singing category at Stagecraft (IIT), marking the first of back-to-back championship titles.',
    },
    {
      title: 'Annual Sports Meet — Badminton & Chess Representative',
      org: 'Informatics Institute of Technology (IIT)',
      year: '2024',
      category: 'Sports',
      icon: Award,
      detail:
        'Represented Gamini House in badminton and chess competitions, demonstrating teamwork, strategic thinking, and sportsmanship.',
    },
    {
      title: 'IEEE WIE Sherlock Event & Campus Volunteering',
      org: 'IIT • IEEE WIE • IET',
      year: '2024',
      category: 'Community',
      icon: Users,
      detail:
        'Participated in the IEEE Women in Engineering (WIE) Sherlock Event and volunteered at Cutting Edge (IIT) and the IET Installation Ceremony.',
    },
    {
      title: 'Diploma in Information & Communication Technology',
      org: 'ESoft Metro Campus',
      year: '2020',
      category: 'Certification',
      icon: GraduationCap,
      detail:
        'Completed accredited diploma training covering core computing concepts, software applications, and foundational ICT workflows.',
    },
    {
      title: 'Diploma in English Language',
      org: 'ESoft Metro Campus',
      year: '2020',
      category: 'Certification',
      icon: GraduationCap,
      detail:
        'Completed formal certification in academic, professional, and technical English communication.',
    },
  ];

  return (
    <div>
      <div className="bg-[var(--dark-bg)] text-white py-20 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Achievements &amp; Certifications</h1>
      </div>

      <section className="py-20 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {items.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <Reveal key={`${item.title}-${item.year}`} delay={idx * 0.08}>
              <div className="p-6 rounded-xl bg-[var(--light-bg)] border border-slate-200/70 flex gap-4 items-start h-full shadow-sm hover:shadow-md transition">
                <div className="p-3 bg-[var(--primary)] text-white rounded-lg shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[var(--primary)]">
                      {item.year} • {item.org}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white text-[var(--dark-bg)] border border-slate-200 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--dark-bg)] mt-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>
    </div>
  );
}