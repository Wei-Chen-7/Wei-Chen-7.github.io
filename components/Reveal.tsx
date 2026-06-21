"use client";

import { useEffect, useRef, useState } from "react";

/* Fade-and-rise a block into view on first scroll. Subtle (one motion,
 * 480ms) and a no-op under prefers-reduced-motion. Falls back to visible
 * if IntersectionObserver is unavailable. */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cls = `reveal ${visible ? "is-visible" : ""} ${className}`.trim();

  return (
    <Tag ref={ref as never} className={cls}>
      {children}
    </Tag>
  );
}
