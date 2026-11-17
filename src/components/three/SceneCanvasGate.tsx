"use client";

import { ComponentType, ReactNode, useEffect, useRef, useState } from "react";
import { useMotion } from "@/lib/motion-context";

interface SceneCanvasGateProps<P extends object> {
  /** Dynamic import of the R3F scene component — only called once in view AND use3D is true, so three.js never downloads otherwise. */
  load: () => Promise<{ default: ComponentType<P> }>;
  sceneProps: P;
  /** DOM equivalent rendered whenever 3D is off (no WebGL, lite tier, reduced motion) or the 3D scene is out of view. */
  fallback: ReactNode;
  className?: string;
}

/**
 * Gates every real-3D scene behind: WebGL support + device tier + reduced-
 * motion (via `useMotion().use3D`) and viewport proximity (IntersectionObserver,
 * ~200px margin) so at most one <Canvas> is mounted at a time and the R3F/
 * three.js bundle is never fetched on a device that won't use it.
 */
export function SceneCanvasGate<P extends object>({
  load,
  sceneProps,
  fallback,
  className,
}: SceneCanvasGateProps<P>) {
  const { ready, use3D } = useMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [Scene, setScene] = useState<ComponentType<P> | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "200px 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!ready || !use3D || !inView || Scene) return;
    let alive = true;
    load().then((mod) => {
      if (alive) setScene(() => mod.default);
    });
    return () => {
      alive = false;
    };
  }, [ready, use3D, inView, Scene, load]);

  const showCanvas = ready && use3D && inView && Scene !== null;

  return (
    <div ref={containerRef} className={className}>
      {showCanvas && Scene ? <Scene {...sceneProps} /> : fallback}
    </div>
  );
}
