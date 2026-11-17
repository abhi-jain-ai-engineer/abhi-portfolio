"use client";

import { useState } from "react";
import { useMotion } from "@/lib/motion-context";
import type { MediaAsset } from "@/lib/asset-manifest";

interface BackgroundPlateProps {
  asset: MediaAsset;
  /** Themed CSS gradient shown until the real Higgsfield media is generated, or if it fails to load. */
  gradient: string;
  /** Full control over sizing/position — defaults to a full-bleed background; pass a smaller box to use this as an inset accent instead. */
  className?: string;
}

/**
 * Ambient scene background: a looping muted clip on capable devices, a still
 * poster on reduced-motion/lite-tier devices, or a themed gradient wash if
 * neither file exists yet (before the Higgsfield generation step runs) or
 * fails to load. Never autoplays video under reduced motion.
 */
export function BackgroundPlate({ asset, gradient, className }: BackgroundPlateProps) {
  const { reducedMotion, deviceTier } = useMotion();
  const [posterFailed, setPosterFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const wantsVideo = !!asset.clip && !reducedMotion && deviceTier === "full";
  const showVideo = wantsVideo && !videoFailed;
  const showPoster = !showVideo && !posterFailed;

  return (
    <div className={className ?? "absolute inset-0 overflow-hidden"} style={{ background: gradient }}>
      {showVideo && asset.clip && (
        <video
          className="img-blend h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={asset.poster}
          onError={() => setVideoFailed(true)}
        >
          <source src={asset.clip} type="video/mp4" />
        </video>
      )}
      {showPoster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset.poster}
          alt={asset.alt}
          className="img-blend h-full w-full object-cover"
          onError={() => setPosterFailed(true)}
        />
      )}
    </div>
  );
}
