import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, adminNoIndexMeta } from "@/components/admin/AdminShell";
import { ArticleEditor } from "@/components/admin/ArticleEditor";

export const Route = createFileRoute("/admin/conteudos/novo")({
  component: Page,
  head: () => adminNoIndexMeta("Novo artigo"),
});

function Page() {
  return (
    <AdminShell
      title="Novo artigo"
      description="Crie o conteúdo, revise o SEO e publique quando estiver pronto."
    >
      {(session) => <ArticleEditor session={session} />}
    </AdminShell>
  );
}
