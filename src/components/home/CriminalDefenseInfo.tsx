import { CtaLink } from "@/components/site/Cta";

export function CriminalDefenseInfo() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Direito Criminal</p>
          <h2 className="mt-6 font-display text-3xl text-brand md:text-4xl">
            O papel da defesa criminal
          </h2>
          <span className="hairline mt-6 max-w-24" aria-hidden="true" />
        </div>
        <div>
          <div className="measure space-y-4 text-[1.0625rem] leading-relaxed font-light text-graphite">
            <p>
              A advocacia criminal possui papel fundamental na garantia de que toda pessoa submetida
              a investigação ou processo penal tenha seus direitos respeitados.
            </p>
            <p>
              A atuação da defesa não se limita à elaboração de petições ou ao comparecimento em
              audiências.
            </p>
            <p>
              O advogado criminalista analisa provas, acompanha procedimentos, identifica questões
              jurídicas relevantes e atua para garantir que o processo seja conduzido de acordo com
              a legislação.
            </p>
            <p>
              Independentemente das circunstâncias, cabe à defesa assegurar o exercício do
              contraditório e da ampla defesa.
            </p>
          </div>
          <div className="mt-10">
            <CtaLink to="/direito-criminal" variant="outline">
              Entenda a atuação criminal
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}