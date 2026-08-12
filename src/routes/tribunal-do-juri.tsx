import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, Article } from "@/components/site/Prose";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CtaLink } from "@/components/site/Cta";
import { seoMeta, breadcrumbSchema, legalServiceSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/tribunal-do-juri")({
  component: Page,
  head: () => ({
    ...seoMeta({
      title: "Tribunal do Júri | Dra. Patrícia Savela",
      description:
        "Atuação técnica e estratégica em processos submetidos ao Tribunal do Júri, com preparação individualizada. Dra. Patrícia Savela — OAB/RS 119.240, São Leopoldo — RS.",
      path: "/tribunal-do-juri",
    }),
    scripts: [
      ldScript(legalServiceSchema),
      ldScript(
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Direito Criminal", path: "/direito-criminal" },
          { name: "Tribunal do Júri", path: "/tribunal-do-juri" },
        ]),
      ),
    ],
  }),
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Especialidade"
        title="Atuação em Tribunal do Júri"
        intro="Preparação minuciosa, domínio técnico do processo e análise aprofundada das provas."
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Direito Criminal", path: "/direito-criminal" },
          { name: "Tribunal do Júri", path: "/tribunal-do-juri" },
        ]}
      />

      <Section>
        <Article
          blocks={[
            {
              heading: "O Tribunal do Júri",
              body: [
                "O Tribunal do Júri é o órgão competente para o julgamento dos crimes dolosos contra a vida, conforme previsão constitucional.",
                "O procedimento é dividido em fases: uma etapa inicial, em que se avalia a existência de elementos para submeter o caso a julgamento, e a fase de julgamento perante o Conselho de Sentença.",
              ],
            },
            {
              heading: "Preparação da defesa",
              body: [
                "A preparação envolve o estudo integral dos autos, a compreensão cronológica dos fatos e a identificação dos pontos controvertidos.",
                "Esse trabalho antecede qualquer definição de tese e orienta os requerimentos formulados ao longo do procedimento.",
              ],
            },
            {
              heading: "Análise probatória",
              body: [
                "A análise das provas considera depoimentos, documentos, laudos periciais e demais elementos produzidos.",
                "Interessa à defesa verificar a regularidade da produção da prova, sua consistência interna e a compatibilidade entre os diferentes elementos reunidos.",
              ],
            },
            {
              heading: "Estratégia jurídica",
              body: [
                "A estratégia é construída de forma individualizada, a partir das circunstâncias concretas do processo e das teses juridicamente sustentáveis.",
                "Não existe modelo único: o que orienta a atuação é o conjunto probatório e o contexto jurídico de cada caso.",
              ],
            },
            {
              heading: "Sessão de julgamento",
              body: [
                "Na sessão, a defesa acompanha a formação do Conselho de Sentença, a instrução em plenário e os debates.",
                "A comunicação com os jurados exige clareza e organização, sempre vinculada aos elementos existentes nos autos.",
              ],
            },
            {
              heading: "Atuação profissional",
              body: [
                "A atuação de Patrícia Savela no Tribunal do Júri é orientada pelo preparo técnico, pela responsabilidade e pela observância das garantias processuais.",
                "O acompanhamento é conduzido com discrição e com informação clara sobre as etapas do procedimento.",
              ],
            },
          ]}
        />

        <p className="mt-14 max-w-3xl border-l border-gold pl-6 font-display text-xl text-brand md:text-2xl">
          Cada processo possui circunstâncias próprias e exige preparação individualizada.
        </p>

        <div className="mt-10">
          <CtaLink to="/contato">Solicitar informações sobre atendimento</CtaLink>
        </div>
      </Section>

      <ContactCTA />
    </SiteLayout>
  );
}