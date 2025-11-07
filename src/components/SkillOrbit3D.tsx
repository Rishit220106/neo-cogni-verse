import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Text, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

interface SkillNodeProps {
  position: [number, number, number];
  label: string;
  color: string;
  rotation: number;
}

const SkillNode = ({ position, label, color, rotation }: SkillNodeProps) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Orbit animation
    const time = state.clock.elapsedTime * 0.3 + rotation;
    const radius = Math.sqrt(position[0] ** 2 + position[2] ** 2);
    meshRef.current.position.x = Math.cos(time) * radius;
    meshRef.current.position.z = Math.sin(time) * radius;
    
    // Make labels always face camera
    meshRef.current.lookAt(state.camera.position);
    
    // Scale on hover
    const targetScale = hovered ? 1.3 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  return (
    <group ref={meshRef} position={position}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Background circle */}
        <mesh
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <circleGeometry args={[0.6, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={hovered ? 0.4 : 0.2}
          />
        </mesh>
        
        {/* Text label */}
        <Text
          position={[0, 0, 0.01]}
          fontSize={0.25}
          color="#EAEAEA"
          anchorX="center"
          anchorY="middle"
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          {label}
        </Text>
        
        {/* Glow effect when hovered */}
        {hovered && (
          <pointLight intensity={2} distance={3} color={color} />
        )}
      </Float>
    </group>
  );
};

const CentralSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#00E5FF"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.3}
        metalness={0.8}
        emissive="#00E5FF"
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
};

const SkillOrbit3D = () => {
  const skills = [
    // Inner orbit - Languages & Core
    { name: "Python", position: [2, 0.5, 0] as [number, number, number], color: "#00E5FF", rotation: 0 },
    { name: "JavaScript", position: [0, 0.5, 2] as [number, number, number], color: "#00E5FF", rotation: Math.PI / 4 },
    { name: "TypeScript", position: [-2, 0.5, 0] as [number, number, number], color: "#00E5FF", rotation: Math.PI / 2 },
    { name: "SQL", position: [0, 0.5, -2] as [number, number, number], color: "#00E5FF", rotation: (3 * Math.PI) / 4 },
    
    // Middle orbit - Frameworks & Libraries
    { name: "React", position: [3, -0.5, 2] as [number, number, number], color: "#6C63FF", rotation: Math.PI / 6 },
    { name: "Next.js", position: [-3, -0.5, 2] as [number, number, number], color: "#6C63FF", rotation: Math.PI / 3 },
    { name: "TensorFlow", position: [3, -0.5, -2] as [number, number, number], color: "#6C63FF", rotation: (2 * Math.PI) / 3 },
    { name: "Flask", position: [-3, -0.5, -2] as [number, number, number], color: "#6C63FF", rotation: (5 * Math.PI) / 6 },
    
    // Outer orbit - Tools & Platforms
    { name: "Docker", position: [4, 1, 1] as [number, number, number], color: "#00D9FF", rotation: Math.PI / 8 },
    { name: "Git", position: [-4, 1, 1] as [number, number, number], color: "#00D9FF", rotation: (3 * Math.PI) / 8 },
    { name: "Tailwind", position: [4, 1, -1] as [number, number, number], color: "#00D9FF", rotation: (5 * Math.PI) / 8 },
    { name: "OpenCV", position: [-4, 1, -1] as [number, number, number], color: "#00D9FF", rotation: (7 * Math.PI) / 8 },
    
    // Additional orbit - AI/ML
    { name: "Pandas", position: [2.5, -1.5, 2.5] as [number, number, number], color: "#8B7FFF", rotation: Math.PI / 5 },
    { name: "NumPy", position: [-2.5, -1.5, 2.5] as [number, number, number], color: "#8B7FFF", rotation: (2 * Math.PI) / 5 },
    { name: "Streamlit", position: [2.5, -1.5, -2.5] as [number, number, number], color: "#8B7FFF", rotation: (3 * Math.PI) / 5 },
    { name: "LLMs", position: [-2.5, -1.5, -2.5] as [number, number, number], color: "#8B7FFF", rotation: (4 * Math.PI) / 5 },
  ];

  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden glass-card">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#6C63FF" />
        
        <Suspense fallback={null}>
          {/* Central sphere */}
          <CentralSphere />
          
          {/* Orbiting skills */}
          {skills.map((skill, index) => (
            <SkillNode
              key={index}
              position={skill.position}
              label={skill.name}
              color={skill.color}
              rotation={skill.rotation}
            />
          ))}
        </Suspense>
        
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={8}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default SkillOrbit3D;
