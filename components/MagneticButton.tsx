"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function MagneticButton({
  children,
  className,
  href,
  as = "a",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  as?: "a" | "button";
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const Comp = as === "a" ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      <Comp
        href={href}
        onClick={onClick}
        className={clsx(
          "inline-flex items-center justify-center rounded-md px-6 py-3 font-mono text-sm transition-colors",
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
