"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 scroll-mt-20">
      <RevealOnScroll>
        <h2 className="section-heading">
          <span className="num"></span> Skills
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <RevealOnScroll key={group.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full rounded-lg border border-navy-lightest/60 bg-navy-light/50 p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="font-display text-lg font-semibold text-slate-lightest">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-navy-lightest bg-navy px-3 py-1 font-mono text-xs text-slate-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
