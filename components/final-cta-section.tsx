"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function FinalCTASection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: "", email: "", phone: "" })
    }, 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-500 to-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comece agora mesmo, é gratuito para o primeiro campeonato
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Experimente todas as funcionalidades sem compromisso e veja como nossa plataforma pode transformar a
            organização do seu evento de slackline.
          </p>

          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-emerald-100 mb-1">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-white/90 border-0 text-gray-800 placeholder:text-gray-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-100 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-white/90 border-0 text-gray-800 placeholder:text-gray-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-emerald-100 mb-1">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    className="bg-white/90 border-0 text-gray-800 placeholder:text-gray-500"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-emerald-800 hover:bg-emerald-900 text-white border-0 h-12">
                {submitted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Solicitação enviada
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Quero uma demonstração gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </Button>
            </form>

            <p className="text-emerald-100 text-sm mt-4">
              Ao enviar, você concorda com nossos termos de serviço e política de privacidade.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
