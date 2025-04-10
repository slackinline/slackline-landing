"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

export default function MobileVersionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Acesse tudo pelo seu smartphone</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nossa plataforma é 100% responsiva e otimizada para dispositivos móveis, permitindo que organizadores,
              atletas e juízes acessem todas as funcionalidades de qualquer lugar.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Aplicativo para atletas</h3>
                  <p className="text-gray-600">
                    Acompanhe horários, receba notificações e veja resultados em tempo real
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Painel de julgamento mobile</h3>
                  <p className="text-gray-600">
                    Interface otimizada para juízes avaliarem performances em tablets e smartphones
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Dashboard para organizadores</h3>
                  <p className="text-gray-600">
                    Controle todo o evento pelo celular, com acesso a todas as ferramentas administrativas
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative h-[600px] flex justify-center">
            {/* Mobile device mockups */}
            <motion.div className="absolute z-20 transform" style={{ y: y1, rotate, transformOrigin: "bottom center" }}>
              <div className="bg-gray-900 rounded-[40px] p-3 shadow-xl">
                <div className="relative w-[280px] h-[580px] overflow-hidden rounded-[32px] border-[8px] border-gray-800">
                  <Image
                    src="/placeholder.svg?height=580&width=280"
                    alt="App mobile para atletas"
                    width={280}
                    height={580}
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl"></div>
              </div>
            </motion.div>

            <motion.div
              className="absolute z-10 transform translate-x-40"
              style={{ y: y2, rotate: useTransform(scrollYProgress, [0, 1], [0, -5]) }}
            >
              <div className="bg-gray-900 rounded-[40px] p-3 shadow-xl">
                <div className="relative w-[280px] h-[580px] overflow-hidden rounded-[32px] border-[8px] border-gray-800">
                  <Image
                    src="/placeholder.svg?height=580&width=280"
                    alt="Painel de julgamento"
                    width={280}
                    height={580}
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
