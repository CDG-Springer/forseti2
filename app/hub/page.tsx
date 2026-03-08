import { StickyFooter } from "@/components/sticky-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Hub de Inteligência Forseti | Artigos sobre Infraestrutura para Eventos",
    description: "Conhecimento técnico e soluções operacionais para garantir agilidade e erro zero na infraestrutura, tendas, palcos e tecnologia para eventos corporativos e shows.",
    alternates: {
        canonical: "https://forseti.site/hub",
    },
}

export default function HubPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            {/* Navbar simplificada */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center">
                    <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                        Forseti <span className="text-muted-foreground font-normal">Eventos</span>
                    </a>
                    <nav className="ml-auto flex items-center gap-6 text-sm font-medium">
                        <a href="/" className="transition-colors hover:text-foreground/80">Home</a>
                        <a href="/sobre" className="transition-colors hover:text-foreground/80">Sobre</a>
                        <a
                            href="https://wa.me/5514981899371?text=Ol%C3%A1%2C%20queria%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20do%20Hub!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-[#25D366] px-4 py-2 text-white hover:bg-[#20bd5a] transition-colors"
                        >
                            Falar com Especialista
                        </a>
                    </nav>
                </div>
            </header>

            <main className="flex-1 py-12 md:py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Hub de Inteligência <span className="text-[#25D366]">Forseti</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Decisões baseadas em engenharia e tecnologia. Aprenda a blindar o seu evento contra imprevistos climáticos, logísticos ou estruturais.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <a href="/artigo/aluguel-palco-movel-sp" className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block flex-col flex h-full">
                            <div className="h-48 overflow-hidden bg-black p-4 relative">
                                <img src="/Produtos/Palco.png" alt="Palco Móvel 8x6 iluminado" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider mb-2 block">Estruturas Profissionais</span>
                                    <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#25D366] transition-colors">A Engenharia do Lucro: Por que o Palco Móvel 8x6 é o Favorito</h2>
                                    <p className="text-muted-foreground text-sm line-clamp-3">Agilidade e montagem ultrarrápida que blinda o orçamento das produções B2B.</p>
                                </div>
                                <div className="mt-4 font-semibold text-sm">Ler artigo →</div>
                            </div>
                        </a>

                        <a href="/artigo/aluguel-starlink-eventos" className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block flex-col flex h-full">
                            <div className="h-48 overflow-hidden bg-black relative p-4">
                                <img src="/Produtos/Starlink.png" alt="Antena Starlink para internet em eventos" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider mb-2 block">Tecnologia B2B</span>
                                    <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#25D366] transition-colors">Conectividade Blindada: Como a Starlink Garante o Ponto de Venda</h2>
                                    <p className="text-muted-foreground text-sm line-clamp-3">Mantenha a monetização POS via satélite, sem perder caixas para apagões de rede 4G.</p>
                                </div>
                                <div className="mt-4 font-semibold text-sm">Ler artigo →</div>
                            </div>
                        </a>

                        <a href="/artigo/aluguel-tendas-sp" className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block flex-col flex h-full">
                            <div className="h-48 overflow-hidden bg-black relative p-2">
                                <img src="/Produtos/10x10.png" alt="Tendas 10x10 para estrutura de eventos" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider mb-2 block">Infra Estruturas Técnicas</span>
                                    <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#25D366] transition-colors">Guia Prático: Escolhendo a Cobertura entre 3x3, 5x5 e 10x10</h2>
                                    <p className="text-muted-foreground text-sm line-clamp-3">Garanta blindagem climática correta baseada no cronograma de plateia do seu layout.</p>
                                </div>
                                <div className="mt-4 font-semibold text-sm">Ler artigo →</div>
                            </div>
                        </a>

                        <a href="/artigo/locacao-painel-led-outdoor" className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block flex-col flex h-full">
                            <div className="h-48 overflow-hidden bg-black relative p-4">
                                <img src="/Produtos/telao.png" alt="Painel de LED Indoor atuando" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider mb-2 block">Vídeo Wall HD</span>
                                    <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#25D366] transition-colors">Retratos em Alta Definição: Painel de LED P2.91</h2>
                                    <p className="text-muted-foreground text-sm line-clamp-3">Nitidez de altíssimo brilho que valorizará o patrocinador Outdoor e as métricas Keynote.</p>
                                </div>
                                <div className="mt-4 font-semibold text-sm">Ler artigo →</div>
                            </div>
                        </a>

                        <a href="/artigo/infraestrutura-completa-eventos-sp" className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block flex-col flex h-full">
                            <div className="h-48 overflow-hidden bg-black relative p-2">
                                <img src="/Produtos/3x3.png" alt="Infra completa ativada em feira B2B" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider mb-2 block">Gestão e Orçamentos</span>
                                    <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#25D366] transition-colors">Hub de Excelência: Logística Única e a Proteção do ROI</h2>
                                    <p className="text-muted-foreground text-sm line-clamp-3">Remova a fragmentação do orçamento trabalhando todo layout integrado com apenas um parceiro Tático.</p>
                                </div>
                                <div className="mt-4 font-semibold text-sm">Ler artigo →</div>
                            </div>
                        </a>

                        <a href="/artigo/aluguel-maquininha-pagbank" className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block flex-col flex h-full">
                            <div className="h-48 overflow-hidden bg-black relative p-4">
                                <img src="/Produtos/Maquininha.png" alt="Maquininhas Terminais POS de alta velocidade." className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider mb-2 block">Caixas e Bares</span>
                                    <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#25D366] transition-colors">Vendas em Bares sem Quedas: Maquininhas Smart2 PagBank</h2>
                                    <p className="text-muted-foreground text-sm line-clamp-3">Milissegundos para engolir filas massivas com Wi-fi, 4G, e NFC com autonomia duradoura.</p>
                                </div>
                                <div className="mt-4 font-semibold text-sm">Ler artigo →</div>
                            </div>
                        </a>

                        <a href="/artigo/locacao-starlink-eventos-sp" className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block flex-col flex h-full">
                            <div className="h-48 overflow-hidden bg-black relative p-4">
                                <img src="/Produtos/Starlink.png" alt="Rede 4K limpa satelital sem interrupções." className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider mb-2 block">Rede via Satélite</span>
                                    <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#25D366] transition-colors">Internet Inabalável: Seguro contra o Caos Digital do Festival</h2>
                                    <p className="text-muted-foreground text-sm line-clamp-3">Rota de fuga contra o congestionamento civil. Garanta que o backstage e o estúdio Twitch não travem.</p>
                                </div>
                                <div className="mt-4 font-semibold text-sm">Ler artigo →</div>
                            </div>
                        </a>
                    </div>
                </div>
            </main>

            <StickyFooter />
        </div>
    )
}
