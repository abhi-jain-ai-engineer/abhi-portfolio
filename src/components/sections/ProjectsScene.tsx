"use client";

import { useRef, useState } from "react";
import PinnedSection from "@/components/scroll/PinnedSection";
import { SceneCanvasGate } from "@/components/three/SceneCanvasGate";
import { Panel } from "@/components/ui/Panel";
import { useReveal } from "@/components/scroll/useReveal";
import { resume } from "@/content/resume";

/** The Alchemist's Workshop — one glowing potion bottle per project; click/tap for the full brief. */
export function ProjectsScene() {
  const rootRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string | null>(null);
  useReveal(introRef);

  const project = resume.projects.find((p) => p.id === selected) ?? null;

  return (
    <PinnedSection ref={rootRef} id="alchemists-workshop" heightVh={180} className="bg-bg-deep">
      <div ref={introRef} className="absolute inset-x-0 top-[8%] z-20 flex justify-center px-6">
        <div data-reveal className="text-center">
          <p className="kicker">The Alchemist&rsquo;s Workshop</p>
          <h2 className="font-display text-4xl text-gold-bright">Experiments &amp; Projects</h2>
        </div>
      </div>
      <SceneCanvasGate
        className="absolute inset-0 z-10"
        load={() => import("@/components/three/scenes/ProjectsCanvas")}
        sceneProps={{ projects: resume.projects, onSelect: setSelected }}
        fallback={
          <div className="flex h-full w-full items-center justify-center px-6 pt-[14vh]">
            <div className="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
              {resume.projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  className="rounded-lg border border-gold/30 p-4 text-left transition hover:border-gold"
                >
                  <p className="font-display text-lg text-gold-bright">{p.name}</p>
                  <p className="mt-1 text-xs text-text-dim">{p.year}</p>
                </button>
              ))}
            </div>
          </div>
        }
      />
      <Panel open={!!project} onClose={() => setSelected(null)} title={project?.name ?? ""}>
        {project && (
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.15em] text-gold">{project.year}</p>
            <p>{project.description}</p>
            {project.tools.length > 0 && (
              <p className="text-xs text-text-dim">Tools: {project.tools.join(", ")}</p>
            )}
            {project.outcome && (
              <p className="font-display text-gold-bright">{project.outcome}</p>
            )}
          </div>
        )}
      </Panel>
    </PinnedSection>
  );
}
