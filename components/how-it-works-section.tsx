"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CalendarPlus, Users, GitMerge, Award, BarChart } from "lucide-react"

const steps = [
  {
    icon: <CalendarPlus className="h-8 w-8" />,
    title: "Criação do evento",
    description:
      "Configure seu campeonato com datas, categorias, regras de pontuação e critérios de avaliação personalizados.",
    color: "bg-emerald-500",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Cadastro dos participantes",
    description: "Atletas se inscrevem online, enviando documentos e pagando taxas diretamente pela plataforma.",
    color: "bg-emerald-600",
  },
  {
    icon: <GitMerge className="h-8 w-8" />,
    title: "Definição de chaves",
    description:
      "O sistema gera automaticamente as chaves de competição com base nas categorias e rankings dos atletas.",
    color: "bg-emerald-700",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Julgamento e pontuação",
    description: "Juízes avaliam as performances em tablets ou smartphones, com pontuações calculadas em tempo real.",
    color: "bg-emerald-800",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Exibição de resultados",
    description:
      "Rankings e resultados são exibidos em tempo real para atletas e espectadores através de telões e dispositivos móveis.",
    color: "bg-emerald-500",
  },
]

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={containerRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Como funciona</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples e eficiente para transformar a organização do seu campeonato.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-emerald-200 transform -translate-x-1/2 hidden md:block"></div>

          <motion.div style={{ y }} className="space-y-24 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:w-1/2 md:text-right md:pr-8 order-2 md:order-1">
                  {index % 2 === 0 ? (
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ) : (
                    <div className="md:hidden bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  )}
                </div>

                <div className="relative z-10 order-1 md:order-2">
                  <div className={`${step.color} p-4 rounded-full text-white`}>{step.icon}</div>
                </div>

                <div className="md:w-1/2 md:pl-8 order-3">
                  {index % 2 === 1 ? (
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ) : (
                    <div className="md:hidden bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
