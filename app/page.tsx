"use client"
import { useState, useEffect } from "react"
import Hero from "@/components/home/hero"
import Features from "@/components/features"
import { TestimonialsSection } from "@/components/testimonials"
import { NewReleasePromo } from "@/components/new-release-promo"
import { FAQSection } from "@/components/faq-section"
import { StickyFooter } from "@/components/sticky-footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement
      root.classList.remove("light", "system")
      root.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 100)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        const headerOffset = 120 // Account for sticky header height + margin
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const products = [
    { src: "/Produtos/3x3.png", name: "Tenda 3x3", alt: "Tenda 3x3 metros para eventos e feiras em São Paulo" },
    { src: "/Produtos/5x5.png", name: "Tenda 5x5", alt: "Tenda 5x5 metros para eventos corporativos e festivais" },
    { src: "/Produtos/10x10.png", name: "Tenda 10x10", alt: "Tenda 10x10 metros para eventos de grande porte com cobertura" },
    { src: "/Produtos/Maquininha.png", name: "Maquininha", alt: "Aluguel de maquininha de cartão para eventos e feiras" },
    { src: "/Produtos/Palco.png", name: "Palco 8x6 (Móvel)", alt: "Palco modular 8x6 metros para shows e eventos ao ar livre" },
    { src: "/Produtos/telao.png", name: "Telão 6x4 (2.91 Outdoor)", alt: "Painel de LED outdoor 6x4 metros com pitch 2.91mm para eventos" },
    { src: "/Produtos/Starlink.png", name: "Starlink", alt: "Aluguel de Starlink para conectividade de alta velocidade em eventos", wide: true },
  ]

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Desktop Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${isScrolled ? "max-w-4xl px-3" : "max-w-5xl px-4"
          } py-2`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <a
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${isScrolled ? "ml-3" : ""
            }`}
          href="#"
        >
          <span className="text-foreground font-bold text-xl">Forseti</span>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <a
            href="#features"
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("features")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">Nossos eventos</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            href="/sobre"
          >
            <span className="relative z-20">Sobre</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            href="/artigo"
          >
            <span className="relative z-20">Nossos Artigos</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            href="/hub"
          >
            <span className="relative z-20">Hub de Inteligência</span>
          </a>
          <a
            href="#testimonials"
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("testimonials")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">Depoimentos</span>
          </a>
          <a
            href="#faq"
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("faq")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
          >
            <span className="relative z-20">Perguntas</span>
          </a>
        </div>

        <div className="relative z-50 flex items-center gap-4">
          <a
            href="https://wa.me/5514981899371?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20r%C3%A1pido!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).dataLayer) {
                (window as any).dataLayer.push({ event: "whatsapp_click", button_location: "navbar_header" })
              }
            }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#25D366", color: "#ffffff" }}
          >
            Orçamento Rápido
          </a>

        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <a
          className="flex items-center justify-center gap-2"
          href="#"
        >
          <span className="text-foreground font-bold text-lg">Forseti</span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("features")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Nossos eventos
              </button>
              <button
                onClick={() => handleMobileNavClick("testimonials")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Começar
              </button>
              <a
                href="/sobre"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50 block"
              >
                Sobre
              </a>
              <a
                href="/artigo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50 block"
              >
                Nossos Artigos
              </a>
              <a
                href="/hub"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50 block"
              >
                Hub de Inteligência
              </a>
              <button
                onClick={() => handleMobileNavClick("faq")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Perguntas
              </button>
              <div className="border-t border-border/50 pt-4 mt-4 flex flex-col space-y-3">
                <a
                  href="https://wa.me/5514981899371?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20r%C3%A1pido!"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).dataLayer) {
                      (window as any).dataLayer.push({ event: "whatsapp_click", button_location: "navbar_mobile" })
                    }
                    setIsMobileMenuOpen(false)
                  }}
                  className="px-4 py-3 text-lg font-semibold transition-colors rounded-lg block text-center"
                  style={{ backgroundColor: "#25D366", color: "#ffffff" }}
                >
                  Orçamento Rápido
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      {/* Products Section */}
      <section id="products" className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 mt-16">
        <div className="text-center mb-8">
          <h2 className="via-foreground bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]">Nossos Produtos</h2>
          <p className="mt-2 text-muted-foreground">Conheça nossos produtos disponíveis para o seu evento</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {products.map(({ src, name, alt, wide }) => (
            <div
              key={name}
              className={`w-full flex flex-col items-center ${wide ? "md:basis-[calc(50%-2rem)] lg:basis-[calc(50%-2rem)]" : "md:basis-[calc(33.333%-2rem)] lg:basis-[calc(33.333%-2rem)]"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className={`w-full h-80 ${wide ? "object-contain" : "object-cover"}`}
              />
              <h3 className="mt-4 text-foreground text-2xl font-semibold tracking-tight text-center">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </section>


      {/* Testimonials */}
      <div id="testimonials" className="bg-background">
        <TestimonialsSection />
      </div>

      {/* Hub de Inteligência Preview */}
      <section className="bg-[#050505] py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] tracking-tight text-white mb-6">
                Hub de Inteligência <span className="text-[#25D366] italic">Forseti</span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                Soluções operacionais para blindar seu evento contra falhas técnica. Acesso aos playbooks exatos dos nossos engenheiros logísticos.
              </p>
            </div>
            <a
              href="/hub"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white hover:border-zinc-700"
            >
              Ver todos os artigos →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/artigo/aluguel-starlink-eventos" className="group block rounded-3xl bg-zinc-900/50 border border-zinc-800/80 overflow-hidden hover:border-zinc-700/80 transition-all duration-500 hover:shadow-2xl hover:shadow-[#25D366]/5 flex flex-col h-full hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative bg-black">
                <img src="/Produtos/Starlink.png" alt="Antena Starlink para internet em eventos" className="w-full h-full object-contain p-6 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between bg-gradient-to-t from-zinc-900/40 to-transparent">
                <div>
                  <span className="text-xs font-semibold text-[#25D366] uppercase tracking-widest mb-4 block">Tecnologia</span>
                  <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-medium mb-3 leading-tight text-zinc-100 group-hover:text-white transition-colors">Conectividade Blindada via Starlink</h3>
                  <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">Evite quedas de bilheteria e transmissões interrompidas com a nossa internet outdoor.</p>
                </div>
                <div className="mt-8 font-medium text-sm text-zinc-500 group-hover:text-[#25D366] transition-colors flex items-center gap-2">Ler artigo <span className="group-hover:translate-x-1 transition-transform">→</span></div>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/artigo/aluguel-tendas-sp" className="group block rounded-3xl bg-zinc-900/50 border border-zinc-800/80 overflow-hidden hover:border-zinc-700/80 transition-all duration-500 hover:shadow-2xl hover:shadow-[#25D366]/5 flex flex-col h-full hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative bg-black">
                <img src="/Produtos/10x10.png" alt="Tendas 10x10 para estrutura de eventos" className="w-full h-full object-contain p-6 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between bg-gradient-to-t from-zinc-900/40 to-transparent">
                <div>
                  <span className="text-xs font-semibold text-[#25D366] uppercase tracking-widest mb-4 block">Infraestrutura</span>
                  <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-medium mb-3 leading-tight text-zinc-100 group-hover:text-white transition-colors">Engenharia de Estruturas: O Guia de Tendas</h3>
                  <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">Entenda as normas e métricas essenciais para locação de coberturas (3x3 a 10x10).</p>
                </div>
                <div className="mt-8 font-medium text-sm text-zinc-500 group-hover:text-[#25D366] transition-colors flex items-center gap-2">Ler artigo <span className="group-hover:translate-x-1 transition-transform">→</span></div>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/artigo/aluguel-palco-movel-sp" className="group block rounded-3xl bg-zinc-900/50 border border-zinc-800/80 overflow-hidden hover:border-zinc-700/80 transition-all duration-500 hover:shadow-2xl hover:shadow-[#25D366]/5 flex flex-col h-full hover:-translate-y-1">
              <div className="h-56 overflow-hidden relative bg-black">
                <img src="/Produtos/Palco.png" alt="Palco Móvel 8x6 para shows" className="w-full h-full object-contain p-6 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between bg-gradient-to-t from-zinc-900/40 to-transparent">
                <div>
                  <span className="text-xs font-semibold text-[#25D366] uppercase tracking-widest mb-4 block">Logística Core</span>
                  <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-medium mb-3 leading-tight text-zinc-100 group-hover:text-white transition-colors">A Engenharia do Lucro: Palco Móvel 8x6</h3>
                  <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">Descubra como o aluguel do palco certo viabiliza o cronograma técnico do seu show.</p>
                </div>
                <div className="mt-8 font-medium text-sm text-zinc-500 group-hover:text-[#25D366] transition-colors flex items-center gap-2">Ler artigo <span className="group-hover:translate-x-1 transition-transform">→</span></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <NewReleasePromo />

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  )
}
