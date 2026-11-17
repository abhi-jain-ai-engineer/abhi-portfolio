"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMotion } from "@/lib/motion-context";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveals every `[data-reveal]` descendant of `containerRef` with a fade +
 * rise as it scrolls into view (non-pinned, `start: "top 75%"` — for the
 * normal-scrolling brand sections, never the pinned/scrubbed hero scenes).
 * Reduced motion: elements appear in their final state immediately, no tween.
 */
export function useReveal(containerRef: RefObject<HTMLElement | null>) {
  const { reducedMotion, ready } = useMotion();

  useEffect(() => {
    if (!ready || !containerRef.current) return;
    const root = containerRef.current;
    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    if (targets.length === 0) return;

    if (reducedMotion) {
      targets.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      targets.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: (i % 4) * 0.08,
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, [containerRef, reducedMotion, ready]);
}
