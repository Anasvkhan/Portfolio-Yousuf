"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Bold from "./Bold";
import Label from "./Label";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  const [idx, setIdx] = useState(0);
  const e = experience[idx];

  return (
    <section id="experience" className="py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal><Label>Experience</Label></Reveal>
        <h2 className="mb-16 mt-8 font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
          <Reveal>Where I&apos;ve built</Reveal>
          <Reveal delay={0.1}><span className="serif-i text-accent">campaigns</span></Reveal>
        </h2>

        <Reveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* tabs */}
          <div role="tablist" aria-label="Companies" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
            {experience.map((x, i) => (
              <button key={x.company} role="tab" aria-selected={i === idx} onMouseEnter={() => setIdx(i)} onFocus={() => setIdx(i)} onClick={() => setIdx(i)} className="relative shrink-0 rounded-2xl px-5 py-4 text-left lg:w-full">
                {i === idx && <motion.span layoutId="exp-tab" className="absolute inset-0 rounded-2xl bg-ink" transition={{ type: "spring", stiffness: 380, damping: 34 }} />}
                <span className={`relative block font-display text-lg font-bold leading-tight transition-colors ${i === idx ? "text-paper" : "text-ink"}`}>{x.company}</span>
                <span className={`relative mt-0.5 block font-mono text-[11px] transition-colors ${i === idx ? "text-paper/60" : "text-muted"}`}>{x.date}</span>
              </button>
            ))}
          </div>

          {/* panel */}
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-paper-2 p-7 sm:p-11">
            <AnimatePresence mode="wait">
              <motion.div key={idx} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-ink px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-paper">{e.date}</span>
                  {e.current && <span className="flex items-center gap-1.5 rounded-full bg-lime px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" />Current</span>}
                </div>
                <h3 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{e.role}</h3>
                <p className="serif-i mt-1 text-2xl text-accent sm:text-3xl">{e.company} · {e.place}</p>
                <ul className="mt-8 space-y-4">
                  {e.points.map((p, j) => (
                    <motion.li key={j} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + j * 0.08 }} className="flex gap-4 text-[16.5px] leading-relaxed text-ink/75">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span><Bold text={p} /></span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
