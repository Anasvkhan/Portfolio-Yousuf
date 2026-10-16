"use client";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useRef } from "react";
import { platforms } from "@/lib/data";

const words = [...platforms, "Performance Marketing", "Lead Generation", "ROAS"];

/** Band whose speed and direction react to scroll velocity. */
export default function Marquee() {
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [-2000, 0, 2000], [-5, 0, 5], { clamp: false });
  const dir = useRef(1);
  const x = useTransform(base, (v) => `${-(((v % 50) + 50) % 50)}%`);

  useAnimationFrame((_, delta) => {
    let move = dir.current * 1.6 * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1; else if (f > 0) dir.current = 1;
    move += dir.current * Math.abs(f) * (delta / 1000) * 3;
    base.set(base.get() + move);
  });

  const row = [...words, ...words];
  return (
    <div aria-hidden className="relative z-10 -my-1 rotate-[-1.5deg] overflow-hidden bg-accent py-5 text-paper shadow-[0_10px_40px_rgba(37,99,235,0.3)]">
      <motion.div style={{ x }} className="flex w-max whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <span key={i} className="flex items-center font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
                <span className={i % 2 ? "serif-i normal-case" : ""}>{w}</span>
                <span className="mx-6 text-2xl text-ink sm:mx-9">✺</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
