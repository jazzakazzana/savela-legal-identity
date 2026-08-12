import { CtaLink } from "./Cta";
import { whatsappUrl, mailtoUrl } from "@/config/site";

export function ContactCTA() {
  return (
    <section className="bg-brand py-20 text-offwhite md:py-28">
      <div className="container-site">
        <p className="eyebrow">Atendimento jurídico</p>
        <h2 className="mt-6 max-w-3xl font-display text-3xl md:text-5xl">
          Precisa de orientação jurídica?
        </h2>
        <p className="measure mt-6 text-lg font-light text-offwhite/80">
          Entre em contato para consultar informações sobre atendimento e disponibilidade.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <CtaLink href={whatsappUrl} external>
            Falar pelo WhatsApp
          </CtaLink>
          <CtaLink href={mailtoUrl} variant="secondary">
            Enviar e-mail
          </CtaLink>
        </div>
        <p className="mt-8 text-xs font-light text-offwhite/55">
          O envio de uma mensagem não constitui automaticamente contratação de serviços jurídicos.
        </p>
      </div>
    </section>
  );
}