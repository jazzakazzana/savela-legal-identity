import workingImage from "@/assets/patricia-working.jpg";
import { Figure } from "@/components/site/Figure";
import { CtaLink } from "@/components/site/Cta";

export function OralArgumentFeature() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Tribunais</p>
          <h2 className="mt-6 font-display text-3xl text-brand md:text-4xl">
            Sustentação Oral em Tribunais
          </h2>
          <span className="hairline mt-6 max-w-24" aria-hidden="true" />
          <div className="measure mt-8 space-y-4 text-[1.0625rem] leading-relaxed font-light text-graphite">
            <p>
              A sustentação oral representa um momento relevante da atuação perante os Tribunais.
            </p>
            <p>
              Além do conhecimento do processo, demanda clareza, objetividade, preparação técnica e
              capacidade argumentativa para apresentar aos julgadores os aspectos relevantes da
              defesa.
            </p>
          </div>
          <p className="mt-8 border-l border-gold pl-6 font-display text-xl text-brand md:text-2xl">
            Argumentação jurídica exige clareza, estratégia e presença.
          </p>
          <div className="mt-10">
            <CtaLink to="/sustentacao-oral" variant="outline">
              Saiba mais
            </CtaLink>
          </div>
        </div>

        <div className="aspect-[4/3] overflow-hidden border border-border">
          <Figure
            slot="patricia-working"
            src={workingImage}
            alt="Espaço reservado para fotografia da advogada em preparação de peças processuais"
            width={1400}
            height={900}
          />
        </div>
      </div>
    </section>
  );
}