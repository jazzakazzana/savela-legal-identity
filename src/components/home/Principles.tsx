const pillars = [
  {
    number: "01",
    title: "Técnica",
    text: "Estudo aprofundado das circunstâncias jurídicas e processuais de cada caso.",
  },
  {
    number: "02",
    title: "Estratégia",
    text: "Construção individualizada da atuação conforme as particularidades do processo.",
  },
  {
    number: "03",
    title: "Discrição",
    text: "Tratamento profissional, responsável e confidencial das situações apresentadas.",
  },
  {
    number: "04",
    title: "Presença",
    text: "Comunicação clara e acompanhamento nas etapas relevantes do processo.",
  },
];

export function Principles() {
  return (
    <section className="bg-offwhite py-20 md:py-32">
      <div className="container-site">
        <h2 className="max-w-2xl font-display text-3xl text-brand md:text-5xl">
          Uma atuação construída sobre quatro pilares
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.number} className="border-t border-brand/20 pt-6">
              <span className="text-[0.75rem] font-bold tracking-[0.2em] text-gold">
                {p.number}
              </span>
              <h3 className="mt-4 font-display text-2xl text-brand">{p.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed font-light text-graphite">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}