"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleX = useSpring(scrollYProgress, springConfig);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan z-[100] origin-left"
      style={{ scaleX }}
    />
  );
}