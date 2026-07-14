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
        variant === "primary" && "bg-gradient-to-r from-[#A95F73] via-[#D39AA8] to-[#D8BA82] text-[#241820] shadow-lg shadow-[#130D12]/25 hover:brightness-110",
        variant === "secondary" && "border border-[#FFF9F3]/20 bg-[#30212B]/80 text-[#FFF9F3] backdrop-blur hover:border-[#D8BA82]/70",
        variant === "ghost" && "text-[#FFF9F3] hover:text-[#D39AA8]",
        className,
      )}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /> : null}
    </motion.a>
  );
}
