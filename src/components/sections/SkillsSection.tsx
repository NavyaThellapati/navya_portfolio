import { motion } from "framer-motion";
import { Bot, Code2, Database, GitBranch, ServerCog, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";

const groups = [
  {
    title: "Backend",
    icon: ServerCog,
    shown: ["Python", "FastAPI", "Flask", "SQLAlchemy"],
    hidden: ["Microservices", "JWT", "Object-Oriented Programming"],
    description: "Python services, APIs, and automation workflows.",
  },
  {
    title: "APIs and Databases",
    icon: Database,
    shown: ["REST APIs", "PostgreSQL", "SQL Server", "OpenAPI"],
    hidden: ["JSON", "XML", "SQL Query Optimization", "Relational Database Design"],
    description: "API integrations, endpoint documentation, and data workflows.",
  },
  {
    title: "Frontend",
    icon: Code2,
    shown: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    hidden: ["Responsive Web Design", "Component-Based Development"],
    description: "Responsive interfaces connected to backend workflows.",
  },
  {
    title: "AI & LLMs",
    icon: Bot,
    shown: ["RAG", "LangChain", "ChromaDB", "OpenAI API"],
    hidden: ["Llama 3", "Semantic Search", "Source Attribution"],
    description: "Document search, retrieval workflows, and LLM integrations.",
  },
  {
    title: "DevOps",
    icon: GitBranch,
    shown: ["Docker", "GitHub Actions", "Jenkins", "Azure DevOps", "Linux"],
    hidden: ["Git", "CI/CD Pipelines"],
    description: "Build, testing, release, and delivery workflows.",
  },
  {
    title: "Machine Learning",
    icon: ShieldCheck,
    shown: ["TensorFlow", "scikit-learn", "Pandas", "NumPy"],
    hidden: ["Bias Detection", "Fairness Validation", "Model Evaluation", "Neural Networks"],
    description: "Model evaluation and responsible AI validation.",
  },
];

export function SkillsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatedSection id="expertise" className="relative overflow-hidden bg-[var(--bg)] py-24">
      <div className="orb right-10 top-12 h-64 w-64 bg-[#AA82C2]/18" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          body="Technologies used across application development, APIs, AI, data, and delivery."
        />
        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                className="group relative overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-xl shadow-[#130D12]/12 transition hover:-translate-y-1 hover:bg-[var(--surface-strong)] hover:shadow-2xl hover:shadow-[#130D12]/18"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-[#D39AA8]/25 to-[#D8BA82]/20 transition group-hover:scale-125" />
                <p className="mb-6 text-sm font-bold text-[var(--muted-soft)]">0{index + 1}</p>
                <Icon className="relative h-8 w-8 text-[var(--gold)] transition group-hover:-translate-y-1" />
                <h3 className="relative mt-4 font-display text-[clamp(1.125rem,2vw,1.35rem)] font-bold">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{group.description}</p>
                <p className="mt-5 text-sm font-semibold leading-7 text-[var(--text)]">{group.shown.join(" · ")}</p>
                <motion.div
                  initial={false}
                  animate={{ height: expanded === group.title ? "auto" : 0, opacity: expanded === group.title ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-sm font-semibold leading-7 text-[var(--muted)]">{group.hidden.join(" · ")}</p>
                </motion.div>
                <button
                  type="button"
                  onClick={() => setExpanded((current) => (current === group.title ? null : group.title))}
                  className="mt-5 text-sm font-bold text-[#D8BA82]"
                >
                  {expanded === group.title ? "Show less" : "Show more"}
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
