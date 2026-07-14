import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, Database, Rocket, TrendingUp } from "lucide-react";
import { metrics } from "../../data/portfolioData";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 950;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function ImpactMetrics() {
  const icons = [Rocket, Code2, Database, TrendingUp];

  return (
    <section className="relative z-10 bg-[var(--bg)] pb-8">
      <div className="section-shell grid grid-cols-2 gap-0 overflow-hidden rounded-[18px] border border-[#F08AB8]/28 bg-[#130A20]/70 p-2 shadow-[0_0_44px_rgba(217,70,239,0.12)] backdrop-blur-xl lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="flex items-center gap-4 border-[#FFF9FF]/10 p-4 text-left lg:border-r last:lg:border-r-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F08AB8]/12 text-[#F08AB8] shadow-[0_0_24px_rgba(217,70,239,0.18)]">
              {(() => {
                const Icon = icons[index];
                return <Icon className="h-6 w-6" />;
              })()}
            </span>
            <span>
              <span className="block font-display text-[clamp(1.55rem,3vw,2.1rem)] font-bold text-[#FFF9FF]"><CountUp value={metric.value} suffix={metric.suffix} /></span>
              <span className="mt-1 block text-xs font-semibold text-[#CFC3D8]">{metric.label}</span>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
