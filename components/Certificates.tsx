"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { certificates } from "@/lib/data";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-32 scroll-mt-20">
      <RevealOnScroll>
        <h2 className="section-heading">
          <span className="num"></span> Certificates
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {certificates.map((cert, i) => (
          <RevealOnScroll key={cert.title} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(100, 255, 218, 0.4)" }}
              className="flex items-center gap-4 rounded-lg border border-navy-lightest/60 bg-navy-light/50 p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Award size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-slate-lightest">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate">
                  {cert.issuer} &middot; {cert.year}
                </p>
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
