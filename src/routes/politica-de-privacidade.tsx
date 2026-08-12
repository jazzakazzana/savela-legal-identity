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
              heading: "Quais informações podem ser fornecidas",
              body: [
                "No momento, este site não possui formulário de envio automático. O contato é realizado pelos canais diretos de WhatsApp e e-mail indicados nas páginas de atendimento e contato.",
                "Nesses canais, o usuário pode fornecer voluntariamente dados de identificação e informações necessárias ao retorno do contato. Recomenda-se que documentos, dados sensíveis e detalhes confidenciais não sejam enviados no primeiro contato, salvo quando solicitados por meio adequado durante o atendimento.",
              ],
            },
            {
              heading: "Finalidade do tratamento",
              body: [
                "As informações recebidas são utilizadas para responder ao contato realizado, prestar informações sobre atendimento e, quando aplicável, dar continuidade à relação profissional solicitada pelo próprio titular.",
                "Os dados não são comercializados nem utilizados para finalidades promocionais incompatíveis com o contexto em que foram fornecidos.",
              ],
            },
            {
              heading: "Dados sensíveis e informações confidenciais",
              body: [
                "Dependendo do conteúdo enviado voluntariamente pelo usuário, a comunicação pode conter dados pessoais sensíveis ou informações protegidas por dever de confidencialidade profissional.",
                "Quando recebidas, essas informações devem ser tratadas com acesso restrito e somente na medida necessária para a finalidade do atendimento correspondente.",
              ],
            },
            {
              heading: "Cookies e ferramentas de análise",
              body: [
                "Este site não utiliza cookies não essenciais nem ferramentas de análise de audiência no momento.",
                "Caso ferramentas de análise sejam ativadas futuramente, a política será atualizada e os mecanismos de consentimento aplicáveis serão implementados conforme a configuração adotada.",
              ],
            },
            {
              heading: "Direitos do titular",
              body: [
                "Nos termos da Lei nº 13.709/2018 (LGPD), o titular pode solicitar informações sobre o tratamento de seus dados e exercer os direitos previstos na legislação aplicável.",
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
