import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminShell, adminNoIndexMeta } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/")({
  component: Page,
  head: () => adminNoIndexMeta("Painel"),
});

function Page() {
  return (
    <AdminShell
      title="Painel"
      description="Gerencie os conteúdos jurídicos publicados no site sem precisar editar o código."
      actions={
        <Link
          to="/admin/conteudos/novo"
          className="inline-flex bg-gold px-5 py-3 text-xs font-bold tracking-[0.16em] text-brand-deep uppercase"
        >
          Novo artigo
        </Link>
      }
    >
      {() => (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Link
            to="/admin/conteudos"
            className="border border-brand/15 bg-white p-7 transition-transform hover:-translate-y-0.5"
          >
            <p className="text-[0.6875rem] font-bold tracking-[0.18em] text-gold uppercase">
              Editorial
            </p>
            <h2 className="mt-4 font-display text-3xl text-brand-deep">Conteúdos</h2>
            <p className="mt-3 text-sm leading-relaxed font-light text-graphite">
              Crie, revise, publique, despublique ou exclua artigos jurídicos.
            </p>
          </Link>

          <div className="border border-brand/10 bg-white/60 p-7">
            <p className="text-[0.6875rem] font-bold tracking-[0.18em] text-brand/45 uppercase">
              Próxima etapa
            </p>
            <h2 className="mt-4 font-display text-3xl text-brand-deep/70">Escritório</h2>
            <p className="mt-3 text-sm leading-relaxed font-light text-graphite/70">
              Telefone, endereço, redes sociais e demais informações poderão ser editados aqui futuramente.
            </p>
          </div>

          <div className="border border-brand/10 bg-white/60 p-7">
            <p className="text-[0.6875rem] font-bold tracking-[0.18em] text-brand/45 uppercase">
              Próxima etapa
            </p>
            <h2 className="mt-4 font-display text-3xl text-brand-deep/70">Mídia</h2>
            <p className="mt-3 text-sm leading-relaxed font-light text-graphite/70">
              Biblioteca de fotos institucionais e imagens gerais do site.
            </p>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
