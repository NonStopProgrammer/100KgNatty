
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Defining uppercase aliases for standard three-fiber light tags to resolve JSX intrinsic element type errors
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const SpotLight = 'spotLight' as any;

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef} scale={1.5}>
      <MeshDistortMaterial
        color="#CBFF00"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0}
        metalness={1}
        wireframe
      />
    </Sphere>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <AmbientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} color="#CBFF00" intensity={2} />
        <SpotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} color="#ffffff" />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <AnimatedShape />
        </Float>
      </Canvas>
    </div>
  );
};

export default Scene3D;
