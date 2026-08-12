import { Link } from "@tanstack/react-router";

const areas = [
  {
    number: "01",
    title: "Direito Criminal",
    text: "Atuação na defesa técnica dos direitos e garantias do acusado durante o processo penal.",
    to: "/direito-criminal" as const,
  },
  {
    number: "02",
    title: "Tribunal do Júri",
    text: "Atuação técnica e estratégica em processos submetidos ao Tribunal do Júri.",
    to: "/tribunal-do-juri" as const,
  },
  {
    number: "03",
    title: "Sustentação Oral",
    text: "Preparação e realização de sustentações orais perante Tribunais.",
    to: "/sustentacao-oral" as const,
  },
  {
    number: "04",
    title: "Consultoria Jurídica",
    text: "Análise jurídica individualizada conforme as particularidades de cada situação.",
    to: null,
  },
  {
    number: "05",
    title: "Acompanhamento Processual",
    text: "Acompanhamento técnico durante as etapas relevantes do processo criminal.",
    to: null,
  },
  {
    number: "06",
    title: "Procedimentos Policiais",
    text: "Assistência jurídica em situações que demandem acompanhamento profissional perante autoridades policiais.",
    to: null,
  },
];

export function PracticeAreas() {
  return (
    <section className="bg-offwhite py-20 md:py-32">
      <div className="container-site">
        <p className="eyebrow">Áreas</p>
        <h2 className="mt-6 font-display text-4xl text-brand md:text-5xl">Atuação jurídica</h2>
        <p className="measure mt-5 text-lg font-light text-ink">
          Assistência jurídica especializada em diferentes etapas do processo penal.
        </p>

        <div className="mt-14 grid border-t border-brand/15 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.number}
              className="group border-b border-brand/15 px-0 py-10 transition-colors md:px-8 md:odd:pl-0 lg:[&:nth-child(3n+1)]:pl-0"
            >
              <span className="font-display text-sm tracking-[0.2em] text-gold">
                {area.number}
              </span>
              <h3 className="mt-4 font-display text-2xl text-brand">{area.title}</h3>
              <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed font-light text-graphite">
                {area.text}
              </p>
              {area.to ? (
                <Link
                  to={area.to}
                  className="link-underline mt-6 inline-block text-[0.75rem] font-bold tracking-[0.16em] text-brand uppercase"
                >
                  Conhecer atuação →
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}