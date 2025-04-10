"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Presidente da Federação Paulista de Slackline",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Depois de usar o sistema, nunca mais voltaríamos às planilhas. Economizamos 90% do tempo na organização e os atletas adoraram a transparência nas pontuações.",
  },
  {
    name: "Juliana Costa",
    role: "Organizadora do Campeonato Brasileiro",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "A plataforma revolucionou nosso campeonato. Os juízes conseguem avaliar com mais precisão e os resultados são calculados instantaneamente, sem erros humanos.",
  },
  {
    name: "Rafael Oliveira",
    role: "Diretor Técnico de Competições",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "O chaveamento automático e as notificações para os atletas eliminaram os atrasos e confusões que tínhamos antes. Agora tudo flui perfeitamente.",
  },
]

const stats = [
  { value: "500+", label: "Atletas cadastrados" },
  { value: "4", label: "Estados com torneios realizados" },
  { value: "90%", label: "Economia no tempo de organização" },
  { value: "100%", label: "Satisfação dos organizadores" },
]

export default function SocialProofSection() {
  const statsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Quem usa, recomenda</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que organizadores e federações estão falando sobre nossa plataforma.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          animate={isTestimonialsInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                  },
                },
              }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-10 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
