import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, Article } from "@/components/site/Prose";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Figure } from "@/components/site/Figure";
import { CtaLink } from "@/components/site/Cta";
import profileImage from "@/assets/patricia-profile.jpg";
import { siteConfig } from "@/config/site";
import { seoMeta, personSchema, breadcrumbSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/patricia-savela")({
  component: Page,
  head: () => ({
    ...seoMeta({
      title: "Patrícia Savela | Advogada em São Leopoldo – OAB/RS 119.240",
      description:
        "Conheça a trajetória da Dra. Patrícia Savela, advogada inscrita na OAB/RS 119.240, com atuação em Direito Criminal, Tribunal do Júri e sustentação oral, em São Leopoldo — RS.",
      path: "/patricia-savela",
      type: "profile",
    }),
    scripts: [
      ldScript(personSchema),
      ldScript(
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Patrícia Savela", path: "/patricia-savela" },
        ]),
      ),
    ],
  }),
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Perfil profissional"
        title="Dra. Patrícia Savela"
        intro="Advocacia Criminal, Tribunal do Júri e Sustentação Oral."
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Patrícia Savela", path: "/patricia-savela" },
        ]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="aspect-[4/5] overflow-hidden border border-border lg:sticky lg:top-32">
            <Figure
              slot="patricia-profile"
              src={profileImage}
              alt="Espaço reservado para o retrato profissional da advogada Patrícia Savela"
              width={1000}
              height={1250}
            />
          </div>

          <div>
            <Article
              blocks={[
                {
                  heading: "Formação e trajetória",
                  body: [
                    "Nascida em Tucunduva, no Rio Grande do Sul, Patrícia Savela graduou-se em Direito pela Universidade do Vale do Rio dos Sinos — Unisinos.",
                    `Advogada inscrita sob a ${siteConfig.professional.oab}, desenvolve sua trajetória profissional com atuação especialmente relacionada ao Direito Criminal e ao Tribunal do Júri.`,
                    "Além da advocacia, possui experiência jurídica junto à Câmara de Vereadores, o que contribuiu para a compreensão prática de procedimentos e do funcionamento institucional.",
                    "Atualmente, sua base profissional encontra-se em São Leopoldo, no Rio Grande do Sul, com atuação em demandas em diferentes regiões do Estado.",
                  ],
                },
                {
                  heading: "Filosofia profissional",
                  body: [
                    "A atuação é construída a partir da análise individual de cada caso, da preparação técnica e da defesa dos direitos e garantias previstos no ordenamento jurídico.",
                    "Cada processo possui circunstâncias próprias. Por isso, o trabalho começa pela compreensão integral dos fatos, das provas e das questões jurídicas envolvidas, antes da definição de qualquer estratégia.",
                    "Discrição e responsabilidade orientam o tratamento das informações apresentadas, e a comunicação com a pessoa assistida é conduzida de forma clara ao longo das etapas relevantes do processo.",
                  ],
                },
                {
                  heading: "Atuação",
                  body: [
                    "A atuação profissional concentra-se na defesa técnica em matéria criminal, abrangendo o acompanhamento desde a fase de investigação até as etapas recursais.",
                    "No Tribunal do Júri, o trabalho envolve análise probatória detalhada, preparação da tese defensiva e participação na sessão de julgamento.",
                    "Perante os Tribunais, a sustentação oral exige domínio do processo, organização argumentativa e objetividade na apresentação dos pontos relevantes da defesa.",
                    "A consultoria jurídica compreende a análise individualizada de situações concretas, conforme suas particularidades.",
                  ],
                },
              ]}
            />

            <div className="mt-12 flex flex-wrap gap-4">
              <CtaLink to="/direito-criminal" variant="outline">
                Direito Criminal
              </CtaLink>
              <CtaLink to="/tribunal-do-juri" variant="outline">
                Tribunal do Júri
              </CtaLink>
              <CtaLink to="/sustentacao-oral" variant="outline">
                Sustentação Oral
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      <ContactCTA />
    </SiteLayout>
  );
}