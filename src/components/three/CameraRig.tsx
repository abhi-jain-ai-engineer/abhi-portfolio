"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CameraRigProps {
  /** Max camera offset in scene units, driven by normalized pointer position. */
  parallax?: number;
}

/**
 * Subtle mouse-responsive camera parallax. Only ever mounted inside a Canvas
 * that SceneCanvasGate has already gated on `use3D` (WebGL + full tier + not
 * reduced-motion), so no extra reduced-motion check is needed here.
 */
export function CameraRig({ parallax = 0.6 }: CameraRigProps) {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3());

  useFrame(() => {
    target.current.set(pointer.x * parallax, pointer.y * parallax * 0.5, camera.position.z);
    camera.position.lerp(target.current, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
