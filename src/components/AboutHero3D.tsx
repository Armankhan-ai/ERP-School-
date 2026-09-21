import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

const NetworkNodes = () => {
  const group = useRef<THREE.Group>(null);
  
  // Generate random points for nodes
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 30; i++) {
      pts.push(new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      ));
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {points.map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.15, 16, 16]}>
          <meshStandardMaterial color="#0ea5e9" emissive="#0284c7" emissiveIntensity={0.5} />
        </Sphere>
      ))}
      
      {/* Connect some points with lines to form a network */}
      {points.map((p1, i) => {
        return points.slice(i + 1, i + 4).map((p2, j) => (
          <Line 
            key={`${i}-${j}`} 
            points={[p1, p2]} 
            color="#38bdf8" 
            opacity={0.2} 
            transparent 
            lineWidth={1} 
          />
        ));
      })}
    </group>
  );
};

const AboutHero3D = () => {
  return (
    <div className="relative w-full h-[60vh] bg-gradient-to-b from-[#051121] to-[#0a1424] overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          About INTVAR ERP
        </h1>
        <p className="text-xl text-white/80 max-w-2xl drop-shadow-md">
          Our mission is to empower educational institutions with connected technology.
        </p>
      </div>
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
          <NetworkNodes />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
        </Canvas>
      </div>
    </div>
  );
};

export default AboutHero3D;
