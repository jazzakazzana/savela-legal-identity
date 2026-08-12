const items = [
  "Direito Criminal",
  "Tribunal do Júri",
  "Sustentação Oral",
  "Consultoria Jurídica",
];

export function ExpertiseStrip() {
  const sequence = [...items, ...items, ...items, ...items];
  return (
    <section
      aria-label="Áreas de especialidade"
      className="overflow-hidden border-y border-gold/20 bg-brand-deep py-5"
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {sequence.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="text-[0.75rem] font-light tracking-[0.24em] text-offwhite/80 uppercase">
              {item}
            </span>
            <span aria-hidden="true" className="text-gold">
              •
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}