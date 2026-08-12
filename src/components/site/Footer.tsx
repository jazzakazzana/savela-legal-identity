import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { footerLinks } from "./nav";
import { siteConfig, mailtoUrl, telUrl } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-offwhite/80">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:py-20">
        <div>
          <Logo />
          <div className="mt-8 space-y-1 text-sm font-light">
            <p className="text-offwhite">{siteConfig.professional.displayName}</p>
            <p>{siteConfig.business.name}</p>
            <p className="text-gold">{siteConfig.professional.oab}</p>
          </div>
          <address className="mt-6 space-y-1 text-sm font-light not-italic">
            <p>
              {siteConfig.location.city} — {siteConfig.location.state}
            </p>
            {siteConfig.location.streetAddress ? <p>{siteConfig.location.streetAddress}</p> : null}
            <p>
              <a href={telUrl} className="link-underline">
                {siteConfig.contact.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={mailtoUrl} className="link-underline">
                {siteConfig.contact.email}
              </a>
            </p>
            {siteConfig.googleBusinessUrl ? (
              <p>
                <a
                  href={siteConfig.googleBusinessUrl}
                  className="link-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Perfil da Empresa no Google
                </a>
              </p>
            ) : null}
          </address>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="eyebrow">Navegação</h2>
          <span className="hairline mt-4 mb-6" aria-hidden="true" />
          <ul className="grid gap-3 text-sm font-light sm:grid-cols-2">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="link-underline hover:text-offwhite">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-offwhite/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs font-light md:flex-row md:items-center md:justify-between">
          <p>© {siteConfig.business.name}. Todos os direitos reservados.</p>
          <p className="text-offwhite/50">
            Conteúdo de caráter informativo, em conformidade com o Código de Ética e Disciplina da
            OAB.
          </p>
        </div>
      </div>
    </footer>
  );
}