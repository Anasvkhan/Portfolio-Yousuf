"use client";
import { useEffect, useRef, useState } from "react";

/** Shows /headshot.jpg from /public; falls back to a monogram if the file isn't there yet. */
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
      <div className={`grid place-items-center bg-ink ${className}`}>
        <span className="serif-i text-8xl text-paper">SY</span>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src="/headshot.jpg" alt="Portrait of Syed Yousuf Hussain" onError={() => setFailed(true)} className={`object-cover object-top ${className}`} />;
}
