"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import type * as THREE from "three"

function Model(props: any) {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const ref = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.5
  })

  return <primitive object={scene} ref={ref} {...props} />
}

export default function Character3D() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-[#0a2e5c] flex flex-col">
      <header className="p-4 text-white text-center border-b border-[#1a4980]">
        <h1 className="text-xl font-bold">شخصية ثلاثية الأبعاد</h1>
      </header>

      <div className="flex-1 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0a2e5c] z-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#c9a96e]"></div>
          </div>
        )}

        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Model position={[0, -1, 0]} scale={2} onAfterRender={() => setLoading(false)} />
          <Environment preset="city" />
          <OrbitControls />
        </Canvas>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center px-4"
        >
          <Button
            className="bg-[#c9a96e] hover:bg-[#b89355] text-white py-6 px-8 rounded-md text-lg w-full max-w-xs"
            onClick={() => router.push("/")}
          >
            العودة للرئيسية
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
