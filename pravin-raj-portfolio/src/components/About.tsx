import { motion } from 'motion/react';
import { Calendar, User, Mail, Award, Target, BookOpen } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Academic Standing', value: '8.01', desc: 'B.Tech CGPA / 10 at CIT' },
    { label: 'AI & ML Projects', value: '6+', desc: 'Medical models & dashboards' },
    { label: 'Research Papers', value: '3', desc: 'Drafts under active prep' },
    { label: 'Certifications', value: '7+', desc: 'Cisco AI, NPTEL & AWS Cloud' }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-transparent px-6 md:px-12 lg:px-24 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3 block">
                About Me
              </span>
              <p className="text-4xl sm:text-5xl font-display font-light text-white tracking-tighter leading-none">
                Engineering <br />
                <span className="italic font-serif text-white/80">intelligence.</span>
              </p>
            </div>

            <p className="text-white/50 font-sans font-light text-sm sm:text-base leading-relaxed">
              I am Pravin Raj E, an engineering specialist with growing expertise in AI, machine learning, and data science. Currently pursuing a B.Tech in Data Science & Artificial Intelligence at Chennai Institute of Technology.
            </p>

            <p className="text-white/50 font-sans font-light text-sm sm:text-base leading-relaxed">
              My engineering philosophy focuses on building real-world AI systems, spanning deep learning image segmentation (U-Net, ViT), computer vision enhancement, and responsive analytical dashboards with React.
            </p>

            {/* Quick Facts List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-[#0c0c0e] border border-white/5 rounded-none">
                <User className="w-4 h-4 text-white/40 mt-0.5" />
                <div className="text-left">
                  <div className="text-[10px] font-display uppercase tracking-widest text-white/60">Full Name</div>
                  <div className="text-[11px] font-mono text-white/40 mt-1">Pravin Raj. E</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#0c0c0e] border border-white/5 rounded-none">
                <Mail className="w-4 h-4 text-white/40 mt-0.5" />
                <div className="text-left">
                  <div className="text-[10px] font-display uppercase tracking-widest text-white/60">Direct Contact</div>
                  <div className="text-[11.5px] font-mono text-white/40 mt-1">pravinraje.aids2024@citchennai.net</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#0c0c0e] border border-white/5 rounded-none">
                <Target className="w-4 h-4 text-white/40 mt-0.5" />
                <div className="text-left">
                  <div className="text-[10px] font-display uppercase tracking-widest text-white/60">Focus Areas</div>
                  <div className="text-[11px] font-mono text-white/40 mt-1">AI, ML, CV & Data Science</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#0c0c0e] border border-white/5 rounded-none">
                <BookOpen className="w-4 h-4 text-white/40 mt-0.5" />
                <div className="text-left">
                  <div className="text-[10px] font-display uppercase tracking-widest text-white/60">Currently Exploring</div>
                  <div className="text-[11px] font-mono text-white/40 mt-1">DSA & System Design Basics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: STATS / BLACK PANES INSTEAD OF IMAGES */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="relative overflow-hidden bg-[#0c0c0e] border border-white/5 p-6 flex flex-col justify-between aspect-[4/3] group hover:border-cyan-500/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.03)] transition-all duration-500 rounded-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Subtle visual grid backing */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1e_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1e_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 group-hover:opacity-15 transition-opacity" />
                
                <div className="flex items-center justify-between relative z-10">
                  <Award className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
                  <span className="text-[10px] font-mono text-white/20">0{idx + 1}</span>
                </div>

                <div className="space-y-1.5 relative z-10 text-left">
                  <div className="text-4xl font-display font-light text-white tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-display uppercase tracking-widest text-white/60">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-mono text-white/30 leading-normal">
                    {stat.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
