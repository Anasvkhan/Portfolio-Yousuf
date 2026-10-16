"use client";
import { motion } from "framer-motion";
import { BadgeCheck, BarChart3, Building2, Layers, Megaphone, Search, Sparkles, Target } from "lucide-react";
import Label from "./Label";
import Reveal from "./Reveal";
import { skills, type SkillIcon } from "@/lib/data";

const icons: Record<SkillIcon, typeof Search> = {
  megaphone: Megaphone, search: Search, target: Target, chart: BarChart3,
  sparkles: Sparkles, layers: Layers, badge: BadgeCheck, building: Building2,
};

// bento layout: span + colour per card
const style = [
  "lg:col-span-2 bg-ink text-paper",
  "bg-lime",
  "bg-paper-2",
  "bg-accent text-white",
  "bg-paper-2",
  "lg:col-span-2 bg-ink text-paper",
  "lg:col-span-2 bg-lime",
  "lg:col-span-2 bg-paper-2",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-paper-2/50 py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal><Label>Skills</Label></Reveal>
        <h2 className="mb-16 mt-8 font-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
          <Reveal>What I bring to</Reveal>
          <Reveal delay={0.1}><span className="serif-i text-accent">an ad account</span></Reveal>
        </h2>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={{ show: { transition: { staggerChildren: 0.07 } } }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <motion.div key={s.title} variants={{ hidden: { opacity: 0, y: 40, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } } }} whileHover={{ y: -6, rotate: i % 2 ? 0.6 : -0.6 }} className={`group flex min-h-[220px] flex-col justify-between rounded-3xl p-7 ${style[i]}`}>
                <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="grid h-12 w-12 place-items-center rounded-full border border-current/25"><Icon size={22} /></motion.div>
                <div>
                  <h3 className="mt-8 font-display text-2xl font-bold leading-tight tracking-tight">{s.title}</h3>
                  <p className="mt-2 max-w-[460px] text-[15px] leading-relaxed opacity-70">{s.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
