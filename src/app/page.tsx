import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Skills />
        <Projects />
        
        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-slate-800 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-xl mb-6">
            Whether you have a question, want to collaborate, or just want to say hi, feel free to drop me a message!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block rounded-lg bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-teal-300 transition"
          >
            Say Hello
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Thrichethra Sivarajah. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}