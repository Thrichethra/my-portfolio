'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '097285f9-8b01-4c7c-a5a7-1b857b0b2d02',
          from_name: 'Portfolio Contact Form',
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Page Banner */}
      <div className="bg-[var(--dark-bg)] text-white py-20 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Contact Me</h1>
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
          <a
            href="https://wa.me/94767090987"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:opacity-90 transition"
          >
            <div className="w-14 h-14 bg-[var(--primary)] text-white rounded flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500">Call / WhatsApp</p>
              <h4 className="text-lg font-extrabold text-[var(--primary)]">+94 76 709 0987</h4>
            </div>
          </a>

          <a
            href="mailto:chethra19@gmail.com"
            className="flex items-center gap-4 hover:opacity-90 transition"
          >
            <div className="w-14 h-14 bg-[var(--primary)] text-white rounded flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500">Email Address</p>
              <h4 className="text-lg font-extrabold text-[var(--primary)]">chethra19@gmail.com</h4>
            </div>
          </a>

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
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-[var(--light-bg)] px-4 py-3.5 rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-[var(--light-bg)] px-4 py-3.5 rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-[var(--light-bg)] px-4 py-3.5 rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full bg-[var(--light-bg)] px-4 py-3.5 rounded outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] disabled:opacity-70 text-white font-bold py-4 rounded flex items-center justify-center gap-2 transition"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="text-green-600 font-semibold text-sm pt-2">
                Thank you! Your message has been sent directly to my inbox.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-semibold text-sm pt-2">
                Something went wrong. Please email me directly at chethra19@gmail.com.
              </p>
            )}
          </form>

          {/* Embedded Google Map */}
          <div className="rounded-lg overflow-hidden min-h-[350px] shadow-sm border border-slate-200">
            <iframe
              title="Location Map"
              className="w-full h-full min-h-[350px]"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6662.381567550705!2d79.95556991664327!3d6.833416201024596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251349804cc83%3A0x437f28a5fac8461d!2sSnap%20Factory!5e0!3m2!1sen!2slk!4v1794577117350!5m2!1sen!2slk"
            />
          </div>
        </div>
      </section>
    </div>
  );
}