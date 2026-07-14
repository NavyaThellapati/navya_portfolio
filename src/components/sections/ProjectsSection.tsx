import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "../animations/AnimatedSection";
import { ProjectMockup } from "../projects/ProjectMockup";
import { SectionHeading } from "../ui/SectionHeading";

export function ProjectsSection() {
  const homeProjects = [
    {
      slug: "documind",
      title: "DocuMind",
      subtitle: "AI document search with source-backed answers.",
      description: "Upload documents, search their content, and receive relevant answers with supporting references.",
      metrics: ["1,000+ documents", "35% fewer unsupported responses"],
    },
    {
      slug: "mychart",
      title: "MyChart",
      subtitle: "A full-stack healthcare patient portal.",
      description: "Manage appointments, test results, medications, billing, messages, and AI-assisted navigation in one application.",
      metrics: ["30% improvement in task completion"],
    },
    {
      slug: "responsible-ai",
      title: "Responsible AI",
      subtitle: "Income prediction evaluated for performance and fairness.",
      description: "A machine-learning project analyzing accuracy, demographic disparities, and fairness improvements.",
      metrics: ["48,842 records", "85% accuracy", "0.90 ROC AUC"],
    },
  ] as const;

  return (
    <AnimatedSection id="work" className="relative overflow-hidden bg-[var(--bg)] py-16">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="orb left-1/4 top-60 h-96 w-96 bg-[#A95F73]/22" aria-hidden="true" />
      <div className="orb right-0 top-[38%] h-96 w-96 bg-[#A95F73]/22" aria-hidden="true" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          body="Selected work across backend, full-stack, and AI development."
        />
        <div className="mt-8 flex snap-x gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {homeProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="group min-w-[82vw] snap-center overflow-hidden rounded-[18px] border border-[#D39AA8]/22 bg-[#30212B]/62 p-5 shadow-[0_0_34px_rgba(211,154,168,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#D39AA8]/45 lg:min-w-0"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <motion.div
                whileHover={{ y: -8, rotateX: 1.5, rotateY: index % 2 ? -2 : 2 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <div className="mt-4">
                  <ProjectMockup slug={project.slug} compact />
                </div>
              </motion.div>
              <div className="relative z-10">
                <h3 className="font-display text-[clamp(1.35rem,2vw,1.85rem)] font-extrabold leading-tight text-[var(--text)]">{project.title}</h3>
                <p className="mt-2 text-sm font-bold text-[#D39AA8]">{project.subtitle}</p>
                <p className="mt-4 min-h-20 text-sm leading-6 text-[var(--muted)]">{project.description}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="border-l border-[#D8BA82]/30 pl-4">
                      <p className="text-sm font-bold text-[#FFF9F3]">{metric}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#D8BA82] transition hover:text-[#FFF9F3]"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
