"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useMotion } from "@/lib/motion-context";

interface KenBurnsImageProps {
  src: string;
  alt: string;
  gradient: string;
  className?: string;
}

/** A still image with a slow, looping zoom — or just the still (or its gradient fallback) under reduced motion. */
export function KenBurnsImage({ src, alt, gradient, className }: KenBurnsImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const { reducedMotion, ready } = useMotion();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!ready || reducedMotion || !imgRef.current) return;
    const tween = gsap.fromTo(
      imgRef.current,
      { scale: 1 },
      { scale: 1.12, duration: 18, ease: "none", repeat: -1, yoyo: true }
    );
    return () => {
      tween.kill();
    };
  }, [ready, reducedMotion]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className ?? ""}`} style={{ background: gradient }}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="img-blend h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
