"use client";

import { Canvas } from "@react-three/fiber";
import { CameraRig } from "@/components/three/CameraRig";
import { FloatingBook } from "@/components/three/FloatingBook";
import type { EducationEntry } from "@/types/resume";

interface EducationCanvasProps {
  education: EducationEntry[];
  onSelect: (index: number) => void;
}

const COLORS = ["#c9a227", "#2f7a56", "#6b4fa0", "#4f7bd1"];

export default function EducationCanvas({ education, onSelect }: EducationCanvasProps) {
  const spacing = 2.2;
  const start = -((education.length - 1) * spacing) / 2;
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 2, 5]} intensity={35} color="#eccb6c" />
      <CameraRig parallax={0.35} />
      {education.map((entry, i) => (
        <FloatingBook
          key={entry.institution}
          position={[start + i * spacing, Math.sin(i) * 0.4, 0]}
          color={COLORS[i % COLORS.length]}
          label={entry.institution}
          onSelect={() => onSelect(i)}
        />
      ))}
    </Canvas>
  );
}
