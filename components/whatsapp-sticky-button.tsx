"use client"

import { MessageCircle } from "lucide-react"

export function WhatsappStickyButton() {
    const handleClick = () => {
        // Rastreamento GTM
        if (typeof window !== "undefined" && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: "whatsapp_click",
                button_location: "sticky_button",
            })
        }
    }

    return (
        <a
            href="https://wa.me/5514981899371?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20r%C3%A1pido!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 md:bottom-8 md:right-8"
            aria-label="Orçamento Rápido via WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Orçamento Rápido</span>
        </a>
    )
}
