"use client";

import { Canvas } from "@react-three/fiber";
import { CameraRig } from "@/components/three/CameraRig";
import { FloatingArtifact, type ArtifactShape } from "@/components/three/FloatingArtifact";
import type { SkillGroup } from "@/types/resume";

interface SkillsCanvasProps {
  skills: SkillGroup[];
  onSelect: (id: string) => void;
}

const SHAPES: ArtifactShape[] = ["sphere", "torus", "cone", "icosahedron", "octahedron", "box"];
const COLORS = ["#4f7bd1", "#2f7a56", "#6b4fa0", "#c9a227", "#7fa4e8", "#eccb6c"];

export default function SkillsCanvas({ skills, onSelect }: SkillsCanvasProps) {
  const radius = 2.8;
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 3, 4]} intensity={40} color="#eccb6c" />
      <CameraRig parallax={0.4} />
      {skills.map((group, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius * 0.55;
        return (
          <FloatingArtifact
            key={group.id}
            position={[x, y, 0]}
            color={COLORS[i % COLORS.length]}
            shape={SHAPES[i % SHAPES.length]}
            label={group.title}
            onSelect={() => onSelect(group.id)}
          />
        );
      })}
    </Canvas>
  );
}
