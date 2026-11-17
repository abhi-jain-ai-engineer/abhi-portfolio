"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useMotion } from "@/lib/motion-context";

gsap.registerPlugin(ScrollTrigger);

/**
 * Lenis smooth scroll wired into GSAP's ticker so ScrollTrigger and Lenis
 * share one clock. Skipped entirely when the viewer prefers reduced motion —
 * the lerp easing itself is motion that preference is meant to suppress, so
 * we fall back to plain native scroll rather than a "lighter" smooth scroll.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const { reducedMotion, ready } = useMotion();

  useEffect(() => {
    if (!ready || reducedMotion) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [ready, reducedMotion]);

  return <>{children}</>;
}
