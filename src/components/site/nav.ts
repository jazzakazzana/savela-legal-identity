import { publishedArticles } from "@/content/articles";

const hasPublishedArticles = publishedArticles.length > 0;

export const navLinks = [
  { label: "Início", to: "/" },
  { label: "Patrícia Savela", to: "/patricia-savela" },
  { label: "Atuação", to: "/direito-criminal" },
  { label: "Tribunal do Júri", to: "/tribunal-do-juri" },
  ...(hasPublishedArticles ? [{ label: "Conteúdos", to: "/conteudos" } as const] : []),
  { label: "Atendimento", to: "/atendimento" },
  { label: "Contato", to: "/contato" },
] as const;

export const footerLinks = [
  { label: "Patrícia Savela", to: "/patricia-savela" },
  { label: "Direito Criminal", to: "/direito-criminal" },
  { label: "Tribunal do Júri", to: "/tribunal-do-juri" },
  { label: "Sustentação Oral", to: "/sustentacao-oral" },
  ...(hasPublishedArticles ? [{ label: "Conteúdos", to: "/conteudos" } as const] : []),
  { label: "Atendimento", to: "/atendimento" },
  { label: "Contato", to: "/contato" },
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
] as const;
