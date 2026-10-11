"use client";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [text, setText] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setText(value.toFixed(decimals)); return; }
    const c = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setText(v.toFixed(decimals)),
    });
    return () => c.stop();
  }, [inView, value, decimals, reduce]);

  return <span ref={ref}>{text}{suffix}</span>;
}
