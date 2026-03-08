"use client"

import React from 'react'

interface WhatsappArticleButtonProps {
    url: string;
    label: string;
}

export function WhatsappArticleButton({ url, label }: WhatsappArticleButtonProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: "#25D366", color: "#ffffff" }}
            onClick={() => {
                if (typeof window !== "undefined" && (window as any).dataLayer) {
                    (window as any).dataLayer.push({ event: "whatsapp_click", button_location: "artigo_cta" })
                }
            }}
        >
            {label}
        </a>
    )
}
