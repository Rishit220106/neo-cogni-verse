import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useState } from "react";
import HolographicSphere from "./HolographicSphere";

const Scene3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height } = currentTarget.getBoundingClientRect();
    
    // Normalize mouse position to -1 to 1 range
    const x = (clientX / width) * 2 - 1;
    const y = -(clientY / height) * 2 + 1;
    
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="w-full h-full"
      onMouseMove={handleMouseMove}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        
        <Suspense fallback={null}>
          <HolographicSphere mousePosition={mousePosition} />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
