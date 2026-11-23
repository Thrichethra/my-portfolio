# Thrichethra Sivarajah — Personal Developer Portfolio

A modern, responsive personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, showcasing my software engineering projects, final-year AI/NLP research (**DistilCompress**), academic background, achievements, and extracurricular activities.

---

## Key Features
- **Signature FYP Research Spotlight:** Highlights **DistilCompress**, an adaptive latency-aware LLM prompt compression pipeline built with SpaCy, INT8 DistilBERT (ONNX Runtime CPU), and Ollama.
- **Project & Engineering Domain Routing:** Interactive domain cards and categorized project showcases covering Full-Stack Web Engineering, Applied AI/NLP Systems, and Cross-Platform Mobile & UI.
- **Working Contact Form:** Integrated with **Web3Forms** for direct email delivery alongside one-click WhatsApp and email contact cards.
- **Activities & Achievements Showcase:** Structured timeline and visual gallery highlighting Stagecraft Group Singing Championships, university sports, Carnatic music milestones, and Trio Fashion entrepreneurship.
- **One-Click CV Download:** Direct PDF resume download served from static assets.

## Tech Stack
- **Framework:** Next.js 16 (App Router) & React
- **Language:** TypeScript
- **Styling & Animations:** Tailwind CSS, Framer Motion, Lucide React Icons
- **Form Handling:** Web3Forms API
- **Deployment:** Vercel (CI/CD via GitHub `main` branch)

## Project Structure
```text
my-portfolio/
├── public/                 # Static assets, activity photos, and downloadable cv.pdf
├── src/
│   ├── app/
│   │   ├── page.tsx        # Home (Hero, About Preview, Engineering Domains, FYP Spotlight)
│   │   ├── about/          # Education, Skills, and Campus Highlights
│   │   ├── projects/       # Full-Stack, AI/NLP, and Mobile Project Showcase
│   │   ├── achievements/   # Awards, Certifications, and Diplomas
│   │   ├── activities/     # Sports, Carnatic Music, and Trio Fashion Gallery
│   │   └── contact/        # Web3Forms Contact Form, WhatsApp Link & Embedded Map
│   └── components/         # Reusable Navbar, Footer, and Reveal Motion Wrappers
├── next.config.ts
├── package.json
└── tsconfig.json