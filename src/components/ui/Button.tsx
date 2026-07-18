import { ArrowRight } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

export function ButtonLink({
  children,
  className,
  showArrow,
  variant = "primary",
  ...props
}: HTMLMotionProps<"a"> & {
  children: ReactNode;
  showArrow?: boolean;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.025 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      className={clsx(
        "magnetic relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-bold transition before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition before:duration-300 hover:before:opacity-100",
        variant === "primary" && "bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#F08AB8] text-[#FFF9FF] shadow-[0_0_30px_rgba(217,70,239,0.2)] before:bg-[radial-gradient(circle_at_50%_0%,rgba(255,249,255,0.28),transparent_48%)] hover:shadow-[0_0_44px_rgba(217,70,239,0.28)]",
        variant === "secondary" && "border border-[#FFF9FF]/20 bg-[#130A20]/80 text-[#FFF9FF] backdrop-blur before:bg-[#7C3AED]/18 hover:border-[#C4A7FF]/70 hover:shadow-[0_0_26px_rgba(124,58,237,0.18)]",
        variant === "ghost" && "text-[#FFF9FF] hover:text-[#F08AB8] before:bg-[#F08AB8]/8",
        className,
      )}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /> : null}
    </motion.a>
  );
}
