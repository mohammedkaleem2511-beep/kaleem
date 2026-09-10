 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Field({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const a = new Float32Array(1600 * 3);
    for (let i = 0; i < 1600; i++) {
      const r = 5.5 * Math.pow(Math.random(), 0.55);
      const t = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 7;
      a[i * 3] = Math.cos(t) * r + Math.sin(z * 1.7) * 0.4;
      a[i * 3 + 1] = Math.sin(t) * r * 0.55;
      a[i * 3 + 2] = z;
    }
    return a;
  }, []);

  useFrame((state) => {
    if (!ref.current || reduced) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = t * 0.018;
    ref.current.rotation.y = Math.sin(t * 0.12) * 0.08;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.pointer.x * 0.18, 0.035);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, state.pointer.y * 0.12, 0.035);
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent size={0.018} sizeAttenuation depthWrite={false} color="#829486" opacity={0.34} />
    </Points>
  );
}

export function DataField({ reduced }: { reduced: boolean }) {
  return (
    <div className="webgl-field" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 9], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <Field reduced={reduced} />
      </Canvas>
    </div>
  );
}