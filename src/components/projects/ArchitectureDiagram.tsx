import type { Project } from "../../types/portfolio";

export function ArchitectureDiagram({ project }: { project: Project }) {
  const nodes =
    project.slug === "documind"
      ? ["React UI", "FastAPI", "Document Indexer", "Vector DB", "LLM Service", "Source Answers"]
      : project.slug === "mychart"
        ? ["Patient UI", "Auth Layer", "Portal APIs", "PostgreSQL", "AI Chatbot", "Care Workflows"]
        : ["Adult Dataset", "Preprocessing", "Neural Network", "Evaluation", "Fairness Review", "Mitigation"];

  return (
    <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((node, index) => (
          <div key={node} className="relative rounded-2xl border border-[#D39AA8]/24 bg-[#D39AA8]/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D8C9D0]">0{index + 1}</p>
            <p className="mt-3 font-display text-lg font-bold text-[var(--text)]">{node}</p>
            {index < nodes.length - 1 ? <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-[#D8BA82]/50 lg:block" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
