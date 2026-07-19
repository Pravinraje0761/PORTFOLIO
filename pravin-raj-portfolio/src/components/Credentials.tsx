import { motion } from 'motion/react';
import { Award, BookOpen, FileText, Calendar, CheckCircle2 } from 'lucide-react';

export default function Credentials() {
  const researchPapers = [
    {
      title: "Hybrid Hyperspectral - White light Deep learning Framework for Enhanced Colorectal Polyp Detection",
      status: "Manuscript under preparation",
      highlight: "Achieving up to 96.5% accuracy through multi-source spectral integration."
    },
    {
      title: "Corrective Force Application in Spinal orthoses",
      status: "Manuscript under preparation",
      highlight: "A comprehensive review of brace biomechanics, pressure measurement technologies, and advances in real-time sensing for clinical monitoring."
    },
    {
      title: "End to End Deep Learning Framework for Colorectal Polyp Detection Integrating A-dense UNet segmentation Selective image Enhancement and Vision Transformers",
      status: "Manuscript under preparation",
      highlight: "An end-to-end deep learning framework that accurately detects and segments colorectal polyps by combining A-Dense U-Net segmentation, selective image enhancement, and Vision Transformers for improved diagnostic performance."
    }
  ];

  const certifications = [
    { name: "Cisco Certified: AI", issuer: "Cisco Networking Academy", year: "2024" },
    { name: "Development to Data Science Transformation", issuer: "Cisco Certified Partner", year: "2024" },
    { name: "Cisco Certified: Cybersecurity to Modern AI", issuer: "Cisco Networking Academy", year: "2024" },
    { name: "Cisco Certified: IoT & Digital (IoT) - Elite Silver", issuer: "Cisco / NPTEL", year: "2024" },
    { name: "NPTEL - Internet of Things", issuer: "NPTEL / Swayam National Portal", year: "2024" },
    { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", year: "2024" },
    { name: "Cisco Certified: Introduction to Modern AI", issuer: "Cisco Networking Academy", year: "2024" }
  ];

  return (
    <section
      id="credentials"
      className="py-24 bg-transparent px-6 md:px-12 lg:px-24 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left max-w-xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3 block">
            Academic & Professional
          </span>
          <p className="text-4xl sm:text-5xl font-display font-light text-white tracking-tighter leading-none">
            Research & <br />
            <span className="italic font-serif text-white/80">credentials.</span>
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Research Papers (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="flex items-center gap-2 border-b border-white/5 pb-4">
              <BookOpen className="w-4 h-4 text-white/40" />
              <h3 className="text-xs uppercase tracking-[0.2em] font-display text-white/60">
                Research Publications
              </h3>
              <span className="text-[9px] font-mono text-white/20 ml-auto">
                {researchPapers.length} ACTIVE_DRAFTS
              </span>
            </div>

            <div className="space-y-6">
              {researchPapers.map((paper, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#0c0c0e] border border-white/5 p-6 hover:border-cyan-500/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.03)] transition-all duration-500 relative group rounded-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="text-xs sm:text-sm font-display font-semibold text-white tracking-wide leading-relaxed uppercase">
                      {paper.title}
                    </h4>
                    <span className="shrink-0 px-2 py-0.5 bg-cyan-950/20 border border-cyan-500/20 text-[7px] font-mono text-cyan-400 uppercase tracking-widest shadow-[0_0_8px_rgba(6,182,212,0.15)]">
                      {paper.status}
                    </span>
                  </div>
                  <p className="text-xs font-sans font-light text-white/45 leading-relaxed">
                    {paper.highlight}
                  </p>
                  
                  {/* Subtle index mark */}
                  <div className="absolute bottom-4 right-4 text-[9px] font-mono text-white/5 group-hover:text-white/10 transition-colors">
                    PUB_0{idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="flex items-center gap-2 border-b border-white/5 pb-4">
              <Award className="w-4 h-4 text-white/40" />
              <h3 className="text-xs uppercase tracking-[0.2em] font-display text-white/60">
                Certifications
              </h3>
              <span className="text-[9px] font-mono text-white/20 ml-auto">
                VERIFIED_CREDENTIALS
              </span>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-[#0c0c0e] border border-white/5 hover:border-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.03)] transition-all duration-500 rounded-none"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-[11.5px] font-display font-medium text-white/80">
                        {cert.name}
                      </div>
                      <div className="text-[9px] font-mono text-white/30">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 pl-3">
                    <Calendar className="w-3 h-3 text-white/20" />
                    <span className="text-[9px] font-mono text-white/45">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
