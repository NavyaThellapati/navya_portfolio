import { certifications, educationFocus } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";

export function EducationSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-[#fffdf8] py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Education" title="A graduate milestone, focused on building better software." />
        <div className="mt-12 grid gap-8 border-y border-[var(--line)] py-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--plum)]">University of South Florida</p>
            <h3 className="mt-5 font-display text-4xl font-extrabold leading-tight">Master of Science in Computer Science</h3>
          </div>
          <div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-[var(--muted)]">Tampa, Florida</p>
              <p className="font-bold text-[var(--plum)]">August 2024 – May 2026</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {educationFocus.map((focus) => <p key={focus} className="border-l border-[var(--line)] pl-4 text-sm font-semibold text-[var(--text)]">{focus}</p>)}
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <article key={cert.title} className="rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-5 transition hover:-translate-y-1 hover:bg-[var(--surface-strong)]">
                <Icon className="h-7 w-7 text-[var(--plum)]" />
                <h3 className="mt-4 font-display text-base font-bold">{cert.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{cert.issuer}</p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
