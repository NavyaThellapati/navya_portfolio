import { motion } from "framer-motion";
import { certifications, educationFocus } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";

export function EducationSection() {
  return (
    <AnimatedSection id="education" className="living-section relative overflow-hidden py-16">
      <div className="section-shell grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Education" title="Milestones" />
          <div className="relative mt-6">
            <motion.span
              className="absolute left-5 top-8 h-[calc(100%-4rem)] w-px origin-top bg-gradient-to-b from-[#F08AB8] via-[#C4A7FF] to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 1 }}
              aria-hidden="true"
            />
            <motion.article
              className="premium-card tilt-card relative ml-10 min-h-[320px] rounded-[24px] p-6"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
            >
              <span className="absolute -left-[3.1rem] top-8 grid h-10 w-10 place-items-center rounded-full border border-[#F08AB8]/40 bg-[#130A20] shadow-[0_0_28px_rgba(217,70,239,0.2)]" />
              <p className="text-sm font-bold text-[#FFF9FF]">University of South Florida</p>
              <p className="mt-1 text-sm text-[var(--muted)]">Tampa, Florida</p>
              <h3 className="mt-6 font-display text-[clamp(1.35rem,2.3vw,1.85rem)] font-extrabold leading-tight">Master of Science in Computer Science</h3>
              <p className="mt-4 inline-flex rounded-full bg-[#F08AB8]/10 px-3 py-1 text-xs font-bold text-[#CFC3D8]">August 2024 - May 2026</p>
              <div className="mt-5 grid gap-2 text-sm text-[var(--muted)]">
                {educationFocus.slice(0, 5).map((focus, index) => (
                  <motion.span
                    key={focus}
                    className="before:mr-2 before:text-[#F08AB8] before:content-['•']"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.06 }}
                  >
                    {focus}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Certifications" title="Proof of Practice" />
          <div className="mt-6 grid gap-3">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.article
                  key={cert.title}
                  className="group [perspective:1000px]"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="premium-card relative flex min-h-[78px] items-center gap-3 rounded-[18px] p-4 transition duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                    <div className="flex w-full items-center gap-3 [backface-visibility:hidden]">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#FFF9FF]/8 text-[#C4A7FF]"><Icon className="h-4 w-4" /></span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-bold">{cert.title}</span>
                        <span className="block text-xs text-[var(--muted)]">{cert.issuer}</span>
                      </span>
                      <span className="text-[#F08AB8] transition group-hover:translate-x-1">→</span>
                    </div>
                    <div className="absolute inset-0 grid place-items-center rounded-[18px] px-5 text-center text-sm font-bold text-[#FFF9FF] [backface-visibility:hidden] [transform:rotateX(180deg)]">
                      Professional training applied to shipped systems and portfolio case studies.
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
