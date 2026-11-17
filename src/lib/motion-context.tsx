"use client";

import { createContext, ReactNode, useContext } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { useDeviceTier, type DeviceTier } from "@/hooks/useDeviceTier";

interface MotionState {
  reducedMotion: boolean;
  /** null until the client-side check has run (first paint). */
  webglSupported: boolean | null;
  deviceTier: DeviceTier;
  /** true only once every signal needed to decide "real 3D vs fallback" is known. */
  ready: boolean;
  /** Single switch every scene checks before mounting an R3F canvas or a scrub/pin timeline. */
  use3D: boolean;
}

const MotionContext = createContext<MotionState | null>(null);

export function MotionProvider({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  const webglSupported = useWebGLSupport();
  const deviceTier = useDeviceTier();
  const ready = webglSupported !== null;
  const use3D = ready && webglSupported === true && deviceTier === "full" && !reducedMotion;

  return (
    <MotionContext.Provider value={{ reducedMotion, webglSupported, deviceTier, ready, use3D }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion(): MotionState {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error("useMotion must be used within a MotionProvider");
  return ctx;
}
