import type { ProjectSlug } from "../../types/portfolio";
import { motion } from "framer-motion";

export function ProjectMockup({ slug }: { slug: ProjectSlug }) {
  if (slug === "mychart") return <HealthcareMockup />;
  if (slug === "responsible-ai") return <ResponsibleAIMockup />;
  return <DocuMindMockup />;
}

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-x-12 -bottom-6 h-12 rounded-full bg-[#A95F73]/24 blur-2xl" />
      <div className="relative overflow-hidden rounded-t-[30px] border border-[#FFF9F3]/14 bg-[linear-gradient(145deg,rgba(250,248,244,0.13),rgba(250,248,244,0.035))] p-4 shadow-2xl shadow-[#241820]/28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_0%,rgba(197,142,157,0.17),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(139,95,191,0.16),transparent_34%)]" />
        <div className="relative mb-4 flex items-center justify-between border-b border-[#FFF9F3]/10 pb-3">
          <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#D39AA8]" /><span className="h-2.5 w-2.5 rounded-full bg-[#D8BA82]" /><span className="h-2.5 w-2.5 rounded-full bg-[#9CAC91]" /></div>
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D8C9D0]">{label}</span>
        </div>
        <div className="relative">{children}</div>
      </div>
      <div className="mx-auto h-4 w-[86%] rounded-b-[28px] border border-[#FFF9F3]/10 bg-[linear-gradient(180deg,rgba(250,248,244,0.2),rgba(250,248,244,0.04))]" />
    </div>
  );
}

function DocuMindMockup() {
  return (
    <Frame label="Document AI">
      <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl bg-[#FFF9F3]/8 p-3">
          <p className="text-xs font-bold text-[#FFF9F3]">Document Library</p>
          {["policy.txt", "handbook.pdf", "guide.md"].map((doc, i) => (
            <motion.div
              key={doc}
              className="mt-3 rounded-xl border border-[#FFF9F3]/10 bg-[#FFF9F3]/7 p-3 text-xs text-[#FFF9F3]"
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="flex justify-between"><span>{doc}</span><span>{i === 0 ? "Indexed" : "Ready"}</span></div>
              <div className="mt-2 h-1.5 rounded-full bg-[#422D38]">
                <motion.div
                  className="h-full rounded-full bg-[#D8BA82]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${86 - i * 16}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
          <div className="mt-3 rounded-xl border border-dashed border-[#D8BA82]/35 p-4 text-center text-xs text-[#FFF9F3]">Upload panel</div>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl bg-[#FFF9F3]/8 p-3">
            <motion.div
              className="overflow-hidden whitespace-nowrap rounded-full bg-[#241820]/80 px-4 py-3 text-xs text-[#D8C9D0]"
              initial={{ width: "34%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
            >
              Ask about billing validation workflows
            </motion.div>
          </div>
          <div className="rounded-2xl border border-[#D39AA8]/24 bg-[#D39AA8]/12 p-4">
            <p className="text-sm font-bold text-[#FFF9F3]">AI answer with source references</p>
            <div className="mt-3 space-y-2">
              {[100, 80].map((width, index) => (
                <motion.div
                  key={width}
                  className="mock-line"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: `${width}%`, opacity: index === 0 ? 1 : 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.45 + index * 0.18 }}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs text-[#FFF9F3]">
            {["Source A · section 2", "Source B · section 4"].map((source, index) => (
              <motion.div
                key={source}
                className="rounded-xl bg-[#FFF9F3]/7 p-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.12 }}
              >
                {source}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function HealthcareMockup() {
  return (
    <Frame label="Patient Portal">
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Upcoming appointment", "Primary care · 10:30 AM", false],
          ["Recent test results", "3 new results", true],
          ["Medications", "Active list reviewed", false],
          ["Billing summary", "$84.20 balance", false],
        ].map(([title, value, accent], index) => (
          <motion.div
            key={String(title)}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.09 }}
          >
            <Panel title={String(title)} value={String(value)} accent={Boolean(accent)} />
          </motion.div>
        ))}
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl bg-[#FFF9F3]/7 p-4">
          <p className="text-sm font-bold text-[#FFF9F3]">Provider messages</p>
          <div className="mt-3 space-y-2"><motion.div className="mock-line" initial={{ width: 0 }} whileInView={{ width: "83%" }} viewport={{ once: true }} /><motion.div className="mock-line opacity-60" initial={{ width: 0 }} whileInView={{ width: "66%" }} viewport={{ once: true }} transition={{ delay: 0.15 }} /></div>
        </div>
        <div className="rounded-2xl border border-[#D39AA8]/24 bg-[#D39AA8]/12 p-4">
          <p className="text-sm font-bold text-[#D8C9D0]">AI navigation</p>
          <motion.p className="mt-3 text-xs text-[#D8C9D0]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>Guided response flows for appointments, billing, medications, and results.</motion.p>
        </div>
      </div>
    </Frame>
  );
}

function ResponsibleAIMockup() {
  return (
    <Frame label="Fairness Analytics">
      <div className="grid gap-3 sm:grid-cols-3">
        <Panel title="Accuracy" value="85%" accent />
        <Panel title="ROC AUC" value="0.90" />
        <Panel title="Records" value="48,842" />
      </div>
      <div className="mt-4 rounded-2xl bg-[#FFF9F3]/7 p-4">
        <div className="mb-4 flex items-center justify-between text-xs text-[#D8C9D0]"><span>Fairness comparison</span><span>Before / After</span></div>
        {[
          ["Bias before mitigation", "72%"],
          ["Bias after mitigation", "88%"],
          ["Accuracy maintained", "82%"],
        ].map(([label, width], index) => (
          <div key={label} className="mb-4">
            <div className="mb-2 flex justify-between text-xs text-[#D8C9D0]"><span>{label}</span><span>{width}</span></div>
              <div className="h-2 rounded-full bg-[#422D38]">
                <motion.div
                  className={`h-full rounded-full ${index === 0 ? "bg-[#A95F73]" : "bg-[#D8BA82]"}`}
                  initial={{ width: 0 }}
                  whileInView={{ width }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.14 }}
                />
              </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Panel({ title, value, accent }: { title: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border p-4 ${accent ? "border-[#D39AA8]/24 bg-[#D39AA8]/12" : "border-[#FFF9F3]/10 bg-[#FFF9F3]/7"}`}>
      <p className="text-xs text-[#D8C9D0]">{title}</p>
      <p className="mt-2 font-display text-lg font-bold text-[#FFF9F3]">{value}</p>
    </div>
  );
}
