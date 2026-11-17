"use client";

import { Sparkles } from "@react-three/drei";

interface ParticleFieldProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
  area?: [number, number, number];
}

/** Ambient floating dust/embers/runes — the "magical particles" accent used across scenes. */
export function ParticleField({
  count = 200,
  color = "#eccb6c",
  size = 2,
  speed = 0.2,
  area = [12, 8, 6],
}: ParticleFieldProps) {
  return <Sparkles count={count} scale={area} size={size} speed={speed} color={color} opacity={0.6} />;
}
