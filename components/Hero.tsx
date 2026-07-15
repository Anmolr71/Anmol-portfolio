"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center py-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-5 font-mono text-accent text-sm md:text-base"
      >
        Hello, I&apos;m
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-display text-5xl font-bold leading-[1.05] text-slate-lightest sm:text-6xl md:text-7xl"
      >
        Anmol Rathore.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-2 font-display text-3xl font-semibold leading-tight text-slate-light sm:text-4xl md:text-5xl"
      >
        Professional Data Analyst.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 max-w-xl text-base leading-relaxed text-slate md:text-lg"
      >
        Turning complex data into meaningful insights that drive smarter
        business decisions — through clean dashboards, precise SQL, and
        stories the numbers actually tell.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-11 flex flex-wrap items-center gap-5"
      >
        <MagneticButton
          href="#projects"
          className="border border-accent bg-accent/10 text-accent hover:bg-accent/20"
        >
          View Projects
        </MagneticButton>
        <MagneticButton
          href="/resume.pdf"
          className="border border-slate/30 text-slate-light hover:border-slate-lightest/50 hover:text-slate-lightest"
        >
          Download Resume
        </MagneticButton>
      </motion.div>
    </section>
  );
}
