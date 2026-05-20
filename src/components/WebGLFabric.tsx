"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Subtle wave displacement
    float wave = sin(pos.x * 2.0 + uTime * 0.5) * 0.1;
    wave += cos(pos.y * 1.5 + uTime * 0.3) * 0.1;
    
    pos.z += wave;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uTime;
  
  void main() {
    // Flowing UV mapping
    vec2 flowUv = vUv;
    flowUv.x += sin(vUv.y * 5.0 + uTime * 0.2) * 0.02;
    flowUv.y += cos(vUv.x * 5.0 + uTime * 0.2) * 0.02;
    
    vec4 texColor = texture2D(uTexture, flowUv);
    
    // Add subtle shimmer
    float shimmer = sin(vUv.x * 10.0 + vUv.y * 10.0 + uTime) * 0.05;
    
    gl_FragColor = vec4(texColor.rgb + shimmer, 1.0);
  }
`;

function FabricMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/fabric.png");
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTexture: { value: texture },
    }),
    [texture]
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
}

export default function WebGLFabric() {
  return (
    <section className="relative w-full h-screen bg-[#FDFBF7] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1.5] }}>
          <ambientLight intensity={0.5} />
          <FabricMesh />
        </Canvas>
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      <div className="relative z-10 text-center pointer-events-none">
        <h2 className="text-6xl md:text-9xl font-light text-[#FDFBF7] leading-none drop-shadow-2xl">
          The Fabric <br />
          <span className="italic">of Dreams</span>
        </h2>
      </div>
    </section>
  );
}
