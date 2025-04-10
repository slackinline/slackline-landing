"use client"

import { motion } from "framer-motion"
import { FileSpreadsheet, Clock, Award, CheckCircle } from "lucide-react"

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2">
            {/* Problem */}
            <div className="p-8 md:p-12 bg-gray-900 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-red-500/20 p-2 rounded-full mr-3">
                  <FileSpreadsheet className="h-6 w-6 text-red-400" />
                </span>
                O Problema
              </h2>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span className="bg-red-500/20 p-1 rounded-full mr-3 mt-1">
                    <FileSpreadsheet className="h-4 w-4 text-red-400" />
                  </span>
                  <span>Planilhas desorganizadas e propensas a erros</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <span className="bg-red-500/20 p-1 rounded-full mr-3 mt-1">
                    <Clock className="h-4 w-4 text-red-400" />
                  </span>
                  <span>Confusão com horários e sequência de atletas</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <span className="bg-red-500/20 p-1 rounded-full mr-3 mt-1">
                    <Award className="h-4 w-4 text-red-400" />
                  </span>
                  <span>Julgamentos manuais lentos e imprecisos</span>
                </motion.li>
              </ul>
              <div className="mt-8 text-xl font-semibold">
                <p>Chega de planilhas, confusão com horários e julgamentos manuais.</p>
              </div>
            </div>

            {/* Solution */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-emerald-500 to-green-600 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white/20 p-2 rounded-full mr-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </span>
                A Solução
              </h2>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </span>
                  <span>Sistema digital completo e integrado</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </span>
                  <span>Notificações automáticas para atletas e staff</span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </span>
                  <span>Julgamento digital com cálculos instantâneos</span>
                </motion.li>
              </ul>
              <div className="mt-8 text-xl font-semibold">
                <p>Tenha tudo automatizado, do cadastro à premiação.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
