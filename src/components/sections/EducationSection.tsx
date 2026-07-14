import { certifications } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-[var(--bg)] py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Education" title="Education" />
        <motion.div
          className="mt-10 grid gap-8 rounded-[30px] border border-[var(--line)] bg-[var(--surface)] p-6 lg:grid-cols-[0.75fr_1.25fr] lg:p-8"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#D8BA82]">University of South Florida</p>
            <h3 className="mt-5 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-tight">Master of Science in Computer Science</h3>
          </div>
          <div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-[var(--muted)]">Tampa, Florida</p>
              <p className="font-bold text-[#D39AA8]">August 2024 – May 2026</p>
            </div>
          </div>
        </motion.div>
        <div className="mt-14">
          <SectionHeading eyebrow="Certifications" title="Certifications" />
        </div>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-3 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.article
                key={cert.title}
                className="min-w-64 rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-5 transition hover:-translate-y-1 hover:bg-[var(--surface-strong)] lg:min-w-0"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Icon className="h-7 w-7 text-[#D8BA82]" />
                <h3 className="mt-4 font-display text-base font-bold">{cert.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{cert.issuer}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
