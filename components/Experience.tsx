import RevealOnScroll from "./RevealOnScroll";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 scroll-mt-20">
      <RevealOnScroll>
        <h2 className="section-heading">
          <span className="num"></span> Experience
        </h2>
      </RevealOnScroll>

      <div className="relative ml-3 border-l border-navy-lightest/70 pl-8 sm:ml-6 sm:pl-10">
        {experience.map((job, i) => (
          <RevealOnScroll key={job.role + job.period} delay={i * 0.1}>
            <div className="relative pb-14 last:pb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(100,255,218,0.15)] sm:-left-[calc(2.5rem+5px)]" />
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {job.period}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-slate-lightest">
                {job.role}
                <span className="text-slate"> · {job.company}</span>
              </h3>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 text-sm leading-relaxed text-slate before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent/70"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
