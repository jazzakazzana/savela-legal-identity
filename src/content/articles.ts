/**
 * PLACEHOLDERS DE DESENVOLVIMENTO.
 * Nenhum artigo real foi publicado. Enquanto `published` for false,
 * a página fica noindex e não entra no sitemap.
 */
export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  datePublished: string;
  dateModified: string;
  published: boolean;
  body: string[];
};

export const articleAuthor = {
  name: "Dra. Patrícia Savela",
  credential: "OAB/RS 119.240",
};

export const articles: Article[] = [
  {
    slug: "o-papel-da-defesa-no-processo-penal",
    title: "O papel da defesa no processo penal",
    metaTitle: "O papel da defesa no processo penal | Patrícia Savela",
    metaDescription:
      "Conteúdo em preparação sobre a função da defesa técnica no processo penal brasileiro.",
    excerpt:
      "Conteúdo em preparação: a função da defesa técnica e as garantias do contraditório e da ampla defesa.",
    category: "Direito Criminal",
    datePublished: "",
    dateModified: "",
    published: false,
    body: [
      "Este é um espaço reservado para um conteúdo que ainda será redigido e revisado pela advogada responsável.",
    ],
  },
  {
    slug: "como-funciona-o-tribunal-do-juri",
    title: "Como funciona o Tribunal do Júri",
    metaTitle: "Como funciona o Tribunal do Júri | Patrícia Savela",
    metaDescription:
      "Conteúdo em preparação sobre as fases do procedimento do Tribunal do Júri.",
    excerpt: "Conteúdo em preparação: as fases do procedimento e a sessão de julgamento.",
    category: "Tribunal do Júri",
    datePublished: "",
    dateModified: "",
    published: false,
    body: [
      "Este é um espaço reservado para um conteúdo que ainda será redigido e revisado pela advogada responsável.",
    ],
  },
  {
    slug: "sustentacao-oral-o-que-e",
    title: "Sustentação oral: o que é e quando ocorre",
    metaTitle: "Sustentação oral: o que é e quando ocorre | Patrícia Savela",
    metaDescription:
      "Conteúdo em preparação sobre a sustentação oral perante os Tribunais.",
    excerpt: "Conteúdo em preparação: o momento da sustentação oral perante os Tribunais.",
    category: "Sustentação Oral",
    datePublished: "",
    dateModified: "",
    published: false,
    body: [
      "Este é um espaço reservado para um conteúdo que ainda será redigido e revisado pela advogada responsável.",
    ],
  },
];

export const publishedArticles = articles.filter((a) => a.published);
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);