import { motion } from 'motion/react';
import { services } from '../data';
import * as LucideIcons from 'lucide-react';

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-transparent px-6 md:px-12 lg:px-24 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3 block">
              Specialized expertise
            </span>
            <p className="text-4xl sm:text-5xl font-display font-light text-white tracking-tighter leading-none">
              Professional <br />
              <span className="italic font-serif text-white/80">services.</span>
            </p>
          </div>
          <p className="text-white/45 font-sans font-light text-xs sm:text-sm max-w-sm leading-relaxed mt-4 md:mt-0">
            Delivering high-end design fidelity paired with standard development structures for robust digital products.
          </p>
        </div>

        {/* Services Grid (represented as premium sleek black panes/cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            // Dynamically resolve lucide icon
            const IconComponent = (LucideIcons as any)[service.iconName];

            return (
              <motion.div
                key={service.id}
                className="relative overflow-hidden bg-[#0c0c0e] border border-white/5 p-8 hover:border-cyan-500/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.04)] transition-all duration-500 flex flex-col justify-between group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Subtle top-right ambient dark glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/[0.01] rounded-full blur-xl group-hover:bg-white/[0.02] transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    {/* Icon container */}
                    <div className="p-3 bg-[#050505] border border-white/5 text-white/60 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all duration-300">
                      {IconComponent && <IconComponent className="w-5 h-5 text-white/40 group-hover:text-cyan-400 transition-colors duration-300" />}
                    </div>
                    {/* Floating item number */}
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-white/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-sm uppercase tracking-widest font-display text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-sans font-light text-white/45 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Service Specs Details List (black panel elements) */}
                <ul className="border-t border-white/5 pt-6 space-y-2.5 text-[10px] font-mono text-white/30 text-left">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
