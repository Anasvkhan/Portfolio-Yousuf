"use client";
import { motion } from "framer-motion";
import Label from "./Label";
import Reveal from "./Reveal";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-28 sm:py-36">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal><Label>Process</Label></Reveal>
          <h2 className="mt-8 font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
            <Reveal>How a campaign</Reveal>
            <Reveal delay={0.1}><span className="serif-i text-accent">gets built</span></Reveal>
          </h2>
          <Reveal delay={0.2}><p className="mt-6 max-w-[360px] text-muted">Six steps, from the first KPI to the last optimization — the same loop on every account.</p></Reveal>
        </div>

        <div className="space-y-4">
          {process.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 8 }}
              className={`flex gap-6 rounded-3xl p-7 sm:p-9 ${i % 3 === 0 ? "bg-ink text-paper" : i % 3 === 1 ? "bg-paper-2" : "bg-lime"}`}
            >
              <span className="font-display text-6xl font-extrabold leading-none opacity-25 sm:text-7xl">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 max-w-[520px] leading-relaxed opacity-70">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
