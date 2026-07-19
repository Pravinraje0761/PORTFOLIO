import { motion } from 'motion/react';
import { Github, Linkedin, Download, Terminal, Code, Palette, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'wireframe' | 'code' | 'design'>('wireframe');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-transparent pt-28 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background radial soft light (completely dark/charcoal) */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-zinc-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-zinc-800/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block">
              Established MMXXIV
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold mb-6">
              I am Pravin Raj
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-white tracking-tighter leading-[0.95] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Data Science & <br />
            <span className="italic font-serif bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">AI Specialist.</span>
          </motion.h1>

          <motion.p
            className="text-white/50 text-sm sm:text-base md:text-lg font-sans font-light max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A dedicated engineering specialist with growing expertise in AI, machine learning,
            and data science, building high-performance deep learning models and custom dashboards.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-indigo-500 text-black text-xs uppercase tracking-widest font-bold hover:brightness-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-300 cursor-pointer text-center"
            >
              View Work
            </a>
            
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Curriculum Vitae download initiated (simulation).');
              }}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-cyan-500/30 text-white text-xs uppercase tracking-widest font-bold hover:bg-cyan-500/5 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer text-center"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400/80" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://linkedin.com/in/pravin-raj-e-41104832a"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#0a0a0b] border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Pravinraje0761"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#0a0a0b] border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: SLEEK BLACK PANE INSTEAD OF THE IMAGE */}
        <motion.div
          className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Black Pane Container representing a state-of-the-art interactive dark window */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl bg-[#0a0a0b] border border-white/10 shadow-2xl p-8 flex flex-col justify-between overflow-hidden group hover:border-white/20 transition-all duration-500">
            {/* Ambient inner glow at top corner */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-zinc-800/10 rounded-full blur-2xl group-hover:bg-zinc-800/20 transition-all duration-500" />
            
            {/* Top Bar / Window Controls */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Pravin.sh
              </div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>

            {/* Interactive Tab Switcher inside the Black Pane */}
            <div className="flex bg-[#050505] border border-white/5 p-1 my-4 z-10">
              {(['wireframe', 'code', 'design'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-none text-[9px] font-display font-medium tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-bold shadow-sm'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Central Visual Dynamic Panel */}
            <div className="flex-1 w-full bg-[#050505] border border-white/5 rounded-none p-4 flex flex-col justify-center overflow-hidden relative z-10">
              {activeTab === 'wireframe' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4 font-mono text-[10px] text-white/30"
                >
                  {/* Grid layout mockup */}
                  <div className="border border-dashed border-white/10 p-2 text-center text-[9px] uppercase tracking-widest text-white/20">
                    &lt;identity_node&gt;
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="border border-dashed border-white/10 p-4 flex flex-col justify-between items-center h-20">
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <span className="text-[8px] text-white/20">CORE</span>
                    </div>
                    <div className="col-span-2 border border-dashed border-white/10 p-4 flex flex-col justify-between h-20">
                      <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                      <div className="h-1 w-full bg-white/5 rounded-full" />
                      <div className="h-1 w-3/4 bg-white/5 rounded-full" />
                      <span className="text-[8px] text-right text-white/20">ENCLAVE</span>
                    </div>
                  </div>
                  <div className="border border-dashed border-white/10 p-2 text-center text-[9px] uppercase tracking-widest text-white/20">
                    &lt;system_enclave_flow&gt;
                  </div>
                </motion.div>
              )}

              {activeTab === 'code' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-mono text-[10px] text-white/40 space-y-1 text-left leading-relaxed select-none"
                >
                  <p className="text-white/20">// Pravin Raj custom AI state engine</p>
                  <p><span className="text-white/30">const</span> <span className="text-white/60">monolith</span> = &#123;</p>
                  <p className="pl-4">engine: <span className="text-white/50">'Python + TensorFlow'</span>,</p>
                  <p className="pl-4">precision: <span className="text-white/50">'96.5% Accuracy'</span>,</p>
                  <p className="pl-4">deepLearning: <span className="text-emerald-500/80">true</span>,</p>
                  <p className="pl-4">medicalAI: <span className="text-emerald-500/80">true</span>,</p>
                  <p className="pl-4">specialization: <span className="text-white/50">'Computer Vision'</span></p>
                  <p>&#125;;</p>
                </motion.div>
              )}

              {activeTab === 'design' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col gap-3 justify-center items-center h-full text-center"
                >
                  {/* Design system layout mock */}
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center relative">
                    <span className="text-[9px] font-display uppercase tracking-widest text-white/60">PR</span>
                    <div className="absolute inset-0 border border-dashed border-white/5 rounded-full scale-125" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-xs font-display font-medium text-white uppercase tracking-widest">Model Confidence</div>
                    <div className="text-[10px] font-sans text-white/40 max-w-[180px] leading-relaxed">
                      Optimized neural feature clarity and medical image predictions.
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom Section inside the Black Pane */}
            <div className="flex items-center justify-between text-[9px] font-mono text-white/40 pt-4 border-t border-white/10 z-10">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-white/20" />
                <span className="tracking-wider text-white/20">SYS_INIT: NOMINAL</span>
              </div>
              <span className="text-emerald-500/80">● ONLINE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
