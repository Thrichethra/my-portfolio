'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  Award,
  Sparkles,
  CheckCircle2,
  Globe,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const headerBgImages = [
  '/badminton1.jpeg',
  '/music1.jpeg',
  '/1.jpeg',
  '/2.jpeg',
  '/3.jpeg',
  '/4.jpeg',
  '/5.jpeg',
  '/6.jpeg',
  '/7.jpeg',
  '/8.jpeg',
  '/9.jpeg',
  '/10.jpeg',
  '/11.jpeg',
  '/12.jpeg',
  '/13.jpeg',
  '/14.jpeg',
  '/15.jpeg',
  '/16.jpeg',
  '/17.jpeg',
  '/18.jpeg',


];

const education = [
  {
    degree: 'BSc (Hons) in Computer Science',
    institution:
      'Informatics Institute of Technology (IIT) — Affiliated with the University of Westminster, London',
    period: '2023 – Present',
    details:
      'Key Modules: Software Development Group Project, Object-Oriented Programming, Advanced Client-side Development, Web Design & Development, Database Systems, Algorithms, Client-Server Architecture, Software Development I (Python, Java), Computer Systems Fundamentals, Mathematics in Computing, and Trends in Computer Science.',
  },
  {
    degree: 'Diploma in English Language & Diploma in ICT',
    institution: 'ESoft Metro Campus',
    period: '2020',
    details:
      'Completed dual diploma studies strengthening academic communication and foundational information and communication technology skills.',
  },
  {
    degree: 'G.C.E. Advanced Level & Ordinary Level',
    institution: "Ramanathan Hindu Ladies' College",
    period: '2009 – 2022',
    details:
      'G.C.E. Advanced Level (2022): Commerce Stream (2B, 2C) • G.C.E. Ordinary Level (2019): 4A, 4B, 4C.',
  },
];

const skillGroups = [
  {
    category: 'Programming & Web Technologies',
    items: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'ReactJS', 'Bootstrap'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'SQL Server Management Studio'],
  },
  {
    category: 'Software & Design Tools',
    items: [
      'Figma',
      'VS Code',
      'IntelliJ IDEA',
      'Unity',
      'Visual Studio',
      'NetBeans',
      'Miro',
      'Microsoft Office',
    ],
  },
  {
    category: 'Soft Skills & Languages',
    items: [
      'Teamwork',
      'Leadership',
      'Problem-Solving',
      'Time Management',
      'English',
      'Indian Tamil',
    ],
  },
];

const highlights = [
  {
    title: 'Founder — Trio Fashion Platform (2024)',
    desc: 'Founded and manage an Instagram-based online business specializing in stylish handmade earrings and scrunchies.',
  },
  {
    title: 'Two-Time Champion in Group Singing — Stagecraft (2024 & 2026)',
    desc: 'Won back-to-back Group Singing Championships at Stagecraft, the annual talent show organized by the IIT Student Union.',
  },
  {
    title: 'Annual Sports Meet — IIT (2024)',
    desc: 'Represented Gamini House in badminton and chess competitions, demonstrating teamwork, strategic thinking, and sportsmanship.',
  },
  {
    title: 'Campus Volunteering & Women in Engineering (2024)',
    desc: 'Volunteered at Cutting Edge (IIT) and the IET Installation Ceremony, and participated in the IEEE WIE Sherlock Event.',
  },
  {
    title: "School Prefect — Ramanathan Hindu Ladies' College (2021 – 2022)",
    desc: 'Maintained school discipline, coordinated major school activities, and supported students and staff.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* PAGE HEADER WITH MOVING BLURRED BACKGROUND IMAGES */}
      <div className="relative bg-[var(--dark-bg)] text-white min-h-[340px] sm:min-h-[400px] flex items-center justify-center text-center overflow-hidden">
        {/* Continuous Moving Image Strip */}
        <div className="absolute inset-0 py-3 overflow-hidden pointer-events-none">
          <motion.div
            className="flex h-full w-max gap-4 blur-[2px] opacity-70"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 28,
            }}
          >
            {[...headerBgImages, ...headerBgImages].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt=""
                aria-hidden="true"
                className="h-full w-[280px] sm:w-[360px] object-cover object-center rounded-xl shrink-0"
              />
            ))}
          </motion.div>

          {/* Lighter Dark Overlay + Subtle Vignette for Crisp Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-bg)]/45 via-[var(--dark-bg)]/35 to-[var(--dark-bg)]/55" />
        </div>

        {/* Foreground Heading */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-md">
            Who am I?
          </h1>
        </div>
      </div>

      {/* 1. WHO I AM INTRO SECTION (No Photo — Full-Width Clean Layout) */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-[var(--primary)] font-bold uppercase tracking-wider text-sm mb-2">
            Introduction
          </p>
          <h2 className="text-3xl font-extrabold text-[var(--dark-bg)] mb-5">
            Thrichethra Sivarajah
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A final-year Bachelor&apos;s degree undergraduate in
            Computer Science at the Informatics Institute of Technology (IIT), affiliated with
            the University of Westminster, London. I have a strong interest in Software
            Engineering, full-stack development, and UI/UX design, with a passion for building
            innovative, user-focused, and scalable software solutions.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Currently seeking opportunities to apply and grow my technical skills through
            real-world projects and collaborative teams, I bring strong analytical thinking,
            communication, and leadership shaped by both technical builds and active campus life.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 pt-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--dark-bg)]">
              <Globe className="w-4 h-4 text-[var(--primary)]" />
              Colombo / Pannipitiya, Sri Lanka
            </span>
            <span>•</span>
            <span>Languages: English &amp; Indian Tamil</span>
          </div>
        </Reveal>
      </section>

      {/* 2. EDUCATION SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-11 h-11 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                  Academic Background
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--dark-bg)]">
                  Education
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Reveal key={edu.degree} delay={index * 0.1}>
                <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-xl font-extrabold text-[var(--dark-bg)]">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider bg-[var(--light-bg)] text-[var(--primary)] px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="font-semibold text-sm text-[var(--primary)] mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-11 h-11 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                Capabilities
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--dark-bg)]">
                Technical &amp; Non-Technical Skills
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.1}>
              <div className="bg-[var(--light-bg)] rounded-xl p-6 border border-slate-200/70 h-full">
                <h3 className="text-lg font-extrabold text-[var(--dark-bg)] mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-bold bg-white text-[var(--dark-bg)] border border-slate-200 px-3 py-1.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. LEADERSHIP, ACTIVITIES & ACHIEVEMENTS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-11 h-11 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                  Beyond the Code
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--dark-bg)]">
                  Leadership, Activities &amp; Achievements
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 flex items-start gap-4 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-extrabold text-[var(--dark-bg)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Navigation Buttons */}
          <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-slate-200">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-7 py-3.5 rounded transition"
            >
              <Sparkles className="w-4 h-4" />
              Explore My Projects
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[var(--dark-bg)] text-[var(--dark-bg)] hover:bg-[var(--dark-bg)] hover:text-white font-bold px-7 py-3.5 rounded transition"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}