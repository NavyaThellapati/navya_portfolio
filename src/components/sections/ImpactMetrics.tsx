import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  return (
    <section className="relative z-10 bg-[#17151C] pb-10">
      <div className="section-shell grid grid-cols-2 gap-3 overflow-hidden rounded-[30px] border border-white/12 bg-[#211C29] p-3 shadow-2xl shadow-[#17151C]/40 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="rounded-[22px] bg-[#2A2233] p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <p className="font-display text-4xl font-bold text-[#FAF8F4]"><CountUp value={metric.value} suffix={metric.suffix} /></p>
            <p className="mt-2 text-sm font-semibold text-[#D2CBD7]">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
