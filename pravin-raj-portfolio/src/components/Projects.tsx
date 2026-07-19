import { useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '../data';
import { ArrowUpRight, Github, Code, CheckCircle2, Cpu, Terminal, Layers, BarChart3, MessageSquare } from 'lucide-react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-24 bg-transparent px-6 md:px-12 lg:px-24 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-left max-w-xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3 block">
            My Projects
          </span>
          <p className="text-4xl sm:text-5xl font-display font-light text-white tracking-tighter leading-none">
            Featured <br />
            <span className="italic font-serif text-white/80">works.</span>
          </p>
        </div>

        {/* Projects List with Black Pane representations */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Info Column (Left 5-cols or Right 5-cols depending on index) */}
                <div className={`lg:col-span-5 flex flex-col justify-between text-left py-4 ${
                  index % 2 === 1 ? 'lg:order-last' : ''
                }`}>
                  <div className="space-y-5">
                    <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                      Project 0{index + 1} // {project.subtitle}
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-display font-light text-white tracking-tighter uppercase">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs font-sans font-light text-white/50 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features checklist inside mini-black pane */}
                    <div className="bg-[#0a0a0b] border border-white/5 rounded-none p-6 mt-6">
                      <div className="text-[10px] font-mono text-white/30 mb-3 uppercase tracking-widest">
                        Core Capabilities
                      </div>
                      <ul className="space-y-3 text-xs text-white/45 font-sans">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 shrink-0 mt-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions & Tag Pill links */}
                  <div className="mt-8 space-y-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#050505] border border-white/5 text-[9px] font-mono text-white/40 uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-6">
                      <a
                        href={project.liveUrl}
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Launching live preview simulation for: ${project.title}`);
                        }}
                        className="inline-flex items-center gap-1.5 text-[10px] font-display uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group"
                      >
                        Live Preview
                        <ArrowUpRight className="w-3 h-3 text-cyan-400/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                      
                      <a
                        href={project.githubUrl}
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Opening repository simulation for: ${project.title}`);
                        }}
                        className="inline-flex items-center gap-1.5 text-[10px] font-display uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer group"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Repository
                      </a>
                    </div>
                  </div>
                </div>

                {/* VISUAL REPRESENTATION COLUMN: STUNNING BLACK PANE (Right 7-cols or Left 7-cols) */}
                <div className={`lg:col-span-7 w-full flex items-center justify-center ${
                  index % 2 === 1 ? 'lg:order-first' : ''
                }`}>
                  <div className="relative w-full aspect-[16/10] bg-[#0c0c0e] border border-white/5 overflow-hidden p-6 flex flex-col justify-between hover:border-cyan-500/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.04)] transition-all duration-500 rounded-none shadow-2xl">
                    {/* Behind Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#151517_1px,transparent_1px),linear-gradient(to_bottom,#151517_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
                    
                    {/* Top Browser Bar */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 z-10 relative">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white/5" />
                      </div>
                      <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                        localhost:3000/{project.id}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-mono text-cyan-500/40">SSL_NOMINAL</span>
                        <div className="w-2 h-2 rounded-full bg-cyan-400/20 border border-cyan-400/50 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                      </div>
                    </div>

                    {/* Content Area - Real screenshots where available, fallback to mockups */}
                    <div className="flex-1 w-full flex items-center justify-center py-6 z-10 relative overflow-hidden">
                      {project.image ? (
                        <div className="w-full h-full relative overflow-hidden bg-[#050505] border border-white/5 flex items-center justify-center">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-all duration-500 hover:scale-[1.02]"
                          />
                        </div>
                      ) : (
                        <>
                          {project.id === 'project-5' && (
                            <div className="w-full max-w-sm bg-[#050505] border border-white/5 rounded-none p-4 font-mono text-[9px] text-white/30 text-left space-y-3 shadow-inner">
                              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                <div className="flex items-center gap-1.5">
                                  <Cpu className="w-3.5 h-3.5 text-white/20" />
                                  <span className="text-white/60 font-semibold uppercase tracking-wider">Predictive Fuel Fleet</span>
                                </div>
                                <span className="text-emerald-500/80 text-[7px] uppercase tracking-wider">8.2% Savings</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 pt-1">
                                <div className="p-1.5 bg-[#0a0a0b] border border-white/5 space-y-1">
                                  <span className="text-[7px] text-white/20 uppercase">Model Efficiency</span>
                                  <div className="text-xs font-bold text-white/70">94.8%</div>
                                </div>
                                <div className="p-1.5 bg-[#0a0a0b] border border-white/5 space-y-1">
                                  <span className="text-[7px] text-white/20 uppercase">Est. Monthly Savings</span>
                                  <div className="text-xs font-bold text-emerald-500/80">$4.1k</div>
                                </div>
                              </div>
                              <div className="text-[7px] text-center text-white/20 uppercase tracking-wider">
                                ANN Forecast: [|||||||||||||||||||||||] 100% stable
                              </div>
                            </div>
                          )}

                          {project.id === 'project-6' && (
                            <div className="w-full max-w-sm bg-[#050505] border border-white/5 rounded-none p-4 font-mono text-[9px] text-white/30 text-left space-y-3 shadow-inner">
                              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                <div className="flex items-center gap-1.5">
                                  <MessageSquare className="w-3.5 h-3.5 text-white/20" />
                                  <span className="text-white/60 font-semibold uppercase tracking-wider">NLP INTENT PARSER</span>
                                </div>
                                <span className="text-[7px] text-white/20">FLASK API</span>
                              </div>
                              <div className="space-y-1.5 text-[8px] leading-relaxed">
                                <div className="space-y-0.5">
                                  <p className="text-white/15 uppercase tracking-wider">USER_IN_TEXT:</p>
                                  <p className="text-white/50 bg-[#0a0a0b] p-1 border border-white/5">"What features clarify polyps?"</p>
                                </div>
                                <div className="space-y-0.5">
                                  <p className="text-emerald-500/80 uppercase tracking-wider">NLTK_CONFIDENCE: 98.4%</p>
                                  <p className="text-white/40 bg-white/[0.02] p-1 border border-white/5">"Polyps are enhanced via multi-source spectral integration with U-Net models."</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {/* Bottom Info Bar inside the Black Pane */}
                    <div className="flex items-center justify-between text-[8px] font-mono text-white/20 border-t border-white/5 pt-4 z-10 relative">
                      <span className="uppercase tracking-widest">ENGINE_MATRIX: COMPILER_V2</span>
                      <span className="uppercase tracking-widest">RATIO: NOMINAL</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
