'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function Ferrari() {
  return (
    <group position={[2, 0.4, 2]}>
      {/* Car body */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[2, 0.6, 4]} />
        <meshStandardMaterial color="#cc0000" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Car cabin/roof */}
      <mesh position={[0, 0.8, -0.3]} castShadow>
        <boxGeometry args={[1.5, 0.5, 2]} />
        <meshStandardMaterial color="#cc0000" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Windshield */}
      <mesh position={[0, 0.8, 0.5]} castShadow>
        <boxGeometry args={[1.5, 0.5, 0.8]} />
        <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} transparent opacity={0.3} />
      </mesh>

      {/* Hood */}
      <mesh position={[0, 0.4, 2.5]} castShadow>
        <boxGeometry args={[1.8, 0.3, 1]} />
        <meshStandardMaterial color="#cc0000" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Wheels */}
      <group>
        <mesh position={[0.9, 0, 1.2]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        <mesh position={[-0.9, 0, 1.2]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        <mesh position={[0.9, 0, -1.2]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        <mesh position={[-0.9, 0, -1.2]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
      </group>

      {/* Spoiler */}
      <mesh position={[0, 1.2, -2.2]} castShadow>
        <boxGeometry args={[1.8, 0.1, 0.6]} />
        <meshStandardMaterial color="#111111" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Spoiler supports */}
      <mesh position={[0.6, 0.85, -2.2]} castShadow>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      <mesh position={[-0.6, 0.85, -2.2]} castShadow>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
    </group>
  )
}

function House() {
  return (
    <group position={[-5, 0, 0]}>
      {/* Main house structure */}
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 4, 5]} />
        <meshStandardMaterial color="#e8d4a8" />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 4.5, 0]} rotation={[0, 0, 0]} castShadow>
        <coneGeometry args={[4.5, 2, 4]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>

      {/* Door */}
      <mesh position={[0, 1, 2.51]} castShadow>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Door knob */}
      <mesh position={[0.3, 1, 2.56]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Windows */}
      <mesh position={[-1.5, 2.5, 2.51]} castShadow>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial color="#87ceeb" transparent opacity={0.4} />
      </mesh>
      <mesh position={[1.5, 2.5, 2.51]} castShadow>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial color="#87ceeb" transparent opacity={0.4} />
      </mesh>

      {/* Side windows */}
      <mesh position={[3.01, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial color="#87ceeb" transparent opacity={0.4} />
      </mesh>
      <mesh position={[-3.01, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial color="#87ceeb" transparent opacity={0.4} />
      </mesh>

      {/* Chimney */}
      <mesh position={[-2, 5.5, -1]} castShadow>
        <boxGeometry args={[0.6, 2, 0.6]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
    </group>
  )
}

function Ground() {
  return (
    <>
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#7cb342" />
      </mesh>

      {/* Driveway */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 1]} receiveShadow>
        <planeGeometry args={[8, 12]} />
        <meshStandardMaterial color="#555555" />
      </mesh>
    </>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[10, 8, 15]} />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={40}
      />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />

      <Suspense fallback={null}>
        <Ground />
        <House />
        <Ferrari />
      </Suspense>

      <Environment preset="sunset" />
    </>
  )
}

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas shadows>
        <Scene />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        fontSize: '24px',
        fontFamily: 'Arial, sans-serif',
        textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
        zIndex: 1
      }}>
        3D Ferrari & House
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif',
        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
        zIndex: 1
      }}>
        Click and drag to rotate • Scroll to zoom • Right-click to pan
      </div>
    </div>
  )
}
