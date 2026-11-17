"use client";

import { Float, Text } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";

interface FloatingBookProps {
  position: [number, number, number];
  color: string;
  label: string;
  onSelect: () => void;
}

/** A floating ancient book — one institution marker in The Athenaeum. */
export function FloatingBook({ position, color, label, onSelect }: FloatingBookProps) {
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect();
  };

  return (
    <Float speed={1.1} rotationIntensity={0.4} floatIntensity={1.4}>
      <group position={position} onClick={handleClick}>
        <mesh rotation={[0.15, 0.3, 0.05]}>
          <boxGeometry args={[0.9, 1.2, 0.22]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} roughness={0.5} metalness={0.2} />
        </mesh>
        <Text position={[0, -0.95, 0]} fontSize={0.17} color="#f1ece0" anchorX="center" anchorY="top" maxWidth={1.8} textAlign="center">
          {label}
        </Text>
      </group>
    </Float>
  );
}
