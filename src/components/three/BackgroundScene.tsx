import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Icosahedron, MeshDistortMaterial, Torus, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

// Pointer + scroll are tracked on window because the canvas sits behind the page with pointer-events: none
// scroll = progress through the whole page (0..1), hero = progress out of the first viewport (0..1)
const input = { x: 0, y: 0, scroll: 0, hero: 0 }
if (typeof window !== 'undefined') {
  window.addEventListener('pointermove', (e) => {
    input.x = (e.clientX / window.innerWidth) * 2 - 1
    input.y = -(e.clientY / window.innerHeight) * 2 + 1
  })
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    input.scroll = max > 0 ? window.scrollY / max : 0
    input.hero = Math.min(window.scrollY / window.innerHeight, 1)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const a = new THREE.Color('#22d3ee')
    const b = new THREE.Color('#a78bfa')
    const c = new THREE.Color('#f472b6')
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 14
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
      const t = Math.random()
      const color = t < 0.5 ? a.clone().lerp(b, t * 2) : b.clone().lerp(c, (t - 0.5) * 2)
      col.set([color.r, color.g, color.b], i * 3)
    }
    return [pos, col]
  }, [count])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * (0.02 + input.scroll * 0.08)
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, input.scroll * 1.2, 0.05)
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Core({ mobile }: { mobile: boolean }) {
  const group = useRef<THREE.Group>(null)
  const shell = useRef<THREE.Mesh>(null)
  const ringA = useRef<THREE.Mesh>(null)
  const ringB = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const s = input.scroll
    const h = input.hero
    if (group.current) {
      // Hero: right of the text (desktop) / behind it (mobile).
      // Past the hero it recedes into the top-right corner so it never sits on top of section content.
      const x = mobile ? h * 1.6 : 2.4 + h * 2.6
      const y = (mobile ? 0.6 : 0) + h * (mobile ? 3.2 : 1.6)
      const z = -h * (mobile ? 6 : 5)
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, x, 0.08)
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, y + Math.sin(t * 0.5) * 0.1, 0.08)
      group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, z, 0.08)
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, input.x * 0.6 + s * Math.PI * 4, 0.05)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -input.y * 0.4, 0.05)
    }
    if (shell.current) {
      shell.current.rotation.x += delta * 0.15
      shell.current.rotation.y -= delta * 0.2
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.4
    if (ringB.current) ringB.current.rotation.z = -t * 0.3
  })

  const scale = mobile ? 0.75 : 1

  return (
    <group ref={group} scale={scale}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <Icosahedron args={[1.25, 12]}>
          <MeshDistortMaterial
            color="#7c3aed"
            emissive="#312e81"
            emissiveIntensity={0.5}
            roughness={0.12}
            metalness={0.35}
            distort={0.38}
            speed={2.2}
          />
        </Icosahedron>
        <Icosahedron ref={shell} args={[1.9, 1]}>
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.35} />
        </Icosahedron>
      </Float>

      <group rotation={[Math.PI / 2.4, 0.3, 0]}>
        <Torus ref={ringA} args={[2.6, 0.015, 16, 160]}>
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.7} />
        </Torus>
      </group>
      <group rotation={[Math.PI / 1.7, -0.5, 0.4]}>
        <Torus ref={ringB} args={[3.05, 0.01, 16, 160]}>
          <meshBasicMaterial color="#f472b6" transparent opacity={0.55} />
        </Torus>
      </group>

      {[
        [2.8, 1.2, -0.5, '#22d3ee'],
        [-2.6, -1.1, 0.4, '#f472b6'],
        [-1.8, 1.8, -1, '#a78bfa'],
        [1.9, -1.9, 0.8, '#34d399'],
      ].map(([x, y, z, color], i) => (
        <Float key={i} speed={3 + i} rotationIntensity={3} floatIntensity={2}>
          <Octahedron args={[0.16 + i * 0.03]} position={[x as number, y as number, z as number]}>
            <meshStandardMaterial color={color as string} emissive={color as string} emissiveIntensity={0.8} />
          </Octahedron>
        </Float>
      ))}
    </group>
  )
}

function CameraRig() {
  useFrame((state) => {
    const cam = state.camera
    cam.position.x = THREE.MathUtils.lerp(cam.position.x, input.x * 0.6, 0.04)
    cam.position.y = THREE.MathUtils.lerp(cam.position.y, input.y * 0.4, 0.04)
    cam.lookAt(0, 0, 0)
  })
  return null
}

export default function BackgroundScene() {
  const mobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <Canvas
      className="bg-canvas"
      dpr={[1, mobile ? 1.25 : 1.75]}
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: !mobile, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={60} color="#22d3ee" />
      <pointLight position={[-5, -3, 3]} intensity={50} color="#f472b6" />
      <pointLight position={[0, 4, -4]} intensity={30} color="#a78bfa" />
      <Particles count={mobile ? 900 : 2200} />
      <Core mobile={mobile} />
      <CameraRig />
    </Canvas>
  )
}
