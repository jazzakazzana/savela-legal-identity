import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, Article } from "@/components/site/Prose";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CtaLink } from "@/components/site/Cta";
import { seoMeta, breadcrumbSchema, legalServiceSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/sustentacao-oral")({
  component: Page,
  head: () => ({
    ...seoMeta({
      title: "Sustentação Oral em Tribunais | Patrícia Savela",
      description:
        "Preparação e realização de sustentações orais perante Tribunais: domínio do processo, organização argumentativa e clareza na apresentação da defesa.",
      path: "/sustentacao-oral",
    }),
    scripts: [
      ldScript(legalServiceSchema),
      ldScript(
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Direito Criminal", path: "/direito-criminal" },
          { name: "Sustentação Oral", path: "/sustentacao-oral" },
        ]),
      ),
    ],
  }),
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Atuação em Tribunais"
        title="Sustentação Oral em Tribunais"
        intro="Um momento relevante da atuação recursal, que exige preparação técnica e objetividade."
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Sustentação Oral", path: "/sustentacao-oral" },
        ]}
      />

      <Section>
        <Article
          blocks={[
            {
              heading: "O que é a sustentação oral",
              body: [
                "A sustentação oral é a manifestação da parte, por meio de seu advogado, perante o órgão colegiado responsável pelo julgamento de um recurso ou de determinada matéria.",
                "Trata-se de oportunidade para apresentar aos julgadores os aspectos relevantes da causa, dentro do tempo regimental previsto.",
              ],
            },
            {
              heading: "Preparação",
              body: [
                "A preparação começa pela revisão do processo e pela delimitação precisa daquilo que está submetido a julgamento.",
                "A seleção do que será dito é parte essencial do trabalho: em poucos minutos, é necessário priorizar os pontos com maior relevância jurídica.",
              ],
            },
            {
              heading: "Domínio do processo",
              body: [
                "O conhecimento detalhado dos autos permite responder com precisão a eventuais questionamentos e situar corretamente os fatos discutidos.",
                "Esse domínio evita imprecisões e confere consistência à exposição.",
              ],
            },
            {
              heading: "Organização argumentativa e clareza",
              body: [
                "A exposição é estruturada em sequência lógica, partindo da questão central e apresentando os fundamentos que a sustentam.",
                "Clareza e objetividade favorecem a compreensão dos julgadores e o aproveitamento do tempo disponível.",
              ],
            },
            {
              heading: "Análise jurídica",
              body: [
                "A argumentação é ancorada na legislação aplicável, na jurisprudência pertinente e nos elementos efetivamente constantes dos autos.",
              ],
            },
            {
              heading: "Apresentação perante Tribunais",
              body: [
                "A atuação perante Tribunais requer observância das formalidades, respeito ao rito e postura institucional.",
                "Cada julgamento possui contexto próprio, e a preparação é adequada às particularidades da matéria discutida.",
              ],
            },
          ]}
        />

        <div className="mt-14">
          <CtaLink to="/contato">Solicitar informações sobre atendimento</CtaLink>
        </div>
      </Section>

      <ContactCTA />
    </SiteLayout>
  );
}