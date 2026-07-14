import { motion } from "framer-motion";
import { Bot, Code2, Database, GitBranch, ServerCog, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";

const groups = [
  {
    title: "Backend",
    icon: ServerCog,
    shown: ["Python", "FastAPI", "Flask", "SQLAlchemy"],
  },
  {
    title: "APIs and Databases",
    icon: Database,
    shown: ["REST APIs", "PostgreSQL", "SQL Server", "OpenAPI"],
  },
  {
    title: "Frontend",
    icon: Code2,
    shown: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "AI & LLMs",
    icon: Bot,
    shown: ["RAG", "LangChain", "ChromaDB", "OpenAI API"],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    shown: ["Docker", "GitHub Actions", "Jenkins", "Azure DevOps", "Linux"],
  },
  {
    title: "Machine Learning",
    icon: ShieldCheck,
    shown: ["TensorFlow", "scikit-learn", "Pandas", "NumPy"],
  },
];

export function SkillsSection() {
  return (
    <AnimatedSection id="expertise" className="relative overflow-hidden bg-[var(--bg)] py-16">
      <div className="orb right-10 top-12 h-64 w-64 bg-[#AA82C2]/18" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          body="Technologies used across application development, APIs, AI, data, and delivery."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                className="group relative overflow-hidden rounded-[14px] border border-[var(--line)] bg-[var(--surface)] p-4 shadow-xl shadow-[#130D12]/12 transition hover:-translate-y-1 hover:border-[#D39AA8]/42 hover:bg-[var(--surface-strong)] hover:shadow-2xl hover:shadow-[#130D12]/18"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#D39AA8]/18 to-[#D8BA82]/14 transition group-hover:scale-125" />
                <Icon className="relative h-7 w-7 text-[var(--gold)] transition group-hover:-translate-y-1" />
                <h3 className="relative mt-4 font-display text-base font-bold">{group.title}</h3>
                <p className="mt-3 text-xs font-semibold leading-6 text-[var(--muted)]">{group.shown.join(", ")}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
