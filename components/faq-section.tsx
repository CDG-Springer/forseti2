"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "Quanto custa alugar infraestrutura para eventos em SP?",
      answer:
        "O valor varia conforme o porte do evento, quantidade de equipamentos e duração da locação. A Forseti Eventos trabalha com orçamentos personalizados que incluem palcos modulares (até 48m²), tendas, painéis de LED, iluminação cênica e sonorização profissional. Solicite seu orçamento sem compromisso pelo WhatsApp e receba uma proposta detalhada em até 24 horas.",
    },
    {
      question: "Como funciona o aluguel de Starlink para eventos?",
      answer:
        "A Forseti oferece locação de antenas Starlink para eventos em locais remotos ou com cobertura de internet instável. O equipamento entrega velocidades de até 200 Mbps com latência inferior a 30ms, garantindo conectividade de alta velocidade para transmissões ao vivo, sistemas de pagamento e Wi-Fi para convidados. Nossa equipe técnica realiza a instalação e testes rigorosos de funcionamento antes do evento.",
    },
    {
      question: "Vocês fornecem iluminação cênica profissional para eventos?",
      answer:
        "Sim. A Forseti é especializada em projetos de iluminação cênica que transformam ambientes comuns em experiências imersivas. Utilizamos equipamentos profissionais com controle DMX, moving heads, par LEDs e refletores com temperatura de cor calibrada entre 2.700K e 6.500K. Cada projeto é desenhado sob medida para o conceito visual do seu evento, seja corporativo, social ou show ao ar livre.",
    },
    {
      question: "Qual o prazo para montagem de palcos e coberturas?",
      answer:
        "O prazo de montagem depende do porte da estrutura. Palcos modulares de até 48m² (como o modelo 8x6m) são montados em aproximadamente 6 a 8 horas. Estruturas maiores com coberturas, box truss e grid de iluminação podem exigir de 1 a 3 dias. Nossa equipe de engenharia realiza laudos técnicos e segue normas de segurança (NR-18 e ABNT) para garantir tranquilidade jurídica e técnica completa.",
    },
    {
      question: "Por que escolher a Forseti para eventos corporativos?",
      answer:
        "A Forseti se diferencia pelo padrão de erro zero: cada evento passa por checklists rigorosos de segurança, qualidade audiovisual e conectividade. Trabalhamos com engenharia de estruturas certificada, iluminação cênica de nível profissional e soluções exclusivas como locação de Starlink para locais sem cobertura de internet. Já realizamos produções para festivais municipais, viradas esportivas e eventos corporativos de grande porte em São Paulo.",
    },
    {
      question: "Quais tipos de eventos vocês organizam?",
      answer:
        "Organizamos todos os tipos de eventos: festivais municipais, viradas esportivas, eventos corporativos e confraternizações, casamentos e festas de aniversário, lançamentos de produtos, shows e espetáculos ao ar livre. Cada evento recebe um projeto personalizado com cronograma, logística, fornecedores e checklist de segurança — da montagem à desmontagem.",
    },
  ]

  return (
    <section id="faq" className="relative overflow-hidden pb-120 pt-24">
      {/* Background blur effects */}
      <div className="bg-primary/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>
      <div className="bg-primary/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>

      <div className="z-10 container mx-auto px-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-primary/40 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase">
            <span>✶</span>
            <span className="text-sm">Perguntas Frequentes</span>
          </div>
        </motion.div>

        <motion.h2
          className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Dúvidas sobre{" "}
          <span className="bg-gradient-to-b from-foreground via-rose-200 to-primary bg-clip-text text-transparent">
            infraestrutura para eventos
          </span>
          ?
        </motion.h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-answer from-secondary/40 to-secondary/10 rounded-2xl border border-white/10 bg-gradient-to-b p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 hover:border-white/20 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className=""
                >
                  {openItems.includes(index) ? (
                    <Minus className="text-primary flex-shrink-0 transition duration-300" size={24} />
                  ) : (
                    <Plus className="text-primary flex-shrink-0 transition duration-300" size={24} />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    className="mt-4 text-muted-foreground leading-relaxed overflow-hidden"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          className="mx-auto mt-12 max-w-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Tem outra dúvida? Fale diretamente com nossa equipe.
          </p>
          <a
            href="https://wa.me/5514981899371?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20r%C3%A1pido!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).dataLayer) {
                (window as any).dataLayer.push({ event: "whatsapp_click", button_location: "faq_section" })
              }
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold shadow-lg transition-all hover:scale-105"
            style={{ backgroundColor: "#25D366", color: "#ffffff" }}
          >
            Orçamento Rápido
          </a>
        </motion.div>
      </div>
    </section>
  )
}
