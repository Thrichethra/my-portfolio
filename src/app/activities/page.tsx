'use client';

import Reveal from '@/components/ui/Reveal';
import { Trophy, Music, ShoppingBag, Check } from 'lucide-react';

const activitySections = [
  {
    id: 'sports',
    badge: 'Athletics & Teamwork',
    title: 'Sports',
    icon: Trophy,
    description:
      'Beyond coding, I stay sharp through a balance of physical agility and mental strategy with my two favorite sports: badminton and chess. Badminton keeps me energized, fast on my feet, and focused under pressure, while chess challenges me to think several moves ahead and solve complex problems patiently. Together, they reflect how I approach software development—combining quick adaptability with thoughtful planning.',
    highlights: ['Inter-School Sportsmeet', 'Inter-University', 'Fitness & Endurance'],
    images: [
      { src: '/chess1.jpeg', alt: 'Sports moment 1', position: 'object-[center_38%]' },
      { src: '/badminton1.jpeg', alt: 'Sports moment 2', position: 'object-center' },
    ],
  },
  {
    id: 'music',
    badge: 'Creativity & Rhythm',
    title: 'Music',
    icon: Music,
    description:
      'Music has been a defining part of my life for over 10 years, having started learning Carnatic music at the age of 10 and completing formal Carnatic music examinations up to Grade 3. Beyond academic training, I have performed on live television broadcasts on Nethra TV and recorded a vocal jingle for Athavan FM. At university, performing taught me vocal discipline, stage confidence, and teamwork—highlighted by winning back-to-back Group Singing Championships at Stagecraft, the annual IIT Student Union talent show.',
    highlights: [
      '10+ Years Carnatic Music Training (Completed Grade 3 Exams)',
      'Athavan FM Jingle Vocalist & Nethra TV Live Show Performer',
      'Two-Time Stagecraft Group Singing Champion (2024 & 2026)',
    ],
    images: [
      { src: '/music1.jpeg', alt: 'Music performance 1', position: 'object-top' },
      { src: '/music2.jpeg', alt: 'Music performance 2', position: 'object-top' },
    ],
  },
  {
    id: 'fashion',
    badge: 'Entrepreneurship & Brand',
    title: 'Trio Fashion Business',
    icon: ShoppingBag,
    description:
      'I founded Trio Fashion with a vision to blend handmade accessories with modern aesthetics. As Creative Director, I lead the design process and oversee all aspects of the brand, from product development to digital marketing. Through our dedicated Instagram platform, Trio Fashion has built a strong online presence and a loyal customer base.',
    highlights: ['Founder', 'Brand Identity & Social Media', 'Customer Experience & Sales'],
    images: [
      { src: '/trio1.jpeg', alt: 'Trio Fashion collection 1', position: 'object-center' },
      { src: '/trio2.jpeg', alt: 'Trio Fashion collection 2', position: 'object-center' },
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <div className="bg-slate-50/70">
      {/* Page Banner */}
      <div className="bg-[var(--dark-bg)] text-white py-20 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Beyond Code &amp; Activities</h1>
      </div>

      {/* Stacked Activity Cards with Divider Lines */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {activitySections.map((section, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div key={section.id}>
              <section
                id={section.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-10"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Text Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Reveal direction={isReversed ? 'right' : 'left'}>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--light-bg)] text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-4">
                        <section.icon className="w-4 h-4" />
                        {section.badge}
                      </div>

                      <h2 className="text-3xl font-extrabold text-[var(--dark-bg)] mb-4">
                        {section.title}
                      </h2>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {section.description}
                      </p>

                      <div className="pt-4 border-t border-slate-100 space-y-2.5">
                        {section.highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2.5 text-sm font-bold text-[var(--dark-bg)]"
                          >
                            <Check className="w-4 h-4 text-[var(--primary)] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </Reveal>
                  </div>

                  {/* Balanced 2-Photo Portrait-Friendly Grid */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Reveal direction={isReversed ? 'left' : 'right'}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {section.images.slice(0, 2).map((img, imgIdx) => (
                          <div
                            key={`${section.id}-${imgIdx}`}
                            className="aspect-[3/4] max-h-[360px] w-full rounded-xl overflow-hidden bg-[var(--light-bg)] border border-slate-200 shadow-sm"
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              onError={(e) => {
                                e.currentTarget.src = section.images[0].src;
                              }}
                              className={`w-full h-full object-cover ${img.position} hover:scale-105 transition duration-500`}
                            />
                          </div>
                        ))}
                      </div>
                    </Reveal>
                  </div>
                </div>
              </section>

              {/* Horizontal Divider Line Between Cards */}
              {index < activitySections.length - 1 && (
                <div className="mt-12 flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)]/40" />
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}