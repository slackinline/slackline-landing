"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { UserPlus, GitMerge, Award, BarChart, Bell, LayoutDashboard } from "lucide-react"

const features = [
  {
    icon: <UserPlus className="h-10 w-10" />,
    title: "Inscrições rápidas com categorias",
    description:
      "Formulários personalizados, validação automática de dados e pagamento integrado para inscrições sem complicações.",
    color: "bg-emerald-500",
  },
  {
    icon: <GitMerge className="h-10 w-10" />,
    title: "Chaveamento automático e visual",
    description:
      "Crie chaves de competição automaticamente com base em rankings, categorias ou aleatoriamente, com visualização clara.",
    color: "bg-emerald-600",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Julgamento com painel para juízes",
    description:
      "Interface dedicada para juízes avaliarem performances em tempo real, com cálculo automático de médias e descartes.",
    color: "bg-emerald-700",
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Ranking dinâmico em tempo real",
    description:
      "Visualização instantânea de resultados e classificações, atualizados automaticamente a cada nova pontuação.",
    color: "bg-emerald-500",
  },
  {
    icon: <Bell className="h-10 w-10" />,
    title: "Notificações automáticas",
    description:
      "Alertas por email, SMS ou push para atletas e técnicos sobre horários, alterações e resultados da competição.",
    color: "bg-emerald-600",
  },
  {
    icon: <LayoutDashboard className="h-10 w-10" />,
    title: "Painel organizador completo",
    description:
      "Dashboard com estatísticas, controles e visão geral do evento para organizadores tomarem decisões informadas.",
    color: "bg-emerald-700",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Funcionalidades que transformam seu evento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas profissionais para cada etapa do seu campeonato de slackline, desde a inscrição até a premiação.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className={`${feature.color} p-4 flex justify-center`}>
                <div className="bg-white/20 p-4 rounded-full text-white">{feature.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
