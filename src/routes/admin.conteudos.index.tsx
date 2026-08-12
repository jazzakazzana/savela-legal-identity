import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminShell, adminNoIndexMeta } from "@/components/admin/AdminShell";
import { listAdminArticles, type AuthSession, type CmsArticle } from "@/lib/cms";

export const Route = createFileRoute("/admin/conteudos/")({
  component: Page,
  head: () => adminNoIndexMeta("Conteúdos"),
});

function ArticlesList({ session }: { session: AuthSession }) {
  const [articles, setArticles] = useState<CmsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void listAdminArticles(session)
      .then((rows) => {
        if (active) setArticles(rows);
      })
      .catch((err: unknown) => {
        if (active) setError(err instanceof Error ? err.message : "Erro ao carregar conteúdos.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [session]);

  if (loading) return <p className="text-sm font-light text-graphite">Carregando conteúdos…</p>;
  if (error) return <p className="text-sm text-red-700">{error}</p>;

  if (articles.length === 0) {
    return (
      <div className="border border-brand/15 bg-white p-8">
        <h2 className="font-display text-2xl text-brand-deep">Nenhum conteúdo criado</h2>
        <p className="mt-3 text-sm font-light text-graphite">
          Crie o primeiro artigo para começar a usar o painel editorial.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-brand/15 bg-white">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="border-b border-brand/15 bg-brand-deep text-offwhite">
          <tr>
            <th className="px-5 py-4 text-xs font-bold tracking-[0.12em] uppercase">Título</th>
            <th className="px-5 py-4 text-xs font-bold tracking-[0.12em] uppercase">Categoria</th>
            <th className="px-5 py-4 text-xs font-bold tracking-[0.12em] uppercase">Status</th>
            <th className="px-5 py-4 text-xs font-bold tracking-[0.12em] uppercase">Atualizado</th>
            <th className="px-5 py-4 text-xs font-bold tracking-[0.12em] uppercase">Ação</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id} className="border-b border-brand/10 last:border-b-0">
              <td className="px-5 py-5">
                <p className="font-medium text-brand-deep">{article.title}</p>
                <p className="mt-1 text-xs font-light text-graphite">/conteudos/{article.slug}</p>
              </td>
              <td className="px-5 py-5 font-light text-graphite">{article.category ?? "—"}</td>
              <td className="px-5 py-5">
                <span
                  className={
                    article.status === "published"
                      ? "border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800"
                      : "border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800"
                  }
                >
                  {article.status === "published" ? "Publicado" : "Rascunho"}
                </span>
              </td>
              <td className="px-5 py-5 font-light text-graphite">
                {new Date(article.updated_at).toLocaleString("pt-BR")}
              </td>
              <td className="px-5 py-5">
                <Link
                  to="/admin/conteudos/$id"
                  params={{ id: article.id }}
                  className="text-xs font-bold tracking-[0.12em] text-brand uppercase underline decoration-gold underline-offset-4"
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Page() {
  return (
    <AdminShell
      title="Conteúdos"
      description="Gerencie artigos, rascunhos e publicações do site."
      actions={
        <Link
          to="/admin/conteudos/novo"
          className="inline-flex bg-gold px-5 py-3 text-xs font-bold tracking-[0.16em] text-brand-deep uppercase"
        >
          Novo artigo
        </Link>
      }
    >
      {(session) => <ArticlesList session={session} />}
    </AdminShell>
  );
}
