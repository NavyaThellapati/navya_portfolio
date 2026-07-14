import { Download, Mail, MapPin, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { email, location, resumeUrl, roles } from "../../data/portfolioData";
import { SectionBackground } from "../backgrounds/SectionBackground";
import { ButtonLink } from "../ui/Button";
import { HeroEngineeringVisual } from "../projects/HeroEngineeringVisual";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2300);
    return () => window.clearInterval(timer);
  }, [reduce]);

  return (
    <section
      id="home"
      className="luxury-gradient animated-gradient particle-field cursor-spotlight relative min-h-screen overflow-hidden bg-[var(--bg)] pt-28"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
      }}
    >
      <div className="beam left-[-6%] top-24" aria-hidden="true" />
      <div className="beam right-[-8%] top-64 animation-delay-700" aria-hidden="true" />
      <SectionBackground variant="hero" />
      <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FFF9FF]/16 bg-[#130A20]/82 px-4 py-2 text-xs font-semibold text-[#FFF9FF] shadow-2xl shadow-[#090611]/20 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-[#C4A7FF]" />
            Open to Software Engineering opportunities
          </motion.div>
          <motion.p
            initial={reduce ? false : { opacity: 0, x: -10 }}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="mb-3 text-[clamp(1.1rem,2vw,1.45rem)] font-semibold text-[#CFC3D8]"
          >
            Hi, I&apos;m <span className="font-bold text-[#F08AB8]">Navya</span>
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, x: -10 }}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-2xl break-words font-display text-[clamp(2.1rem,4.5vw,3rem)] font-extrabold leading-[1.08] text-[var(--text)]"
          >
            Software Engineer building <span className="text-[#F08AB8]">reliable</span> applications and <span className="text-[#F08AB8]">intelligent</span> products.
          </motion.h1>
          <motion.p
            key={roles[roleIndex]}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            className="mt-5 font-mono text-sm font-bold tracking-[0.08em] text-[#F08AB8] sm:text-base"
          >
            I&apos;m a | {roles[roleIndex]} |
          </motion.p>
          <p className="mt-5 max-w-xl text-[clamp(1rem,1.5vw,1.125rem)] leading-7 text-[#CFC3D8]">
            I develop backend systems, API integrations, full-stack applications, workflow automation, and AI-powered tools for practical business needs.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm font-semibold text-[var(--muted)]">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#C4A7FF]" />{location}</span>
            <a className="inline-flex items-center gap-2 hover:text-[#FFF9FF]" href={`mailto:${email}`}><Mail className="h-4 w-4 text-[#F08AB8]" />{email}</a>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <ButtonLink href="#work" showArrow>View Projects</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">Contact Me <Send className="h-4 w-4" /></ButtonLink>
            <ButtonLink href={resumeUrl} download variant="ghost" aria-label="Download Resume" className="h-12 w-12 border border-[#FFF9FF]/20 !px-0"><Download className="h-5 w-5" /></ButtonLink>
          </motion.div>
        </div>
        <HeroEngineeringVisual />
      </div>
    </section>
  );
}
