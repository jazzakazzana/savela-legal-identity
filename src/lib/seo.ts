import { siteConfig, absoluteUrl } from "@/config/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  image?: string;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

export function seoMeta({ title, description, path, type = "website", image, noindex, publishedTime, modifiedTime }: SeoInput) {
  const url = absoluteUrl(path);
  const img = absoluteUrl(image ?? siteConfig.ogImage);
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:image", content: img },
    { property: "og:locale", content: "pt_BR" },
    { property: "og:site_name", content: siteConfig.business.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: img },
  ];
  if (noindex) meta.push({ name: "robots", content: "noindex, follow" });
  if (publishedTime) meta.push({ property: "article:published_time", content: publishedTime });
  if (modifiedTime) meta.push({ property: "article:modified_time", content: modifiedTime });
  if (siteConfig.verification.google) meta.push({ name: "google-site-verification", content: siteConfig.verification.google });
  if (siteConfig.verification.bing) meta.push({ name: "msvalidate.01", content: siteConfig.verification.bing });
  return { meta, links: [{ rel: "canonical", href: url }] };
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.domain}/#patricia-savela`,
  name: siteConfig.professional.name,
  honorificPrefix: "Dra.",
  jobTitle: siteConfig.professional.jobTitle,
  email: `mailto:${siteConfig.contact.email}`,
  telephone: siteConfig.contact.phone,
  url: absoluteUrl("/patricia-savela"),
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    addressCountry: "BR",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade do Vale do Rio dos Sinos — Unisinos",
  },
  knowsAbout: ["Direito Criminal", "Tribunal do Júri", "Sustentação Oral em Tribunais", "Consultoria Jurídica"],
  identifier: siteConfig.professional.oab,
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${absoluteUrl("/patricia-savela")}#profile-page`,
  url: absoluteUrl("/patricia-savela"),
  name: `${siteConfig.professional.displayName} | Perfil profissional`,
  mainEntity: { "@id": `${siteConfig.domain}/#patricia-savela` },
};

export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteConfig.domain}/#escritorio`,
  name: siteConfig.business.name,
  url: siteConfig.domain,
  telephone: siteConfig.contact.phone,
  email: `mailto:${siteConfig.contact.email}`,
  image: absoluteUrl(siteConfig.ogImage),
  founder: { "@id": `${siteConfig.domain}/#patricia-savela` },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "São Leopoldo" },
    { "@type": "State", name: "Rio Grande do Sul" },
  ],
  knowsAbout: ["Direito Criminal", "Tribunal do Júri", "Sustentação Oral em Tribunais"],
};

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const ldScript = (data: unknown) => ({ type: "application/ld+json", children: JSON.stringify(data) });
