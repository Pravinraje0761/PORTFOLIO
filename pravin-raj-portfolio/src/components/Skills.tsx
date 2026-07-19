import { useState } from 'react';
import { motion } from 'motion/react';
import { skills } from '../data';
import * as LucideIcons from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'ai_ml' | 'web_backend' | 'devops_tools' | 'other'>('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'ai_ml', label: 'AI & ML' },
    { id: 'web_backend', label: 'Web & Backend' },
    { id: 'devops_tools', label: 'DevOps & Tools' },
    { id: 'other', label: 'Languages' }
  ];

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="py-24 bg-transparent px-6 md:px-12 lg:px-24 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3 block">
              My Skills
            </span>
            <p className="text-4xl sm:text-5xl font-display font-light text-white tracking-tighter leading-none">
              Technical <br />
              <span className="italic font-serif text-white/80">abilities.</span>
            </p>
          </div>

          {/* Navigation/Tabs Pill inside black pane layout */}
          <div className="flex flex-wrap gap-1 mt-6 md:mt-0 bg-[#0a0a0b] border border-white/5 p-1 rounded-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-none text-[9px] font-display font-medium uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-bold shadow-md'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => {
            // Resolve Lucide Icon
            const IconComponent = (LucideIcons as any)[skill.iconName] || LucideIcons.Cpu;

            return (
              <motion.div
                key={skill.name}
                className="relative overflow-hidden bg-[#0a0a0b] border border-white/5 p-6 flex flex-col justify-between group hover:border-white/10 transition-all duration-300 rounded-none"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {/* Visual hover background */}
                <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.02] transition-colors duration-300" />

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div className="p-2 bg-[#050505] border border-white/5 text-white/40 group-hover:text-white group-hover:border-white/10 transition-all duration-300 rounded-none">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    {/* Name */}
                    <span className="text-xs font-display font-semibold text-white tracking-widest uppercase">
                      {skill.name}
                    </span>
                  </div>
                  {/* Percent value */}
                  <span className="text-[10px] font-mono text-white/30 group-hover:text-white transition-colors">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar container (black panel slider) */}
                <div className="w-full h-1.5 bg-[#050505] border border-white/5 rounded-none overflow-hidden relative z-10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-none shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
