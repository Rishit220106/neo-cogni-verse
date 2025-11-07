import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

interface HolographicSphereProps {
  mousePosition: { x: number; y: number };
}

const HolographicSphere = ({ mousePosition }: HolographicSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerSphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !outerSphereRef.current) return;

    // Rotate based on time
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;

    // Rotate outer sphere in opposite direction
    outerSphereRef.current.rotation.x = -state.clock.elapsedTime * 0.15;
    outerSphereRef.current.rotation.y = -state.clock.elapsedTime * 0.25;

    // Follow mouse position smoothly
    const targetX = mousePosition.x * 0.5;
    const targetY = mousePosition.y * 0.5;
    
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
    meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
  });

  return (
    <group>
      {/* Main holographic sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#00E5FF"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive="#00E5FF"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* Outer wireframe sphere */}
      <Sphere ref={outerSphereRef} args={[1.5, 32, 32]}>
        <meshBasicMaterial
          color="#6C63FF"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Inner core sphere */}
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial
          color="#6C63FF"
          emissive="#6C63FF"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>

      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      
      {/* Point lights for glow effect */}
      <pointLight position={[2, 2, 2]} intensity={1} color="#00E5FF" />
      <pointLight position={[-2, -2, -2]} intensity={1} color="#6C63FF" />
      
      {/* Directional light */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
    </group>
  );
};

export default HolographicSphere;
