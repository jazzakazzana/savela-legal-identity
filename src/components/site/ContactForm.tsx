import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";

const field =
  "mt-2 w-full rounded-xs border border-border bg-background px-4 py-3 text-[0.9375rem] font-light text-ink outline-none transition-colors focus:border-gold";
const label = "text-[0.6875rem] font-bold tracking-[0.2em] text-brand uppercase";

/**
 * Formulário preparado para integração futura (nenhum dado é enviado a
 * serviços externos neste momento).
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="nome">
            Nome
          </label>
          <input id="nome" name="nome" type="text" required maxLength={120} className={field} />
        </div>
        <div>
          <label className={label} htmlFor="telefone">
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            inputMode="tel"
            maxLength={20}
            className={field}
          />
        </div>
      </div>

      <div className="mt-6">
        <label className={label} htmlFor="email">
          E-mail
        </label>
        <input id="email" name="email" type="email" required maxLength={160} className={field} />
      </div>

      <div className="mt-6">
        <label className={label} htmlFor="assunto">
          Assunto
        </label>
        <input id="assunto" name="assunto" type="text" maxLength={140} className={field} />
      </div>

      <div className="mt-6">
        <label className={label} htmlFor="mensagem">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={6}
          required
          maxLength={2000}
          className={field}
        />
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id="consentimento"
          name="consentimento"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-[var(--brand)]"
        />
        <label htmlFor="consentimento" className="text-sm font-light text-graphite">
          Li e concordo com o tratamento dos meus dados para fins de retorno ao contato realizado.{" "}
          <Link to="/politica-de-privacidade" className="link-underline text-brand">
            Política de Privacidade
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex items-center justify-center rounded-xs bg-gold px-7 py-3.5 text-[0.8125rem] font-bold tracking-[0.16em] text-brand-deep uppercase transition-colors hover:bg-brand hover:text-offwhite"
      >
        Enviar mensagem
      </button>

      <p aria-live="polite" role="status" className="mt-6 text-sm font-light">
        {sent
          ? "Mensagem registrada neste dispositivo. O envio automático ainda não está configurado — utilize o WhatsApp ou o e-mail para contato imediato."
          : ""}
      </p>

      <p className="mt-4 text-xs font-light text-graphite">
        O envio de uma mensagem não constitui automaticamente contratação de serviços jurídicos.
      </p>
    </form>
  );
}