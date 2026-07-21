"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FileText, BarChart3 } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 scroll-mt-20">
      <RevealOnScroll>
        <h2 className="section-heading">
          <span className="num"></span> Featured Projects
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.title} delay={(i % 2) * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group flex h-full flex-col rounded-lg border border-navy-lightest/60 bg-navy-light/50 p-6 transition-colors hover:border-accent/40 sm:p-7"
            >
              <div className="mb-5 flex h-40 items-center justify-center rounded-md border border-navy-lightest/60 bg-navy text-navy-lightest transition-colors group-hover:border-accent/30 group-hover:text-accent/40">
                <BarChart3 size={40} strokeWidth={1.25} />
              </div>

              <h3 className="font-display text-xl font-semibold text-slate-lightest transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-5 border-t border-navy-lightest/50 pt-5 text-slate-light">
                <a
                  href={project.github}
                  aria-label={`${project.title} GitHub repository`}
                  className="transition-colors hover:text-accent"
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.demo}
                  aria-label={`${project.title} live demo`}
                  className="transition-colors hover:text-accent"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.caseStudy}
                  className="flex items-center gap-1.5 font-mono text-xs transition-colors hover:text-accent"
                >
                  <FileText size={14} />
                  Case Study
                </a>
              </div>
            </motion.article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
