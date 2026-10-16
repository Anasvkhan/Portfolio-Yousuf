"use client";
import { useEffect, useRef, useState } from "react";

/** Cut-out portrait from /public/yousuf.png; falls back to a monogram if the file is missing. */
export default function Headshot({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // the error event can fire before hydration, so also check on mount
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div className={`grid place-items-center ${className}`}>
        <span className="serif-i text-8xl text-accent">SY</span>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src="/yousuf.png" alt="Portrait of Syed Yousuf Hussain" onError={() => setFailed(true)} className={`object-contain object-bottom ${className}`} />;
}
