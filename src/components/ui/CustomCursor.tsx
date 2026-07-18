import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.35 });
  const trailX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.7 });
  const trailY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.7 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (reduce) return;

    const onPointerMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const onPointerOver = (event: PointerEvent) => {
      const target = event.target;
      setHovering(target instanceof Element && Boolean(target.closest("a, button, input, textarea, [role='button']")));
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
    };
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <>
      <motion.span
        className="custom-cursor-trail"
        style={{ x: trailX, y: trailY }}
        animate={{ scale: hovering ? 1.28 : 1, opacity: hovering ? 0.68 : 0.48 }}
        aria-hidden="true"
      />
      <motion.span
        className="custom-cursor"
        style={{ x: springX, y: springY }}
        animate={{ scale: hovering ? 1.9 : 1, opacity: hovering ? 0.9 : 0.72 }}
        aria-hidden="true"
      />
    </>
  );
}
