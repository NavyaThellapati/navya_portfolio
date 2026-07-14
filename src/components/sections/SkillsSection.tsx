import { motion } from "framer-motion";
import { Bot, Code2, Database, GitBranch, ServerCog, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";

const groups = [
  {
    title: "Python & Backend",
    icon: ServerCog,
    shown: ["Python", "FastAPI", "Flask", "SQLAlchemy"],
    hidden: ["Microservices", "JWT", "Object-Oriented Programming"],
    description: "Backend services, automation modules, validation logic, and reliable application workflows.",
  },
  {
    title: "APIs & Data",
    icon: Database,
    shown: ["REST APIs", "PostgreSQL", "SQL Server", "OpenAPI"],
    hidden: ["JSON", "XML", "SQL Query Optimization", "Relational Database Design"],
    description: "Integrations, documented endpoints, relational data, and reconciliation workflows.",
  },
  {
    title: "Frontend",
    icon: Code2,
    shown: ["React", "TypeScript", "HTML", "CSS", "Tailwind"],
    hidden: ["Responsive Web Design", "Component-Based Development"],
    description: "Responsive product interfaces connected to real backend workflows.",
  },
  {
    title: "AI & LLMs",
    icon: Bot,
    shown: ["RAG", "LangChain", "ChromaDB", "OpenAI API"],
    hidden: ["Llama 3", "Semantic Search", "Sentence-Transformers", "Source Attribution"],
    description: "Document intelligence, semantic search, grounded answers, and LLM integrations.",
  },
  {
    title: "DevOps",
    icon: GitBranch,
    shown: ["Docker", "GitHub Actions", "Jenkins", "Azure DevOps"],
    hidden: ["Git", "Linux", "CI/CD Pipelines"],
    description: "Repeatable builds, deployment checks, release validation, and delivery workflows.",
  },
  {
    title: "Machine Learning",
    icon: ShieldCheck,
    shown: ["TensorFlow", "scikit-learn", "Pandas", "NumPy"],
    hidden: ["Bias Detection", "Fairness Validation", "Model Evaluation", "Neural Networks"],
    description: "Model evaluation, fairness review, bias detection, and responsible AI validation.",
  },
];

export function SkillsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatedSection id="expertise" className="skills-gradient relative overflow-hidden py-28">
      <div className="orb right-10 top-12 h-64 w-64 bg-purple-400/22" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Expertise"
          title="Tools for building real products."
          body="Six focused categories, with the strongest tools shown first and supporting skills available on expand."
        />
        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                className="group relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-white/76 p-6 shadow-xl shadow-[#6E426F]/5 transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-[#6E426F]/10"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-[#C58E9D]/25 to-[#C9A86A]/20 transition group-hover:scale-125" />
                <p className="mb-8 text-sm font-bold text-[var(--muted)]">0{index + 1}</p>
                <Icon className="relative h-8 w-8 text-[var(--purple)] transition group-hover:-translate-y-1" />
                <h3 className="relative mt-4 font-display text-xl font-bold">{group.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{group.description}</p>
                <p className="mt-6 text-sm font-semibold leading-7 text-[var(--text)]">{group.shown.join(" · ")}</p>
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
                  className="mt-5 text-sm font-bold text-[var(--plum)]"
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
