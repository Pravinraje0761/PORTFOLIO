import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onLetsTalkClick: () => void;
  activeSection: string;
}

export default function Navbar({ onLetsTalkClick, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Credentials', href: '#credentials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-5 md:px-12 md:py-7 ${
          isScrolled ? 'backdrop-blur-md bg-[#050505]/80 border-b border-white/10' : 'border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-3 group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 text-black font-display font-bold flex items-center justify-center text-xs tracking-tighter transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] shadow-md">
              pr
            </div>
            <span className="text-xs font-display font-bold text-white tracking-[0.25em] uppercase transition-all duration-300">
              Pravin Raj
            </span>
          </motion.a>

          {/* Central Pill Nav (Desktop) */}
          <motion.nav
            className="hidden md:flex items-center gap-2 bg-[#0a0a0b] border border-white/10 rounded-full p-1 shadow-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-white' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-[#101012] border border-cyan-500/25 rounded-full -z-10 shadow-[0_0_12px_rgba(6,182,212,0.1)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </motion.nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onLetsTalkClick}
              className="hidden sm:flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black text-[10px] uppercase tracking-widest font-bold hover:brightness-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 shadow-lg cursor-pointer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Let's Talk
              <ArrowUpRight className="w-3 h-3 text-black transition-colors" />
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-[#0a0a0b] border border-white/10 text-white/60 hover:text-white focus:outline-none cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-[#050505]/95 backdrop-blur-md z-40 md:hidden flex flex-col p-8 border-t border-white/10"
          >
            <nav className="flex flex-col gap-6 text-center mt-8">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`text-xs uppercase tracking-[0.2em] ${
                      isActive ? 'text-white font-bold' : 'text-white/40 hover:text-white'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
              <motion.button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLetsTalkClick();
                }}
                className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-cyan-400 to-indigo-500 text-black text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
