import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import ContactModal from './components/ContactModal';
import { ArrowUp, Sparkles, Terminal } from 'lucide-react';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for active section and Scroll-To-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'services', 'about', 'skills', 'projects', 'credentials'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black overflow-hidden font-sans">
      <BackgroundAnimation />
      {/* Decorative ambient lighting elements */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-zinc-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Navigation */}
      <Navbar
        onLetsTalkClick={() => setIsContactModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section (Contains left info & right custom interactive black pane) */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Credentials (Research & Certifications) Section */}
        <Credentials />
      </main>

      {/* Footer */}
      <footer className="bg-transparent border-t border-[#141416] py-16 px-6 md:px-12 lg:px-24 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Brand Identity */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-black font-display font-bold flex items-center justify-center text-xs">
                pr
              </div>
              <span className="text-sm font-display font-semibold text-white tracking-widest uppercase">
                Pravin Raj E
              </span>
            </div>
            <p className="text-[10px] font-mono text-zinc-500 mt-1 max-w-xs text-center md:text-left leading-relaxed">
              Data Science & AI Specialist. Engineering state-of-the-art deep learning models, advanced computer vision, and analytics dashboards.
            </p>
          </div>

          {/* Right: Custom Black Pane status terminal block */}
          <div className="bg-[#0a0a0b] border border-[#1a1a1c] p-4 rounded-2xl flex items-center justify-between w-full max-w-sm">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-zinc-500" />
              <span className="text-[10px] font-mono text-[#8b8b93]">LAST_SYNC: 2026_PROD</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-500">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              <span>LIVE_PORTFOLIO</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between pt-12 mt-12 border-t border-[#121214] text-[10px] font-mono text-zinc-600 gap-4">
          <p>© {new Date().getFullYear()} Pravin Raj E. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Pravinraje0761"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>/</span>
            <a
              href="https://linkedin.com/in/pravin-raj-e-41104832a"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Scroll To Top Button (black pane styling) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[#0a0a0b] border border-[#1a1a1c] hover:border-zinc-700 text-zinc-400 hover:text-white shadow-2xl transition-all duration-300 z-40 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Contact Modal / Collaboration Dialog */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
