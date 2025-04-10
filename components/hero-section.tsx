"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import * as THREE from "three"

// Componente para as partículas ambientais
function AmbientParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 200
  const particlePositions = useRef<Float32Array>(new Float32Array(particleCount * 3))

  useEffect(() => {
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      particlePositions.current[i3] = (Math.random() - 0.5) * 15
      particlePositions.current[i3 + 1] = (Math.random() - 0.5) * 10
      particlePositions.current[i3 + 2] = (Math.random() - 0.5) * 15
    }
  }, [])

  useFrame((state, delta) => {
    if (!particlesRef.current) return

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // Movimento suave das partículas
      particlePositions.current[i3 + 1] += Math.sin(state.clock.elapsedTime * 0.2 + i) * 0.003
      particlePositions.current[i3] += Math.cos(state.clock.elapsedTime * 0.2 + i) * 0.003
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true

    // Rotação lenta das partículas
    particlesRef.current.rotation.y += delta * 0.05
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particlePositions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

function Slackline() {
  const meshRef = useRef<THREE.Mesh>(null)
  const segments = 100
  const slacklineLength = 20
  const [mouseX, setMouseX] = useState(0)

  // Criar os pontos iniciais da fita
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= segments; i++) {
      const x = -slacklineLength / 2 + (slacklineLength * i) / segments
      const y = Math.sin((i / segments) * Math.PI) * -0.5
      pts.push(new THREE.Vector3(x, y, 0))
    }
    return pts
  }, [segments, slacklineLength])

  // Criar a curva e a geometria inicial
  const curveRef = useRef(new THREE.CatmullRomCurve3(points))
  const [geometry, setGeometry] = useState(() => new THREE.TubeGeometry(curveRef.current, 200, 0.02, 8, false))

  // Capturar movimento do mouse globalmente
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX((event.clientX / window.innerWidth - 0.5) * 2)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animar a fita a cada frame
  useFrame(() => {
    if (!meshRef.current) return

    for (let i = 0; i <= segments; i++) {
      const point = curveRef.current.points[i]
      // Criar efeito de onda baseado no tempo e na posição do mouse
      const baseY = Math.sin((i / segments) * Math.PI) * -0.5
      const wave = Math.sin((i / segments) * Math.PI * 2 + performance.now() / 300) * 0.1 * mouseX
      point.y = baseY + wave
    }

    // Atualizar a geometria
    const newGeometry = new THREE.TubeGeometry(curveRef.current, 200, 0.02, 8, false)
    if (meshRef.current.geometry) {
      meshRef.current.geometry.dispose()
    }
    meshRef.current.geometry = newGeometry
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color="#00ff88" roughness={0.3} metalness={0.2} />
    </mesh>
  )
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const [isMobile, setIsMobile] = useState(false)

  // Detectar dispositivos móveis para possível fallback
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background com cor sólida e animação WebGL */}
      <div className="absolute inset-0 z-0 bg-[#0d1f1e]">
        <Canvas dpr={[1, isMobile ? 1.5 : 2]} camera={{ position: [0, 2, 8], fov: 60 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 10, 7.5]} intensity={1} />

          {/* Componente da fita de slackline */}
          <Slackline />

          {/* Partículas ambientais */}
          <AmbientParticles />

          {/* Controles de órbita */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </div>

      {/* Conteúdo da hero section */}
      <motion.div className="relative z-10 container mx-auto px-4 text-center" style={{ y, opacity }}>
        <motion.div
          className="bg-black/30 backdrop-blur-sm p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Organize Campeonatos de Slackline com Precisão Profissional
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-white drop-shadow-md max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Inscreva atletas, crie chaves, pontue em tempo real e mostre rankings ao vivo com o sistema mais completo do
            mercado.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg">
              Quero uma demonstração gratuita
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/80 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
