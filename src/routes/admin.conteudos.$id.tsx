import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, adminNoIndexMeta } from "@/components/admin/AdminShell";
import { ArticleEditor } from "@/components/admin/ArticleEditor";

export const Route = createFileRoute("/admin/conteudos/$id")({
  component: Page,
  head: () => adminNoIndexMeta("Editar artigo"),
});

function Page() {
  const { id } = Route.useParams();

  return (
    <AdminShell
      title="Editar artigo"
      description="Atualize o conteúdo e altere o status de publicação quando necessário."
    >
      {(session) => <ArticleEditor session={session} articleId={id} />}
    </AdminShell>
  );
}
