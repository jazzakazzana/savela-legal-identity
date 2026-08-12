import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Prose";
import { ContactCTA } from "@/components/site/ContactCTA";
import { siteConfig, absoluteUrl } from "@/config/site";
import {
  articleCoverUrl,
  articleParagraphs,
  getPublishedArticle,
} from "@/lib/cms";
import { seoMeta, breadcrumbSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/conteudos/$slug")({
  loader: async ({ params }) => {
    const article = await getPublishedArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  component: Page,
  head: ({ params, loaderData }) => {
    if (!loaderData) return {};
    const path = `/conteudos/${params.slug}`;
    const cover = articleCoverUrl(loaderData.cover_image_path);
    const metaDescription =
      loaderData.seo_description ?? loaderData.excerpt ?? "Conteúdo jurídico informativo.";

    return {
      ...seoMeta({
        title: loaderData.seo_title ?? `${loaderData.title} | Dra. Patrícia Savela`,
        description: metaDescription,
        path,
        type: "article",
        ...(cover ? { image: cover } : {}),
        ...(loaderData.published_at ? { publishedTime: loaderData.published_at } : {}),
        modifiedTime: loaderData.updated_at,
      }),
      scripts: [
        ldScript({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: loaderData.title,
          description: metaDescription,
          articleSection: loaderData.category ?? "Conteúdo jurídico",
          ...(loaderData.published_at ? { datePublished: loaderData.published_at } : {}),
          dateModified: loaderData.updated_at,
          image: cover ?? absoluteUrl(siteConfig.ogImage),
          author: {
            "@type": "Person",
            "@id": `${siteConfig.domain}/#patricia-savela`,
            name: siteConfig.professional.name,
            url: absoluteUrl("/patricia-savela"),
          },
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

function formatDate(value: string | null) {
  if (!value) return null;
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "America/Sao_Paulo" }).format(
    new Date(value),
  );
}

function Page() {
  const article = Route.useLoaderData();
  const cover = articleCoverUrl(article.cover_image_path);
  const paragraphs = articleParagraphs(article.content);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={article.category ?? "Conteúdo jurídico"}
        title={article.title}
        intro={article.excerpt ?? undefined}
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Conteúdos", path: "/conteudos" },
          { name: article.title, path: `/conteudos/${article.slug}` },
        ]}
      />

      <Section>
        <article className="measure">
          <p className="text-xs font-light text-graphite">
            {siteConfig.professional.name} — {siteConfig.professional.oab}
            {article.published_at ? ` · Publicado em ${formatDate(article.published_at)}` : ""}
          </p>
          <span className="hairline mt-6 mb-8 max-w-16" aria-hidden="true" />

          {cover ? (
            <figure className="mb-10">
              <img
                src={cover}
                alt={article.cover_image_alt ?? "Imagem de capa do artigo"}
                className="aspect-[16/9] w-full object-cover"
              />
            </figure>
          ) : null}

          <div className="space-y-5 text-[1.0625rem] leading-relaxed font-light text-graphite">
            {paragraphs.map((paragraph, index) => (
              <p key={`${article.id}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      </Section>

      <ContactCTA />
    </SiteLayout>
  );
}
