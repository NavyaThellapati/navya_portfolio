import { Download, Mail, MapPin, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { email, location, resumeUrl } from "../../data/portfolioData";
import { ButtonLink } from "../ui/Button";
import { HeroEngineeringVisual } from "../projects/HeroEngineeringVisual";

const heroRoles = [
  "Software Engineer",
  "Python Backend Developer",
  "Full-Stack Developer",
  "AI Application Developer",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState(heroRoles[0]);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % heroRoles.length), 2600);
    return () => window.clearInterval(timer);
  }, [reduce]);

  useEffect(() => {
    if (reduce) {
      setTypedRole(heroRoles[roleIndex]);
      return;
    }

    setTypedRole("");
    let character = 0;
    const target = heroRoles[roleIndex];
    const timer = window.setInterval(() => {
      character += 1;
      setTypedRole(target.slice(0, character));
      if (character >= target.length) window.clearInterval(timer);
    }, 42);

    return () => window.clearInterval(timer);
  }, [reduce, roleIndex]);

  return (
    <section
      id="home"
      className="hero-atmosphere cursor-spotlight relative min-h-screen overflow-hidden pt-28"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
      }}
    >
      <div className="absolute left-[8%] top-28 h-72 w-72 rounded-full bg-[#D946EF]/18 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[10%] top-32 h-96 w-96 rounded-full bg-[#7C3AED]/20 blur-3xl" aria-hidden="true" />
      <div className="beam left-[-10%] top-24 opacity-45" aria-hidden="true" />
      <div className="beam right-[-14%] top-72 opacity-35 animation-delay-700" aria-hidden="true" />
      <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-10 lg:grid-cols-[0.93fr_1.07fr]">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FFF9FF]/16 bg-[#130A20]/82 px-4 py-2 text-xs font-semibold text-[#FFF9FF] shadow-2xl shadow-[#090611]/20 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-[#C4A7FF]" />
            Open to Software Engineering roles
          </motion.div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mb-3 text-[clamp(1.125rem,1.7vw,1.5rem)] font-semibold text-[#CFC3D8]"
          >
            Hi, I&apos;m <span className="font-bold text-[#FFF9FF]">Navya.</span>
          </motion.p>
          <motion.h1
            initial={reduce ? false : "hidden"}
            animate={reduce ? undefined : "show"}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.28 } },
            }}
            className="max-w-[720px] break-words font-display text-[clamp(2rem,4.05vw,3.25rem)] font-extrabold leading-[1.08] text-[var(--text)]"
          >
            {["Software Engineer building ", "backend, full-stack, and ", "AI applications."].map((line, index) => (
              <motion.span
                key={line}
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                {index === 2 ? <span className="gradient-text">{line}</span> : line}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.72 }}
            className="mt-5 inline-flex min-h-8 items-center font-display text-[clamp(1rem,1.6vw,1.3rem)] font-bold text-[#F08AB8]"
          >
            <span>{typedRole}</span>
            <motion.span
              className="ml-1 h-6 w-px bg-[#F08AB8]"
              animate={reduce ? undefined : { opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              aria-hidden="true"
            />
          </motion.p>
          <motion.p
            className="mt-5 max-w-xl text-[clamp(0.95rem,1.35vw,1.125rem)] leading-7 text-[#CFC3D8]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.88 }}
          >
            I create reliable APIs, responsive products, automation workflows, and AI-powered tools for real business needs.
          </motion.p>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm font-semibold text-[var(--muted)]">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#C4A7FF]" />{location}</span>
            <a className="inline-flex items-center gap-2 hover:text-[#FFF9FF]" href={`mailto:${email}`}><Mail className="h-4 w-4 text-[#F08AB8]" />{email}</a>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.02 }}
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
