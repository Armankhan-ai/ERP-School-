import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Panel = ({ title, data, position, rotation, scale, className }: any) => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      // Subtle floating
      group.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.001;
      group.current.rotation.x += Math.sin(state.clock.elapsedTime * 0.5) * 0.0005;
    }
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <Html transform distanceFactor={10} zIndexRange={[100, 0]} className={className}>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-white shadow-2xl w-[320px] select-none pointer-events-none">
          <h3 className="font-bold text-sm tracking-widest text-brand-accent mb-4 uppercase">{title}</h3>
          <div className="space-y-4">
            {data.map((item: any, i: number) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span className="text-white/70">{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Html>
    </group>
  );
};

const MainDashboard = ({ position }: any) => {
  const group = useRef<THREE.Group>(null);

  return (
    <group ref={group} position={position}>
      <Html transform distanceFactor={10} zIndexRange={[100, 0]}>
        <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 text-white shadow-2xl w-[600px] select-none">
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <h3 className="font-bold text-xl tracking-tight">INTVAR ERP Dashboard</h3>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
              <div className="text-sm text-white/50 mb-1">Total Students</div>
              <div className="text-2xl font-bold">2,486</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
              <div className="text-sm text-white/50 mb-1">Teachers</div>
              <div className="text-2xl font-bold">126</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
              <div className="text-sm text-white/50 mb-1">Attendance</div>
              <div className="text-2xl font-bold">94.6%</div>
            </div>
            <div className="col-span-3 bg-white/5 rounded-lg p-6 border border-white/5 h-32 flex items-center justify-center">
              <div className="text-white/30 text-sm">Revenue / Growth Chart Area</div>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}

const Scene = () => {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // Scroll driven animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-container",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
      }
    });

    // Animate camera and group
    tl.to(camera.position, { z: 15, ease: "power1.inOut" }, 0);
    tl.to(groupRef.current!.rotation, { y: Math.PI / 4, ease: "power1.inOut" }, 0);
    tl.to(groupRef.current!.position, { z: -5, ease: "power1.inOut" }, 0);

    return () => {
      tl.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [camera]);

  // Handle Mouse Move for Parallax
  useFrame((state) => {
    const { pointer } = state;
    gsap.to(camera.position, {
      x: pointer.x * 2,
      y: pointer.y * 2,
      duration: 2,
      ease: 'power2.out'
    });
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <MainDashboard position={[0, 0, 0]} />
      
      {/* Student Panel */}
      <Panel 
        title="Student Management"
        data={[
          { label: 'Students', value: '2,486' },
          { label: 'New Admissions', value: '124' },
          { label: 'Attendance', value: '94.6%' }
        ]}
        position={[-6, 1, -2]}
        rotation={[0, Math.PI / 8, 0]}
        scale={0.8}
      />
      
      {/* Teacher Panel */}
      <Panel 
        title="Teacher Management"
        data={[
          { label: 'Total Teachers', value: '126' },
          { label: 'Active', value: '118' },
          { label: 'On Leave', value: '8' }
        ]}
        position={[6, 0.5, -3]}
        rotation={[0, -Math.PI / 8, 0]}
        scale={0.8}
      />

      {/* Report Card */}
      <Panel 
        title="Report Card"
        data={[
          { label: 'Aarav Sharma', value: 'Class 8-A' },
          { label: 'Mathematics', value: '92' },
          { label: 'Science', value: '88' },
          { label: 'Overall', value: 'A+' }
        ]}
        position={[-3, -4, -1]}
        rotation={[Math.PI / 16, Math.PI/16, 0]}
        scale={0.7}
      />

      {/* Timetable */}
      <Panel 
        title="Timetable"
        data={[
          { label: 'Current Class', value: 'Math (8A)' },
          { label: 'Teacher', value: 'R. Kumar' },
          { label: 'Next Class', value: 'Science' }
        ]}
        position={[4, -4, -2]}
        rotation={[Math.PI / 16, -Math.PI/16, 0]}
        scale={0.7}
      />
      
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
    </group>
  );
};

const HeroSection = () => {
  return (
    <div className="w-full">
      <div id="hero-container" className="relative h-screen w-full bg-brand-primary overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-secondary/30 rounded-full blur-[120px] pointer-events-none"></div>
        
        {/* 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />
            <Scene />
          </Canvas>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center pointer-events-none text-center">
          <div className="mt-[-20vh]">
            <h2 className="text-brand-accent uppercase tracking-widest text-sm font-bold mb-6">
              INTVAR ERP • Complete School Management Platform
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
              Run Your Entire School From <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">One Smart ERP</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              From student management and teacher operations to attendance, examinations, report cards, timetable, fees and analytics — INTVAR ERP brings your entire school onto one connected platform.
            </p>
            <div className="flex justify-center space-x-4 pointer-events-auto">
              <button className="bg-white text-brand-primary hover:bg-brand-accent hover:text-brand-primary px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-brand-accent/20">
                Request a Demo
              </button>
              <Link to="/features" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm">
                Explore Features
              </Link>
            </div>
            <p className="text-sm text-white/50 mt-6 tracking-wide">
              Built for modern schools • Secure • Scalable • Easy to use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
