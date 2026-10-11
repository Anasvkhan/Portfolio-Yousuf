"use client";
import { motion } from "framer-motion";
import Counter from "./Counter";
import Label from "./Label";
import Reveal from "./Reveal";
import { achievements } from "@/lib/data";

const [featured, ...rest] = achievements;

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-ink py-28 text-paper sm:py-36">
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[130px]" />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal><Label light>Achievements</Label></Reveal>
        <h2 className="mb-16 mt-8 font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
          <Reveal>Results I&apos;m</Reveal>
          <Reveal delay={0.1}><span className="serif-i text-lime">proud of</span></Reveal>
        </h2>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={{ show: { transition: { staggerChildren: 0.09 } } }} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="relative overflow-hidden rounded-3xl bg-accent p-8 text-ink sm:p-10 md:col-span-2">
            <div className="font-display text-[clamp(4rem,11vw,8.5rem)] font-extrabold leading-none tracking-[-0.05em]">
              <Counter value={3.93} decimals={2} suffix="x" />
              <span className="serif-i ml-3 text-[0.4em] tracking-normal">ROAS</span>
            </div>
            <div className="mt-6 font-display text-xl font-bold">{featured.label}</div>
            <div className="mt-1 max-w-[520px] text-ink/75">{featured.ctx}</div>
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full border-[28px] border-ink/10" />
          </motion.div>

          {rest.map((a, i) => (
            <motion.div
              key={a.big}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              whileHover={{ y: -6, backgroundColor: "#d4f56a", color: "#101114" }}
              className={`rounded-3xl border border-paper/12 bg-ink-2 p-7 transition-colors ${i === 0 ? "" : ""}`}
            >
              <div className="font-display text-4xl font-extrabold tracking-tight sm:text-[2.6rem]">{a.big}</div>
              <div className="mt-3 font-semibold">{a.label}</div>
              <div className="mt-1.5 text-sm opacity-60">{a.ctx}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
