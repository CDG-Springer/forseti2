import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { JsonLdSchema } from "@/components/json-ld-schema"
import "./globals.css"

export const metadata: Metadata = {
  title:
    "Forseti Eventos | Infraestrutura, Iluminação e Starlink para Eventos em SP",
  description:
    "Infraestrutura completa para eventos em São Paulo: palcos, iluminação cênica profissional, painéis de LED, Starlink e cenografia personalizada. Padrão de erro zero em cada produção. Solicite seu orçamento pelo WhatsApp.",
  keywords: [
    "infraestrutura para eventos",
    "iluminação cênica profissional",
    "locação de starlink para eventos",
    "cenografia personalizada sp",
    "projetos audiovisuais para empresas",
    "engenharia de estruturas para shows",
    "som e luz para eventos corporativos",
    "aluguel de painel de led e projeção",
    "conectividade de alta velocidade para eventos",
    "montagem de palcos e coberturas",
    "aluguel starlink",
    "aluguel maquininhas",
  ],
  authors: [{ name: "Arnaldo de Freitas Francisco" }],
  creator: "Forseti Eventos",
  publisher: "Forseti Eventos",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://forseti.site",
    siteName: "Forseti Eventos",
    title:
      "Forseti Eventos | Infraestrutura, Iluminação e Starlink para Eventos em SP",
    description:
      "Palcos, iluminação cênica, painéis de LED, Starlink e cenografia personalizada para eventos em São Paulo. Padrão de erro zero.",
    images: [
      {
        url: "https://forseti.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Forseti Eventos — Infraestrutura para eventos em São Paulo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forseti Eventos | Infraestrutura para Eventos em SP",
    description:
      "Palcos, iluminação cênica, painéis de LED, Starlink e cenografia para eventos. Orçamento pelo WhatsApp.",
    images: ["https://forseti.site/og-image.png"],
  },
  alternates: {
    canonical: "https://forseti.site",
  },
  category: "Eventos",
  other: {
    "google-site-verification": "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PKL33PSL');`,
          }}
        />
        {/* End Google Tag Manager */}
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <JsonLdSchema />
      </head>
      <body className="dark">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKL33PSL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
