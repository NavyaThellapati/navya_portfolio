import { motion } from "framer-motion";
import { useState } from "react";
import { experienceGroups } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionBackground } from "../backgrounds/SectionBackground";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);
  const milestones = [
    "Automated 300+ recurring checks",
    "Improved efficiency by 28%",
    "Integrated 20+ internal APIs",
    "Supported 6K+ daily records",
    "Reduced data mismatches by 25%",
  ];

  return (
    <AnimatedSection id="experience" className="light-neutral relative overflow-hidden py-28">
      <SectionBackground variant="blueprint" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--purple)]">Experience</p>
          <h2 className="font-display text-4xl font-extrabold sm:text-6xl">Enterprise software, measured by impact.</h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-[var(--muted)]">
            Built and supported backend workflows for enterprise financial systems.
          </p>
        </div>
        <article className="relative">
          <div className="mb-10 flex flex-col gap-3 border-b border-[var(--line)] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-3xl font-bold">Associate Software Engineer</h3>
              <p className="mt-2 text-[var(--muted)]">Accenture Solutions · Client: Edward Jones</p>
            </div>
            <p className="font-bold text-[var(--plum)]">June 2021 – July 2024</p>
          </div>
          <div className="relative grid gap-5 before:absolute before:left-5 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-[var(--line)]">
            {milestones.map((milestone, index) => {
              const Icon = experienceGroups[index % experienceGroups.length].icon;
              return (
                <motion.div
                  key={milestone}
                  className="relative pl-14"
                  initial={{ opacity: 0, x: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--bg-soft)]">
                    <Icon className="h-5 w-5 text-[var(--purple)]" />
                  </div>
                  <div className="rounded-[26px] border border-[var(--line)] bg-white/78 p-5 shadow-xl shadow-[#6E426F]/5">
                    <p className="text-sm font-bold text-[var(--muted)]">Impact 0{index + 1}</p>
                    <h4 className="mt-2 font-display text-2xl font-bold text-[var(--text)]">{milestone}</h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-8 rounded-full bg-[var(--text)] px-5 py-3 text-sm font-bold text-[var(--bg)] transition hover:-translate-y-0.5"
          >
            {expanded ? "Hide full experience" : "View full experience"}
          </button>
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid gap-4">
              {experienceGroups.map((group) => (
                <div key={group.title} className="rounded-3xl border border-[var(--line)] bg-white/70 p-5">
                  <h4 className="font-display text-xl font-bold">{group.title}</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)]">
                    {group.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </article>
      </div>
    </AnimatedSection>
  );
}
