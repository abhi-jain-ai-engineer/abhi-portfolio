"use client";

import { useRef } from "react";
import { KenBurnsImage } from "@/components/media/KenBurnsImage";
import { useReveal } from "@/components/scroll/useReveal";
import { assetManifest } from "@/lib/asset-manifest";
import { resume } from "@/content/resume";

const GRADIENT = "radial-gradient(ellipse at 50% 40%, #1c2a1f 0%, #0a0d16 65%, #050609 100%)";

/** The Scholar's Hall — profile summary + highlights. DOM only, kept light on purpose. */
export function AboutScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  useReveal(containerRef);

  return (
    <section id="scholars-hall" className="relative min-h-screen w-full overflow-hidden bg-bg py-[14vh]">
      <KenBurnsImage
        src={assetManifest.libraryAtmosphere.poster}
        alt={assetManifest.libraryAtmosphere.alt}
        gradient={GRADIENT}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(5,6,9,0.55), rgba(5,6,9,0.88))" }}
      />
      <div ref={containerRef} className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="kicker" data-reveal>
          The Scholar&rsquo;s Hall
        </p>
        <h2 className="font-display mt-4 text-4xl text-gold-bright sm:text-5xl" data-reveal>
          {resume.contact.name}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-text-dim" data-reveal>
          {resume.profileSummary}
        </p>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4" data-reveal>
          {resume.highlights.map((h) => (
            <div key={h.label}>
              <p className="font-display text-3xl text-gold-bright sm:text-4xl">{h.value}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-text-dim">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
