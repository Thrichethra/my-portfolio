'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, Code2, Smartphone, PhoneCall, ArrowRight, Cpu, Zap
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const slides = [
  {
    title: 'Hi, I am Thrichethra Sivarajah',
    description: 'Undergraduate Software Engineer at Informatics Institute of Technology, Westminster UK',
    primaryBtn: { label: 'Explore Projects', href: '/projects' },
    secondaryBtn: { label: 'Contact Me', href: '/contact' },
  },
];

const interestAreas = [
  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    description: 'Building responsive, SEO-ready web apps with dynamic filtering, state persistence, and clean API integration.',
    stack: 'Next.js • React • TypeScript • Tailwind CSS',
    href: '/projects?category=web',
    projectTag: 'Featured: RentUP & E-Commerce',
  },
  {
    icon: Cpu,
    title: 'Applied AI & NLP Systems',
    description: 'Optimizing LLM inference latency, INT8 model quantization, and context-pruning pipelines for real-world deployment.',
    stack: 'Python • ONNX Runtime • DistilBERT • Ollama',
    href: '/projects?category=ai',
    projectTag: 'Featured: DistilCompress (FYP)',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform Mobile & UI',
    description: 'Developing intuitive mobile interfaces and user-tested workflows backed by Figma prototyping and clean architecture.',
    stack: 'Flutter • React Native • Kotlin • Figma',
    href: '/projects?category=mobile',
    projectTag: 'View Mobile Builds',
  },
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
                I am currently pursuing my Bachelor&apos;s degree in Computer Science at the Informatics Institute of Technology (IIT), affiliated with the University of Westminster, UK. Alongside gaining hands-on expertise across diverse technical domains and collaborative team projects, I actively stay involved in campus life from sports and talent shows to running my own creative brand which shapes how I solve problems and design user-focused software.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Web Application Development',
                  'Applied AI & NLP Systems',
                  'Mobile App Development',
                  'Software Architecture & UI/UX',
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

      {/* 3. ENGINEERING FOCUS / PROJECT ROUTER GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[var(--primary)] font-bold uppercase tracking-wider text-sm mb-2">
                What I Build
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--dark-bg)]">
                Engineering Focus &amp; Project Domains
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {interestAreas.map((area, idx) => (
              <Reveal key={area.title} delay={idx * 0.1}>
                <Link
                  href={area.href}
                  className="group bg-[var(--light-bg)] hover:bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-transparent hover:border-[var(--primary)]/20 transition duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-lg flex items-center justify-center group-hover:scale-105 transition">
                        <area.icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full">
                        {area.projectTag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--dark-bg)] mb-2 group-hover:text-[var(--primary)] transition">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">{area.stack}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--primary)]">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            {/* Highlighted Contact CTA Card */}
            <Reveal delay={0.3}>
              <div className="bg-[var(--primary)] text-white p-8 rounded-xl shadow-lg flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full mb-6">
                    Open to Opportunities
                  </span>
                  <h3 className="text-2xl font-extrabold mb-3">Let&apos;s Collaborate</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    Have a project in mind, exciting ideas to share, or looking for a software engineering collaborator? Reach out anytime.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-lg font-extrabold">
                    <PhoneCall className="w-5 h-5" /> +94 76 709 0987
                  </div>
                  <Link
                    href="/contact"
                    className="bg-white text-[var(--dark-bg)] hover:bg-slate-100 font-bold text-sm px-5 py-2.5 rounded transition"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE PROJECT SPOTLIGHT */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="right">
            <span className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full mb-3">
              Final Year Research &amp; Engineering Project
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--dark-bg)] mb-5">
              DistilCompress — Latency-Aware LLM Prompt Compression
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              An adaptive context-pruning pipeline built to cut Time-To-First-Token (TTFT) latency for long multi-document LLM prompts (1k–8k+ tokens) while preserving answer accuracy. Using SpaCy sentence segmentation, an INT8-quantized DistilBERT scorer on ONNX Runtime CPU, a Dynamic Budget Controller with break-even bypass logic, and local Ollama (Llama 3.2 3B) inference with a Streamlit dashboard, I architected the full scoring pipeline and latency evaluation framework.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8 font-bold text-[var(--dark-bg)] text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--primary)] shrink-0" /> INT8 DistilBERT (ONNX CPU)
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--primary)] shrink-0" /> Dynamic Budget Controller
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--primary)] shrink-0" /> TTFT Latency Optimization
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--primary)] shrink-0" /> Streamlit &amp; Ollama Prototype
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-block border-2 border-[var(--dark-bg)] hover:bg-[var(--dark-bg)] hover:text-white text-[var(--dark-bg)] font-bold px-8 py-3.5 rounded transition"
              >
                View All Projects
              </Link>
            </div>
          </Reveal>

          {/* Right Column: DistilCompress Architecture Pipeline */}
          <Reveal direction="left">
            <div className="bg-[var(--dark-bg)] text-white p-8 rounded-2xl border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-[var(--primary)]" />
                  <span className="font-bold text-sm tracking-wide uppercase text-slate-300">
                    DistilCompress Architecture
                  </span>
                </div>
                <span className="text-xs font-semibold bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded">
                  FYP • In Progress
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800">
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">01. Preprocessing &amp; Scoring</p>
                  <p className="font-semibold text-white">SpaCy Sentence Splitting + INT8 DistilBERT (ONNX CPU)</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800">
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">02. Dynamic Budget Controller</p>
                  <p className="font-semibold text-white">Break-Even Bypass Check (L &lt; L*) &amp; Top-K% Pruning</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">03. Inference &amp; Evaluation UI</p>
                    <p className="font-semibold text-white">Ollama (Llama 3.2 3B) + Streamlit TTFT Dashboard</p>
                  </div>
                  <Zap className="w-5 h-5 text-[var(--primary)] shrink-0" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}