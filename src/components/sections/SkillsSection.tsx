import { motion, useReducedMotion } from "framer-motion";
import { Bot, Code2, Database, GitBranch, ServerCog, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "../animations/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";

const groups = [
  {
    title: "Backend",
    icon: ServerCog,
    strength: 92,
    signal: "Production-heavy",
    shown: ["Python", "FastAPI", "Flask", "SQLAlchemy"],
  },
  {
    title: "APIs and Databases",
    icon: Database,
    strength: 90,
    signal: "Data-connected",
    shown: ["REST APIs", "PostgreSQL", "SQL Server", "OpenAPI"],
  },
  {
    title: "Frontend",
    icon: Code2,
    strength: 84,
    signal: "Product-focused",
    shown: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "AI and LLMs",
    icon: Bot,
    strength: 86,
    signal: "Applied AI",
    shown: ["RAG", "LangChain", "ChromaDB", "OpenAI API"],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    strength: 78,
    signal: "Delivery-minded",
    shown: ["Docker", "GitHub Actions", "Jenkins", "Azure DevOps", "Linux"],
  },
  {
    title: "Machine Learning",
    icon: ShieldCheck,
    strength: 82,
    signal: "Evaluation-aware",
    shown: ["TensorFlow", "scikit-learn", "Pandas", "NumPy"],
  },
];

export function SkillsSection() {
  const reduce = useReducedMotion();

  return (
    <AnimatedSection id="expertise" className="living-section relative overflow-hidden py-16">
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Skill System"
          title="Engineering Capabilities"
          body="A connected system of backend, AI, data, frontend, and delivery skills used to ship reliable products."
        />
        <div className="relative mt-8">
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-45 lg:block" aria-hidden="true">
            <motion.path d="M 160 120 C 310 20, 500 20, 650 120 S 960 230, 1080 120" fill="none" stroke="rgba(196,167,255,0.28)" strokeWidth="1" strokeDasharray="8 12" animate={reduce ? undefined : { strokeDashoffset: [0, -60] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
            <motion.path d="M 220 350 C 380 220, 520 460, 720 300 S 920 260, 1060 410" fill="none" stroke="rgba(240,138,184,0.24)" strokeWidth="1" strokeDasharray="6 14" animate={reduce ? undefined : { strokeDashoffset: [0, -64] }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }} />
          </svg>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  className="premium-card tilt-card group relative rounded-[22px] p-5"
                  initial={{ opacity: 0, y: 24, rotateX: reduce ? 0 : 8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ delay: index * 0.06, type: "spring", stiffness: 180, damping: 22 }}
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-[#F08AB8]/18 to-[#C4A7FF]/14 transition group-hover:scale-125" />
                  <div className="relative flex items-center justify-between gap-4">
                    <motion.span
                      className="grid h-12 w-12 place-items-center rounded-2xl border border-[#C4A7FF]/22 bg-[#7C3AED]/12 text-[#C4A7FF]"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                      transition={{ duration: 0.45 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.span>
                    <span className="rounded-full border border-[#FFF9FF]/10 bg-[#120818]/42 px-3 py-1 text-xs font-bold text-[#CFC3D8]">{group.signal}</span>
                  </div>
                  <h3 className="relative mt-5 font-display text-lg font-bold">{group.title}</h3>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#2A1450]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#F08AB8]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${group.strength}%` }}
                      viewport={{ once: false, amount: 0.8 }}
                      transition={{ duration: 0.9, delay: index * 0.05 }}
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.shown.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="rounded-full border border-[#FFF9FF]/10 bg-[#FFF9FF]/6 px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 + skillIndex * 0.04 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
