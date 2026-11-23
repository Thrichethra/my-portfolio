'use client';

import { useState } from 'react';
import { GitBranch, ExternalLink, CheckCircle2, Globe } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const allProjects = [
  {
    title: 'Havenly — Online Shopping Platform',
    categories: ['web', 'uiux'],
    stack: ['ReactJS', 'Microsoft SQL Server', 'C# (API)', 'Figma'],
    summary:
      'A comprehensive online shopping platform specializing in home appliance products, built on a full-stack architecture.',
    highlights: [
      'Engineered a robust and secure backend API using C# to manage product data, process user requests, and facilitate communication between the frontend and database.',
      'Implemented Microsoft SQL Server for efficient, structured storage and retrieval of all critical data, including product inventory, categories, and user information.',
      'Designed and built the user-facing interface using ReactJS, providing a dynamic and responsive experience for browsing products, filtering by category, and viewing detailed information.',
      'Integrated key e-commerce features such as a shopping cart, invoice generation logic, and local storage capabilities for persistent user cart data.',
      'Utilized Figma during the design phase to create high-fidelity wireframes and prototypes, ensuring a polished and intuitive user experience (UX/UI).',
    ],
    githubUrl: 'https://github.com/Thrichethra/fullstack-react-online_shopping_webside',
    figmaUrl: '',
    deployUrl: '',
  },
  {
    title: 'EduQuest — Gamified Learning Platform',
    categories: ['web', 'mobile'],
    stack: ['Unity (C#)', 'ReactJS', 'Nest.JS'],
    summary:
      'A comprehensive gamified learning platform for Grades 1–5, offering interactive games in core subjects (Math and English) to enhance educational outcomes.',
    highlights: [
      'Engineered the scalable backend API using Nest.JS, managing user authentication, game state, scoring, and progress tracking for personalized learning paths.',
      'Designed and implemented the front-end interface using ReactJS, providing a responsive and engaging user experience for both students and educators.',
      'Created interactive 2D/3D games using Unity (C#), ensuring cross-platform compatibility and seamless data exchange with the Nest.JS backend to record student performance.',
      'Conducted full-stack system testing to ensure smooth data flow and synchronization between the Unity game modules, the ReactJS web application, and the Nest.JS API.',
    ],
    githubUrl: 'https://github.com/Thrichethra',
    figmaUrl: '',
    deployUrl: '',
  },
  {
    title: 'Real-Time Event Ticketing System',
    categories: ['web'],
    stack: ['ReactJS', 'Java (Backend)'],
    summary:
      'A real-time event ticketing system engineered to handle concurrent ticket sales and purchases, ensuring data integrity and preventing overselling.',
    highlights: [
      'Engineered the high-performance backend using Java to manage event inventory, process transactions securely, and enforce business logic critical for live events.',
      'Designed and built a dynamic, user-friendly frontend using ReactJS for seamless user interactions, including real-time ticket availability updates and event management functionalities.',
    ],
    githubUrl: 'https://github.com/Thrichethra',
    figmaUrl: '',
    deployUrl: '',
  },
  {
    title: 'Estate Agent Web Application',
    categories: ['web'],
    stack: ['ReactJS'],
    summary:
      'A fully responsive Estate Agent Web Application utilizing modern React UI components to provide a seamless property-browsing experience across all devices.',
    highlights: [
      'Designed and implemented the complete frontend architecture using ReactJS, enabling efficient property searching, browsing detailed listings, and management of saved favorites.',
      'Created dynamic components for filtering and sorting property listings based on criteria such as location, price, property type, and features, significantly enhancing user discoverability.',
    ],
    githubUrl: 'https://github.com/Thrichethra/Estate-Property',
    figmaUrl: '',
    deployUrl: 'https://estate-property-di3i3wkji-thrichethras-projects.vercel.app/',
  },
  {
    title: 'Atlas Pharma Company Website',
    categories: ['web'],
    stack: ['HTML', 'CSS', 'PHP'],
    summary:
      'A professional and user-friendly corporate website for Atlas Pharma Company, serving as a primary digital showcase for the company’s offerings and corporate information.',
    highlights: [
      'Engineered the site’s structure using HTML and styled the modern, responsive design using CSS, ensuring optimal presentation and accessibility across various devices.',
      'Implemented server-side logic and dynamic features using PHP, handling contact form submissions, dynamic content updates, and basic administrative functions.',
      'Incorporated essential corporate pages, including Home, Events, About Us, Contact, and Product sections, to effectively communicate company updates, product details, and contact information.',
    ],
    githubUrl: 'https://github.com/Thrichethra',
    figmaUrl: '',
    deployUrl: '',
  },
  {
    title: 'Eco Cafe Web Application',
    categories: ['web', 'uiux'],
    stack: ['HTML', 'CSS'],
    summary:
      'A responsive marketing and informational web application for a cafe specializing in eco-friendly products.',
    highlights: [
      'Designed and structured the site using clean, semantic HTML to define content and ensure maximum accessibility.',
      'Implemented the entire visual design and layout using CSS, creating an engaging and brand-aligned aesthetic that is fully responsive across all desktop and mobile screen sizes.',
      'Showcased product listings, cafe menu, and eco-friendly initiatives through dedicated, visually appealing pages to promote the cafe’s unique mission.',
    ],
    githubUrl: 'https://github.com/Thrichethra',
    figmaUrl: '',
    deployUrl: '',
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.categories.includes(filter));

  return (
    <div>
      {/* Page Header */}
      <div className="bg-[var(--dark-bg)] text-white py-20 text-center">
        <h1 className="text-4xl font-extrabold mb-2">My Projects</h1>
        <p className="text-sm text-[var(--primary)] font-semibold">Home / Projects</p>
      </div>

      <section className="py-20 max-w-4xl mx-auto px-6">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'web', label: 'Web Development' },
            { id: 'mobile', label: 'Games & Interactive' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded font-bold text-sm transition ${
                filter === tab.id
                  ? 'bg-[var(--primary)] text-white shadow-sm'
                  : 'bg-[var(--light-bg)] text-[var(--dark-bg)] hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Vertical Stacked Project Cards (One Below Another) */}
        <div className="flex flex-col gap-10">
          {filtered.map((proj) => (
            <Reveal key={proj.title}>
              <div className="bg-[var(--light-bg)] rounded-xl border border-slate-200/80 shadow-sm hover:shadow-lg transition p-8 sm:p-10">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-bold uppercase tracking-wider bg-white text-[var(--primary)] border border-[var(--primary)]/20 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Title & Summary */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--dark-bg)] mb-3">
                  {proj.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {proj.summary}
                </p>

                {/* Detailed Contributions / Key Features */}
                <ul className="space-y-3 mb-8">
                  {proj.highlights.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
                  {proj.deployUrl && (
                    <a
                      href={proj.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold px-5 py-2.5 rounded transition shadow-sm"
                    >
                      <Globe className="w-4 h-4" />
                      View Live Demo
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[var(--dark-bg)] hover:bg-slate-800 text-white text-sm font-bold px-5 py-2.5 rounded transition"
                    >
                      <GitBranch className="w-4 h-4" />
                      View Project on GitHub
                    </a>
                  )}
                  {proj.figmaUrl && (
                    <a
                      href={proj.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-[var(--dark-bg)] text-[var(--dark-bg)] hover:bg-[var(--dark-bg)] hover:text-white text-sm font-bold px-5 py-2.5 rounded transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View UI/UX Prototype
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}