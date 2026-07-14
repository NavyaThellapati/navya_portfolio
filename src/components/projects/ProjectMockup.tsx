import type { ProjectSlug } from "../../types/portfolio";

export function ProjectMockup({ slug }: { slug: ProjectSlug }) {
  if (slug === "mychart") return <HealthcareMockup />;
  if (slug === "responsible-ai") return <ResponsibleAIMockup />;
  return <DocuMindMockup />;
}

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-x-12 -bottom-6 h-12 rounded-full bg-[#6E426F]/24 blur-2xl" />
      <div className="relative overflow-hidden rounded-t-[30px] border border-[#FAF8F4]/14 bg-[linear-gradient(145deg,rgba(250,248,244,0.13),rgba(250,248,244,0.035))] p-4 shadow-2xl shadow-[#17151C]/28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_0%,rgba(197,142,157,0.17),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(139,95,191,0.16),transparent_34%)]" />
        <div className="relative mb-4 flex items-center justify-between border-b border-[#FAF8F4]/10 pb-3">
          <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#C58E9D]" /><span className="h-2.5 w-2.5 rounded-full bg-[#C9A86A]" /><span className="h-2.5 w-2.5 rounded-full bg-[#8FA58C]" /></div>
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#F6D8DF]">{label}</span>
        </div>
        <div className="relative">{children}</div>
      </div>
      <div className="mx-auto h-4 w-[86%] rounded-b-[28px] border border-[#FAF8F4]/10 bg-[linear-gradient(180deg,rgba(250,248,244,0.2),rgba(250,248,244,0.04))]" />
    </div>
  );
}

function DocuMindMockup() {
  return (
    <Frame label="Document AI">
      <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl bg-[#FAF8F4]/8 p-3">
          <p className="text-xs font-bold text-[#FAF8F4]">Document Library</p>
          {["policy.txt", "handbook.pdf", "guide.md"].map((doc, i) => (
            <div key={doc} className="mt-3 rounded-xl border border-[#FAF8F4]/10 bg-[#FAF8F4]/7 p-3 text-xs text-[#FAF8F4]">
              <div className="flex justify-between"><span>{doc}</span><span>{i === 0 ? "Indexed" : "Ready"}</span></div>
              <div className="mt-2 h-1.5 rounded-full bg-[#3A3142]"><div className="h-full rounded-full bg-[#C9A86A]" style={{ width: `${86 - i * 16}%` }} /></div>
            </div>
          ))}
          <div className="mt-3 rounded-xl border border-dashed border-[#C9A86A]/35 p-4 text-center text-xs text-[#FAF8F4]">Upload panel</div>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl bg-[#FAF8F4]/8 p-3">
            <div className="rounded-full bg-[#17151C]/80 px-4 py-3 text-xs text-[#D2CBD7]">Ask about billing validation workflows</div>
          </div>
          <div className="rounded-2xl border border-[#C58E9D]/24 bg-[#C58E9D]/12 p-4">
            <p className="text-sm font-bold text-[#FAF8F4]">AI answer with source references</p>
            <div className="mt-3 space-y-2"><div className="mock-line w-full" /><div className="mock-line w-4/5 opacity-60" /></div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs text-[#FAF8F4]">
            <div className="rounded-xl bg-[#FAF8F4]/7 p-3">Source A · section 2</div>
            <div className="rounded-xl bg-[#FAF8F4]/7 p-3">Source B · section 4</div>
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
        <Panel title="Upcoming appointment" value="Primary care · 10:30 AM" />
        <Panel title="Recent test results" value="3 new results" accent />
        <Panel title="Medications" value="Active list reviewed" />
        <Panel title="Billing summary" value="$84.20 balance" />
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl bg-[#FAF8F4]/7 p-4">
          <p className="text-sm font-bold text-[#FAF8F4]">Provider messages</p>
          <div className="mt-3 space-y-2"><div className="mock-line w-5/6" /><div className="mock-line w-2/3 opacity-60" /></div>
        </div>
        <div className="rounded-2xl border border-[#C58E9D]/24 bg-[#C58E9D]/12 p-4">
          <p className="text-sm font-bold text-[#F6D8DF]">AI navigation</p>
          <p className="mt-3 text-xs text-[#D2CBD7]">Guided response flows for appointments, billing, medications, and results.</p>
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
      <div className="mt-4 rounded-2xl bg-[#FAF8F4]/7 p-4">
        <div className="mb-4 flex items-center justify-between text-xs text-[#D2CBD7]"><span>Fairness comparison</span><span>Before / After</span></div>
        {[
          ["Bias before mitigation", "72%"],
          ["Bias after mitigation", "88%"],
          ["Accuracy maintained", "82%"],
        ].map(([label, width], index) => (
          <div key={label} className="mb-4">
            <div className="mb-2 flex justify-between text-xs text-[#D2CBD7]"><span>{label}</span><span>{width}</span></div>
              <div className="h-2 rounded-full bg-[#3A3142]"><div className={`h-full rounded-full ${index === 0 ? "bg-[#8B5FBF]" : "bg-[#C9A86A]"}`} style={{ width }} /></div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Panel({ title, value, accent }: { title: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border p-4 ${accent ? "border-[#C58E9D]/24 bg-[#C58E9D]/12" : "border-[#FAF8F4]/10 bg-[#FAF8F4]/7"}`}>
      <p className="text-xs text-[#D2CBD7]">{title}</p>
      <p className="mt-2 font-display text-lg font-bold text-[#FAF8F4]">{value}</p>
    </div>
  );
}
