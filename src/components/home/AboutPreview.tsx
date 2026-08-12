import profileImage from "@/assets/patricia-profile.jpg";
import { Figure } from "@/components/site/Figure";
import { CtaLink } from "@/components/site/Cta";
import { siteConfig } from "@/config/site";

const facts = [
  { label: "Formação", value: "Direito — Unisinos" },
  { label: "OAB", value: siteConfig.professional.oab },
  { label: "Área", value: "Direito Criminal" },
  { label: "Especialidade", value: "Tribunal do Júri" },
];

export function AboutPreview() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden border border-border lg:sticky lg:top-32">
          <Figure
            slot="patricia-profile"
            src={profileImage}
            alt="Espaço reservado para o retrato profissional de Patrícia Savela"
            width={1000}
            height={1250}
          />
        </div>

        <div>
          <p className="eyebrow">Perfil</p>
          <h2 className="mt-6 font-display text-4xl text-brand md:text-5xl">Patrícia Savela</h2>
          <p className="mt-5 max-w-xl text-lg font-light text-ink">
            Técnica jurídica aliada à responsabilidade de defender direitos.
          </p>
          <span className="hairline mt-8 max-w-24" aria-hidden="true" />

          <div className="measure mt-8 space-y-4 text-[1.0625rem] leading-relaxed font-light text-graphite">
            <p>
              Nascida em Tucunduva, no Rio Grande do Sul, Patrícia Savela graduou-se em Direito pela
              Universidade do Vale do Rio dos Sinos — Unisinos.
            </p>
            <p>
              Sua trajetória profissional possui atuação especialmente relacionada ao Direito
              Criminal e ao Tribunal do Júri.
            </p>
            <p>
              A atuação é construída a partir da análise individual de cada caso, preparação técnica
              e defesa dos direitos e garantias previstos no ordenamento jurídico.
            </p>
            <p>
              Além da advocacia, possui experiência jurídica junto à Câmara de Vereadores.
            </p>
            <p>
              Atualmente, sua base profissional encontra-se em São Leopoldo, no Rio Grande do Sul.
            </p>
          </div>

          <dl className="mt-12 grid gap-px border-t border-border sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-border py-5 sm:pr-8">
                <dt className="text-[0.6875rem] font-bold tracking-[0.24em] text-gold uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-display text-xl text-brand">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <CtaLink to="/patricia-savela" variant="outline">
              Conhecer a trajetória
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}