import { Link } from "@tanstack/react-router";
import { mailtoUrl, siteConfig, whatsappUrl } from "@/config/site";

export function ContactForm() {
  return (
    <div className="max-w-2xl border border-border bg-offwhite p-6 md:p-8">
      <p className="text-[1.0625rem] leading-relaxed font-light text-graphite">
        O formulário de envio automático ainda não está disponível. Para solicitar informações
        sobre atendimento, utilize um dos canais diretos abaixo.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xs bg-gold px-7 py-3.5 text-[0.8125rem] font-bold tracking-[0.16em] text-brand-deep uppercase transition-colors hover:bg-brand hover:text-offwhite"
        >
          WhatsApp {siteConfig.contact.phoneDisplay}
        </a>
        <a
          href={mailtoUrl}
          className="inline-flex items-center justify-center rounded-xs border border-gold/70 px-7 py-3.5 text-[0.8125rem] font-bold tracking-[0.16em] text-brand uppercase transition-colors hover:bg-gold hover:text-brand-deep"
        >
          Enviar e-mail
        </a>
      </div>

      <p className="mt-8 border-l border-gold pl-5 text-sm leading-relaxed font-light text-graphite">
        Neste primeiro contato, evite enviar documentos, dados sensíveis ou detalhes confidenciais
        do caso. Informações adicionais poderão ser solicitadas pelos canais adequados durante o
        atendimento.
      </p>

      <p className="mt-5 text-xs font-light text-graphite">
        O contato inicial não constitui automaticamente contratação de serviços jurídicos. Consulte
        também a{" "}
        <Link to="/politica-de-privacidade" className="link-underline text-brand">
          Política de Privacidade
        </Link>
        .
      </p>
    </div>
  );
}
