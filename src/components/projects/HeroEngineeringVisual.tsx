import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

const labels = ["Python", "FastAPI", "React", "PostgreSQL", "LLM"];

export function HeroEngineeringVisual() {
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  return (
    <motion.div
      className="relative mx-auto aspect-[1.05] w-full max-w-[620px] rounded-[40px] border border-[#FAF8F4]/14 bg-[linear-gradient(145deg,rgba(250,248,244,0.14),rgba(250,248,244,0.035))] p-6 shadow-2xl shadow-[#17151C]/40 backdrop-blur-2xl"
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
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
      initial={reduce ? false : { opacity: 0, y: 30, scale: 0.96 }}
      animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.25 }}
      aria-label="Animated backend architecture visual with API, database, cloud, and AI service nodes"
    >
      <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_25%_18%,rgba(197,142,157,0.22),transparent_32%),radial-gradient(circle_at_78%_32%,rgba(139,95,191,0.22),transparent_34%),radial-gradient(circle_at_50%_92%,rgba(201,168,106,0.13),transparent_32%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-10 top-8 h-20 w-20 rounded-3xl border border-[#FAF8F4]/10 bg-[#FAF8F4]/8"
        animate={reduce ? undefined : { y: [0, -10, 0], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-12 right-12 h-24 w-24 rounded-full border border-[#C9A86A]/20 bg-[#C9A86A]/8"
        animate={reduce ? undefined : { y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative h-full">
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#FAF8F4]/12 bg-[#FAF8F4]/10 p-5 text-center shadow-2xl shadow-[#17151C]/20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F6D8DF]">Core</p>
          <p className="mt-3 font-display text-2xl font-bold text-[#FAF8F4]">API Layer</p>
        </div>
        {[
          ["left-0 top-8", "React Client", "user workflows"],
          ["right-0 top-12", "FastAPI", "REST endpoints"],
          ["bottom-10 left-4", "PostgreSQL", "validated data"],
          ["bottom-8 right-4", "LLM Service", "grounded answers"],
          ["left-1/2 top-0 -translate-x-1/2", "CI/CD", "repeatable delivery"],
        ].map(([className, title, status], index) => (
          <Node
            key={title}
            className={className}
            title={title}
            status={status}
            pulse={title === "PostgreSQL" || title === "LLM Service"}
            delay={0.45 + index * 0.11}
          />
        ))}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 520" preserveAspectRatio="none" aria-hidden="true">
          {[
            "M 300 200 C 190 150, 150 96, 88 100",
            "M 330 205 C 420 150, 460 110, 535 115",
            "M 292 260 C 190 310, 160 408, 95 430",
            "M 338 260 C 435 312, 460 410, 520 430",
            "M 315 178 C 315 112, 315 86, 315 54",
          ].map((d) => (
            <motion.path
              key={d}
              d={d}
              fill="none"
              stroke="rgba(201,168,106,0.48)"
              strokeWidth="1.4"
              strokeDasharray="7 12"
              animate={reduce ? undefined : { strokeDashoffset: [0, -38] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </svg>
      </div>
      <div className="absolute inset-x-6 bottom-6 flex flex-wrap justify-center gap-2">
        {labels.map((label, index) => (
          <motion.span
            key={label}
            className="rounded-full border border-[#FAF8F4]/12 bg-[#FAF8F4]/10 px-3 py-1 text-xs font-semibold text-[#FAF8F4] shadow-lg shadow-[#6E426F]/15"
            animate={reduce ? undefined : { opacity: [0.58, 1, 0.58] }}
            transition={{ duration: 4.5, delay: index * 0.25, repeat: Infinity }}
          >
            {label}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function Node({
  title,
  status,
  className = "",
  pulse,
  delay,
}: {
  title: string;
  status: string;
  className?: string;
  pulse?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute z-10 w-40 rounded-3xl border border-[#FAF8F4]/18 bg-[#211C29]/92 p-4 shadow-xl shadow-[#17151C]/30 backdrop-blur ${className}`}
      initial={{ opacity: 0, scale: 0.82, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
    >
      <span className={`mb-3 block h-1.5 w-8 rounded-full bg-gradient-to-r from-[#C58E9D] to-[#C9A86A] ${pulse ? "animate-pulse" : ""}`} />
      <p className="text-sm font-bold text-[#FAF8F4]">{title}</p>
      <p className="mt-2 text-xs leading-5 text-[#D2CBD7]">{status}</p>
    </motion.div>
  );
}
