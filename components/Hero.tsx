"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, TrendingUp } from "lucide-react";
import Counter from "./Counter";
import Headshot from "./Headshot";
import Label from "./Label";
import { heroStats, profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const bars = [28, 40, 34, 52, 46, 66, 60, 82, 100];

export default function Hero() {
  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 800], [0, 160]);
  const archY = useTransform(scrollY, [0, 800], [0, -50]);
  const cardY = useTransform(scrollY, [0, 800], [0, -110]);

  return (
    <section className="noise relative overflow-hidden pb-10 pt-36 sm:pt-40">
      <motion.div style={{ y: blobY }} className="pointer-events-none absolute -right-40 -top-24 h-[560px] w-[560px] rounded-full bg-accent/25 blur-[110px]" />
      <motion.div style={{ y: blobY }} className="pointer-events-none absolute -left-40 top-[40%] h-[420px] w-[420px] rounded-full bg-lime/60 blur-[120px]" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
              <Label>Available for new campaigns</Label>
            </motion.div>

            <h1 className="mt-7 font-display text-[clamp(3.2rem,9.2vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span className="block" initial={{ y: "115%", rotate: 3 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: 0.4, ease }}>
                  Syed Yousuf
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.12em]">
                <motion.span className="serif-i block text-accent" initial={{ y: "115%", rotate: 3 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: 0.52, ease }}>
                  Hussain
                </motion.span>
              </span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8, ease }} className="mt-8 max-w-[560px] text-lg leading-relaxed text-muted sm:text-xl">
              <span className="font-semibold text-ink">Digital Marketing Specialist — Meta Ads &amp; PPC.</span> I plan and run performance-driven advertising campaigns across Meta and
              Google Ads — turning ad budgets into targeted traffic, qualified leads, and measurable conversions.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8, ease }} className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-paper transition hover:bg-accent">
                Start a Project <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full border border-ink/25 px-8 py-4 font-semibold transition hover:border-ink hover:bg-ink hover:text-paper">
                View Case Studies <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* arch portrait + dashboard card */}
          <motion.div style={{ y: archY }} className="relative mx-auto w-full max-w-[400px]">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease }} className="relative">
              <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[2rem] border border-ink/15" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.6rem] bg-ink">
                <Headshot className="h-full w-full" />
              </div>

              {/* rotating badge */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 22, ease: "linear", repeat: Infinity }} className="absolute -left-4 top-12 grid h-28 w-28 place-items-center rounded-full bg-lime shadow-lg sm:-left-8 sm:h-32 sm:w-32 xl:-left-14">
                <svg viewBox="0 0 120 120" className="h-full w-full">
                  <defs><path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
                  <text fontSize="10.5" fontFamily="var(--font-jetbrains)" letterSpacing="2.4" fill="#0a1b4d" fontWeight="600">
                    <textPath href="#circ">META ADS • GOOGLE ADS • PPC • GROWTH •</textPath>
                  </text>
                </svg>
              </motion.div>
              <div className="pointer-events-none absolute -left-4 top-12 grid h-28 w-28 place-items-center sm:-left-8 sm:h-32 sm:w-32 xl:-left-14">
                <span className="serif-i text-3xl">SY</span>
              </div>
            </motion.div>

            <motion.div style={{ y: cardY }} className="absolute -bottom-8 -right-3 w-[240px] sm:-right-4 sm:w-[270px] xl:-right-6">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.3, ease }} className="rounded-2xl border border-ink/10 bg-paper p-4 shadow-[0_24px_60px_rgba(16,17,20,0.18)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Gilani Traders · Google Ads</span>
                  <TrendingUp size={14} className="text-accent" />
                </div>
                <div className="mt-1 flex items-end gap-2">
                  <span className="font-display text-4xl font-extrabold tracking-tight">3.93x</span>
                  <span className="pb-1.5 text-xs font-medium text-muted">ROAS</span>
                </div>
                <div className="mt-3 flex h-14 items-end gap-1.5">
                  {bars.map((h, i) => (
                    <motion.span key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.6 + i * 0.07, duration: 0.7, ease }} style={{ height: `${h}%` }} className={`flex-1 origin-bottom rounded-sm ${i === bars.length - 1 ? "bg-accent" : "bg-ink/80"}`} />
                  ))}
                </div>
                <div className="mt-2.5 flex justify-between font-mono text-[10px] text-muted"><span>Rs 7.55M spend</span><span>Rs 29.7M return</span></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.9, ease }}
          className="mt-28 grid grid-cols-2 overflow-hidden rounded-3xl bg-ink text-paper lg:grid-cols-4"
        >
          {heroStats.map((s, i) => (
            <div key={s.label} className={`p-6 sm:p-8 ${i % 2 ? "border-l border-paper/10" : ""} ${i > 1 ? "border-t border-paper/10 lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-paper/10" : ""}`}>
              <div className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-paper/55">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
