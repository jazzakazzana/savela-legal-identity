import { CtaLink } from "@/components/site/Cta";

export function JuryFeature() {
  return (
    <section className="relative overflow-hidden bg-brand py-24 text-offwhite md:py-36">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-0 font-display text-[9rem] leading-none text-offwhite/5 select-none md:text-[18rem]"
      >
        JÚRI
      </span>
      <div className="container-site relative">
        <p className="eyebrow">Especialidade</p>
        <h2 className="mt-6 font-display text-4xl md:text-6xl">Tribunal do Júri</h2>
        <span className="hairline mt-8 max-w-24" aria-hidden="true" />
        <div className="measure mt-8 space-y-4 text-lg leading-relaxed font-light text-offwhite/80">
          <p>
            O Tribunal do Júri exige preparação minuciosa, domínio técnico do processo e capacidade
            de comunicação.
          </p>
          <p>
            Cada caso demanda análise aprofundada das provas, construção estratégica da defesa e
            compreensão integral dos fatos submetidos aos jurados.
          </p>
        </div>
        <div className="mt-10">
          <CtaLink to="/tribunal-do-juri">Conheça a atuação no Tribunal do Júri</CtaLink>
        </div>
      </div>
    </section>
  );
}