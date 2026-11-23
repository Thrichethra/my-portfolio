'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Activities', href: '/activities' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-[var(--dark-bg)]">
          THRI<span className="text-[var(--primary)]">.</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8 font-semibold text-slate-700">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`hover:text-[var(--primary)] transition ${
                pathname === item.href ? 'text-[var(--primary)]' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}

          <a
            href="/cv.pdf"
            download="Thrichethra_Sivarajah_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-5 py-2.5 rounded text-sm font-bold transition shadow-sm"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden text-slate-800"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 font-semibold text-slate-700">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 hover:text-[var(--primary)] ${
                pathname === item.href ? 'text-[var(--primary)]' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            download="Thrichethra_Sivarajah_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-5 py-2.5 rounded text-sm font-bold"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}