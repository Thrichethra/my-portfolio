'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, Code2, Smartphone, Search, Palette, Kanban, PhoneCall, ArrowRight
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const slides = [
  {
    subtitle: 'Creative & Innovative',
    title: 'Hi, I am Thrichethra Sivarajah',
    description: 'Undergraduate Software Engineer at Informatics Institute of Technology, Westminster UK',
    primaryBtn: { label: 'Explore Projects', href: '/projects' },
    secondaryBtn: { label: 'Contact Me', href: '/contact' },
  },
];

const interestAreas = [
  { icon: Code2, title: 'Web Development', stack: 'Next.js | React | TypeScript | Tailwind CSS' },
  { icon: Smartphone, title: 'Apps Development', stack: 'Flutter | React Native | Kotlin' },
  { icon: Search, title: 'UI/UX Research', stack: 'User Interviews | Wireframing | Usability Testing' },
  { icon: Palette, title: 'UI/UX Design', stack: 'Figma | Adobe XD | Prototyping' },
  { icon: Kanban, title: 'Project Management', stack: 'Jira | ClickUp | Agile Scrum' },
];

export default function HomePage() {
  const [currentSlide] = useState(0);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[var(--dark-bg)] text-white min-h-[78vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[--dark-bg] via-[--dark-bg]/90 to-[--dark-bg]/20" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5 }}
            >
              <p className="uppercase tracking-widest text-sm font-bold text-[var(--primary)] mb-3">
                {slides[currentSlide].subtitle}
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
                {slides[currentSlide].title}
              </h1>
              <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-8">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href={slides[currentSlide].primaryBtn.href}
                  className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-8 py-3.5 rounded transition"
                >
                  {slides[currentSlide].primaryBtn.label}
                </Link>
                <Link
                  href={slides[currentSlide].secondaryBtn.href}
                  className="border-2 border-white hover:bg-white hover:text-[var(--dark-bg)] text-white font-bold px-8 py-3.5 rounded transition"
                >
                  {slides[currentSlide].secondaryBtn.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-[var(--primary)] font-bold uppercase tracking-wider text-sm mb-2">About Me</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                I am currently pursuing my Bachelor's degree in Computer Science at the Informatics Institute of Technology (IIT), affiliated with the University of Westminster, UK. Alongside gaining hands-on expertise across diverse technical domains and collaborative team projects, I actively stay involved in campus life from sports and talent shows to running my own creative brand—which shapes how I solve problems and design user-focused software.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Web Application Development',
                  'Mobile App Development',
                  'UI/UX Research & Design',
                  'Software Architecture',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-bold text-[var(--dark-bg)]">
                    <Check className="w-5 h-5 text-[var(--primary)] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href="/about"
                  className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-7 py-3.5 rounded transition"
                >
                  More About Me
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal direction="right">
              <img
                src="/profile1.jpeg"
                alt="Thrichethra Sivarajah"
                className="w-full max-w-[500px] h-full mx-auto rounded-xl border-2 border-[var(--primary)]/20 shadow-md"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. INTEREST AREAS / SERVICES GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[var(--primary)] font-bold uppercase tracking-wider text-sm mb-2">
                My Interest Areas
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--dark-bg)]">
                Custom Digital Solutions & Technical Expertise
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interestAreas.map((area, idx) => (
              <Reveal key={area.title} delay={idx * 0.1}>
                <div className="group bg-[var(--light-bg)] hover:bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition duration-300 text-center flex flex-col items-center h-full">
                  <div className="w-16 h-16 bg-[var(--primary)] text-white rounded rotate-45 flex items-center justify-center mb-8 group-hover:scale-110 transition">
                    <area.icon className="w-7 h-7 -rotate-45" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--dark-bg)] mb-3">{area.title}</h3>
                  <p className="text-slate-600 text-sm mb-6">{area.stack}</p>
                  <Link
                    href="/projects"
                    className="mt-auto w-10 h-10 rounded bg-[var(--primary)] text-white flex items-center justify-center opacity-90 group-hover:opacity-100 transition"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}

            {/* Highlighted Contact CTA Card */}
            <Reveal delay={0.5}>
              <div className="bg-[var(--primary)] text-white p-8 rounded-lg shadow-lg text-center flex flex-col justify-center items-center h-full">
                <h3 className="text-2xl font-extrabold mb-3">Let's Collaborate</h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  Have a project in mind, exciting ideas to share, or want to connect? Reach out anytime.
                </p>
                <div className="flex items-center gap-2 text-xl font-extrabold">
                  <PhoneCall className="w-5 h-5" /> +94 7X XXX XXXX
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE PROJECT SPOTLIGHT */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="aspect-video rounded-xl bg-[var(--light-bg)] border border-slate-200 flex items-center justify-center text-slate-400 font-semibold">
              Signature Project Screenshot (/public/featured-project.png)
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="text-[var(--primary)] font-bold uppercase tracking-wider text-sm mb-2">
              My Signature Project
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--dark-bg)] mb-5">
              Featured Project Title
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Describe your flagship project here—what problem it solves, the tech stack used, and your role in building it.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8 font-bold text-[var(--dark-bg)] text-sm">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--primary)]" /> Real-Time Features</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--primary)]" /> Modern Responsive UI</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--primary)]" /> Scalable Backend</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--primary)]" /> User-Tested Design</div>
            </div>

            <Link
              href="/projects"
              className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-8 py-3.5 rounded transition"
            >
              View All Projects
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}