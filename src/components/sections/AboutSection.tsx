import { focusAreas, resumeUrl } from "../../data/portfolioData";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionBackground } from "../backgrounds/SectionBackground";
import { ButtonLink } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="relative overflow-hidden bg-[var(--bg)] py-24">
      <SectionBackground variant="light" />
      <div className="absolute left-10 top-16 h-20 w-20 rounded-full bg-[#F08AB8]/25" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="About"
            title="Building practical software from backend to user experience."
          />
          <div className="space-y-5 text-[clamp(1rem,1.35vw,1.125rem)] leading-8 text-[var(--muted)]">
            <p>
              I’m a Software Engineer with more than three years of experience working with Python, REST APIs, SQL, automation, and enterprise data workflows.
            </p>
            <p>
              At Accenture, I supported financial-services applications involving account servicing, billing, payments, validation, integrations, and reporting.
            </p>
            <p>
              My recent work includes full-stack healthcare applications, AI document search, and responsible machine-learning projects.
            </p>
            <ButtonLink href={resumeUrl} download variant="secondary">
              Download Resume
            </ButtonLink>
          </div>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <article
                key={area.title}
                className="group relative min-h-64 overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:bg-[var(--surface-strong)]"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F08AB8]/12 transition group-hover:scale-125" />
                <p className="mb-7 text-sm font-bold text-[var(--muted-soft)]">0{index + 1}</p>
                <Icon className="relative h-8 w-8 text-[var(--gold)] transition group-hover:-translate-y-1" />
                <h3 className="relative mt-5 font-display text-[clamp(1.15rem,2vw,1.45rem)] font-bold">{area.title}</h3>
                <p className="relative mt-4 leading-7 text-[var(--muted)]">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
