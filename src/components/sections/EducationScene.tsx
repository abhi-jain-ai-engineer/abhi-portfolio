"use client";

import { useRef, useState } from "react";
import PinnedSection from "@/components/scroll/PinnedSection";
import { SceneCanvasGate } from "@/components/three/SceneCanvasGate";
import { KenBurnsImage } from "@/components/media/KenBurnsImage";
import { Panel } from "@/components/ui/Panel";
import { useReveal } from "@/components/scroll/useReveal";
import { assetManifest } from "@/lib/asset-manifest";
import { resume } from "@/content/resume";

const GRADIENT = "radial-gradient(ellipse at 50% 40%, #241a33 0%, #0a0d16 65%, #050609 100%)";

/** The Athenaeum — one floating book per institution; click/tap for degree, duration, status. */
export function EducationScene() {
  const rootRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  useReveal(introRef);

  const entry = selected !== null ? resume.education[selected] : null;

  return (
    <PinnedSection ref={rootRef} id="athenaeum" heightVh={180} className="bg-bg">
      <KenBurnsImage
        src={assetManifest.libraryAtmosphere.poster}
        alt={assetManifest.libraryAtmosphere.alt}
        gradient={GRADIENT}
      />
      <div
        className="absolute inset-0 z-[5]"
        style={{ background: "linear-gradient(to bottom, rgba(5,6,9,0.55), rgba(5,6,9,0.85))" }}
      />
      <div ref={introRef} className="absolute inset-x-0 top-[8%] z-20 flex justify-center px-6">
        <div data-reveal className="text-center">
          <p className="kicker">The Athenaeum</p>
          <h2 className="font-display text-4xl text-gold-bright">Education</h2>
        </div>
      </div>
      <SceneCanvasGate
        className="absolute inset-0 z-10"
        load={() => import("@/components/three/scenes/EducationCanvas")}
        sceneProps={{ education: resume.education, onSelect: setSelected }}
        fallback={
          <div className="flex h-full w-full items-center justify-center px-6 pt-[14vh]">
            <div className="w-full max-w-xl space-y-3">
              {resume.education.map((e, i) => (
                <button
                  key={e.institution}
                  onClick={() => setSelected(i)}
                  className="flex w-full items-center justify-between rounded-lg border border-gold/30 p-4 text-left transition hover:border-gold"
                >
                  <span>
                    <span className="font-display block text-lg text-gold-bright">{e.credential}</span>
                    <span className="block text-xs text-text-dim">{e.institution}</span>
                  </span>
                  <span className="shrink-0 pl-4 text-xs text-text-dim">
                    {e.start}–{e.end}
                  </span>
                </button>
              ))}
            </div>
          </div>
        }
      />
      <Panel open={!!entry} onClose={() => setSelected(null)} title={entry?.credential ?? ""}>
        {entry && (
          <div className="space-y-1.5">
            <p>{entry.institution}</p>
            <p>
              {entry.start} – {entry.end}
              {entry.status === "in_progress" ? " (In Progress)" : ""}
            </p>
          </div>
        )}
      </Panel>
    </PinnedSection>
  );
}
