import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, Article } from "@/components/site/Prose";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CtaLink } from "@/components/site/Cta";
import { seoMeta, breadcrumbSchema, legalServiceSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/direito-criminal")({
  component: Page,
  head: () => ({
    ...seoMeta({
      title: "Advocacia Criminal em São Leopoldo | Patrícia Savela",
      description:
        "Defesa técnica e acompanhamento jurídico em diferentes etapas do processo penal, com atuação da advogada Patrícia Savela (OAB/RS 119.240) em São Leopoldo — RS.",
      path: "/direito-criminal",
    }),
    scripts: [
      ldScript(legalServiceSchema),
      ldScript(
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Direito Criminal", path: "/direito-criminal" },
        ]),
      ),
    ],
  }),
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Área de atuação"
        title="Direito Criminal"
        intro="Defesa técnica e acompanhamento jurídico em diferentes etapas do processo penal."
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Direito Criminal", path: "/direito-criminal" },
        ]}
      />

      <Section>
        <Article
          blocks={[
            {
              heading: "O papel do advogado criminalista",
              body: [
                "A advocacia criminal possui papel fundamental na garantia de que toda pessoa submetida a investigação ou processo penal tenha seus direitos respeitados.",
                "A atuação da defesa não se limita à elaboração de petições ou ao comparecimento em audiências: envolve o estudo das provas, o acompanhamento dos procedimentos e a identificação das questões jurídicas relevantes.",
                "Cabe à defesa técnica assegurar que o processo seja conduzido de acordo com a legislação e que o contraditório e a ampla defesa sejam efetivamente exercidos.",
              ],
            },
            {
              heading: "Defesa durante investigação",
              body: [
                "A fase de investigação reúne elementos que podem servir de base para uma futura ação penal. Ainda nessa etapa, existem direitos assegurados a quem é investigado.",
                "O acompanhamento profissional permite avaliar a regularidade dos atos praticados, o acesso aos elementos já documentados e a adequação das medidas adotadas.",
              ],
            },
            {
              heading: "Processo criminal",
              body: [
                "Recebida a denúncia, inicia-se a fase processual, com prazos, atos e possibilidades de manifestação previstos em lei.",
                "A defesa analisa a imputação, examina as provas produzidas e apresenta as teses e requerimentos cabíveis conforme as circunstâncias do caso concreto.",
              ],
            },
            {
              heading: "Audiências e acompanhamento processual",
              body: [
                "As audiências são momentos relevantes para a produção da prova oral e para o esclarecimento dos fatos.",
                "O acompanhamento técnico ao longo dessas etapas permite que questões processuais sejam registradas oportunamente e que a atuação da defesa seja coerente com a estratégia definida.",
              ],
            },
            {
              heading: "Garantias fundamentais",
              body: [
                "A Constituição Federal assegura o contraditório, a ampla defesa, a presunção de inocência e o devido processo legal.",
                "A observância dessas garantias não beneficia apenas quem responde ao processo: preserva a legitimidade da própria decisão judicial.",
              ],
            },
            {
              heading: "Quando procurar orientação jurídica",
              body: [
                "A orientação jurídica pode ser buscada sempre que houver dúvida sobre direitos, procedimentos ou sobre a existência de investigação ou processo em andamento.",
                "A consulta prévia permite compreender o contexto jurídico da situação e avaliar quais providências são cabíveis.",
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
