"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import Label from "./Label";
import Reveal from "./Reveal";
import { work } from "@/lib/data";

export default function Work() {
  const [open, setOpen] = useState(0);
  return (
    <section id="work" className="bg-paper-2 py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal><Label>Selected Work</Label></Reveal>
            <h2 className="mt-8 font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
              <Reveal>Recent campaigns</Reveal>
              <Reveal delay={0.1}>&amp; <span className="serif-i text-accent">results</span></Reveal>
            </h2>
          </div>
          <Reveal delay={0.2}><p className="max-w-[340px] text-muted">Tap a row to open the numbers. Live and recent accounts across Meta Ads, Google Ads and e-commerce.</p></Reveal>
        </div>

        <div className="border-b border-ink/15">
          {work.map((w, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={w.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: 0.04 * (i % 5) }} className="border-t border-ink/15">
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="group relative flex w-full items-center gap-4 py-6 text-left sm:gap-8 sm:py-8">
                  <motion.span aria-hidden className="absolute inset-0 -mx-4 origin-left rounded-2xl bg-ink sm:-mx-6" initial={false} animate={{ scaleX: isOpen ? 1 : 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} />
                  <span className={`relative w-8 font-mono text-sm transition-colors ${isOpen ? "text-paper/60" : "text-muted"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={`relative flex-1 font-display text-2xl font-bold tracking-tight transition-all duration-300 sm:text-4xl ${isOpen ? "translate-x-2 text-paper" : "group-hover:translate-x-2"}`}>{w.name}</span>
                  <span className={`relative hidden rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider sm:block ${isOpen ? "border-paper/30 text-paper/80" : "border-ink/20 text-ink/70"}`}>{w.tag}</span>
                  <span className={`relative hidden items-center gap-1.5 font-mono text-xs md:flex ${isOpen ? "text-lime" : "text-accent"}`}><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />{w.status}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-full border ${isOpen ? "border-paper/30 text-paper" : "border-ink/25"}`}><Plus size={18} /></motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <div className="mt-2 mb-4 grid grid-cols-3 gap-3 rounded-2xl bg-paper p-5 sm:p-8">
                        <span className="col-span-3 mb-1 font-mono text-[11px] uppercase tracking-wider text-muted sm:hidden">{w.tag} · {w.status}</span>
                        {w.stats.map((s, j) => (
                          <motion.div key={s.l} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + j * 0.08 }}>
                            <div className="font-display text-2xl font-extrabold tracking-tight sm:text-5xl">{s.n}</div>
                            <div className="mt-1 text-xs text-muted sm:text-sm">{s.l}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
