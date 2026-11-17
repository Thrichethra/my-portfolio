import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'Thrichethra Sivarajah | Portfolio',
  description: 'Personal Portfolio - Web, Mobile & UI/UX Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-white text-slate-700 antialiased`}>
        <Topbar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}