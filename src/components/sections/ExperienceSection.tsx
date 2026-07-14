import { motion } from "framer-motion";
import { useState } from "react";
import { experienceGroups } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionBackground } from "../backgrounds/SectionBackground";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);
  const milestones = [
    { value: "300+", label: "Automated recurring checks" },
    { value: "28%", label: "Improved processing efficiency" },
    { value: "20+", label: "Integrated internal APIs" },
    { value: "6K+", label: "Daily financial records supported" },
    { value: "25%", label: "Reduced data mismatches" },
  ];

  return (
    <AnimatedSection id="experience" className="relative overflow-hidden bg-[var(--bg)] py-16">
      <SectionBackground variant="timeline" />
      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.6fr]">
        <div className="rounded-[18px] border border-[#F08AB8]/18 bg-[var(--surface)] p-6">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)]">Experience</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold leading-tight">Associate Software Engineer</h2>
          <p className="mt-4 font-semibold text-[var(--text)]">Accenture Solutions</p>
          <p className="text-sm font-semibold text-[var(--muted)]">Client: Edward Jones</p>
          <p className="mt-1 font-bold text-[#F08AB8]">June 2021 – July 2024</p>
          <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
            Developed and supported Python, API, SQL, automation, and data-validation workflows for enterprise financial applications.
          </p>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-6 rounded-full border border-[#F08AB8]/24 bg-[#130A20]/70 px-4 py-2.5 text-sm font-bold text-[#FFF9FF] transition hover:-translate-y-0.5 hover:border-[#F08AB8]/60"
          >
            {expanded ? "Hide full experience" : "View full experience"}
          </button>
        </div>
        <article className="relative">
          <div className="relative grid gap-5 md:grid-cols-5">
            <motion.span
              className="absolute left-8 right-8 top-8 hidden h-px bg-gradient-to-r from-[#F08AB8] via-[#C4A7FF] to-[#F08AB8] md:block"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            />
            {milestones.map((milestone, index) => {
              const Icon = experienceGroups[index % experienceGroups.length].icon;
              return (
                <motion.div
                  key={milestone.label}
                  className="relative rounded-[18px] border border-transparent p-3 text-center transition hover:border-[#F08AB8]/24 hover:bg-[#130A20]/50"
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#F08AB8]/38 bg-[#130A20] shadow-[0_0_32px_rgba(217,70,239,0.18)]">
                    <Icon className="h-7 w-7 text-[#F08AB8]" />
                  </div>
                  <p className="mt-5 font-display text-[clamp(1.45rem,2.5vw,2rem)] font-bold text-[#FFF9FF]">{milestone.value}</p>
                  <p className="mx-auto mt-2 max-w-32 text-xs font-semibold leading-5 text-[var(--muted)]">{milestone.label}</p>
                </motion.div>
              );
            })}
          </div>
        </article>
        </div>
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
      </div>
    </AnimatedSection>
  );
}
