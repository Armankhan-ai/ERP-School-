import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCubes = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {[...Array(20)].map((_, i) => (
        <Float
          key={i}
          speed={1.5} 
          rotationIntensity={1} 
          floatIntensity={2} 
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? '#3b82f6' : '#60a5fa'} 
              wireframe={i % 3 === 0}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const FeaturesHero3D = () => {
  return (
    <div className="relative w-full h-[60vh] bg-gradient-to-b from-[#051121] to-brand-primary overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Powerful ERP Features
        </h1>
        <p className="text-xl text-white/80 max-w-2xl drop-shadow-md">
          Explore the tools that will transform your school's daily operations.
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
          <FloatingCubes />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default FeaturesHero3D;
