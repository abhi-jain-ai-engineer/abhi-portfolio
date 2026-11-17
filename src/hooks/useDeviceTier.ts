"use client";

import { useEffect, useState } from "react";

export type DeviceTier = "full" | "lite";

interface NavigatorWithMemory extends Navigator {
  deviceMemory?: number;
}

function computeTier(): DeviceTier {
  const narrow = window.innerWidth < 768;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const memory = (navigator as NavigatorWithMemory).deviceMemory;
  const lowMemory = typeof memory === "number" && memory < 4;

  return narrow || coarsePointer || lowMemory ? "lite" : "full";
}

/** Re-evaluated on resize (debounced) — not per-render. */
export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>("full");

  useEffect(() => {
    setTier(computeTier());
    let timeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setTier(computeTier()), 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return tier;
}
