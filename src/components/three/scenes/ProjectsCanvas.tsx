"use client";

import { Canvas } from "@react-three/fiber";
import { CameraRig } from "@/components/three/CameraRig";
import { PotionBottle } from "@/components/three/PotionBottle";
import type { ProjectEntry } from "@/types/resume";

interface ProjectsCanvasProps {
  projects: ProjectEntry[];
  onSelect: (id: string) => void;
}

const COLORS = ["#4f7bd1", "#2f7a56", "#6b4fa0", "#c9a227"];

export default function ProjectsCanvas({ projects, onSelect }: ProjectsCanvasProps) {
  const spacing = 2.4;
  const start = -((projects.length - 1) * spacing) / 2;
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 48 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[0, 3, 4]} intensity={30} color="#eccb6c" />
      <CameraRig parallax={0.35} />
      {projects.map((p, i) => (
        <PotionBottle
          key={p.id}
          position={[start + i * spacing, 0, 0]}
          color={COLORS[i % COLORS.length]}
          label={p.name}
          onSelect={() => onSelect(p.id)}
        />
      ))}
    </Canvas>
  );
}
