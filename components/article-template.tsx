import { ReactNode } from "react"

interface ArticleTemplateProps {
    category: string
    title: string
    description: string
    date: string
    readTime: string
    imageSrc: string
    imageAlt: string
    children: ReactNode
}

const articlesRecommender = [
    { title: "Internet Satelital para Eventos", href: "/artigo/aluguel-starlink-eventos", img: "/Produtos/Starlink.png", tag: "Tecnologia" },
    { title: "Guia Definitivo de Tendas Piramidais", href: "/artigo/aluguel-tendas-sp", img: "/Produtos/10x10.png", tag: "Infraestrutura" },
    { title: "Palco Móvel 8x6: A Engenharia do Lucro", href: "/artigo/aluguel-palco-movel-sp", img: "/Produtos/Palco.png", tag: "Estruturas" }
]

export function ArticleTemplate({
    category,
    title,
    description,
    date,
    readTime,
    imageSrc,
    imageAlt,
    children,
}: ArticleTemplateProps) {
    return (
        <article className="min-h-screen bg-[#050505] text-zinc-300 w-full overflow-hidden antialiased">
            {/* Editorial Hero Section */}
            <header className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-end pb-12 md:pb-24">
                {/* Background Image / Texture Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-cover object-top opacity-30 select-none scale-105"
                        draggable="false"
                    />
                    {/* Gradients to blend with background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 to-transparent" />
                </div>

                <div className="container mx-auto px-4 md:px-8 max-w-5xl z-10 relative mt-32">
                    {/* Metadata Track */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-widest uppercase mb-8 md:mb-12">
                        <a href="/artigo" className="text-zinc-500 hover:text-white transition-colors">← Voltar ao Editorial</a>
                        <span className="text-zinc-700 hidden md:inline">|</span>
                        <span className="text-[#25D366]">{category}</span>
                        <span className="text-zinc-700 hidden sm:inline">|</span>
                        <span className="text-zinc-400 hidden sm:inline">{date}</span>
                        <span className="text-zinc-700 hidden sm:inline">|</span>
                        <span className="text-zinc-400 font-mono tracking-tight hidden sm:inline">{readTime} min de leitura</span>
                    </div>

                    {/* Title - Fluid Typography */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-[family-name:var(--font-playfair)] leading-[1.05] tracking-tight text-white mb-6 md:mb-10 max-w-4xl">
                        {title}
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed">
                        {description}
                    </p>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="container mx-auto px-4 md:px-8 max-w-3xl relative z-20 pb-20 md:pb-32">
                {/* The typography prose styling makes generic tags beautiful and widely spaced */}
                <div className="prose prose-invert prose-lg md:prose-xl max-w-none
                        prose-headings:font-[family-name:var(--font-playfair)] prose-headings:font-normal prose-headings:text-zinc-100 prose-headings:leading-tight
                        prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-zinc-800/50 prose-h2:pb-4
                        prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-4
                        prose-p:text-zinc-300 prose-p:leading-[1.8] prose-p:font-light prose-p:mb-8
                        prose-strong:text-white prose-strong:font-medium
                        prose-ul:list-disc prose-ul:ml-2 prose-ul:mt-6 prose-ul:mb-10 prose-ul:space-y-3 prose-li:text-zinc-300 prose-li:leading-relaxed prose-li:marker:text-zinc-600
                        prose-a:text-[#25D366] prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-zinc-800/50 prose-img:w-full prose-img:my-16">
                    {children}
                </div>

                {/* Closing Separator */}
                <div className="flex justify-center my-24">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 mx-2" />
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 mx-2" />
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 mx-2" />
                </div>

                {/* Read Next Section */}
                <section className="border-t border-zinc-800/50 pt-20">
                    <h4 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-12 text-center md:text-left">
                        Recomendados
                    </h4>

                    {/* Recommendation Grid (CSS Subgrid emulation / CSS Grid) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {articlesRecommender.filter(a => a.href !== (typeof window !== 'undefined' ? window.location.pathname : '')).slice(0, 2).map((rec, i) => (
                            <a key={i} href={rec.href} className="group block rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
                                <div className="h-40 overflow-hidden relative bg-black">
                                    <img src={rec.img} alt={rec.title} className="w-full h-full object-contain p-4 opacity-50 group-hover:opacity-80 transition-opacity duration-500 scale-95 group-hover:scale-100 mix-blend-luminosity group-hover:mix-blend-normal" />
                                </div>
                                <div className="p-6">
                                    <span className="text-[10px] text-[#25D366] tracking-widest uppercase font-semibold mb-3 block">{rec.tag}</span>
                                    <h5 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-2 leading-tight group-hover:text-zinc-300 transition-colors">{rec.title}</h5>
                                    <span className="text-xs text-zinc-500 font-medium">Ler dossiê →</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </main>
        </article>
    )
}
