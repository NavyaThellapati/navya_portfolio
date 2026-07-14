import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { caseStudyOrder, projects, projectIconMap } from "../data/portfolioData";
import type { ProjectSlug } from "../types/portfolio";
import { PageTransition } from "../components/animations/PageTransition";
import { SectionBackground } from "../components/backgrounds/SectionBackground";
import { ProjectMockup } from "../components/projects/ProjectMockup";
import { ArchitectureDiagram } from "../components/projects/ArchitectureDiagram";

export function ProjectCaseStudyPage({ slug }: { slug: ProjectSlug }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/404" replace />;

  const index = caseStudyOrder.indexOf(slug);
  const previous = projects.find((item) => item.slug === caseStudyOrder[(index + caseStudyOrder.length - 1) % caseStudyOrder.length]);
  const next = projects.find((item) => item.slug === caseStudyOrder[(index + 1) % caseStudyOrder.length]);
  const Icon = projectIconMap[slug];

  return (
    <PageTransition>
      <section className="dark-surface relative overflow-hidden bg-[var(--bg)] pt-32">
        <SectionBackground variant="dark" />
        <div className="section-shell relative grid items-center gap-10 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Link to="/#work" className="inline-flex items-center gap-2 text-sm font-bold text-[#C9A86A]"><ArrowLeft className="h-4 w-4" />Back to work</Link>
            <Icon className="mt-8 h-12 w-12 text-[#C9A86A]" />
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-6xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.metrics.map((metric) => <span key={metric} className="rounded-full bg-[#C58E9D]/12 px-3 py-1 text-xs font-bold text-[#F6D8DF]">{metric}</span>)}
            </div>
          </div>
          <ProjectMockup slug={project.slug} />
        </div>
      </section>
      <section className="bg-[var(--bg-soft)] py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--plum)]">Case Study</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Overview</h2>
          </aside>
          <div className="grid gap-6">
            <StudyBlock title="User or Business Problem" items={[project.problem]} />
            <StudyBlock title="Solution" items={[project.solution]} />
            <StudyBlock title="Main Features" items={project.features} />
            <StudyBlock title="Technology Stack" items={project.technologies} tagList />
            <div>
              <h3 className="mb-4 font-display text-2xl font-bold">Architecture Diagram</h3>
              <ArchitectureDiagram project={project} />
            </div>
            <StudyBlock title="Application Workflow" items={project.workflow} ordered />
            <StudyBlock title="Challenges" items={project.challenges} />
            <StudyBlock title="Results" items={project.results} />
            <StudyBlock title="Lessons Learned" items={project.lessons} />
            <StudyBlock title="Future Improvements" items={project.future} />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="section-shell flex flex-col gap-3 sm:flex-row sm:justify-between">
          {previous ? <ProjectNav project={previous} direction="previous" /> : null}
          {next ? <ProjectNav project={next} direction="next" /> : null}
        </div>
      </section>
    </PageTransition>
  );
}

function StudyBlock({ title, items, ordered, tagList }: { title: string; items: string[]; ordered?: boolean; tagList?: boolean }) {
  if (tagList) {
    return (
      <div className="glass-panel rounded-3xl p-6">
        <h3 className="font-display text-2xl font-bold">{title}</h3>
        <div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full bg-[#6E426F]/10 px-3 py-1 text-xs font-bold text-[var(--plum)]">{item}</span>)}</div>
      </div>
    );
  }

  const List = ordered ? "ol" : "ul";
  return (
    <div className="glass-panel rounded-3xl p-6">
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <List className="mt-5 space-y-3 text-[var(--muted)]">
        {items.map((item) => <li key={item} className="leading-8">{ordered ? null : <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--plum)] align-middle" />}{item}</li>)}
      </List>
    </div>
  );
}

function ProjectNav({ project, direction }: { project: { slug: string; shortTitle: string }; direction: "previous" | "next" }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="glass-panel group flex items-center justify-between gap-4 rounded-3xl px-5 py-4 text-sm font-bold text-[var(--text)] sm:min-w-64"
    >
      {direction === "previous" ? <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" /> : null}
      <span>{direction === "previous" ? "Previous" : "Next"}: {project.shortTitle}</span>
      {direction === "next" ? <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /> : null}
    </Link>
  );
}
