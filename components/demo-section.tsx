"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function DemoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -50])

  return (
    <section ref={containerRef} className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Veja a plataforma em ação</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nossa solução já foi utilizada em mais de 50 campeonatos de slackline ao redor do mundo, proporcionando
              uma experiência fluida para organizadores, atletas e espectadores.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <div className="bg-emerald-500 w-4 h-4 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Interface intuitiva</h3>
                  <p className="text-gray-600">Fácil de usar mesmo para quem não tem experiência técnica</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <div className="bg-emerald-500 w-4 h-4 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Suporte técnico dedicado</h3>
                  <p className="text-gray-600">Equipe pronta para ajudar antes, durante e após o evento</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <div className="bg-emerald-500 w-4 h-4 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Personalização completa</h3>
                  <p className="text-gray-600">Adapte a plataforma às necessidades específicas do seu evento</p>
                </div>
              </div>
            </div>
            <Button className="mt-8 bg-emerald-500 hover:bg-emerald-600 text-white">
              <Play className="mr-2 h-4 w-4" />
              Assistir demonstração
            </Button>
          </motion.div>

          <div className="relative h-[500px]">
            {/* Parallax images */}
            <motion.div className="absolute z-10" style={{ y: y1 }}>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Dashboard da plataforma"
                width={500}
                height={300}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div className="absolute top-40 -right-10 z-20" style={{ y: y2 }}>
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Tela de resultados"
                width={400}
                height={250}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div className="absolute top-80 left-10 z-30" style={{ y: y3 }}>
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="App mobile"
                width={350}
                height={200}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
