import { motion } from "framer-motion";
import { useState } from "react";
import { experienceGroups } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionBackground } from "../backgrounds/SectionBackground";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);
  const milestones = [
    "Automated 300+ recurring checks",
    "Improved processing efficiency by 28%",
    "Integrated 20+ internal APIs",
    "Supported 6K+ daily financial records",
    "Reduced data mismatches by 25%",
  ];

  return (
    <AnimatedSection id="experience" className="relative overflow-hidden bg-[var(--bg)] py-24">
      <SectionBackground variant="timeline" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)]">Experience</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold leading-tight">Associate Software Engineer</h2>
          <p className="mt-3 font-semibold text-[var(--text)]">Accenture Solutions · Client: Edward Jones</p>
          <p className="mt-1 font-bold text-[#D39AA8]">June 2021 – July 2024</p>
          <p className="mt-5 max-w-md text-lg leading-8 text-[var(--muted)]">
            Developed Python, API, SQL, automation, and validation workflows for enterprise financial applications.
          </p>
        </div>
        <article className="relative">
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
                    <Icon className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div className="rounded-[26px] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-xl shadow-[#130D12]/12">
                    <p className="text-sm font-bold text-[var(--muted-soft)]">Impact 0{index + 1}</p>
                    <h4 className="mt-2 font-display text-[clamp(1.1rem,2vw,1.45rem)] font-bold text-[var(--text)]">{milestone}</h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-7 rounded-full bg-[#D8BA82] px-4 py-2.5 text-sm font-bold text-[#241820] transition hover:-translate-y-0.5 hover:bg-[#D39AA8]"
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
                <div key={group.title} className="rounded-3xl border border-[var(--line)] bg-[var(--surface-soft)] p-5">
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
