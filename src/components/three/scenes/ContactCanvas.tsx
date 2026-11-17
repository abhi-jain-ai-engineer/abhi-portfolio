"use client";

import { Canvas } from "@react-three/fiber";
import { CameraRig } from "@/components/three/CameraRig";
import { ParticleField } from "@/components/three/ParticleField";

/** Real-3D layer for The Courier's Flight: gentle particles only — a quiet closing beat. */
export default function ContactCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <CameraRig parallax={0.3} />
      <ParticleField count={180} color="#eccb6c" size={2} speed={0.15} area={[12, 8, 5]} />
    </Canvas>
  );
}
