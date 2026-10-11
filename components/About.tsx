"use client";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useRef } from "react";
import Label from "./Label";
import Reveal from "./Reveal";
import { aboutCopy, platforms, profile } from "@/lib/data";

function Word({ w, range, p }: { w: string; range: [number, number]; p: MotionValue<number> }) {
  const opacity = useTransform(p, range, [0.14, 1]);
  return <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">{w}</motion.span>;
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const words = aboutCopy[0].split(" ");

  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal><Label>About</Label></Reveal>

        <h2 className="mt-8 max-w-[900px] font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
          <Reveal>Strategy and execution,</Reveal>
          <Reveal delay={0.1}><span className="serif-i text-accent">in equal measure.</span></Reveal>
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p ref={ref} className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-[2rem]">
              {words.map((w, i) => (
                <Word key={i} w={w} p={scrollYProgress} range={[i / words.length * 0.9, Math.min(1, (i + 1) / words.length * 0.9 + 0.05)]} />
              ))}
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {aboutCopy.slice(1).map((p, i) => (
                <Reveal key={i} delay={0.1 * i}><p className="border-t border-ink/15 pt-5 text-[16.5px] leading-relaxed text-muted">{p}</p></Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} className="flex flex-col gap-5">
            <div className="rounded-3xl bg-paper-2 p-7">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Platforms</div>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p, i) => (
                  <motion.span key={p} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.07, type: "spring", stiffness: 300, damping: 18 }} whileHover={{ y: -3, backgroundColor: "#101114", color: "#f4f1ea" }} className="cursor-default rounded-full border border-ink/20 bg-paper px-4 py-2 text-sm font-medium">
                    {p}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-3xl bg-lime p-6">
              <MapPin size={20} />
              <div><div className="font-display text-lg font-bold leading-tight">{profile.location}</div><div className="text-sm text-ink/70">Pakistan · Gulf · North America</div></div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-paper transition hover:bg-accent">
                Hire Me <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#work" className="flex-1 rounded-full border border-ink/25 px-6 py-4 text-center font-semibold transition hover:bg-ink hover:text-paper">See My Work</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
