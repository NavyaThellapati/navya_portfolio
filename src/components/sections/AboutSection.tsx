import { focusAreas, resumeUrl } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionBackground } from "../backgrounds/SectionBackground";
import { ButtonLink } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="light-lavender relative overflow-hidden py-28">
      <SectionBackground variant="light" />
      <div className="absolute left-10 top-16 h-20 w-20 rounded-full bg-rose-200/25" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="About"
            title="I turn complex workflows into simple software."
          />
          <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
            <p>
              I’m a Software Engineer focused on backend systems, intelligent applications, and practical digital products.
            </p>
            <p>
              At Accenture, I worked on enterprise financial workflows involving APIs, automation, validation, billing,
              payments, and data processing.
            </p>
            <p>
              Today, I enjoy building products that combine reliable engineering with thoughtful user experiences.
            </p>
            <ButtonLink href={resumeUrl} download variant="secondary" className="!border-slate-200 !bg-white !text-slate-950">
              Download Resume
            </ButtonLink>
          </div>
        </div>
        <div className="mt-20 grid gap-0 overflow-hidden rounded-[32px] border border-[var(--line)] lg:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <article
                key={area.title}
                className="group relative min-h-80 bg-[var(--surface)] p-8 transition hover:-translate-y-1 hover:bg-[var(--surface-strong)] lg:border-r lg:border-[var(--line)] last:lg:border-r-0"
              >
                <p className="mb-10 text-sm font-bold text-[var(--muted)]">0{index + 1}</p>
                <Icon className="relative h-9 w-9 text-[var(--purple)] transition group-hover:-translate-y-1" />
                <h3 className="relative mt-6 font-display text-2xl font-bold">{["Backend Systems", "Product Engineering", "AI Applications"][index]}</h3>
                <p className="relative mt-4 leading-7 text-[var(--muted)]">
                  {[
                    "Reliable APIs, automation, databases, validation, and scalable services.",
                    "Responsive full-stack applications designed around real user workflows.",
                    "RAG systems, semantic search, LLM integrations, and responsible AI.",
                  ][index]}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
