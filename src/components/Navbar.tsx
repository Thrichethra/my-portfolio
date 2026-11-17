'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Download } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Activities', href: '/activities' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-[var(--dark-bg)]">
          TS<span className="text-[var(--primary)]">.Portfolio</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8 font-semibold text-slate-700">
          <Link
            href="/"
            className={`hover:text-[var(--primary)] transition ${pathname === '/' ? 'text-[var(--primary)]' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-[var(--primary)] transition ${pathname === '/about' ? 'text-[var(--primary)]' : ''}`}
          >
            About
          </Link>

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/projects"
              className={`flex items-center gap-1 hover:text-[var(--primary)] transition py-2 ${
                pathname === '/projects' ? 'text-[var(--primary)]' : ''
              }`}
            >
              Projects <ChevronDown className="w-4 h-4" />
            </Link>

            {dropdownOpen && (
              <div className="absolute left-0 top-full w-56 bg-white shadow-xl rounded-md border border-slate-100 py-2 animate-fadeIn">
                <Link href="/projects?cat=web" className="block px-4 py-2.5 text-sm hover:bg-[var(--light-bg)] hover:text-[var(--primary)]">
                  Web Development
                </Link>
                <Link href="/projects?cat=mobile" className="block px-4 py-2.5 text-sm hover:bg-[var(--light-bg)] hover:text-[var(--primary)]">
                  Mobile Applications
                </Link>
                <Link href="/projects?cat=uiux" className="block px-4 py-2.5 text-sm hover:bg-[var(--light-bg)] hover:text-[var(--primary)]">
                  UI/UX Case Studies
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/achievements"
            className={`hover:text-[var(--primary)] transition ${pathname === '/achievements' ? 'text-[var(--primary)]' : ''}`}
          >
            Achievements
          </Link>
          <Link
            href="/activities"
            className={`hover:text-[var(--primary)] transition ${pathname === '/activities' ? 'text-[var(--primary)]' : ''}`}
          >
            Activities
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[var(--primary)] transition ${pathname === '/contact' ? 'text-[var(--primary)]' : ''}`}
          >
            Contact
          </Link>

          <a
            href="/cv.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-5 py-2.5 rounded text-sm font-bold transition shadow-sm"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-slate-800">
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 font-semibold text-slate-700">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2 hover:text-[var(--primary)]">
              {item.name}
            </Link>
          ))}
          <Link href="/projects" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-[var(--primary)]">
            Projects
          </Link>
          <a href="/cv.pdf" className="inline-block bg-[var(--primary)] text-white px-5 py-2.5 rounded text-sm">
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}