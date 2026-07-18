import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

const floatingLabels = [
  { label: "APIs", className: "left-[12%] top-[30%]", delay: 0.9 },
  { label: "Automation", className: "right-[7%] top-[24%]", delay: 1.05 },
  { label: "Full Stack", className: "left-[7%] bottom-[24%]", delay: 1.2 },
  { label: "AI", className: "right-[16%] bottom-[18%]", delay: 1.35 },
];

const paths = [
  "M 105 275 C 160 140, 320 130, 402 238 S 548 330, 635 200",
  "M 118 354 C 240 286, 296 438, 430 335 S 574 232, 682 310",
  "M 188 160 C 284 270, 386 80, 548 176",
  "M 218 458 C 316 346, 448 494, 592 388",
];

export function HeroEngineeringVisual() {
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 70, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 18 });
  const orbX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const orbY = useTransform(springY, [-0.5, 0.5], [-14, 14]);
  const layerX = useTransform(springX, [-0.5, 0.5], [20, -20]);
  const layerY = useTransform(springY, [-0.5, 0.5], [16, -16]);

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[560px]"
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
      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Abstract animated software systems visual with glowing orb, curved data paths, and floating engineering labels"
    >
      <motion.div
        className="absolute inset-[5%] rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.26),rgba(124,58,237,0.12)_36%,transparent_68%)] blur-2xl"
        style={reduce ? undefined : { x: layerX, y: layerY }}
        animate={reduce ? undefined : { opacity: [0.42, 0.78, 0.42], scale: [0.94, 1.05, 0.94] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 760 620" aria-hidden="true">
        <defs>
          <radialGradient id="heroOrb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF9FF" stopOpacity="0.9" />
            <stop offset="32%" stopColor="#F08AB8" stopOpacity="0.7" />
            <stop offset="62%" stopColor="#D946EF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="heroPath" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#F08AB8" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#C4A7FF" stopOpacity="0.65" />
            <stop offset="1" stopColor="#D946EF" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {paths.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="url(#heroPath)"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeDasharray="1 12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={reduce ? { pathLength: 1, opacity: 0.45 } : { pathLength: 1, opacity: [0.24, 0.62, 0.24], strokeDashoffset: [0, -70] }}
            transition={{ pathLength: { duration: 1.1, delay: 1.05 + index * 0.12 }, opacity: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }, strokeDashoffset: { duration: 10, repeat: Infinity, ease: "linear" } }}
          />
        ))}

        {[0, 1, 2].map((ring) => (
          <motion.ellipse
            key={ring}
            cx="380"
            cy="310"
            rx={128 + ring * 58}
            ry={72 + ring * 34}
            fill="none"
            stroke={ring === 0 ? "rgba(240,138,184,0.24)" : "rgba(196,167,255,0.13)"}
            strokeWidth="1"
            transform={`rotate(${ring * 26} 380 310)`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={reduce ? { opacity: 0.42, scale: 1 } : { opacity: [0.22, 0.54, 0.22], rotate: [ring * 26, ring * 26 + 360], scale: [0.98, 1.02, 0.98] }}
            transition={{ opacity: { duration: 4.8, repeat: Infinity }, rotate: { duration: 42 + ring * 14, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity } }}
            style={{ transformOrigin: "380px 310px" }}
          />
        ))}

        <motion.circle
          cx="380"
          cy="310"
          r="86"
          fill="url(#heroOrb)"
          initial={{ opacity: 0, scale: 0.72 }}
          animate={reduce ? { opacity: 0.95, scale: 1 } : { opacity: [0.76, 1, 0.76], scale: [0.96, 1.06, 0.96] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          style={{ transformOrigin: "380px 310px" }}
        />

        {!reduce
          ? paths.map((d, index) => (
              <motion.circle
                key={`${d}-particle`}
                r={index % 2 ? 3.6 : 2.8}
                fill={index % 2 ? "#F08AB8" : "#C4A7FF"}
                opacity="0.86"
                style={{ offsetPath: `path('${d}')`, offsetRotate: "0deg" }}
                animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 0] }}
                transition={{ duration: 4.8 + index * 0.7, delay: 1.45 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
              />
            ))
          : null}
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFF9FF]/10 bg-[#FFF9FF]/5 backdrop-blur-[2px]"
        style={reduce ? undefined : { x: orbX, y: orbY }}
        animate={reduce ? undefined : { boxShadow: ["0 0 38px rgba(217,70,239,0.18)", "0 0 74px rgba(240,138,184,0.34)", "0 0 38px rgba(217,70,239,0.18)"] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {floatingLabels.map((item) => (
        <motion.span
          key={item.label}
          className={`absolute ${item.className} rounded-full border border-[#FFF9FF]/12 bg-[#130A20]/42 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FFF9FF] shadow-[0_0_24px_rgba(217,70,239,0.14)] backdrop-blur-md`}
          initial={reduce ? false : { opacity: 0, y: 12, scale: 0.94 }}
          animate={reduce ? undefined : { opacity: 1, y: [0, -5, 0], scale: 1 }}
          transition={{ opacity: { duration: 0.45, delay: item.delay }, y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: item.delay }, scale: { duration: 0.45, delay: item.delay } }}
        >
          {item.label}
        </motion.span>
      ))}

      {[0, 1, 2, 3].map((fragment) => (
        <motion.span
          key={fragment}
          className="absolute h-14 w-20 rounded-[18px] border border-[#FFF9FF]/10 bg-[#FFF9FF]/5 backdrop-blur-sm"
          style={{
            left: `${18 + fragment * 18}%`,
            top: `${18 + (fragment % 2) * 48}%`,
            rotate: `${fragment % 2 ? -12 : 10}deg`,
          }}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: [0.12, 0.28, 0.12], y: [0, fragment % 2 ? 10 : -10, 0] }}
          transition={{ duration: 7 + fragment, repeat: Infinity, ease: "easeInOut", delay: 1 + fragment * 0.3 }}
          aria-hidden="true"
        />
      ))}
    </motion.div>
  );
}
