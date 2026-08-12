/**
 * Configuração central do site.
 * Todos os componentes devem consumir esses valores — não duplicar
 * telefone, e-mail ou OAB em outros arquivos.
 */
export const siteConfig = {
  professional: {
    name: "Patrícia Savela",
    displayName: "Dra. Patrícia Savela",
    oab: "OAB/RS 119.240",
    jobTitle: "Advogada",
  },

  business: {
    name: "Patrícia Savela Advocacia e Consultoria Jurídica",
    shortName: "Patrícia Savela Advocacia",
  },

  contact: {
    phone: "+55 51 99231-4000",
    phoneDisplay: "(51) 99231-4000",
    whatsapp: "5551992314000",
    email: "patriciasavelaadv@gmail.com",
  },

  location: {
    city: "São Leopoldo",
    state: "RS",
    stateName: "Rio Grande do Sul",
    country: "Brasil",
    /** OFFICE_ADDRESS — preencher quando o endereço for fornecido. */
    streetAddress: null as string | null,
    postalCode: null as string | null,
  },

  /** Bloco secundário — ativar somente após confirmação do cliente. */
  santaRosa: {
    enabled: false,
    building: "Ed. Neo Centro Profissional — Sala 402",
    streetAddress: "Rua Guaporé, 401",
    city: "Santa Rosa",
    state: "RS",
  },

  domain: "https://patriciasavela.com.br",

  social: {
    instagram: null as string | null,
    linkedin: null as string | null,
  },

  /** GOOGLE_BUSINESS_URL — adicionar quando o Perfil da Empresa existir. */
  googleBusinessUrl: null as string | null,

  verification: {
    /** GOOGLE_SITE_VERIFICATION */
    google: null as string | null,
    /** BING_SITE_VERIFICATION */
    bing: null as string | null,
  },

  analytics: {
    /** GA_MEASUREMENT_ID */
    ga4: null as string | null,
    /** GTM_ID */
    gtm: null as string | null,
  },

  /** IndexNow — preparado, sem chave fictícia. */
  indexNowKey: null as string | null,

  ogImage: "/og-patricia-savela.jpg",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;
export const mailtoUrl = `mailto:${siteConfig.contact.email}`;
export const telUrl = `tel:+${siteConfig.contact.whatsapp}`;

export const absoluteUrl = (path: string) => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteConfig.domain}${path === "/" ? "/" : path}`;
};
