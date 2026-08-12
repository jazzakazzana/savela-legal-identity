import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Prose";
import { ContactForm } from "@/components/site/ContactForm";
import { siteConfig, whatsappUrl, mailtoUrl } from "@/config/site";
import { seoMeta, breadcrumbSchema, legalServiceSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  component: Page,
  head: () => ({
    ...seoMeta({
      title: "Contato | Dra. Patrícia Savela — Advocacia Criminal",
      description:
        "Entre em contato com a advogada Patrícia Savela (OAB/RS 119.240) por WhatsApp ou e-mail. São Leopoldo — Rio Grande do Sul.",
      path: "/contato",
    }),
    scripts: [
      ldScript(legalServiceSchema),
      ldScript(
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contato" },
        ]),
      ),
    ],
  }),
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contato"
        title="Contato"
        intro="Utilize os canais diretos para solicitar informações sobre atendimento e disponibilidade."
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contato" },
        ]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl text-brand">Entre em contato</h2>
            <span className="hairline mt-6 mb-10 max-w-24" aria-hidden="true" />
            <ContactForm />
          </div>

          <aside>
            <h2 className="font-display text-2xl text-brand">Canais diretos</h2>
            <span className="hairline mt-6 max-w-16" aria-hidden="true" />
            <ul className="mt-6 space-y-4 text-[1.0625rem] font-light text-graphite">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-brand"
                >
                  WhatsApp {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="break-all">
                <a href={mailtoUrl} className="link-underline text-brand">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                {siteConfig.location.city} — {siteConfig.location.state}
              </li>
              <li className="text-sm">{siteConfig.professional.oab}</li>
            </ul>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
