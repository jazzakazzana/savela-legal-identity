import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a advogada pelo WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-3 rounded-xs bg-brand px-4 py-3.5 text-[0.75rem] font-bold tracking-[0.14em] text-gold uppercase shadow-lg ring-1 ring-gold/40 transition-colors hover:bg-gold hover:text-brand-deep md:right-8 md:bottom-8"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span className="hidden md:inline">Falar com a advogada</span>
    </a>
  );
}