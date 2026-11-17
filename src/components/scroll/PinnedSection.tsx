"use client";

import { forwardRef, ReactNode } from "react";
import { useMotion } from "@/lib/motion-context";

interface PinnedSectionProps {
  id?: string;
  /** Scroll distance the section pins for, in viewport heights. */
  heightVh?: number;
  className?: string;
  children: ReactNode;
}

/**
 * The pinned-scroll scaffold every cinematic scene builds on: a tall track
 * with a sticky full-viewport stage inside it. The returned ref is the track
 * element — scene components build their own `gsap.context` timeline off it
 * (`trigger: ref.current, start: "top top", end: "bottom bottom", scrub`).
 *
 * Reduced motion: no pin at all — renders as a single normal-flow, min-h-screen
 * section so there's no scrub-tied camera dolly or scroll-locked stage to sit
 * through, per the fallback strategy.
 */
const PinnedSection = forwardRef<HTMLElement, PinnedSectionProps>(
  ({ id, heightVh = 300, className, children }, ref) => {
    const { reducedMotion } = useMotion();

    if (reducedMotion) {
      return (
        <section ref={ref} id={id} className={`relative min-h-screen w-full ${className ?? ""}`}>
          {children}
        </section>
      );
    }

    return (
      <section
        ref={ref}
        id={id}
        className={`relative ${className ?? ""}`}
        style={{ height: `${heightVh}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">{children}</div>
      </section>
    );
  }
);
PinnedSection.displayName = "PinnedSection";

export default PinnedSection;
