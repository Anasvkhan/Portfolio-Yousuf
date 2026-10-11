"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Label from "./Label";
import Reveal from "./Reveal";
import { marqueeBrands, profile } from "@/lib/data";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

function Magnetic({ children }: { children: React.ReactNode }) {
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const links = [
    { href: profile.phoneHref, label: profile.phone, icon: <Phone size={20} /> },
    { href: `mailto:${profile.email}`, label: profile.email, icon: <Mail size={20} /> },
    { href: profile.linkedin, label: profile.linkedinLabel, icon: <LinkedinIcon />, external: true },
  ];
  const loop = [...marqueeBrands, ...marqueeBrands];

  return (
    <section id="contact" className="relative overflow-hidden bg-ink pt-28 text-paper sm:pt-36">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/30 blur-[140px]" />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal><Label light>Contact</Label></Reveal>
        <h2 className="mt-8 font-display text-[clamp(2.8rem,8.5vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
          <Reveal>Let&apos;s build your</Reveal>
          <Reveal delay={0.1}><span className="serif-i text-accent">next campaign.</span></Reveal>
        </h2>

        <div className="mt-14 grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <Reveal delay={0.15}>
            <p className="max-w-[560px] text-lg leading-relaxed text-paper/65">
              I&apos;m your go-to person for result-driven digital marketing and performance-focused ad strategy. Based in Karachi, working with brands across
              Pakistan, the Gulf, and North America. Reach out any time — I usually reply within a day.
            </p>
          </Reveal>
          <Magnetic>
            <a href={`mailto:${profile.email}`} className="grid h-40 w-40 place-items-center rounded-full bg-accent text-center font-display text-lg font-bold text-ink transition-colors hover:bg-lime sm:h-48 sm:w-48">
              <span className="flex flex-col items-center gap-1">Contact Me <ArrowUpRight size={26} /></span>
            </a>
          </Magnetic>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 break-all rounded-2xl border border-paper/15 px-6 py-5 font-mono text-sm transition-colors hover:border-lime hover:bg-paper/5"
            >
              <span className="shrink-0 text-lime">{l.icon}</span>
              {l.label}
            </motion.a>
          ))}
        </div>
      </div>

      {/* outlined brand ticker */}
      <div className="relative mt-24 overflow-hidden border-t border-paper/10 py-8" aria-hidden>
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 45, ease: "linear", repeat: Infinity }} className="flex w-max whitespace-nowrap">
          {loop.map((b, i) => (
            <span key={i} className="flex items-center text-paper/35">
              <span className="outline-text font-display text-5xl font-extrabold uppercase tracking-tight sm:text-7xl">{b}</span>
              <span className="mx-8 text-3xl text-accent">✺</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
