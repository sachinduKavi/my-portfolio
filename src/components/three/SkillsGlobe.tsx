import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { skillGroups } from '../../data/profile'

interface Word {
  text: string
  color: string
  position: THREE.Vector3
}

const world = new THREE.Vector3()

function Label({ word, radius }: { word: Word; radius: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<THREE.Mesh & { fillOpacity: number }>(null)

  useFrame(() => {
    if (!ref.current) return
    const target = hovered ? 1.35 : 1
    ref.current.scale.lerp(new THREE.Vector3(target, target, target), 0.15)
    // Fade labels on the far side of the sphere so the front ones stay legible
    ref.current.getWorldPosition(world)
    ref.current.fillOpacity = hovered ? 1 : THREE.MathUtils.mapLinear(world.z, -radius, radius, 0.12, 1)
  })

  return (
    <Billboard position={word.position}>
      <Text
        ref={ref}
        fontSize={0.3}
        color={hovered ? '#ffffff' : word.color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={hovered ? 0.01 : 0}
        outlineColor={word.color}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'auto'
        }}
      >
        {word.text}
      </Text>
    </Billboard>
  )
}

function Cloud({ radius }: { radius: number }) {
  const group = useRef<THREE.Group>(null)

  // Distribute every skill evenly over a sphere (Fibonacci lattice)
  const words = useMemo<Word[]>(() => {
    const all = skillGroups.flatMap((g) => g.items.map((text) => ({ text, color: g.color })))
    const n = all.length
    const golden = Math.PI * (3 - Math.sqrt(5))
    return all.map((w, i) => {
      const y = 1 - (i / (n - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      return { ...w, position: new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius) }
    })
  }, [radius])

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12
  })

  return (
    <group ref={group}>
      {words.map((w) => (
        <Label key={w.text} word={w} radius={radius} />
      ))}
      <mesh>
        <sphereGeometry args={[radius * 0.92, 32, 32]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.06} />
      </mesh>
    </group>
  )
}

export default function SkillsGlobe() {
  const mobile = typeof window !== 'undefined' && window.innerWidth < 768
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, mobile ? 13 : 11.5], fov: 50 }}>
      <Cloud radius={4.6} />
      {/* Drag-to-rotate on desktop only; on touch devices it would trap page scrolling */}
      {!mobile && <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.6} />}
    </Canvas>
  )
}
