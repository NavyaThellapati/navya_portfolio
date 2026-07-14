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
      className="relative mx-auto aspect-[1.05] w-full max-w-[540px] rounded-[40px] border border-[#FFF9FF]/14 bg-[linear-gradient(145deg,rgba(48,33,43,0.94),rgba(66,45,56,0.52))] p-6 shadow-2xl shadow-[#090611]/34 backdrop-blur-2xl"
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
      <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_25%_18%,rgba(217,70,239,0.2),transparent_32%),radial-gradient(circle_at_78%_32%,rgba(124,58,237,0.18),transparent_34%),radial-gradient(circle_at_50%_92%,rgba(196,167,255,0.13),transparent_32%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-10 top-8 h-20 w-20 rounded-3xl border border-[#FFF9FF]/10 bg-[#FFF9FF]/8"
        animate={reduce ? undefined : { y: [0, -10, 0], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-12 right-12 h-24 w-24 rounded-full border border-[#C4A7FF]/20 bg-[#C4A7FF]/8"
        animate={reduce ? undefined : { y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative h-full">
        <motion.span
          className="absolute left-[66%] top-[18%] z-20 rounded-full border border-[#FFF9FF]/12 bg-[#090611]/70 px-3 py-1 text-[10px] font-bold text-[#CFC3D8]"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          HTTPS Request
        </motion.span>
        <motion.span
          className="absolute left-[54%] top-[55%] z-20 rounded-full border border-[#FFF9FF]/12 bg-[#090611]/70 px-3 py-1 text-[10px] font-bold text-[#CFC3D8]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
        >
          JSON Response
        </motion.span>
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#FFF9FF]/12 bg-[#130A20]/86 p-5 text-center shadow-2xl shadow-[#090611]/20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F08AB8]">Core</p>
          <p className="mt-3 font-display text-2xl font-bold text-[#FFF9FF]">API Layer</p>
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
              stroke="rgba(196,167,255,0.52)"
              strokeWidth="1.4"
              strokeDasharray="7 12"
              animate={reduce ? undefined : { strokeDashoffset: [0, -38] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </svg>
        {!reduce
          ? [
              { x: ["14%", "34%", "48%"], y: ["18%", "30%", "42%"], delay: 0 },
              { x: ["86%", "68%", "53%"], y: ["20%", "32%", "42%"], delay: 0.8 },
              { x: ["48%", "34%", "15%"], y: ["52%", "67%", "83%"], delay: 1.6 },
              { x: ["54%", "70%", "84%"], y: ["52%", "68%", "83%"], delay: 2.4 },
            ].map((particle) => (
              <motion.span
                key={particle.delay}
                className="absolute h-2 w-2 rounded-full bg-[#C4A7FF] shadow-[0_0_18px_rgba(196,167,255,0.75)]"
                style={{ left: particle.x[0], top: particle.y[0] }}
                animate={{ left: particle.x, top: particle.y, opacity: [0, 1, 0] }}
                transition={{ duration: 2.8, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))
          : null}
      </div>
      <div className="absolute inset-x-6 bottom-6 flex flex-wrap justify-center gap-2">
        <motion.div
          className="mr-auto hidden min-w-64 items-center gap-3 rounded-2xl border border-[#FFF9FF]/12 bg-[#090611]/72 px-4 py-3 text-xs text-[#CFC3D8] sm:flex"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.18 }}
        >
          <span className="h-2 w-2 rounded-full bg-[#C4A7FF] shadow-[0_0_12px_rgba(196,167,255,0.85)]" />
          <span><strong className="text-[#FFF9FF]">System Status</strong><br />All services operational</span>
          <motion.span
            className="ml-auto h-6 w-14 rounded-full border-y border-[#C4A7FF]/40"
            animate={reduce ? undefined : { opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </motion.div>
        {labels.map((label, index) => (
          <motion.span
            key={label}
            className="rounded-full border border-[#FFF9FF]/12 bg-[#130A20]/88 px-3 py-1 text-xs font-semibold text-[#FFF9FF] shadow-lg shadow-[#090611]/15"
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
      className={`absolute z-10 w-40 rounded-3xl border border-[#FFF9FF]/18 bg-[#130A20]/94 p-4 shadow-xl shadow-[#090611]/30 backdrop-blur ${className}`}
      initial={{ opacity: 0, scale: 0.82, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
    >
      <span className={`mb-3 block h-1.5 w-8 rounded-full bg-gradient-to-r from-[#F08AB8] to-[#C4A7FF] ${pulse ? "animate-pulse" : ""}`} />
      <p className="text-sm font-bold text-[#FFF9FF]">{title}</p>
      <p className="mt-2 text-xs leading-5 text-[#CFC3D8]">{status}</p>
    </motion.div>
  );
}
