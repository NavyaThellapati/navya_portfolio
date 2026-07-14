import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Navigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { caseStudyOrder, projects, projectIconMap } from "../data/portfolioData";
import type { ProjectSlug } from "../types/portfolio";
import { PageTransition } from "../components/animations/PageTransition";
import { ProjectMockup } from "../components/projects/ProjectMockup";

const caseStudyCopy: Record<ProjectSlug, {
  overview: string;
  features: string[];
  architecture: string;
  results: string[];
}> = {
  documind: {
    overview: "An AI document assistant that indexes uploaded content and returns source-backed answers.",
    features: ["Document upload", "Semantic chunking", "Embeddings", "Vector search", "Question answering", "Source attribution", "Chat history"],
    architecture: "Document upload -> text extraction -> chunking -> embeddings -> ChromaDB -> retrieval -> LLM response -> source references",
    results: ["Supports 1,000+ documents", "Reduced unsupported responses by 35%"],
  },
  mychart: {
    overview: "A full-stack patient portal for common healthcare workflows and AI-assisted navigation.",
    features: ["Authentication", "Appointments", "Test results", "Medications", "Billing", "Messaging", "AI chatbot"],
    architecture: "React frontend -> REST APIs -> FastAPI or Flask backend -> PostgreSQL -> AI service",
    results: ["Improved prototype task completion by 30%"],
  },
  "responsible-ai": {
    overview: "A machine-learning project evaluating both model accuracy and demographic fairness.",
    features: ["Data preprocessing", "Neural-network training", "Accuracy evaluation", "ROC AUC", "Gender and race analysis", "80% Rule evaluation", "Bias mitigation"],
    architecture: "Dataset preparation -> neural network training -> accuracy review -> ROC AUC -> subgroup analysis -> bias mitigation",
    results: ["48,842 records", "85% accuracy", "0.90 ROC AUC", "12% disparity identified", "82% accuracy retained after mitigation"],
  },
};

const tabs = ["Overview", "Features", "Architecture", "Results"] as const;

export function ProjectCaseStudyPage({ slug }: { slug: ProjectSlug }) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Overview");
  const project = projects.find((item) => item.slug === slug);
  const index = caseStudyOrder.indexOf(slug);
  const previous = projects.find((item) => item.slug === caseStudyOrder[(index + caseStudyOrder.length - 1) % caseStudyOrder.length]);
  const next = projects.find((item) => item.slug === caseStudyOrder[(index + 1) % caseStudyOrder.length]);
  const detail = caseStudyCopy[slug];
  const visibleTech = project?.technologies.slice(0, 6) ?? [];

  const tabContent = useMemo(() => {
    if (activeTab === "Overview") return <p className="max-w-2xl text-base leading-7 text-[#CFC3D8]">{detail.overview}</p>;
    if (activeTab === "Architecture") {
      return (
        <div className="rounded-3xl border border-[#C4A7FF]/16 bg-[#090611]/45 p-5">
          <p className="text-sm font-bold leading-7 text-[#FFF9FF]">{detail.architecture}</p>
          <motion.div className="mt-5 h-1 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#F08AB8]" initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7 }} />
        </div>
      );
    }
    const items = activeTab === "Features" ? detail.features : detail.results;
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, itemIndex) => (
          <motion.div
            key={item}
            className="rounded-2xl border border-[#FFF9FF]/10 bg-[#FFF9FF]/5 p-4 text-sm font-semibold text-[#FFF9FF]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: itemIndex * 0.04 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    );
  }, [activeTab, detail]);

  if (!project) return <Navigate to="/404" replace />;
  const Icon = projectIconMap[slug];

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-transparent pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(124,58,237,0.22),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(217,70,239,0.18),transparent_32%)]" aria-hidden="true" />
        <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-8 pb-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/#work" className="inline-flex items-center gap-2 text-sm font-bold text-[#C4A7FF]"><ArrowLeft className="h-4 w-4" />Back to Projects</Link>
            <Icon className="mt-7 h-11 w-11 text-[#F08AB8]" />
            <h1 className="mt-5 font-display text-[clamp(2rem,4vw,3.1rem)] font-bold leading-tight">{project.title}</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.map((metric) => <span key={metric} className="rounded-full bg-[#D946EF]/12 px-3 py-1 text-xs font-bold text-[#FFF9FF]">{metric}</span>)}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {visibleTech.map((tech) => <span key={tech} className="rounded-full border border-[#C4A7FF]/20 px-3 py-1 text-xs font-bold text-[#CFC3D8]">{tech}</span>)}
            </div>
          </motion.div>
          <ProjectMockup slug={project.slug} />
        </div>
      </section>

      <section className="bg-transparent pb-14">
        <div className="section-shell">
          <div className="rounded-[28px] border border-[#F08AB8]/20 bg-[#130A20]/72 p-4 shadow-[0_0_42px_rgba(124,58,237,0.12)] backdrop-blur-xl md:p-6">
            <div className="flex flex-wrap gap-2 border-b border-[#FFF9FF]/10 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    activeTab === tab ? "bg-[#F08AB8]/18 text-[#FFF9FF]" : "text-[#CFC3D8] hover:bg-[#FFF9FF]/6"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="min-h-52 pt-6"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32 }}
              >
                {tabContent}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="section-shell flex flex-col gap-3 sm:flex-row sm:justify-between">
          {previous ? <ProjectNav project={previous} direction="previous" /> : null}
          {next ? <ProjectNav project={next} direction="next" /> : null}
        </div>
      </section>
    </PageTransition>
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
