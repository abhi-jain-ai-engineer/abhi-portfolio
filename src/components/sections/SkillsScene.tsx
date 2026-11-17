"use client";

import { useRef, useState } from "react";
import PinnedSection from "@/components/scroll/PinnedSection";
import { SceneCanvasGate } from "@/components/three/SceneCanvasGate";
import { Panel } from "@/components/ui/Panel";
import { useReveal } from "@/components/scroll/useReveal";
import { resume } from "@/content/resume";

/** The Conjuring Circle — one floating artifact per skill group; click/tap for the full list. */
export function SkillsScene() {
  const rootRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string | null>(null);
  useReveal(introRef);

  const group = resume.skills.find((g) => g.id === selected) ?? null;

  return (
    <PinnedSection ref={rootRef} id="conjuring-circle" heightVh={180} className="bg-bg-deep">
      <div ref={introRef} className="absolute inset-x-0 top-[8%] z-20 flex justify-center px-6">
        <div data-reveal className="text-center">
          <p className="kicker">The Conjuring Circle</p>
          <h2 className="font-display text-4xl text-gold-bright">Craft &amp; Capability</h2>
        </div>
      </div>
      <SceneCanvasGate
        className="absolute inset-0 z-10"
        load={() => import("@/components/three/scenes/SkillsCanvas")}
        sceneProps={{ skills: resume.skills, onSelect: setSelected }}
        fallback={
          <div className="flex h-full w-full items-center justify-center px-6 pt-[14vh]">
            <div className="grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
              {resume.skills.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelected(g.id)}
                  className="rounded-lg border border-gold/30 p-4 text-left transition hover:border-gold"
                >
                  <p className="font-display text-lg text-gold-bright">{g.title}</p>
                  <p className="mt-1 text-xs text-text-dim">{g.items.length} skills</p>
                </button>
              ))}
            </div>
          </div>
        }
      />
      <Panel open={!!group} onClose={() => setSelected(null)} title={group?.title ?? ""}>
        <ul className="space-y-1.5">
          {group?.items.map((item) => <li key={item}>• {item}</li>)}
        </ul>
      </Panel>
    </PinnedSection>
  );
}
