"use client";

import { Float, Text } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";

export type ArtifactShape = "sphere" | "octahedron" | "torus" | "icosahedron" | "box" | "cone";

interface FloatingArtifactProps {
  position: [number, number, number];
  color: string;
  label: string;
  shape?: ArtifactShape;
  onSelect: () => void;
}

/** A generic floating magical artifact — one skill-category marker in The Conjuring Circle. */
export function FloatingArtifact({ position, color, label, shape = "icosahedron", onSelect }: FloatingArtifactProps) {
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect();
  };

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <group position={position} onClick={handleClick} onPointerOver={(e) => (e.object.scale.setScalar(1.08))} onPointerOut={(e) => (e.object.scale.setScalar(1))}>
        <mesh>
          {shape === "sphere" && <sphereGeometry args={[0.55, 32, 32]} />}
          {shape === "octahedron" && <octahedronGeometry args={[0.65]} />}
          {shape === "torus" && <torusGeometry args={[0.5, 0.18, 16, 48]} />}
          {shape === "icosahedron" && <icosahedronGeometry args={[0.6, 0]} />}
          {shape === "box" && <boxGeometry args={[0.8, 0.8, 0.8]} />}
          {shape === "cone" && <coneGeometry args={[0.55, 1, 6]} />}
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.35} metalness={0.4} />
        </mesh>
        <Text position={[0, -0.95, 0]} fontSize={0.22} color="#f1ece0" anchorX="center" anchorY="top" maxWidth={2} textAlign="center">
          {label}
        </Text>
      </group>
    </Float>
  );
}
