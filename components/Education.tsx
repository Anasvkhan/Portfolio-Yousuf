"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Label from "./Label";
import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="bg-paper-2 py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal><Label>Education</Label></Reveal>
        <h2 className="mb-14 mt-8 font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
          <Reveal>Education &amp;</Reveal>
          <Reveal delay={0.1}><span className="serif-i text-accent">certification</span></Reveal>
        </h2>
        <div className="border-b border-ink/15">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative grid items-center gap-2 overflow-hidden border-t border-ink/15 py-7 sm:grid-cols-[1fr_1.4fr_auto] sm:gap-8"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <h3 className="relative font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-paper sm:pl-4 sm:text-3xl">{e.school}</h3>
              <p className="relative text-muted transition-colors group-hover:text-paper/75">{e.degree}</p>
              <div className="relative flex items-center gap-3 sm:pr-4">
                <span className="font-mono text-xs text-accent transition-colors group-hover:text-sky">{e.when}</span>
                <ArrowUpRight size={18} className="hidden text-paper opacity-0 transition-opacity group-hover:opacity-100 sm:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
