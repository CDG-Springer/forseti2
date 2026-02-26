"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isHovering1, setIsHovering1] = useState(false)
  const [isHovering2, setIsHovering2] = useState(false)

  return (
    <section id="features"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-background px-4 py-16 md:py-24"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-7xl"
      >
        <h2
          className={cn(
            "via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            geist.className,
          )}
        >
          Nossos Eventos
        </h2>
        <div>
          <div>
            <div className="grid grid-cols-12 gap-4 justify-center">
              {/* Festival de aniversário de Mariporã 2025 */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-2"
                onMouseEnter={() => setIsHovering1(true)}
                onMouseLeave={() => setIsHovering1(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(43, 171, 119, 0.6)",
                  boxShadow: "0 0 30px rgba(43, 171, 119, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Festival de Aniversário de Mairiporã 2025</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      A Forseti entregou a infraestrutura completa para o Festival de Aniversário de Mairiporã 2025: montagem de palco modular de 48m², grid de iluminação cênica com controle DMX, sonorização profissional e conectividade via Starlink para transmissão ao vivo. Resultado: evento sem falhas técnicas e público totalmente imerso.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative">
                  <div
                    className="relative w-full h-[400px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/maripora/maripora.png"
                      alt="Festival de aniversário de Mariporã 2025"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Virada Esportiva - São Paulo 2025 */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-8"
                onMouseEnter={() => setIsHovering2(true)}
                onMouseLeave={() => setIsHovering2(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(43, 171, 119, 0.6)",
                  boxShadow: "0 0 30px rgba(43, 171, 119, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Virada Esportiva — São Paulo 2025</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Projeto audiovisual completo para a Virada Esportiva de São Paulo 2025: painéis de LED outdoor de alta resolução (pitch 2.91mm), iluminação cênica com temperatura de cor calibrada de 2.700K a 6.500K, e engenharia de estruturas com laudos técnicos conforme NR-18 e normas ABNT. Infraestrutura que garante segurança e impacto visual.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative">
                  <div
                    className="relative w-full h-[400px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    {/* Placeholder Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4">🏃‍♂️</div>
                        <div className="text-xl font-semibold">Virada Esportiva</div>
                        <div className="text-sm opacity-80">São Paulo 2025</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}