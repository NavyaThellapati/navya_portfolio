import { AnimatePresence, motion, useReducedMotion, useSpring, useTransform, useMotionValue } from "framer-motion";
import type { ReactNode } from "react";
import { Activity, Bell, Brain, FileText, HeartPulse, Search, ShieldCheck, Sparkles } from "lucide-react";
import type { ProjectSlug } from "../../types/portfolio";

export function ProjectMockup({ slug, compact = false }: { slug: ProjectSlug; compact?: boolean }) {
  if (slug === "mychart") return <HealthcareMockup compact={compact} />;
  if (slug === "responsible-ai") return <ResponsibleAIMockup compact={compact} />;
  return <DocuMindMockup compact={compact} />;
}

function LiveFrame({ children, label, icon, compact = false }: { children: ReactNode; label: string; icon: ReactNode; compact?: boolean }) {
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  return (
    <motion.div
      className={`relative ${compact ? "text-[0.82rem]" : ""}`}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1100 }}
      onMouseMove={(event) => {
        if (reduce || window.innerWidth < 900) return;
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div className="absolute inset-x-10 -bottom-7 h-14 rounded-full bg-[#D946EF]/24 blur-3xl" />
      <div className={`premium-card relative overflow-hidden rounded-[28px] p-4 ${compact ? "min-h-[310px]" : "min-h-[500px]"}`}>
        <motion.div
          className="absolute inset-0 opacity-70"
          animate={reduce ? undefined : { backgroundPosition: ["0% 40%", "100% 60%", "0% 40%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 14%, rgba(240,138,184,0.18), transparent 30%), radial-gradient(circle at 86% 20%, rgba(124,58,237,0.2), transparent 28%), linear-gradient(115deg, transparent, rgba(196,167,255,0.04), transparent)",
            backgroundSize: "140% 140%",
          }}
        />
        <div className="relative mb-4 flex items-center justify-between border-b border-[#FFF9FF]/10 pb-3">
          <div className="flex items-center gap-3">
            <motion.span
              className="grid h-9 w-9 place-items-center rounded-2xl border border-[#F08AB8]/28 bg-[#F08AB8]/12 text-[#F08AB8]"
              animate={reduce ? undefined : { boxShadow: ["0 0 0 rgba(217,70,239,0)", "0 0 28px rgba(217,70,239,0.28)", "0 0 0 rgba(217,70,239,0)"] }}
              transition={{ duration: 2.8, repeat: Infinity }}
            >
              {icon}
            </motion.span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#C4A7FF]">{label}</p>
              <p className="text-[11px] font-semibold text-[#CFC3D8]">live system preview</p>
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F08AB8]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#C4A7FF]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#D946EF]" />
          </div>
        </div>
        <div className="relative">{children}</div>
      </div>
    </motion.div>
  );
}

