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
      { src: '/badminton1.jpeg', alt: 'Sports moment 1' },
      { src: '/badminton1.jpeg', alt: 'Sports moment 2' },
      { src: '/badminton3.jpeg', alt: 'Sports moment 3' },
    ],
  },
  {
    id: 'music',
    badge: 'Creativity & Rhythm',
    title: 'Music',
    icon: Music,
    description:
      'Music has been a core part of my creative journey for over six years through dedicated training in Carnatic music. From competing in numerous school-level music competitions to taking the stage at university, performing has taught me discipline, vocal precision, and teamwork. A proud highlight of my university journey is competing twice in the group song category at the university talent show and winning the championship both times.',
    highlights: ['Vocal Performance', 'Live Events & Stage Shows', 'Creative Expression'],
    images: [
      { src: 'music1.jpeg', alt: 'Music performance 1' },
      { src: 'music1.jpeg', alt: 'Music performance 2' },
      { src: 'music3.jpeg', alt: 'Music performance 3' },
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
      { src: '/activities/fashion-1.jpg', alt: 'Trio Fashion collection 1' },
      { src: '/activities/fashion-2.jpg', alt: 'Trio Fashion collection 2' },
      { src: '/activities/fashion-3.jpg', alt: 'Trio Fashion collection 3' },
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <div>
      {/* Page Banner */}
      <div className="bg-[var(--dark-bg)] text-white py-20 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Beyond Code & Activities</h1>
        <p className="text-sm text-[var(--primary)] font-semibold">Home / Activities</p>
      </div>

      {/* Stacked Activity Sections */}
      <div className="divide-y divide-slate-200">
        {activitySections.map((section, index) => {
          const isReversed = index % 2 === 1;

          return (
            <section
              key={section.id}
              id={section.id}
              className={`py-20 ${isReversed ? 'bg-[var(--light-bg)]/50' : 'bg-white'}`}
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  {/* Text Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Reveal direction={isReversed ? 'right' : 'left'}>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[var(--light-bg)] text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-4">
                        <section.icon className="w-4 h-4" />
                        {section.badge}
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--dark-bg)] mb-5">
                        {section.title}
                      </h2>

                      <p className="text-slate-600 leading-relaxed mb-6">
                        {section.description}
                      </p>

                      <div className="space-y-2.5">
                        {section.highlights.map((item) => (
                          <div key={item} className="flex items-center gap-2.5 text-sm font-bold text-[var(--dark-bg)]">
                            <Check className="w-4 h-4 text-[var(--primary)] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </Reveal>
                  </div>

                  {/* Images Grid Column (1 Featured + 2 Smaller Below) */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Reveal direction={isReversed ? 'left' : 'right'}>
                      <div className="grid grid-cols-2 gap-4">
                        {/* Main Wide Photo */}
                        <div className="col-span-2 aspect-[500/675] rounded-xl overflow-hidden bg-[var(--light-bg)] border border-slate-200 shadow-sm">
                          <img
                            src={section.images[0].src}
                            alt={section.images[0].alt}
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                          />
                        </div>

                        {/* Two Side-by-Side Photos */}
                        {section.images.slice(1).map((img) => (
                          <div
                            key={img.src}
                            className="aspect-[4/3] rounded-xl overflow-hidden bg-[var(--light-bg)] border border-slate-200 shadow-sm"
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}