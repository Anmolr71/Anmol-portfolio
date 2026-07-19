"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { nav, socials } from "@/lib/data";

const iconFor = (label: string) => {
  if (label === "GitHub") return <Github size={19} />;
  if (label === "LinkedIn") return <Linkedin size={19} />;
  return <Mail size={19} />;
};

export default function Sidebar() {
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[min(38vw,420px)] flex flex-col justify-between px-8 py-14 md:px-16 md:py-20 lg:py-24 z-30">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#hero"
            className="font-display text-3xl font-semibold text-slate-lightest tracking-tight"
          >
            Anmol Rathore
          </a>
          <p className="mt-3 font-display text-lg font-medium text-slate-lightest/90">
            Data Analyst
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
            I turn raw, messy data into dashboards and decisions — using SQL,
            Python, Excel, and Power BI.
          </p>
        </motion.div>

        <nav className="mt-14 hidden lg:block" aria-label="Primary">
          <ul className="space-y-5">
            {nav.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              >
                <a
                  href={item.href}
                  className={`group flex items-center gap-3 font-mono text-xs uppercase tracking-widest transition-colors ${
                    active === item.href
                      ? "text-slate-lightest"
                      : "text-slate hover:text-slate-lightest"
                  }`}
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      active === item.href
                        ? "w-12 bg-accent"
                        : "w-6 bg-slate group-hover:w-12 group-hover:bg-slate-lightest"
                    }`}
                  />
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-14 lg:mt-0">
        <a
          href="/resume.pdf"
          download
          className="mb-8 inline-flex items-center gap-2 rounded-md border border-accent/40 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-accent transition-all hover:bg-accent/10"
        >
          <FileDown size={15} />
          Resume
        </a>
        <ul className="flex items-center gap-5 text-slate">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="transition-colors hover:text-accent"
              >
                {iconFor(s.label)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
