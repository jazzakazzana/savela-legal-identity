import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Prose";
import { ContactCTA } from "@/components/site/ContactCTA";
import { siteConfig } from "@/config/site";
import { listPublishedArticles } from "@/lib/cms";
import { seoMeta, breadcrumbSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/conteudos/")({
  loader: async () => listPublishedArticles(),
  component: Page,
  head: ({ loaderData }) => ({
    ...seoMeta({
      title: "Conteúdos jurídicos | Dra. Patrícia Savela",
      description:
        "Informações sobre Direito Criminal, Tribunal do Júri, processo penal e temas relacionados à atuação profissional da advogada Patrícia Savela.",
      path: "/conteudos",
      noindex: (loaderData?.length ?? 0) === 0,
    }),
    scripts: [
      ldScript(
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Conteúdos", path: "/conteudos" },
        ]),
      ),
    ],
  }),
});

function formatDate(value: string | null) {
  if (!value) return null;
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "America/Sao_Paulo" }).format(
    new Date(value),
  );
}

function Page() {
  const articles = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Editorial"
        title="Conteúdos jurídicos"
        intro="Informações sobre Direito Criminal, Tribunal do Júri, processo penal e temas relacionados à atuação profissional."
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Conteúdos", path: "/conteudos" },
        ]}
      />

      <Section>
        {articles.length === 0 ? (
          <div className="measure border-l border-gold pl-6">
            <h2 className="font-display text-2xl text-brand">Conteúdos em preparação</h2>
            <p className="mt-3 text-[1.0625rem] leading-relaxed font-light text-graphite">
              Esta área será atualizada quando houver conteúdos jurídicos revisados e disponíveis para leitura.
            </p>
          </div>
        ) : (
          <div className="grid gap-px border-t border-border">
            {articles.map((article) => (
              <article key={article.id} className="border-b border-border py-8">
                <p className="text-[0.6875rem] font-bold tracking-[0.22em] text-gold uppercase">
                  {article.category ?? "Conteúdo jurídico"}
                </p>
                <h2 className="mt-3 font-display text-2xl text-brand md:text-3xl">
                  <Link to="/conteudos/$slug" params={{ slug: article.slug }} className="link-underline">
                    {article.title}
                  </Link>
                </h2>
                {article.excerpt ? (
                  <p className="measure mt-3 text-[0.9375rem] leading-relaxed font-light text-graphite">
                    {article.excerpt}
                  </p>
                ) : null}
                <p className="mt-4 text-xs font-light text-graphite">
                  {siteConfig.professional.name} — {siteConfig.professional.oab}
                  {article.published_at ? ` · ${formatDate(article.published_at)}` : ""}
                </p>
              </article>
            ))}
          </div>
        )}
      </Section>

      <ContactCTA />
    </SiteLayout>
  );
}
