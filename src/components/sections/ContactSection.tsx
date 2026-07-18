import { CheckCircle2, Download, Mail, MapPin, Send } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { email, location, resumeUrl, socialLinks } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionBackground } from "../backgrounds/SectionBackground";
import { ButtonLink } from "../ui/Button";
import { CopyEmailButton } from "../ui/CopyEmailButton";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  return (
    <AnimatedSection id="contact" className="living-section relative overflow-hidden py-16">
      <SectionBackground variant="contact" />
      <motion.div
        className="absolute left-1/2 top-12 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,138,184,0.28),rgba(124,58,237,0.12)_42%,transparent_70%)] blur-2xl"
        animate={reduce ? undefined : { scale: [0.92, 1.08, 0.92], opacity: [0.42, 0.74, 0.42] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <div className="premium-card grid gap-8 rounded-[30px] px-6 py-8 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(217,70,239,0.24),transparent_30%),radial-gradient(circle_at_62%_80%,rgba(124,58,237,0.14),transparent_32%)]" aria-hidden="true" />
          <motion.div className="relative" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
            <motion.div
              className="mb-5 grid h-20 w-20 place-items-center rounded-full border border-[#F08AB8]/30 bg-[#F08AB8]/10"
              animate={reduce ? undefined : { boxShadow: ["0 0 0 rgba(217,70,239,0)", "0 0 48px rgba(217,70,239,0.32)", "0 0 0 rgba(217,70,239,0)"] }}
              transition={{ duration: 3.2, repeat: Infinity }}
            >
              <Send className="h-9 w-9 rotate-12 text-[#F08AB8]" />
            </motion.div>
            <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-tight">Let&apos;s build something <span className="gradient-text">impactful.</span></h2>
            <p className="mt-4 text-[clamp(1rem,1.45vw,1.1rem)] leading-7 text-[var(--muted)]">
              I&apos;m open to Software Engineer, Backend, Full-Stack, and AI opportunities.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-[var(--muted)]">
              <a className="inline-flex items-center gap-2 hover:text-[#FFF9FF]" href={`mailto:${email}`}><Mail className="h-4 w-4" />{email}</a>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#C4A7FF]" />{location}</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${email}`}>Email Me</ButtonLink>
              {socialLinks.linkedin ? <ButtonLink href={socialLinks.linkedin} target="_blank" rel="noreferrer" variant="secondary"><span className="text-xs font-black">in</span>LinkedIn</ButtonLink> : null}
              <ButtonLink href={resumeUrl} download variant="secondary"><Download className="h-4 w-4" />Resume</ButtonLink>
              <CopyEmailButton />
            </div>
          </motion.div>

          <motion.form
            className="relative rounded-[26px] border border-[#FFF9FF]/12 bg-[#090611]/42 p-4 backdrop-blur"
            initial={{ opacity: 0, y: 18, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
              window.setTimeout(() => setSent(false), 2600);
            }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  className="grid min-h-[280px] place-items-center text-center"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                >
                  <div>
                    <motion.div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#F08AB8]/12 text-[#F08AB8]" initial={{ scale: 0.6 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 240, damping: 14 }}>
                      <CheckCircle2 className="h-8 w-8" />
                    </motion.div>
                    <p className="mt-5 font-display text-xl font-bold text-[#FFF9FF]">Signal received.</p>
                    <p className="mt-2 text-sm text-[#CFC3D8]">Thanks for reaching out. The message flow is ready.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="form" className="grid gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input className="focus-glow rounded-2xl border border-[#FFF9FF]/10 bg-[#1A0D24]/70 px-4 py-3 text-sm text-[#FFF9FF] placeholder:text-[#CFC3D8]/62 transition" placeholder="Name" aria-label="Name" />
                    <input className="focus-glow rounded-2xl border border-[#FFF9FF]/10 bg-[#1A0D24]/70 px-4 py-3 text-sm text-[#FFF9FF] placeholder:text-[#CFC3D8]/62 transition" placeholder="Email" aria-label="Email" type="email" />
                  </div>
                  <textarea className="focus-glow min-h-32 rounded-2xl border border-[#FFF9FF]/10 bg-[#1A0D24]/70 px-4 py-3 text-sm text-[#FFF9FF] placeholder:text-[#CFC3D8]/62 transition" placeholder="Tell me what you are building..." aria-label="Message" />
                  <motion.button
                    type="submit"
                    className="magnetic inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#F08AB8] px-5 py-3 text-sm font-bold text-[#FFF9FF] shadow-[0_0_30px_rgba(217,70,239,0.22)]"
                    whileHover={{ scale: 1.025, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Signal <Send className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
}
