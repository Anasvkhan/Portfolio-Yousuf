"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-[100] px-4"
    >
      <nav className="mx-auto flex max-w-[860px] items-center justify-between rounded-full border border-ink/10 bg-paper/80 py-2 pl-6 pr-2 shadow-[0_8px_30px_rgba(16,17,20,0.08)] backdrop-blur-xl">
        <a href="#top" className="whitespace-nowrap font-display text-base font-extrabold tracking-tight sm:text-lg">
          Syed Yousuf Hussain
        </a>

        <ul className="relative hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href} className="relative">
              {active === l.href && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-ink/8" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
              )}
              <a href={l.href} className="relative block px-3 py-2 text-sm font-medium lg:px-4 text-ink/70 transition hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={`mailto:${profile.email}`} className="group hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-accent sm:inline-flex">
            Let&apos;s Talk <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper md:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-[860px] overflow-hidden rounded-3xl border border-ink/10 bg-paper/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
          >
            {navLinks.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)} initial={{ x: -14, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.04 * i }} className="block rounded-2xl px-4 py-3.5 font-display text-xl font-semibold hover:bg-ink/5">
                {l.label}
              </motion.a>
            ))}
            <a href={`mailto:${profile.email}`} className="mt-2 block rounded-2xl bg-accent py-3.5 text-center font-semibold text-white">Let&apos;s Talk</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
