import { motion } from 'motion/react';
import { X, Send, Mail, MapPin, Sparkles, Check } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md"
      />

      {/* Modal Box (completely styled as a premium black pane) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-lg bg-[#0c0c0e] border border-white/10 p-8 shadow-2xl overflow-hidden z-10 rounded-none"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-[#050505] border border-white/5 text-white/40 hover:text-white hover:border-cyan-500/20 transition-all cursor-pointer rounded-none"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-12 h-12 bg-white/5 border border-white/20 flex items-center justify-center text-white mb-6 rounded-none">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="text-sm uppercase tracking-widest font-display text-white mb-2">Message Sent</h3>
            <p className="text-[11px] font-mono text-white/40 max-w-xs leading-relaxed">
              Pravin Raj will get back to you within 24 business hours.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div className="text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#050505] border border-white/5 text-[9px] font-mono text-white/40 mb-3 rounded-none uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-white/30" />
                <span>Collaboration Hub</span>
              </div>
              <h3 className="text-2xl font-display font-light text-white tracking-tighter uppercase">
                Let's start a project.
              </h3>
              <p className="text-xs font-sans font-light text-white/50 mt-1.5 leading-relaxed">
                Connect for design systems, React codebases, or general visual UI collaboration.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className="text-[9px] font-mono text-white/30 uppercase tracking-widest block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 bg-[#050505] border border-white/5 text-xs font-sans text-white placeholder-white/15 focus:outline-none focus:border-cyan-500/30 transition-colors rounded-none"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className="text-[9px] font-mono text-white/30 uppercase tracking-widest block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 bg-[#050505] border border-white/5 text-xs font-sans text-white placeholder-white/15 focus:outline-none focus:border-cyan-500/30 transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label htmlFor="subject" className="text-[9px] font-mono text-white/30 uppercase tracking-widest block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Design System Partnership"
                  className="w-full px-4 py-2.5 bg-[#050505] border border-white/5 text-xs font-sans text-white placeholder-white/15 focus:outline-none focus:border-cyan-500/30 transition-colors rounded-none"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label htmlFor="message" className="text-[9px] font-mono text-white/30 uppercase tracking-widest block">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me a bit about your product goals ..."
                  className="w-full px-4 py-2.5 bg-[#050505] border border-white/5 text-xs font-sans text-white placeholder-white/15 focus:outline-none focus:border-cyan-500/30 transition-colors resize-none rounded-none"
                />
              </div>

              {/* Submit button (styled as black pane action item) */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-indigo-500 hover:brightness-110 text-black font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer rounded-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    <Send className="w-3 h-3 text-black" />
                    Transmit Inquiry
                  </>
                )}
              </button>
            </form>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/5 text-[9px] font-mono text-white/30 uppercase tracking-widest gap-3">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-white/20" />
                <span>pravinraje.aids2024@citchennai.net</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-white/20" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
