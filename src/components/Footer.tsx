import Link from 'next/link';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-bg)] text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Thrichethra<span className="text-[var(--primary)]">.dev</span>
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            Passionate Software Developer & UI/UX Enthusiast crafting user-centric web and mobile solutions.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[var(--primary)]" /> Colombo, Sri Lanka
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[var(--primary)]" /> your.email@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[var(--primary)]" /> +94 7X XXX XXXX
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Projects', 'Achievements', 'Contact'].map((page) => (
              <li key={page}>
                <Link
                  href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                  className="inline-flex items-center gap-2 hover:text-[var(--primary)] transition"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--primary)]" /> {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Thrichethra Sivarajah. All Rights Reserved.
      </div>
    </footer>
  );
}