function DocuMindMockup({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const docs = ["claims_policy.pdf", "billing_rules.md", "validation_log.csv"];

  return (
    <LiveFrame label="DocuMind AI" icon={<Brain className="h-4 w-4" />} compact={compact}>
      <div className={`grid gap-4 ${compact ? "" : "lg:grid-cols-[0.78fr_1.22fr]"}`}>
        <div className="space-y-3">
          <div className="rounded-3xl border border-[#FFF9FF]/10 bg-[#090611]/42 p-4">
            <div className="mb-3 flex items-center justify-between text-xs font-bold text-[#CFC3D8]">
              <span>Auto-ingest queue</span>
              <motion.span animate={reduce ? undefined : { opacity: [0.45, 1, 0.45] }} transition={{ duration: 1.4, repeat: Infinity }}>syncing</motion.span>
            </div>
            {docs.map((doc, index) => (
              <motion.div
                key={doc}
                className="mb-3 rounded-2xl border border-[#FFF9FF]/10 bg-[#FFF9FF]/6 p-3"
                initial={reduce ? false : { opacity: 0, x: -18 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ delay: index * 0.18 }}
              >
                <div className="flex items-center justify-between gap-3 text-xs text-[#FFF9FF]">
                  <span className="inline-flex items-center gap-2"><FileText className="h-3.5 w-3.5 text-[#F08AB8]" />{doc}</span>
                  <span>{index === 2 ? "Parsing" : "Indexed"}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#2A1450]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#F08AB8]"
                    initial={{ width: "18%" }}
                    animate={reduce ? undefined : { width: [`${24 + index * 12}%`, `${92 - index * 10}%`, `${48 + index * 9}%`] }}
                    transition={{ duration: 4.2, delay: index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="rounded-3xl border border-dashed border-[#C4A7FF]/35 bg-[#7C3AED]/10 p-4 text-center text-xs font-bold text-[#FFF9FF]"
            animate={reduce ? undefined : { y: [0, -5, 0], borderColor: ["rgba(196,167,255,0.24)", "rgba(240,138,184,0.55)", "rgba(196,167,255,0.24)"] }}
            transition={{ duration: 3.4, repeat: Infinity }}
          >
            Drop zone listening for new documents
          </motion.div>
          <motion.pre
            className="overflow-hidden rounded-3xl border border-[#FFF9FF]/10 bg-[#120818]/70 p-4 text-left font-mono text-[10px] leading-5 text-[#CFC3D8]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <motion.code
              initial={{ opacity: 0.45 }}
              animate={reduce ? undefined : { opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              {`router.post("/ask")\n  .retrieve(top_k=4)\n  .answer(with_sources=True)`}
            </motion.code>
          </motion.pre>
        </div>

        <div className={`space-y-3 ${compact ? "hidden sm:block lg:hidden xl:block" : ""}`}>
          <div className="rounded-3xl border border-[#FFF9FF]/10 bg-[#FFF9FF]/7 p-3">
            <div className="flex items-center gap-2 rounded-full bg-[#090611]/76 px-4 py-3 text-xs text-[#CFC3D8]">
              <Search className="h-4 w-4 text-[#F08AB8]" />
              <TypingLine text="Which validation rule blocks unsupported billing records?" />
            </div>
          </div>
          <div className="rounded-3xl border border-[#F08AB8]/24 bg-[#F08AB8]/10 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-bold text-[#FFF9FF]">Grounded AI answer</p>
              <ThinkingDots />
            </div>
            <div className="space-y-2">
              {[92, 74, 58].map((width, index) => (
                <motion.div
                  key={width}
                  className="h-2 rounded-full bg-gradient-to-r from-[#F08AB8] to-[#C4A7FF]"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: `${width}%`, opacity: index === 0 ? 1 : 0.58 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.8, delay: 0.35 + index * 0.22 }}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs text-[#FFF9FF]">
            {["billing_rules.md · L42", "claims_policy.pdf · p.8"].map((source, index) => (
              <motion.div
                key={source}
                className="rounded-2xl border border-[#FFF9FF]/10 bg-[#FFF9FF]/7 p-3"
                initial={reduce ? false : { opacity: 0, y: 14, scale: 0.96 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ delay: 0.85 + index * 0.18 }}
              >
                <Sparkles className="mb-2 h-4 w-4 text-[#C4A7FF]" />
                {source}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </LiveFrame>
  );
}

function HealthcareMockup({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const cards = [
    ["Upcoming appointment", "Primary care · 10:30 AM", "Confirmed"],
    ["Lab results", "3 new results", "Ready"],
    ["Medication refill", "2 pending", "Review"],
    ["Billing summary", "$84.20 balance", "Paid soon"],
  ];

  return (
    <LiveFrame label="MyChart Portal" icon={<HeartPulse className="h-4 w-4" />} compact={compact}>
      <div className="grid gap-4 lg:grid-cols-[1fr_0.88fr]">
        <div className="space-y-3">
          <AnimatePresence>
            {cards.map(([title, value, status], index) => (
              <motion.div
                key={title}
                className="rounded-3xl border border-[#FFF9FF]/10 bg-[#FFF9FF]/7 p-4"
                initial={reduce ? false : { opacity: 0, x: -18, scale: 0.96 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ delay: index * 0.12 }}
                animate={reduce ? undefined : { y: [0, index % 2 ? 3 : -3, 0] }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-[#CFC3D8]">{title}</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#FFF9FF]">{value}</p>
                  </div>
                  <span className="rounded-full border border-[#F08AB8]/22 bg-[#F08AB8]/10 px-2.5 py-1 text-[10px] font-bold text-[#F08AB8]">{status}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className={`space-y-3 ${compact ? "hidden sm:block" : ""}`}>
          <motion.div
            className="rounded-3xl border border-[#F08AB8]/24 bg-[#F08AB8]/10 p-4"
            initial={reduce ? false : { opacity: 0, y: -16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="flex items-center gap-2 text-sm font-bold text-[#FFF9FF]">
              <Bell className="h-4 w-4 text-[#F08AB8]" /> Notification
            </div>
            <motion.p className="mt-3 text-xs leading-5 text-[#CFC3D8]" animate={reduce ? undefined : { opacity: [0.58, 1, 0.58] }} transition={{ duration: 2.6, repeat: Infinity }}>
              New message from care team: appointment prep checklist is ready.
            </motion.p>
          </motion.div>
          <div className="rounded-3xl border border-[#FFF9FF]/10 bg-[#090611]/42 p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold text-[#FFF9FF]">Health stats</p>
              <Activity className="h-4 w-4 text-[#C4A7FF]" />
            </div>
            <div className="flex h-28 items-end gap-3">
              {[42, 70, 54, 86, 62].map((height, index) => (
                <motion.span
                  key={height}
                  className="flex-1 rounded-t-full bg-gradient-to-t from-[#7C3AED] via-[#D946EF] to-[#F08AB8]"
                  initial={{ height: 8 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: false, amount: 0.7 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[#FFF9FF]/10 bg-[#FFF9FF]/7 p-4">
            <p className="text-sm font-bold text-[#FFF9FF]">Secure messages</p>
            <div className="mt-3 space-y-2">
              {["Your refill request was received.", "A care coordinator will follow up."].map((message, index) => (
                <motion.div
                  key={message}
                  className="rounded-2xl bg-[#130A20]/80 px-3 py-2 text-xs text-[#CFC3D8]"
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.7 }}
                  transition={{ delay: 0.45 + index * 0.2 }}
                >
                  {message}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LiveFrame>
  );
}

function ResponsibleAIMockup({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <LiveFrame label="Responsible AI Lab" icon={<ShieldCheck className="h-4 w-4" />} compact={compact}>
      <div className="grid gap-4 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="grid gap-3">
          <MetricTile title="Accuracy" value="85%" delay={0} />
          <MetricTile title="ROC AUC" value="0.90" delay={0.15} />
          <MetricTile title="Records evaluated" value="48,842" delay={0.3} />
        </div>
        <div className={`space-y-4 ${compact ? "hidden sm:block lg:hidden xl:block" : ""}`}>
          <div className="rounded-3xl border border-[#FFF9FF]/10 bg-[#090611]/42 p-4">
            <div className="mb-4 flex items-center justify-between text-xs font-bold text-[#CFC3D8]">
              <span>Fairness drift monitor</span>
              <motion.span animate={reduce ? undefined : { opacity: [0.45, 1, 0.45] }} transition={{ duration: 1.6, repeat: Infinity }}>updating</motion.span>
            </div>
            <div className="flex h-32 items-end gap-3">
              {[54, 76, 48, 88, 67, 92].map((height, index) => (
                <motion.span
                  key={`${height}-${index}`}
                  className="flex-1 rounded-t-2xl bg-gradient-to-t from-[#2A1450] via-[#7C3AED] to-[#F08AB8]"
                  animate={reduce ? undefined : { height: [`${Math.max(18, height - 24)}%`, `${height}%`, `${Math.max(22, height - 12)}%`] }}
                  transition={{ duration: 3.6, delay: index * 0.18, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
          {[
            ["Bias before mitigation", "72%", "rgba(217,70,239,0.92)"],
            ["Bias after mitigation", "38%", "rgba(196,167,255,0.92)"],
            ["Prediction confidence", "82%", "rgba(240,138,184,0.92)"],
          ].map(([label, width, color], index) => (
            <div key={label} className="rounded-3xl border border-[#FFF9FF]/10 bg-[#FFF9FF]/7 p-4">
              <div className="mb-2 flex justify-between text-xs text-[#CFC3D8]"><span>{label}</span><span>{width}</span></div>
              <div className="h-2 overflow-hidden rounded-full bg-[#2A1450]">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: color }}
                  initial={{ width: 0 }}
                  whileInView={{ width }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{ duration: 0.9, delay: index * 0.12 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </LiveFrame>
  );
}

function TypingLine({ text }: { text: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className="inline-block overflow-hidden whitespace-nowrap"
      initial={{ width: reduce ? "auto" : "0%" }}
      whileInView={{ width: "100%" }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: reduce ? 0 : 2.8, ease: "linear" }}
    >
      {text}
    </motion.span>
  );
}

function ThinkingDots() {
  const reduce = useReducedMotion();
  return (
    <span className="flex items-center gap-1">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="h-1.5 w-1.5 rounded-full bg-[#C4A7FF]"
          animate={reduce ? undefined : { y: [0, -4, 0], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 0.9, delay: dot * 0.12, repeat: Infinity }}
        />
      ))}
    </span>
  );
}

function MetricTile({ title, value, delay }: { title: string; value: string; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="rounded-3xl border border-[#F08AB8]/20 bg-[#F08AB8]/10 p-5"
      initial={reduce ? false : { opacity: 0, y: 16, scale: 0.96 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.7 }}
      transition={{ delay }}
    >
      <p className="text-xs font-bold text-[#CFC3D8]">{title}</p>
      <motion.p
        className="mt-2 font-display text-2xl font-extrabold text-[#FFF9FF]"
        animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 2.2, delay, repeat: Infinity }}
      >
        {value}
      </motion.p>
    </motion.div>
  );
}
