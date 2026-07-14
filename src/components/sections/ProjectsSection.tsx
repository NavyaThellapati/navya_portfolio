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
      subtitle: "Ask your documents. Get grounded answers.",
      description: "An AI document assistant that searches uploaded content and returns source-backed responses.",
      metrics: ["1,000+ documents", "35% fewer unsupported responses"],
    },
    {
      slug: "mychart",
      title: "MyChart",
      subtitle: "Healthcare tasks in one simple portal.",
      description: "A patient portal for appointments, test results, medications, billing, messaging, and AI-assisted navigation.",
      metrics: ["30% better task completion"],
    },
    {
      slug: "responsible-ai",
      title: "Responsible AI",
      subtitle: "Accuracy without ignoring fairness.",
      description: "A machine-learning project evaluating income prediction across demographic groups.",
      metrics: ["48,842 records", "85% accuracy", "0.90 ROC AUC"],
    },
  ] as const;

  return (
    <AnimatedSection id="work" className="dark-surface relative overflow-hidden bg-[radial-gradient(circle_at_52%_0%,rgba(110,66,111,0.28),transparent_32%),linear-gradient(180deg,#17151C,#211C29_45%,#17151C)] py-28">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="orb left-1/4 top-60 h-96 w-96 bg-purple-500/18" aria-hidden="true" />
      <div className="orb right-0 top-[38%] h-96 w-96 bg-[#8A4F62]/22" aria-hidden="true" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Selected Work"
          title="Selected projects, built like products."
          body="Concise snapshots of the systems behind Navya’s AI, healthcare, and responsible machine-learning work."
          align="center"
        />
        <div className="mt-20 space-y-24">
          {homeProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="grid items-center gap-10 border-t border-white/10 pt-14 lg:grid-cols-2"
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
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-slate-400">Case Study 0{index + 1}</p>
                <h3 className="font-display text-4xl font-extrabold leading-tight text-[var(--text)] sm:text-5xl">{project.title}</h3>
                <p className="mt-3 font-display text-xl font-bold text-[#F6D8DF]">{project.subtitle}</p>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">{project.description}</p>
                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="border-l border-white/14 pl-4">
                      <p className="text-sm font-bold text-[#FAF8F4]">{metric}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#FAF8F4] px-5 py-3 text-sm font-bold text-[#211D24] shadow-xl shadow-[#6E426F]/25 transition hover:-translate-y-0.5 hover:bg-[#F6D8DF]"
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
