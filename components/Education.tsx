import RevealOnScroll from "./RevealOnScroll";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 scroll-mt-20">
      <RevealOnScroll>
        <h2 className="section-heading">
          <span className="num">05.</span> Education
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.08}>
        <div className="rounded-lg border border-navy-lightest/60 bg-navy-light/50 p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-slate-lightest">
            {education.degree}
          </h3>
          <p className="mt-1 text-slate-light">{education.field}</p>
          <p className="mt-4 text-sm text-slate">
            {education.school} &middot; Affiliated to {education.affiliation}
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
            {education.period}
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
