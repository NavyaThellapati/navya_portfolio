import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
    <AnimatedSection id="experience" className="living-section relative overflow-hidden py-16">
      <SectionBackground variant="timeline" />
      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.6fr]">
          <motion.div
            className="premium-card tilt-card rounded-[24px] p-6"
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)]">Experience</p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold leading-tight">Associate Software Engineer</h2>
            <p className="mt-4 font-semibold text-[var(--text)]">Accenture Solutions</p>
            <p className="text-sm font-semibold text-[var(--muted)]">Client: Edward Jones</p>
            <p className="mt-1 font-bold text-[#F08AB8]">June 2021 - July 2024</p>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              Developed and supported Python, API, SQL, automation, and data-validation workflows for enterprise financial applications.
            </p>
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="magnetic mt-6 rounded-full border border-[#F08AB8]/24 bg-[#130A20]/70 px-4 py-2.5 text-sm font-bold text-[#FFF9FF] transition hover:-translate-y-0.5 hover:border-[#F08AB8]/60"
            >
              {expanded ? "Hide full experience" : "View full experience"}
            </button>
          </motion.div>

          <article className="relative">
            <div className="relative grid gap-5 md:grid-cols-5">
              <motion.span
                className="absolute left-8 right-8 top-8 hidden h-px origin-left bg-gradient-to-r from-[#F08AB8] via-[#C4A7FF] to-[#F08AB8] md:block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />
              {milestones.map((milestone, index) => {
                const group = experienceGroups[index % experienceGroups.length];
                const Icon = group.icon;
                return (
                  <motion.div
                    key={milestone.label}
                    className="tilt-card group relative rounded-[22px] border border-transparent p-3 text-center transition hover:border-[#F08AB8]/24 hover:bg-[#130A20]/50"
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <motion.div
                      className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#F08AB8]/38 bg-[#130A20] shadow-[0_0_32px_rgba(217,70,239,0.18)]"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                      transition={{ duration: 0.45 }}
                    >
                      <motion.span className="absolute inset-0 rounded-full border border-[#C4A7FF]/22" animate={{ scale: [1, 1.32, 1], opacity: [0.2, 0, 0.2] }} transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }} />
                      <Icon className="relative h-7 w-7 text-[#F08AB8]" />
                    </motion.div>
                    <p className="mt-5 font-display text-[clamp(1.45rem,2.5vw,2rem)] font-bold text-[#FFF9FF]">
                      <CountUp value={milestone.value} />
                    </p>
                    <p className="mx-auto mt-2 max-w-32 text-xs font-semibold leading-5 text-[var(--muted)]">{milestone.label}</p>
                    <div className="mt-3 max-h-0 overflow-hidden rounded-2xl border border-[#FFF9FF]/10 bg-[#FFF9FF]/6 px-3 text-left text-[11px] leading-5 text-[#CFC3D8] opacity-0 transition-all duration-300 group-hover:max-h-28 group-hover:py-2 group-hover:opacity-100">
                      {group.bullets[0]}
                    </div>
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
              <div key={group.title} className="premium-card rounded-3xl p-5">
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

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const reduce = useReducedMotion();
  const numeric = Number(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const [display, setDisplay] = useState(reduce ? numeric : 0);

  useEffect(() => {
    if (!isInView || reduce) {
      if (reduce) setDisplay(numeric);
      return;
    }

    let frame = 0;
    const total = 38;
    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(Math.round(numeric * progress * 10) / 10);
      if (frame < total) window.requestAnimationFrame(tick);
    };
    tick();
  }, [isInView, numeric, reduce]);

  return <span ref={ref}>{numeric % 1 ? display.toFixed(1) : Math.round(display)}{suffix}</span>;
}
