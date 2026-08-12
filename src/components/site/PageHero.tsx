import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  intro?: string | undefined;
  crumbs: Crumb[];
}) {
  return (
    <section className="bg-brand pt-32 pb-16 text-offwhite md:pt-44 md:pb-24">
      <div className="container-site">
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mt-10">{eyebrow}</p>
        <span className="hairline mt-4 max-w-24" aria-hidden="true" />
        <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl">{title}</h1>
        {intro ? (
          <p className="measure mt-6 text-lg font-light text-offwhite/80 md:text-xl">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
