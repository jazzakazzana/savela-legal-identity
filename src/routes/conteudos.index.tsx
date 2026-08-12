import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Prose";
import { ContactCTA } from "@/components/site/ContactCTA";
import { articles, publishedArticles, articleAuthor } from "@/content/articles";
import { seoMeta, breadcrumbSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/conteudos/")({
  component: Page,
  head: () => ({
    ...seoMeta({
      title: "Conteúdos jurídicos | Dra. Patrícia Savela",
      description:
        "Informações sobre Direito Criminal, Tribunal do Júri, processo penal e temas relacionados à atuação profissional da advogada Patrícia Savela.",
      path: "/conteudos",
      // Enquanto não houver artigo publicado, a listagem permanece noindex.
      noindex: publishedArticles.length === 0,
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

function Page() {
  const list = publishedArticles.length > 0 ? publishedArticles : articles;
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
        {publishedArticles.length === 0 ? (
          <p className="measure mb-12 border-l border-gold pl-6 text-sm font-light text-graphite">
            Os conteúdos abaixo são espaços reservados em preparação. Nenhum artigo foi publicado
            até o momento, e esta seção permanece não indexada enquanto isso.
          </p>
        ) : null}

        <div className="grid gap-px border-t border-border">
          {list.map((article) => (
            <article key={article.slug} className="border-b border-border py-8">
              <p className="text-[0.6875rem] font-bold tracking-[0.22em] text-gold uppercase">
                {article.category}
              </p>
              <h2 className="mt-3 font-display text-2xl text-brand md:text-3xl">
                <Link to="/conteudos/$slug" params={{ slug: article.slug }} className="link-underline">
                  {article.title}
                </Link>
              </h2>
              <p className="measure mt-3 text-[0.9375rem] leading-relaxed font-light text-graphite">
                {article.excerpt}
              </p>
              <p className="mt-4 text-xs font-light text-graphite">
                {articleAuthor.name} — {articleAuthor.credential}
                {article.datePublished ? ` · ${article.datePublished}` : " · sem data de publicação"}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </SiteLayout>
  );
}