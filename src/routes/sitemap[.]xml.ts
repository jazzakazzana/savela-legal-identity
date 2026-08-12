import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteConfig } from "@/config/site";
import { publishedArticles } from "@/content/articles";

const BASE_URL = siteConfig.domain;

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "monthly", priority: "1.0" },
          { path: "/patricia-savela", changefreq: "yearly", priority: "0.9" },
          { path: "/direito-criminal", changefreq: "yearly", priority: "0.9" },
          { path: "/tribunal-do-juri", changefreq: "yearly", priority: "0.9" },
          { path: "/sustentacao-oral", changefreq: "yearly", priority: "0.8" },
          { path: "/atendimento", changefreq: "yearly", priority: "0.7" },
          { path: "/contato", changefreq: "yearly", priority: "0.7" },
          { path: "/politica-de-privacidade", changefreq: "yearly", priority: "0.3" },
        ];

        // A listagem e os artigos só entram no sitemap quando houver conteúdo publicado.
        if (publishedArticles.length > 0) {
          entries.push({ path: "/conteudos", changefreq: "monthly", priority: "0.6" });
          for (const article of publishedArticles) {
            entries.push({
              path: `/conteudos/${article.slug}`,
              ...(article.dateModified ? { lastmod: article.dateModified } : {}),
              changefreq: "yearly",
              priority: "0.6",
            });
          }
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});