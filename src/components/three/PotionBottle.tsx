"use client";

import { Float, Text } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";

interface PotionBottleProps {
  position: [number, number, number];
  color: string;
  label: string;
  onSelect: () => void;
}

/** A glowing glass potion bottle — one project marker in The Alchemist's Workshop. */
export function PotionBottle({ position, color, label, onSelect }: PotionBottleProps) {
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect();
  };

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.1}>
      <group position={position} onClick={handleClick}>
        <mesh position={[0, -0.1, 0]}>
          <capsuleGeometry args={[0.32, 0.55, 8, 16]} />
          <meshPhysicalMaterial
            color={color}
            transmission={0.85}
            roughness={0.15}
            thickness={0.5}
            ior={1.3}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0, 0.52, 0]}>
          <cylinderGeometry args={[0.1, 0.14, 0.3, 16]} />
          <meshStandardMaterial color="#c9a227" roughness={0.4} metalness={0.3} />
        </mesh>
        <Text position={[0, -0.95, 0]} fontSize={0.18} color="#f1ece0" anchorX="center" anchorY="top" maxWidth={2} textAlign="center">
          {label}
        </Text>
      </group>
    </Float>
  );
}
