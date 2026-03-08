import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Editorial & Estudos de Caso | Forseti Eventos",
    description: "Insights operacionais, guias técnicos e estratégias B2B para produção de eventos de alto padrão em São Paulo com a infraestrutura da Forseti.",
}

const articles = [
    {
        href: "/artigo/aluguel-palco-movel-sp",
        title: "A Engenharia do Lucro: Por que Escolher o Palco Móvel 8x6?",
        description: "Descubra como o aluguel do palco certo viabiliza o cronograma técnico do seu show e elimina custos invisíveis.",
        tag: "Estruturas Profissionais",
        image: "/Produtos/Palco.png",
        featured: true,
    },
    {
        href: "/artigo/aluguel-tendas-sp",
        title: "Engenharia de Estruturas: O Guia Definitivo de Tendas",
        description: "Entenda as normas e métricas essenciais para locação de coberturas em SP, do modelo 3x3 ao galpão 10x10.",
        tag: "Infraestrutura",
        image: "/Produtos/10x10.png",
        featured: false,
    },
    {
        href: "/artigo/aluguel-starlink-eventos",
        title: "Conectividade Blindada: A Era da Starlink em Eventos",
        description: "Evite quedas de bilheteria e transmissões interrompidas com a nossa internet outdoor inabalável.",
        tag: "Tecnologia",
        image: "/Produtos/Starlink.png",
        featured: false,
    },
    {
        href: "/artigo/locacao-painel-led-outdoor",
        title: "Retratos de Alta Definição: Telão de LED P2.91",
        description: "Como a locação de painéis outdoor maximiza a visibilidade dos seus patrocinadores mesmo sob luz do sol.",
        tag: "Audiovisual",
        image: "/Produtos/telao.png",
        featured: false,
    },
    {
        href: "/artigo/aluguel-maquininha-pagbank",
        title: "Vendas sem Interrupções: O Fim das Filas nos Bares",
        description: "Caos no bar nunca mais. A infraestrutura de pagamentos Smart2 PagBank com 10h de bateria e 4G.",
        tag: "Pagamentos",
        image: "/Produtos/Maquininha.png",
        featured: false,
    },
    {
        href: "/artigo/locacao-starlink-eventos-sp",
        title: "O Seguro Contra o Caos Digital em Grandes Festivais",
        description: "Por que investir em internet satelital redundante protege seu evento de colapsos na telefonia local em São Paulo.",
        tag: "Segurança",
        image: "/Produtos/Starlink.png",
        featured: true,
    },
    {
        href: "/artigo/infraestrutura-completa-eventos-sp",
        title: "Hub de Excelência: Logística Única e ROI Blindado",
        description: "Acabe com a dor de cabeça de gerenciar 15 fornecedores diferentes. Descubra a paz de espírito da infraestrutura unificada B2B.",
        tag: "Estratégia",
        image: "/Produtos/5x5.png",
        featured: false,
    },
]

export default function EditorialPage() {
    return (
        <div className="min-h-screen w-full relative bg-[#0a0a0a] text-zinc-100 overflow-hidden pb-32">
            {/* Background Ambience */}
            <div
                className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0"
                style={{
                    background: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(37, 211, 102, 0.08), transparent 70%)"
                }}
            />

            {/* Navbar Minimalist Replacement (Since layout has absolute headers we create a safe area) */}
            <div className="pt-24 md:pt-32" />

            <main className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                <header className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end border-b border-border/40 pb-12">
                    <div className="max-w-3xl">
                        <h5 className="text-[#25D366] font-semibold tracking-widest uppercase text-xs mb-4">Editorial de Inteligência</h5>
                        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.1] tracking-tight font-[family-name:var(--font-playfair)] mb-6 text-white">
                            Conhecimento que blinda o seu <i className="text-zinc-500 font-light">evento.</i>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl">
                            Artigos técnicos, estudos de viabilidade e arquitetura de soluções para produtores focados no lucro e segurança.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center animate-bounce-slow">
                            ↓
                        </div>
                    </div>
                </header>

                {/* Asymmetrical CSS Grid Magazine Style */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
                    {articles.map((article, idx) => {
                        // First item gets huge prominence
                        if (idx === 0) {
                            return (
                                <a key={article.href} href={article.href} className="group col-span-1 md:col-span-12 relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all hover:border-[#25D366]/50 min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row">
                                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 z-10 bg-gradient-to-t from-zinc-900 via-zinc-900 to-zinc-900/80 md:bg-none">
                                        <span className="inline-block px-3 py-1 rounded-full border border-[#25D366]/30 text-[#25D366] text-xs font-semibold tracking-wider uppercase mb-6 w-fit bg-[#25D366]/5">
                                            {article.tag}
                                        </span>
                                        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-6 leading-tight group-hover:text-[#25D366] transition-colors">
                                            {article.title}
                                        </h2>
                                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 max-w-md">
                                            {article.description}
                                        </p>
                                        <div className="flex items-center text-sm font-semibold text-white tracking-widest uppercase mt-auto">
                                            Ler Dossiê <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 absolute md:relative top-0 right-0 h-full order-1 md:order-2">
                                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-900/20 to-zinc-900 z-10 hidden md:block" />
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100"
                                        />
                                    </div>
                                </a>
                            )
                        }

                        // Featured item takes full width of a smaller sub-grid or half-width
                        if (article.featured && idx !== 0) {
                            return (
                                <a key={article.href} href={article.href} className="group col-span-1 md:col-span-8 rounded-3xl overflow-hidden bg-zinc-900/50 border border-zinc-800 transition-all hover:bg-zinc-900 hover:border-zinc-700 min-h-[400px] flex flex-col relative">
                                    <div className="h-48 md:h-64 overflow-hidden relative border-b border-zinc-800/50 bg-black/50">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 opacity-90"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-1 justify-between">
                                        <div>
                                            <span className="text-[#25D366] text-xs font-semibold tracking-wider uppercase mb-3 block">
                                                {article.tag}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-white mb-4 leading-tight group-hover:text-[#25D366] transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="text-zinc-400 line-clamp-2 md:line-clamp-3">
                                                {article.description}
                                            </p>
                                        </div>
                                        <div className="font-semibold text-sm pt-6 mt-6 border-t border-zinc-800/50">
                                            Ler artigo →
                                        </div>
                                    </div>
                                </a>
                            )
                        }

                        // Normal items
                        return (
                            <a key={article.href} href={article.href} className="group col-span-1 md:col-span-4 rounded-3xl overflow-hidden bg-zinc-900/30 border border-zinc-800 transition-all hover:bg-zinc-900 hover:border-zinc-700 flex flex-col">
                                <div className="h-48 overflow-hidden relative bg-black/50">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity group-hover:mix-blend-normal opacity-60 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                                    <div>
                                        <span className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase mb-3 block group-hover:text-[#25D366] transition-colors">
                                            {article.tag}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-[family-name:var(--font-playfair)] text-white mb-3 leading-snug group-hover:text-zinc-300 transition-colors">
                                            {article.title}
                                        </h3>
                                    </div>
                                    <div className="hidden group-hover:block text-zinc-400 text-sm mt-4 animate-in fade-in slide-in-from-left-2 duration-300">
                                        Ler artigo →
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}
