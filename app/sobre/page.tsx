import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Sobre a Forseti Eventos | Quem Somos e Nossa História",
    description:
        "Conheça a Forseti Eventos, empresa fundada por Arnaldo de Freitas Francisco, especializada em infraestrutura para eventos em São Paulo. Iluminação cênica, palcos, Starlink e cenografia com padrão de erro zero.",
    openGraph: {
        title: "Sobre a Forseti Eventos | Nossa História e Equipe",
        description:
            "Fundada por Arnaldo de Freitas Francisco, a Forseti entrega infraestrutura de alto padrão para eventos em São Paulo.",
        url: "https://forseti.site/sobre",
        images: [
            {
                url: "https://forseti.site/og-image.png",
                width: 1200,
                height: 630,
                alt: "Forseti Eventos — Sobre nós",
            },
        ],
    },
    alternates: {
        canonical: "https://forseti.site/sobre",
    },
}

export default function SobrePage() {
    return (
        <div className="min-h-screen w-full relative bg-black">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
                }}
            />

            {/* Header */}
            <header className="sticky top-4 z-[9999] mx-auto flex w-full max-w-5xl flex-row items-center justify-between self-start rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg px-4 py-2">
                <Link
                    className="z-50 flex items-center justify-center gap-2"
                    href="/"
                >
                    <span className="text-foreground font-bold text-xl">Forseti</span>
                </Link>
                <nav className="flex items-center gap-4 text-sm">
                    <Link
                        href="/"
                        className="font-medium transition-colors hover:text-foreground text-muted-foreground"
                    >
                        Home
                    </Link>
                    <Link
                        href="/sobre"
                        className="font-medium transition-colors hover:text-foreground text-foreground"
                    >
                        Sobre
                    </Link>
                    <a
                        href="https://wa.me/5514981899371?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20evento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all"
                        style={{ backgroundColor: "#2BAB77", color: "#121113" }}
                    >
                        Solicitar Orçamento
                    </a>
                </nav>
            </header>

            {/* Content */}
            <main className="relative z-10 mx-auto max-w-4xl px-4 py-24 md:px-6">
                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="mb-8 text-sm text-muted-foreground"
                >
                    <ol className="flex items-center gap-2">
                        <li>
                            <Link href="/" className="hover:text-foreground transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-foreground">Sobre</li>
                    </ol>
                </nav>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                    Sobre a Forseti Eventos
                </h1>

                {/* Answer-First Summary */}
                <div className="hero-summary mb-12 p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02]">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A <strong className="text-foreground">Forseti Eventos</strong> é uma
                        empresa de São Paulo especializada em{" "}
                        <strong className="text-foreground">
                            infraestrutura completa para eventos
                        </strong>
                        , desde a locação de palcos e painéis de LED até soluções exclusivas
                        como{" "}
                        <strong className="text-foreground">
                            Starlink para conectividade em locais remotos
                        </strong>
                        . Com um compromisso inegociável com o{" "}
                        <strong className="text-foreground">padrão de erro zero</strong>,
                        cada produção passa por checklists rigorosos de segurança, qualidade
                        audiovisual e engenharia estrutural.
                    </p>
                </div>

                {/* Founder Section */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
                        Fundador
                    </h2>
                    <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02]">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Arnaldo de Freitas Francisco
                        </h3>
                        <p className="text-sm font-medium mb-4" style={{ color: "#2BAB77" }}>
                            Fundador e Diretor Executivo
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Com ampla experiência na produção e organização de eventos de grande
                            porte em São Paulo, Arnaldo fundou a Forseti com a missão de
                            eliminar as falhas técnicas que comprometem a segurança e o impacto
                            emocional das grandes produções. Sua visão combina engenharia de
                            precisão com design cênico para transformar espaços comuns em
                            experiências imersivas.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Sob sua liderança, a Forseti já realizou a infraestrutura de
                            festivais municipais, viradas esportivas e eventos corporativos,
                            sempre com foco em segurança estrutural certificada, qualidade
                            audiovisual de primeiro nível e inovação — como a introdução do
                            Starlink para garantir conectividade de alta velocidade (até 200
                            Mbps) em locais sem cobertura de rede.
                        </p>
                    </div>
                </section>

                {/* Services Section */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
                        Nossos Serviços
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                title: "Palcos e Coberturas",
                                desc: "Montagem de palcos modulares (até 48m²), box truss, grids de iluminação e coberturas com engenharia certificada conforme NR-18.",
                            },
                            {
                                title: "Iluminação Cênica",
                                desc: "Projetos de iluminação profissional com controle DMX, moving heads, par LEDs e temperatura de cor de 2.700K a 6.500K.",
                            },
                            {
                                title: "Painéis de LED e Projeção",
                                desc: "Telões de LED outdoor de alta resolução (6x4m, pitch 2.91mm) e projeções mapeadas para cenografia imersiva.",
                            },
                            {
                                title: "Starlink para Eventos",
                                desc: "Locação de antenas Starlink com até 200 Mbps e latência inferior a 30ms para locais remotos ou com internet instável.",
                            },
                            {
                                title: "Sonorização Profissional",
                                desc: "Sistemas de som dimensionados para cada evento, com clareza acústica calibrada por técnicos especializados.",
                            },
                            {
                                title: "Cenografia Personalizada",
                                desc: "Design de ambientes exclusivos que transformam espaços comuns em experiências visuais memoráveis.",
                            },
                            {
                                title: "Maquininhas de Cartão",
                                desc: "Aluguel de terminais de pagamento para barracas, bilheterias e pontos de venda em eventos.",
                            },
                            {
                                title: "Organização Completa",
                                desc: "Planejamento e execução de eventos do zero, com cronograma, logística, fornecedores e checklist de segurança.",
                            },
                        ].map((service) => (
                            <div
                                key={service.title}
                                className="p-5 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] transition-all hover:border-white/20"
                            >
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
                        Nossa Missão
                    </h2>
                    <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02]">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Eliminar as falhas técnicas que comprometem a segurança e o impacto
                            emocional das grandes produções. Cada evento Forseti é uma promessa
                            de excelência: som que se sente na pele, luz que transforma e
                            conectividade que nunca falha.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span style={{ color: "#2BAB77" }} className="mt-1 text-lg">
                                    ✓
                                </span>
                                <span>
                                    <strong className="text-foreground">Erro Zero</strong> —
                                    Checklists rigorosos em cada etapa, da montagem à desmontagem
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: "#2BAB77" }} className="mt-1 text-lg">
                                    ✓
                                </span>
                                <span>
                                    <strong className="text-foreground">Segurança Certificada</strong>{" "}
                                    — Laudos técnicos e conformidade com NR-18 e ABNT
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: "#2BAB77" }} className="mt-1 text-lg">
                                    ✓
                                </span>
                                <span>
                                    <strong className="text-foreground">Inovação</strong> — Starlink,
                                    painéis de LED de último modelo e controle DMX avançado
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span style={{ color: "#2BAB77" }} className="mt-1 text-lg">
                                    ✓
                                </span>
                                <span>
                                    <strong className="text-foreground">Experiência Imersiva</strong>{" "}
                                    — Cada projeto é desenhado para gerar emoção e impacto visual
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
                        Vamos criar seu próximo evento?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Entre em contato pelo WhatsApp e receba um orçamento personalizado em
                        até 24 horas. Cada detalhe será planejado com o padrão Forseti de
                        excelência.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/5514981899371?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20evento."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold transition-all hover:scale-105"
                            style={{ backgroundColor: "#2BAB77", color: "#121113" }}
                        >
                            💬 Solicitar Orçamento no WhatsApp
                        </a>
                        <a
                            href="https://instagram.com/forsetieventos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-foreground transition-all hover:border-white/40 hover:scale-105"
                        >
                            📸 Siga no Instagram
                        </a>
                    </div>
                </section>
            </main>
        </div>
    )
}
