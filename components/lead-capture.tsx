"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function LeadCapture() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section className="py-20 bg-emerald-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Pronto para transformar seu campeonato?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Agende uma demonstração gratuita e descubra como nossa plataforma pode elevar o nível do seu evento de
            slackline.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor email"
              className="bg-white/90 border-0 h-12 text-gray-800 placeholder:text-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-emerald-800 hover:bg-emerald-900 text-white h-12 px-6">
              {submitted ? (
                <span className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Enviado
                </span>
              ) : (
                <span className="flex items-center">
                  Agendar demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              )}
            </Button>
          </form>

          <p className="text-emerald-200 text-sm mt-4">Responderemos em até 24 horas com os próximos passos.</p>
        </motion.div>
      </div>
    </section>
  )
}
