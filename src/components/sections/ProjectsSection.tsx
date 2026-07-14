import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { AnimatedSection } from "../animations/AnimatedSection";
import { ProjectMockup } from "../projects/ProjectMockup";
import { SectionHeading } from "../ui/SectionHeading";
import type { ProjectSlug } from "../../types/portfolio";

const projects: Array<{
  slug: ProjectSlug;
  title: string;
  subtitle: string;
  description: string;
  metrics: string[];
  technologies: string[];
}> = [
  {
    slug: "documind",
    title: "DocuMind",
    subtitle: "AI document search with source-backed answers.",
    description: "Upload documents, search their content, and receive relevant answers with supporting references.",
    metrics: ["1,000+ documents", "35% fewer unsupported responses"],
    technologies: ["Python", "FastAPI", "LangChain", "ChromaDB", "OpenAI API"],
  },
  {
    slug: "mychart",
    title: "MyChart",
    subtitle: "Full-stack healthcare patient portal.",
    description: "Manage appointments, results, medications, billing, messages, and AI-assisted navigation.",
    metrics: ["30% improvement in task completion"],
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "OpenAI API"],
  },
  {
    slug: "responsible-ai",
    title: "Responsible AI",
    subtitle: "Income prediction with fairness evaluation.",
    description: "A machine-learning project measuring accuracy, demographic disparities, and fairness improvements.",
    metrics: ["48,842 records", "85% accuracy", "0.90 ROC AUC"],
    technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy"],
  },
];

export function ProjectsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const project = projects[active];

  const goTo = (index: number) => setActive((index + projects.length) % projects.length);
  const next = () => goTo(active + 1);
  const previous = () => goTo(active - 1);

  useEffect(() => {
    if (reduce || paused || document.hidden) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % projects.length), 7000);
    return () => window.clearInterval(timer);
  }, [paused, reduce]);

  const accent = useMemo(
    () => ["rgba(217,70,239,0.24)", "rgba(124,58,237,0.24)", "rgba(240,138,184,0.22)"][active],
    [active],
  );

  return (
    <AnimatedSection
      id="work"
      className="relative overflow-hidden bg-transparent py-16"
    >
      <motion.div
        className="absolute inset-x-0 top-8 h-80 blur-3xl"
        animate={reduce ? undefined : { opacity: [0.28, 0.58, 0.28], x: ["-6%", "5%", "-6%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: `radial-gradient(circle at 50% 35%, ${accent}, transparent 58%)` }}
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Compact Project Showcase"
            body="Selected work across backend, full-stack, and AI development."
          />
          <div className="hidden gap-2 md:flex">
            {projects.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => {
                  setPaused(true);
                  goTo(index);
                }}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                  active === index
                    ? "border-[#F08AB8]/70 bg-[#F08AB8]/18 text-[#FFF9FF] shadow-[0_0_24px_rgba(217,70,239,0.18)]"
                    : "border-[#FFF9FF]/12 bg-[#130A20]/64 text-[#CFC3D8] hover:border-[#C4A7FF]/50"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-8 overflow-hidden rounded-[26px] border border-[#F08AB8]/24 bg-[#130A20]/72 p-4 shadow-[0_0_48px_rgba(124,58,237,0.12)] backdrop-blur-xl md:p-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            if (touchStart === null) return;
            const delta = (event.changedTouches[0]?.clientX ?? touchStart) - touchStart;
            if (Math.abs(delta) > 48) {
              setPaused(true);
              if (delta < 0) {
                next();
              } else {
                previous();
              }
            }
            setTouchStart(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              setPaused(true);
              next();
            }
            if (event.key === "ArrowLeft") {
              setPaused(true);
              previous();
            }
          }}
          tabIndex={0}
          aria-label="Project showcase. Use left and right arrow keys to switch projects."
        >
          <div className="grid min-h-[520px] gap-6 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="relative z-10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C4A7FF]">Project 0{active + 1}</p>
                <h3 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-tight text-[#FFF9FF]">{project.title}</h3>
                <p className="mt-3 text-base font-bold text-[#F08AB8]">{project.subtitle}</p>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[#CFC3D8]">{project.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="rounded-2xl border border-[#FFF9FF]/10 bg-[#FFF9FF]/5 p-4">
                      <p className="text-sm font-bold text-[#FFF9FF]">{metric}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-[#C4A7FF]/18 bg-[#7C3AED]/10 px-3 py-1 text-xs font-bold text-[#CFC3D8]">{tech}</span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] px-5 py-3 text-sm font-bold text-[#FFF9FF] shadow-[0_0_26px_rgba(217,70,239,0.24)] transition hover:-translate-y-0.5"
                  >
                    View Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${project.slug}-mockup`}
                  initial={{ opacity: 0, scale: 0.96, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.96, x: -24 }}
                  transition={{ duration: 0.42, ease: "easeOut" }}
                >
                  <ProjectMockup slug={project.slug} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button type="button" onClick={() => { setPaused(true); previous(); }} className="grid h-11 w-11 place-items-center rounded-full border border-[#FFF9FF]/14 bg-[#090611]/50 text-[#FFF9FF] transition hover:border-[#F08AB8]/55" aria-label="Previous project">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {projects.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => {
                    setPaused(true);
                    goTo(index);
                  }}
                  className={`h-2.5 rounded-full transition-all ${active === index ? "w-8 bg-[#F08AB8]" : "w-2.5 bg-[#FFF9FF]/24"}`}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>
            <button type="button" onClick={() => { setPaused(true); next(); }} className="grid h-11 w-11 place-items-center rounded-full border border-[#FFF9FF]/14 bg-[#090611]/50 text-[#FFF9FF] transition hover:border-[#F08AB8]/55" aria-label="Next project">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
