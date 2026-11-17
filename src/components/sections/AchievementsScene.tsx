"use client";

import { useRef } from "react";
import { KenBurnsImage } from "@/components/media/KenBurnsImage";
import { useReveal } from "@/components/scroll/useReveal";
import { assetManifest } from "@/lib/asset-manifest";
import { resume } from "@/content/resume";

const GRADIENT = "radial-gradient(ellipse at 50% 30%, #2a2013 0%, #0a0d16 65%, #050609 100%)";

/** The Hall of Merit — the full work history as a trophy-wall grid. Text-heavy, kept performant (no R3F). */
export function AchievementsScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  useReveal(containerRef);

  return (
    <section id="hall-of-merit" className="relative w-full overflow-hidden bg-bg py-[14vh]">
      <KenBurnsImage
        src={assetManifest.trophyHallAtmosphere.poster}
        alt={assetManifest.trophyHallAtmosphere.alt}
        gradient={GRADIENT}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(5,6,9,0.6), rgba(5,6,9,0.92))" }}
      />
      <div ref={containerRef} className="relative mx-auto max-w-5xl px-6">
        <div data-reveal className="mb-12 text-center">
          <p className="kicker">The Hall of Merit</p>
          <h2 className="font-display text-4xl text-gold-bright">Experience</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {resume.experience.map((e) => (
            <div
              key={`${e.role}-${e.org}`}
              data-reveal
              className="rounded-lg border border-gold/25 p-6"
              style={{ background: "color-mix(in srgb, var(--bg) 60%, transparent)" }}
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
                {e.start} – {e.end}
              </p>
              <h3 className="font-display mt-1 text-xl text-gold-bright">{e.role}</h3>
              <p className="text-sm text-text-dim">{e.org}</p>
              {e.highlights.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-sm text-text-dim">
                  {e.highlights.slice(0, 3).map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
