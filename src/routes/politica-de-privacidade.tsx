import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, Article } from "@/components/site/Prose";
import { siteConfig } from "@/config/site";
import { seoMeta, breadcrumbSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: Page,
  head: () => ({
    ...seoMeta({
      title: "Política de Privacidade | Patrícia Savela Advocacia",
      description:
        "Como são tratados os dados informados no site de Patrícia Savela Advocacia e Consultoria Jurídica, conforme a Lei Geral de Proteção de Dados.",
      path: "/politica-de-privacidade",
    }),
    scripts: [
      ldScript(
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Política de Privacidade", path: "/politica-de-privacidade" },
        ]),
      ),
    ],
  }),
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        crumbs={[
          { name: "Início", path: "/" },
          { name: "Política de Privacidade", path: "/politica-de-privacidade" },
        ]}
      />

      <Section>
        <Article
          blocks={[
            {
              heading: "Quais informações são coletadas",
              body: [
                "São coletadas apenas as informações voluntariamente fornecidas pelo usuário no formulário de contato: nome, telefone, e-mail, assunto e mensagem.",
                "Não são coletados dados sensíveis nem informações adicionais além das indicadas acima.",
              ],
            },
            {
              heading: "Finalidade do tratamento",
              body: [
                "As informações são utilizadas exclusivamente para responder ao contato realizado e prestar informações sobre atendimento.",
                "Os dados não são comercializados, cedidos ou compartilhados com terceiros para finalidades promocionais.",
              ],
            },
            {
              heading: "Formulário de contato",
              body: [
                "O formulário disponível neste site está preparado para envio, mas ainda não está integrado a um serviço de processamento de mensagens.",
                "Enquanto essa integração não estiver ativa, o contato deve ser realizado por WhatsApp ou e-mail.",
              ],
            },
            {
              heading: "Cookies e ferramentas de análise",
              body: [
                "Este site não utiliza cookies não essenciais nem ferramentas de análise de audiência no momento.",
                "Caso ferramentas de análise sejam ativadas futuramente, será solicitado o consentimento prévio adequado antes da utilização de cookies que o exijam.",
              ],
            },
            {
              heading: "Direitos do titular",
              body: [
                "Nos termos da Lei nº 13.709/2018 (LGPD), o titular pode solicitar confirmação de tratamento, acesso, correção, anonimização ou eliminação dos seus dados.",
                `As solicitações podem ser encaminhadas para ${siteConfig.contact.email}.`,
              ],
            },
            {
              heading: "Responsável",
              body: [
                `${siteConfig.business.name} — ${siteConfig.professional.displayName}, ${siteConfig.professional.oab}, ${siteConfig.location.city} — ${siteConfig.location.state}.`,
              ],
            },
          ]}
        />
      </Section>
    </SiteLayout>
  );
}