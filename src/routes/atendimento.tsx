import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Prose";
import { LocationSection } from "@/components/site/LocationSection";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CtaLink } from "@/components/site/Cta";
import { siteConfig, whatsappUrl, mailtoUrl } from "@/config/site";
import { seoMeta, breadcrumbSchema, legalServiceSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/atendimento")({
  component: Page,
  head: () => ({
    ...seoMeta({
      title: "Atendimento Jurídico em São Leopoldo | Patrícia Savela",
      description:
        "Informações sobre o atendimento jurídico da advogada Patrícia Savela (OAB/RS 119.240) em São Leopoldo — RS: contato por WhatsApp e e-mail.",
      path: "/atendimento",
    }),
    scripts: [
      ldScript(legalServiceSchema),
      ldScript(
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Atendimento", path: "/atendimento" },
        ]),
      ),
    ],
  }),
});

function Page() {
  const { santaRosa } = siteConfig;
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Atendimento"
        title="Atendimento jurídico"
        intro="Base profissional em São Leopoldo — RS, com atuação em demandas em diferentes regiões do Estado."
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Atendimento", path: "/atendimento" },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-brand">Como entrar em contato</h2>
            <span className="hairline mt-6 max-w-24" aria-hidden="true" />
            <p className="measure mt-6 text-[1.0625rem] leading-relaxed font-light text-graphite">
              O contato inicial pode ser realizado por WhatsApp ou e-mail. As informações sobre
              disponibilidade e forma de atendimento são prestadas diretamente pela advogada.
            </p>
            <ul className="mt-8 space-y-4 text-lg text-brand">
              <li>
                WhatsApp:{" "}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="break-all">
                E-mail:{" "}
                <a href={mailtoUrl} className="link-underline">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-10">
              <CtaLink to="/contato" variant="outline">
                Enviar mensagem pelo formulário
              </CtaLink>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl text-brand">Localização</h2>
            <span className="hairline mt-6 max-w-24" aria-hidden="true" />
            <address className="mt-6 space-y-1 text-[1.0625rem] font-light text-graphite not-italic">
              <p className="text-brand">
                {siteConfig.location.city} — {siteConfig.location.state}
              </p>
              {siteConfig.location.streetAddress ? (
                <p>{siteConfig.location.streetAddress}</p>
              ) : (
                <p className="text-sm">
                  Endereço completo informado no momento do agendamento do atendimento.
                </p>
              )}
            </address>

            {santaRosa.enabled ? (
              <aside className="mt-10 border-l border-gold pl-6">
                <h3 className="font-display text-xl text-brand">Atendimentos em Santa Rosa</h3>
                <address className="mt-3 space-y-1 text-sm font-light text-graphite not-italic">
                  <p>{santaRosa.building}</p>
                  <p>{santaRosa.streetAddress}</p>
                  <p>
                    {santaRosa.city} — {santaRosa.state}
                  </p>
                </address>
              </aside>
            ) : (
              <p className="mt-10 border-l border-border pl-6 text-sm font-light text-graphite">
                Informações sobre atendimentos em outras localidades podem ser consultadas
                diretamente pelos canais de contato.
              </p>
            )}
          </div>
        </div>
      </Section>

      <LocationSection />
      <ContactCTA />
    </SiteLayout>
  );
}