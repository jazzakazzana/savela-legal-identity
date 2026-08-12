import officeImage from "@/assets/patricia-office.jpg";
import { Figure } from "@/components/site/Figure";
import { siteConfig, mailtoUrl, telUrl } from "@/config/site";

export function LocationSection({ withImage = true }: { withImage?: boolean }) {
  const { location, santaRosa, contact } = siteConfig;
  return (
    <section className="bg-offwhite py-20 md:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Localização</p>
          <h2 className="mt-6 font-display text-3xl text-brand md:text-4xl">
            Atendimento em São Leopoldo
          </h2>
          <span className="hairline mt-6 max-w-24" aria-hidden="true" />
          <p className="measure mt-8 text-[1.0625rem] leading-relaxed font-light text-graphite">
            Patrícia Savela possui sua base profissional em São Leopoldo, no Rio Grande do Sul, com
            atuação em demandas em diferentes regiões do Estado.
          </p>

          <dl className="mt-10 grid gap-px border-t border-brand/15">
            <div className="border-b border-brand/15 py-4">
              <dt className="text-[0.6875rem] font-bold tracking-[0.24em] text-gold uppercase">
                Base profissional
              </dt>
              <dd className="mt-2 text-lg text-brand">
                {location.city} — {location.state}
              </dd>
              {location.streetAddress ? (
                <dd className="mt-1 text-sm text-graphite">{location.streetAddress}</dd>
              ) : null}
            </div>
            <div className="border-b border-brand/15 py-4">
              <dt className="text-[0.6875rem] font-bold tracking-[0.24em] text-gold uppercase">
                Telefone / WhatsApp
              </dt>
              <dd className="mt-2 text-lg text-brand">
                <a href={telUrl} className="link-underline">
                  {contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="border-b border-brand/15 py-4">
              <dt className="text-[0.6875rem] font-bold tracking-[0.24em] text-gold uppercase">
                E-mail
              </dt>
              <dd className="mt-2 text-lg break-all text-brand">
                <a href={mailtoUrl} className="link-underline">
                  {contact.email}
                </a>
              </dd>
            </div>
          </dl>

          {santaRosa.enabled ? (
            <aside className="mt-10 border-l border-gold pl-6">
              <h3 className="font-display text-xl text-brand">Atendimentos em Santa Rosa</h3>
              <address className="mt-3 space-y-1 text-sm font-light text-graphite not-italic">
                <p>{santaRosa.building}</p>
                <p>{santaRosa.streetAddress}</p>
                <p>
                  {santaRosa.city} — {santaRosa.state}
                </p>
              </address>
            </aside>
          ) : null}
        </div>

        {withImage ? (
          <div className="aspect-[4/3] overflow-hidden border border-border lg:aspect-auto">
            <Figure
              slot="patricia-office"
              src={officeImage}
              alt="Espaço reservado para fotografia do ambiente de trabalho em São Leopoldo"
              width={1400}
              height={900}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}