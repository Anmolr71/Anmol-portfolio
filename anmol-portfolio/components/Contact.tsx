"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import MagneticButton from "./MagneticButton";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 scroll-mt-20 flex flex-col items-center text-center"
    >
      <RevealOnScroll>
        <p className="font-mono text-accent">07. What&apos;s Next?</p>
        <h2 className="mt-4 font-display text-3xl font-bold text-slate-lightest sm:text-4xl">
          Let&apos;s talk data.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-slate">
          I&apos;m currently open to Data Analyst roles and freelance
          analytics work. Send a message and I&apos;ll get back to you
          within a day or two.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-12 w-full max-w-lg">
        {status === "sent" ? (
          <p className="rounded-lg border border-accent/30 bg-accent/5 px-6 py-8 font-mono text-sm text-accent">
            Message sent — thank you. I&apos;ll reply soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-slate-light"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-navy-lightest bg-navy-light/60 px-4 py-3 text-slate-lightest outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-slate-light"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-navy-lightest bg-navy-light/60 px-4 py-3 text-slate-lightest outline-none transition-colors focus:border-accent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs uppercase tracking-widest text-slate-light"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-md border border-navy-lightest bg-navy-light/60 px-4 py-3 text-slate-lightest outline-none transition-colors focus:border-accent"
                placeholder="What are you working on?"
              />
            </div>

            {status === "error" && (
              <p className="font-mono text-xs text-red-400">
                Something went wrong sending that. Please try again, or email
                me directly.
              </p>
            )}

            <div className="flex justify-center pt-2">
              <MagneticButton
                as="button"
                type="submit"
                className="border border-accent bg-accent/10 px-8 text-accent hover:bg-accent/20"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </MagneticButton>
            </div>
          </form>
        )}
      </RevealOnScroll>

      <p className="mt-24 font-mono text-xs text-slate">
        Designed &amp; built by Anmol Rathore.
      </p>
    </section>
  );
}