export function JsonLdSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": "https://forseti.site/#business",
                "name": "Forseti Eventos",
                "alternateName": "Forseti",
                "description":
                    "Empresa especializada em infraestrutura para eventos, iluminação cênica profissional, locação de Starlink, cenografia personalizada e projetos audiovisuais em São Paulo. Mais de 200 eventos realizados com padrão de erro zero.",
                "url": "https://forseti.site",
                "telephone": "+5514981899371",
                "email": "contato@forseti.site",
                "image": "https://forseti.site/og-image.png",
                "logo": "https://forseti.site/og-image.png",
                "priceRange": "$$",
                "currenciesAccepted": "BRL",
                "paymentAccepted": "Dinheiro, Cartão de Crédito, Cartão de Débito, PIX",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "São Paulo",
                    "addressRegion": "SP",
                    "addressCountry": "BR",
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -23.5505,
                    "longitude": -46.6333,
                },
                "founder": {
                    "@type": "Person",
                    "name": "Arnaldo de Freitas Francisco",
                    "jobTitle": "Fundador e Diretor Executivo",
                },
                "areaServed": {
                    "@type": "State",
                    "name": "São Paulo",
                },
                "serviceType": [
                    "Infraestrutura para eventos",
                    "Iluminação cênica profissional",
                    "Locação de Starlink para eventos",
                    "Cenografia personalizada",
                    "Projetos audiovisuais",
                    "Engenharia de estruturas para shows",
                    "Montagem de palcos e coberturas",
                    "Aluguel de painel de LED e projeção",
                    "Aluguel de maquininhas de cartão",
                    "Conectividade de alta velocidade para eventos",
                ],
                "sameAs": [
                    "https://instagram.com/forsetieventos",
                    "https://share.google/jX4taKV51UcYmJPA5",
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Atendimento ao cliente",
                    "telephone": "+5514981899371",
                    "email": "contato@forseti.site",
                    "availableLanguage": ["Portuguese"],
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://forseti.site/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Quanto custa alugar infraestrutura para eventos em SP?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O valor varia conforme o porte do evento, quantidade de equipamentos e duração da locação. A Forseti Eventos trabalha com orçamentos personalizados que incluem palcos, tendas, painéis de LED, iluminação cênica e sonorização profissional. Solicite seu orçamento sem compromisso pelo WhatsApp e receba uma proposta detalhada em até 24 horas.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "Como funciona o aluguel de Starlink para eventos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A Forseti oferece locação de antenas Starlink para eventos em locais remotos ou com cobertura de internet instável. O equipamento entrega velocidades de até 200 Mbps com latência inferior a 30ms, garantindo conectividade de alta velocidade para transmissões ao vivo, sistemas de pagamento e Wi-Fi para convidados. A instalação é feita pela nossa equipe técnica com checklist rigoroso de funcionamento.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "Vocês fornecem iluminação cênica profissional para eventos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim. A Forseti é especializada em projetos de iluminação cênica que transformam ambientes comuns em experiências imersivas. Utilizamos equipamentos profissionais com controle DMX, moving heads, par LEDs e refletores com temperatura de cor calibrada (de 2.700K a 6.500K). Cada projeto é desenhado sob medida para o conceito visual do seu evento, seja corporativo, social ou show.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "Qual o prazo para montagem de palcos e coberturas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O prazo de montagem depende do porte da estrutura. Palcos modulares de até 48m² (como o modelo 8x6m) são montados em aproximadamente 6 a 8 horas. Estruturas maiores com coberturas, box truss e grid de iluminação podem exigir de 1 a 3 dias. Nossa equipe de engenharia realiza laudos técnicos e segue normas de segurança (NR-18 e ABNT) para garantir tranquilidade jurídica e técnica completa.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "Por que escolher a Forseti para eventos corporativos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A Forseti se diferencia pelo padrão de erro zero: cada evento passa por checklists rigorosos de segurança, qualidade audiovisual e conectividade. Trabalhamos com engenharia de estruturas certificada, iluminação cênica de nível profissional e soluções exclusivas como Starlink para locais sem cobertura de internet. Já realizamos produções para festivais municipais, viradas esportivas e eventos corporativos de grande porte em São Paulo.",
                        },
                    },
                ],
            },
            {
                "@type": "Organization",
                "@id": "https://forseti.site/#organization",
                "name": "Forseti Eventos",
                "url": "https://forseti.site",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://forseti.site/og-image.png",
                },
                "founder": {
                    "@type": "Person",
                    "name": "Arnaldo de Freitas Francisco",
                },
                "sameAs": [
                    "https://instagram.com/forsetieventos",
                    "https://share.google/jX4taKV51UcYmJPA5",
                ],
            },
            {
                "@type": "WebPage",
                "@id": "https://forseti.site/#webpage",
                "name": "Forseti Eventos | Infraestrutura, Iluminação e Starlink para Eventos em SP",
                "description":
                    "Infraestrutura completa para eventos em São Paulo: palcos, iluminação cênica, painéis de LED, Starlink e cenografia personalizada. Padrão de erro zero. Solicite seu orçamento pelo WhatsApp.",
                "url": "https://forseti.site",
                "inLanguage": "pt-BR",
                "datePublished": "2025-01-01",
                "dateModified": "2026-02-25",
                "isPartOf": {
                    "@type": "WebSite",
                    "name": "Forseti Eventos",
                    "url": "https://forseti.site",
                },
                "about": { "@id": "https://forseti.site/#business" },
                "publisher": { "@id": "https://forseti.site/#organization" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".hero-summary", ".faq-answer"],
                },
            },
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
