import { MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { email, location, resumeUrl, roles } from "../../data/portfolioData";
import { SectionBackground } from "../backgrounds/SectionBackground";
import { ButtonLink } from "../ui/Button";
import { SocialLinks } from "../ui/SocialLinks";
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
      className="dark-surface luxury-gradient animated-gradient particle-field cursor-spotlight relative min-h-screen overflow-hidden bg-[var(--bg)] pt-32"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
      }}
    >
      <div className="beam left-[-6%] top-24" aria-hidden="true" />
      <div className="beam right-[-8%] top-64 animation-delay-700" aria-hidden="true" />
      <SectionBackground variant="hero" />
      <div className="section-shell relative grid min-h-[calc(100vh-8rem)] items-center gap-16 pb-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-100 shadow-2xl shadow-[#6E426F]/20 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
            Open to Software Engineering Opportunities
          </motion.div>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-5xl font-extrabold leading-[0.98] text-[var(--text)] sm:text-7xl lg:text-8xl"
          >
            Hi, I’m <span className="gradient-text">Navya.</span>
          </motion.h1>
          <motion.p
            key={roles[roleIndex]}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            className="mt-6 font-display text-xl font-bold text-[#F6D8DF] sm:text-2xl"
          >
            {roles[roleIndex]}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl"
          >
            I build software that works beautifully.
          </motion.p>
          <p className="mt-6 max-w-xl text-xl leading-8 text-slate-200">
            Backend systems, AI applications, and full-stack products designed to solve real problems.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-[var(--muted)]">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#C9A86A]" />{location}</span>
            <a className="hover:text-white" href={`mailto:${email}`}>{email}</a>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ButtonLink href="#work" showArrow>Explore Projects</ButtonLink>
            <ButtonLink href={resumeUrl} download variant="secondary">View Resume</ButtonLink>
            <ButtonLink href="#contact" variant="ghost">Let&apos;s Connect</ButtonLink>
          </motion.div>
          <div className="mt-7"><SocialLinks large /></div>
        </div>
        <HeroEngineeringVisual />
      </div>
    </section>
  );
}
