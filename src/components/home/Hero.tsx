import heroAsset from "@/assets/ambiente.png.asset.json";
import { Figure } from "@/components/site/Figure";
import { CtaLink } from "@/components/site/Cta";
import { siteConfig, whatsappUrl } from "@/config/site";

export function Hero() {
  return (
    <section className="relative bg-brand text-offwhite">
      <div className="container-site grid min-h-[90vh] items-center gap-12 pt-32 pb-16 md:pt-40 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">Advocacia Criminal</p>
          <span className="hairline mt-5 max-w-32" aria-hidden="true" />
          <h1 className="mt-8 font-display text-[2.6rem] leading-[1.02] sm:text-6xl xl:text-7xl">
            Defesa técnica.
            <br />
            Estratégia.
            <br />
            <span className="text-gold-light">Presença.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg font-light text-offwhite md:text-xl">
            Atuação em Direito Criminal, Tribunal do Júri e Sustentação Oral em Tribunais.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed font-light text-offwhite/75">
            Atuação jurídica pautada pelo preparo técnico, responsabilidade, discrição e defesa dos
            direitos e garantias fundamentais.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <CtaLink href={whatsappUrl} external>
              Falar com a advogada
            </CtaLink>
            <CtaLink to="/direito-criminal" variant="secondary">
              Conheça a atuação
            </CtaLink>
          </div>

          <p className="mt-12 text-[0.75rem] tracking-[0.24em] text-offwhite/60 uppercase">
            {siteConfig.location.city} — {siteConfig.location.stateName}
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-gold/25">
            <Figure
              slot="patricia-hero"
              src={heroAsset.url}
              alt="Advogada Patrícia Savela, atuante em Direito Criminal em São Leopoldo — RS"
              width={1200}
              height={1500}
              priority
              objectPosition="center top"
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 hidden h-24 w-px bg-gold/60 lg:block"
          />
        </div>
      </div>
    </section>
  );
}