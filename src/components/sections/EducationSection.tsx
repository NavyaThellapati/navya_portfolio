import { certifications, educationFocus } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <AnimatedSection id="education" className="relative overflow-hidden bg-[var(--bg)] py-16">
      <div className="section-shell grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
        <SectionHeading eyebrow="Education" title="Education" />
        <motion.div
          className="mt-6 min-h-[300px] rounded-[18px] border border-[var(--line)] bg-[var(--surface)] p-6"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-[#FFF9F3]">University of South Florida</p>
          <p className="mt-1 text-sm text-[var(--muted)]">Tampa, Florida</p>
          <h3 className="mt-6 font-display text-[clamp(1.35rem,2.3vw,1.85rem)] font-extrabold leading-tight">Master of Science in Computer Science</h3>
          <p className="mt-4 inline-flex rounded-full bg-[#D39AA8]/10 px-3 py-1 text-xs font-bold text-[#D8C9D0]">August 2024 – May 2026</p>
          <div className="mt-5 grid gap-2 text-sm text-[var(--muted)]">
            {educationFocus.slice(0, 5).map((focus) => (
              <span key={focus} className="before:mr-2 before:text-[#D39AA8] before:content-['•']">{focus}</span>
            ))}
          </div>
        </motion.div>
        </div>
        <div>
          <SectionHeading eyebrow="Certifications" title="Certifications" />
        <div className="mt-6 grid gap-3">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.article
                key={cert.title}
                className="group flex items-center gap-3 rounded-[14px] border border-[var(--line)] bg-[var(--surface)] p-4 transition hover:-translate-y-0.5 hover:border-[#D39AA8]/45 hover:bg-[var(--surface-strong)]"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#FFF9F3]/8 text-[#D8BA82]"><Icon className="h-4 w-4" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold">{cert.title}</span>
                  <span className="block text-xs text-[var(--muted)]">{cert.issuer}</span>
                </span>
                <span className="text-[#D39AA8] transition group-hover:translate-x-1">→</span>
              </motion.article>
            );
          })}
        </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
