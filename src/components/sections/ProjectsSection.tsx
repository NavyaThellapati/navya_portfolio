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
    <AnimatedSection id="work" className="relative overflow-hidden bg-[var(--bg)] py-24">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="orb left-1/4 top-60 h-96 w-96 bg-[#A95F73]/22" aria-hidden="true" />
      <div className="orb right-0 top-[38%] h-96 w-96 bg-[#A95F73]/22" aria-hidden="true" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          body="Selected work across backend, full-stack, and AI development."
          align="center"
        />
        <div className="mt-16 space-y-20">
          {homeProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="grid items-center gap-10 border-t border-[#FFF9F3]/10 pt-12 lg:grid-cols-2"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className={index % 2 === 1 ? "lg:order-2" : ""}
                whileHover={{ y: -8, rotateX: 1.5, rotateY: index % 2 ? -2 : 2 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <ProjectMockup slug={project.slug} />
              </motion.div>
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#B8A5AE]">Case Study 0{index + 1}</p>
                <h3 className="font-display text-[clamp(1.5rem,3vw,2.375rem)] font-extrabold leading-tight text-[var(--text)]">{project.title}</h3>
                <p className="mt-3 font-display text-[clamp(1rem,1.8vw,1.25rem)] font-bold text-[#D39AA8]">{project.subtitle}</p>
                <p className="mt-5 max-w-xl text-[clamp(1rem,1.35vw,1.125rem)] leading-8 text-[var(--muted)]">{project.description}</p>
                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="border-l border-[#D8BA82]/30 pl-4">
                      <p className="text-sm font-bold text-[#FFF9F3]">{metric}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#D8BA82] px-5 py-3 text-sm font-bold text-[#241820] shadow-xl shadow-[#130D12]/25 transition hover:-translate-y-0.5 hover:bg-[#D39AA8]"
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
