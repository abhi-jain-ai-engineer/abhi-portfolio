"use client";

import { useRef } from "react";
import { BackgroundPlate } from "@/components/media/BackgroundPlate";
import { SceneCanvasGate } from "@/components/three/SceneCanvasGate";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/components/scroll/useReveal";
import { assetManifest } from "@/lib/asset-manifest";
import { resume } from "@/content/resume";

const GRADIENT = "radial-gradient(ellipse at 50% 60%, #1a2340 0%, #0a0d16 60%, #050609 100%)";

/** The Courier's Flight — closing scene: real contact info, resume download, and a plain footer. */
export function ContactScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  useReveal(containerRef);

  return (
    <section id="couriers-flight" className="relative w-full overflow-hidden bg-bg">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-[12vh] text-center">
        <BackgroundPlate asset={assetManifest.owlDeliversLetter} gradient={GRADIENT} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 70% at 50% 45%, rgba(5,6,9,0.55) 0%, rgba(5,6,9,0.6) 45%, rgba(5,6,9,0.94) 100%)",
          }}
        />
        <SceneCanvasGate
          className="absolute inset-0 z-[5]"
          load={() => import("@/components/three/scenes/ContactCanvas")}
          sceneProps={{}}
          fallback={null}
        />
        <div
          ref={containerRef}
          className="relative z-10 flex max-w-xl flex-col items-center gap-5"
          style={{ textShadow: "0 2px 16px rgba(5,6,9,0.9)" }}
        >
          <p className="kicker" data-reveal>
            The Courier&rsquo;s Flight
          </p>
          <h2 className="font-display text-4xl text-gold-bright sm:text-5xl" data-reveal>
            Let&rsquo;s Begin a New Chapter
          </h2>
          <p className="text-text-dim" data-reveal>
            {resume.contact.email} · {resume.contact.phone} · {resume.contact.location}
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4" data-reveal>
            <Button href={`mailto:${resume.contact.email}`} variant="solid">
              Send a Message
            </Button>
            <Button href="resume.pdf" download>
              Download Resume
            </Button>
          </div>
          <div className="mt-6 flex gap-6 text-sm text-text-dim" data-reveal>
            <a href={`https://${resume.contact.linkedin}`} target="_blank" rel="noreferrer" className="transition hover:text-text">
              LinkedIn
            </a>
            <a href={`https://${resume.contact.github}`} target="_blank" rel="noreferrer" className="transition hover:text-text">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <footer className="border-t border-gold/15 px-6 py-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-text-dim">
          © {new Date().getFullYear()} {resume.contact.name}. An original concept — no affiliation with any film or franchise.
        </p>
      </footer>
    </section>
  );
}
