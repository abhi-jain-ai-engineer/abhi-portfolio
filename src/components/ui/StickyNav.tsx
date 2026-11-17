"use client";

import { useEffect, useState } from "react";
import { resume } from "@/content/resume";

const LINKS = [
  { href: "#scholars-hall", label: "About" },
  { href: "#conjuring-circle", label: "Skills" },
  { href: "#athenaeum", label: "Education" },
  { href: "#alchemists-workshop", label: "Projects" },
  { href: "#hall-of-merit", label: "Experience" },
];

/**
 * Appears once the viewer has scrolled past The Threshold — checks a sentinel
 * placed right after it on every scroll tick. A plain scroll listener (rather
 * than IntersectionObserver) because the sentinel is a zero-height marker,
 * and a zero-area target's intersection ratio is unreliable to observe.
 */
export function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("nav-trigger");
    if (!sentinel) return;

    let ticking = false;
    const check = () => {
      setVisible(sentinel.getBoundingClientRect().top < 0);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[4vw] py-4 backdrop-blur-md transition-all duration-400 ${
        visible ? "opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
      }`}
      style={{ background: "color-mix(in srgb, var(--bg) 82%, transparent)" }}
    >
      <span className="text-xs uppercase tracking-[0.4em] text-gold">{resume.contact.name}</span>
      <div className="hidden gap-8 sm:flex">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-xs uppercase tracking-[0.18em] text-text-dim transition hover:text-text"
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="#couriers-flight"
        className="rounded-full border border-gold px-5 py-2 text-xs uppercase tracking-[0.18em] text-gold-bright"
      >
        Contact
      </a>
    </nav>
  );
}
