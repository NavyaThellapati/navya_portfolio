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
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition",
        variant === "primary" && "bg-gradient-to-r from-[#D946EF] via-[#F08AB8] to-[#C4A7FF] text-[#090611] shadow-lg shadow-[#090611]/25 hover:brightness-110",
        variant === "secondary" && "border border-[#FFF9FF]/20 bg-[#130A20]/80 text-[#FFF9FF] backdrop-blur hover:border-[#C4A7FF]/70",
        variant === "ghost" && "text-[#FFF9FF] hover:text-[#F08AB8]",
        className,
      )}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /> : null}
    </motion.a>
  );
}
