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
        variant === "primary" && "bg-gradient-to-r from-[#6E426F] via-[#8A4F62] to-[#C9A86A] text-white shadow-lg shadow-[#6E426F]/25 hover:brightness-110",
        variant === "secondary" && "border border-white/20 bg-white/10 text-white backdrop-blur hover:border-[#C9A86A]/70",
        variant === "ghost" && "text-white hover:text-[#F6D8DF]",
        className,
      )}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /> : null}
    </motion.a>
  );
}
