"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PinnedSection from "@/components/scroll/PinnedSection";
import { BackgroundPlate } from "@/components/media/BackgroundPlate";
import { SceneCanvasGate } from "@/components/three/SceneCanvasGate";
import { useMotion } from "@/lib/motion-context";
import { assetManifest } from "@/lib/asset-manifest";
import { resume } from "@/content/resume";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const ENTRANCE_GRADIENT =
  "radial-gradient(ellipse at 50% 30%, #1a2340 0%, #0a0d16 60%, #050609 100%)";

export function EntranceScene() {
  const rootRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { reducedMotion, ready } = useMotion();

  useEffect(() => {
    if (!ready || !textRef.current) return;
    const lines = textRef.current.querySelectorAll<HTMLElement>("[data-reveal]");

    const ctx = gsap.context(() => {
      // Plays once on load, independent of scroll — the name/headline reveal.
      gsap.fromTo(
        lines,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: reducedMotion ? 0.01 : 1,
          ease: "power2.out",
          stagger: reducedMotion ? 0 : 0.12,
          delay: 0.2,
        }
      );

      // Scroll-out parallax: fades the text as the pinned track scrolls by —
      // only meaningful when the section is actually pinned.
      if (!reducedMotion && rootRef.current) {
        gsap.to(textRef.current, {
          opacity: 0,
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=45%",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [ready, reducedMotion]);

  return (
    <PinnedSection ref={rootRef} id="threshold" heightVh={220} className="bg-bg">
      <BackgroundPlate asset={assetManifest.castleEstablishing} gradient={ENTRANCE_GRADIENT} />
      <div
        className="absolute inset-0 z-[5]"
        style={{
          background:
            "radial-gradient(ellipse 60% 65% at 50% 55%, transparent 40%, rgba(5,6,9,0.92) 100%)",
        }}
      />
      <SceneCanvasGate
        className="absolute inset-0 z-10"
        load={() => import("@/components/three/scenes/EntranceCanvas")}
        sceneProps={{}}
        fallback={null}
      />
      <BackgroundPlate
        asset={assetManifest.owlMessenger}
        gradient="linear-gradient(160deg, #1a2340, #0a0d16)"
        className="absolute bottom-[6%] right-[5%] z-[15] h-[20vh] w-[30vh] overflow-hidden rounded-2xl border border-gold/25 shadow-2xl sm:h-[24vh] sm:w-[34vh]"
      />
      <div
        ref={textRef}
        className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-5 px-6 text-center"
      >
        <p className="kicker" data-reveal>
          The Arcanum
        </p>
        <h1 className="font-display text-5xl text-gold-bright sm:text-7xl" data-reveal>
          Welcome to My World of Ideas
        </h1>
        <p className="max-w-xl text-text-dim" data-reveal>
          {resume.contact.headline}
        </p>
        <div data-reveal>
          <Button href="#scholars-hall" className="mt-2">
            Enter My Universe
          </Button>
        </div>
      </div>
    </PinnedSection>
  );
}
