import RevealOnScroll from "./RevealOnScroll";
import Counter from "./Counter";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 scroll-mt-20">
      <RevealOnScroll>
        <h2 className="section-heading">
          <span className="num"></span> About Me
        </h2>
      </RevealOnScroll>

      <div className="grid gap-12 md:grid-cols-5 md:gap-16">
        <RevealOnScroll className="md:col-span-3" delay={0.05}>
          <div className="space-y-4 text-base leading-relaxed text-slate">
            <p>
              I specialize in transforming raw data into actionable insights
              using <span className="text-slate-lightest">SQL</span>,{" "}
              <span className="text-slate-lightest">Python</span>,{" "}
              <span className="text-slate-lightest">Excel</span>, and{" "}
              <span className="text-slate-lightest">Power BI</span>. My work
              sits at the intersection of clean data engineering and clear
              storytelling — the kind that gets a decision made in a meeting,
              not just admired in a slide.
            </p>
            <p>
              I build interactive dashboards, automate recurring reporting so
              teams stop rebuilding the same spreadsheet every Monday, and dig
              into business performance until the &quot;why&quot; behind a
              number is obvious. Every project I take on starts with a
              business question, not a chart type.
            </p>
            <p>
              Outside of client and portfolio work, I keep sharpening the
              fundamentals — SQL window functions, statistical reasoning, and
              dashboard design that respects the reader&apos;s time.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="md:col-span-2" delay={0.15}>
          <div className="grid grid-cols-2 gap-6 rounded-lg border border-navy-lightest/60 bg-navy-light/40 p-6 sm:p-8">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-xs leading-snug text-slate">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
