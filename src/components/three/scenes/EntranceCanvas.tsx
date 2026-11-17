"use client";

import { Canvas } from "@react-three/fiber";
import { CameraRig } from "@/components/three/CameraRig";
import { ParticleField } from "@/components/three/ParticleField";

/** Real-3D layer for The Threshold: mouse-parallax camera + two particle layers (gold dust, violet runes). */
export default function EntranceCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <CameraRig parallax={0.7} />
      <ParticleField count={260} color="#eccb6c" size={2} speed={0.2} area={[14, 9, 6]} />
      <ParticleField count={90} color="#9c7bd6" size={3} speed={0.12} area={[10, 7, 5]} />
    </Canvas>
  );
}
