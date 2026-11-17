'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Banner */}
      <div className="bg-[var(--dark-bg)] text-white py-20 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Contact Me</h1>
        <p className="text-sm text-[var(--primary)] font-semibold">Home / Contact</p>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[var(--primary)] font-bold uppercase text-sm mb-2">Contact Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--dark-bg)]">
              If You Have Any Query, Feel Free To Contact Me
            </h2>
          </div>
        </Reveal>

        {/* 3 Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[var(--primary)] text-white rounded flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500">Call / WhatsApp</p>
              <h4 className="text-lg font-extrabold text-[var(--primary)]">+94 76 709 0987</h4>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[var(--primary)] text-white rounded flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500">Email Address</p>
              <h4 className="text-lg font-extrabold text-[var(--primary)]">your.email@gmail.com</h4>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[var(--primary)] text-white rounded flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500">Location</p>
              <h4 className="text-lg font-extrabold text-[var(--primary)]">Colombo, Sri Lanka</h4>
            </div>
          </div>
        </div>

        {/* Contact Form + Map Split */}
        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full bg-[var(--light-bg)] px-4 py-3.5 rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full bg-[var(--light-bg)] px-4 py-3.5 rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <input
              type="text"
              required
              placeholder="Subject"
              className="w-full bg-[var(--light-bg)] px-4 py-3.5 rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <textarea
              rows={5}
              required
              placeholder="Message"
              className="w-full bg-[var(--light-bg)] px-4 py-3.5 rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <button
              type="submit"
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-4 rounded flex items-center justify-center gap-2 transition"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
            {submitted && (
              <p className="text-green-600 font-semibold text-sm pt-2">
                Thank you! Your message has been received.
              </p>
            )}
          </form>

          {/* Embedded Google Map */}
          <div className="rounded-lg overflow-hidden min-h-[350px] shadow-sm border border-slate-200">
            <iframe
              title="Location Map"
              className="w-full h-full min-h-[350px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6662.381567550705!2d79.95556991664327!3d6.833416201024596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251349804cc83%3A0x437f28a5fac8461d!2sSnap%20Factory!5e0!3m2!1sen!2slk!4v1794577117350!5m2!1sen!2slk"></iframe>              
              loading="lazy"
          </div>
        </div>
      </section>
    </div>
  );
}