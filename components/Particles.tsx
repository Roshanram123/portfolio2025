"use client";

import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { BufferGeometry, Float32BufferAttribute, Points as ThreePoints } from "three";

const Particles: React.FC = () => {
  const ref = useRef<ThreePoints<BufferGeometry>>(null);
  const [sphere] = useState<Float32Array>(() => 
    random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Particles;