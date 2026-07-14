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
      className="luxury-gradient animated-gradient particle-field cursor-spotlight relative min-h-screen overflow-hidden bg-[var(--bg)] pt-32"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
      }}
    >
      <div className="beam left-[-6%] top-24" aria-hidden="true" />
      <div className="beam right-[-8%] top-64 animation-delay-700" aria-hidden="true" />
      <SectionBackground variant="hero" />
      <div className="section-shell relative grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-14 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFF9F3]/16 bg-[#30212B]/82 px-4 py-2 text-sm font-semibold text-[#FFF9F3] shadow-2xl shadow-[#130D12]/20 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-[#9CAC91]" />
            Open to Software Engineering opportunities
          </motion.div>
          <motion.p
            initial={reduce ? false : { opacity: 0, x: -18 }}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="mb-3 text-base font-semibold text-[#D8C9D0]"
          >
            Hi, I&apos;m Navya Thellapati.
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, x: -28 }}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-full break-words font-display text-[clamp(2.125rem,10vw,3rem)] font-extrabold leading-[1.03] text-[var(--text)]"
          >
            <span className="block sm:inline">Navya</span>{" "}
            <span className="gradient-text block sm:inline">Thellapati</span>
          </motion.h1>
          <motion.p
            key={roles[roleIndex]}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            className="mt-5 font-display text-lg font-bold text-[#D39AA8] sm:text-xl"
          >
            {roles[roleIndex]}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-2xl font-display text-[clamp(1.875rem,4vw,3.25rem)] font-bold leading-tight text-[#FFF9F3] lg:text-[clamp(2.25rem,3.4vw,3.25rem)]"
          >
            Software Engineer building reliable applications and intelligent products.
          </motion.p>
          <p className="mt-5 max-w-xl text-[clamp(1rem,1.5vw,1.125rem)] leading-7 text-[#D8C9D0]">
            I develop backend services, API integrations, full-stack applications, automation workflows, and AI-powered tools.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-[var(--muted)]">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#D8BA82]" />{location}</span>
            <a className="hover:text-[#FFF9F3]" href={`mailto:${email}`}>{email}</a>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ButtonLink href="#work" showArrow>View Projects</ButtonLink>
            <ButtonLink href={resumeUrl} download variant="secondary">Download Resume</ButtonLink>
            <ButtonLink href="#contact" variant="ghost">Contact Me</ButtonLink>
          </motion.div>
          <div className="mt-7"><SocialLinks large /></div>
        </div>
        <HeroEngineeringVisual />
      </div>
    </section>
  );
}
