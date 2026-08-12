import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Prose";
import { ContactCTA } from "@/components/site/ContactCTA";
import { getArticle, articleAuthor } from "@/content/articles";
import { siteConfig, absoluteUrl } from "@/config/site";
import { seoMeta, breadcrumbSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/conteudos/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  component: Page,
  head: ({ params, loaderData }) => {
    if (!loaderData) return {};
    const path = `/conteudos/${params.slug}`;
    return {
      ...seoMeta({
        title: loaderData.metaTitle,
        description: loaderData.metaDescription,
        path,
        type: "article",
        noindex: !loaderData.published,
        publishedTime: loaderData.datePublished || undefined,
        modifiedTime: loaderData.dateModified || undefined,
      }),
      scripts: [
        ldScript({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: loaderData.title,
          description: loaderData.metaDescription,
          articleSection: loaderData.category,
          ...(loaderData.datePublished ? { datePublished: loaderData.datePublished } : {}),
          ...(loaderData.dateModified ? { dateModified: loaderData.dateModified } : {}),
          image: absoluteUrl(siteConfig.ogImage),
          author: { "@id": `${siteConfig.domain}/#patricia-savela` },
          publisher: { "@id": `${siteConfig.domain}/#escritorio` },
          mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
        }),
        ldScript(
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Conteúdos", path: "/conteudos" },
            { name: loaderData.title, path },
          ]),
        ),
      ],
    };
  },
});

function Page() {
  const article = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Conteúdos", path: "/conteudos" },
          { name: article.title, path: `/conteudos/${article.slug}` },
        ]}
      />

      <Section>
        <article className="measure">
          <p className="text-xs font-light text-graphite">
            {articleAuthor.name} — {articleAuthor.credential}
            {article.datePublished ? ` · Publicado em ${article.datePublished}` : ""}
            {article.dateModified ? ` · Atualizado em ${article.dateModified}` : ""}
          </p>
          <span className="hairline mt-6 mb-8 max-w-16" aria-hidden="true" />

          {!article.published ? (
            <p className="mb-8 border-l border-gold pl-6 text-sm font-light text-graphite">
              Conteúdo em preparação. Esta página não está indexada em mecanismos de busca.
            </p>
          ) : null}

          <div className="space-y-4 text-[1.0625rem] leading-relaxed font-light text-graphite">
            {article.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </article>
      </Section>

      <ContactCTA />
    </SiteLayout>
  );
}