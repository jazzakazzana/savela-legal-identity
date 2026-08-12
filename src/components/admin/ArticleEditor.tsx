import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import {
  articleCoverUrl,
  deleteArticle,
  getAdminArticle,
  saveArticle,
  slugify,
  uploadArticleCover,
  type AuthSession,
  type CmsArticle,
  type CmsArticleInput,
  type ArticleStatus,
} from "@/lib/cms";

interface ArticleEditorProps {
  session: AuthSession;
  articleId?: string;
}

type NullableTextField =
  | "excerpt"
  | "category"
  | "cover_image_alt"
  | "seo_title"
  | "seo_description";

const inputClass =
  "mt-2 w-full border border-brand/20 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold";
const labelClass = "text-[0.6875rem] font-bold tracking-[0.16em] text-brand uppercase";

export function ArticleEditor({ session, articleId }: ArticleEditorProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(Boolean(articleId));
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState<CmsArticle | null>(null);
  const [slugTouched, setSlugTouched] = useState(Boolean(articleId));
  const [form, setForm] = useState<CmsArticleInput>({
    title: "",
    slug: "",
    excerpt: null,
    content: "",
    category: "Direito Criminal",
    cover_image_path: null,
    cover_image_alt: null,
    seo_title: null,
    seo_description: null,
    status: "draft",
  });

  useEffect(() => {
    if (!articleId) return;
    let active = true;
    void getAdminArticle(session, articleId)
      .then((article) => {
        if (!active) return;
        setSaved(article);
        setForm({
          title: article.title,
          slug: article.slug,
          excerpt: article.excerpt,
          content: article.content,
          category: article.category,
          cover_image_path: article.cover_image_path,
          cover_image_alt: article.cover_image_alt,
          seo_title: article.seo_title,
          seo_description: article.seo_description,
          status: article.status,
        });
      })
      .catch((err: unknown) => {
        if (active) setError(err instanceof Error ? err.message : "Erro ao carregar conteúdo.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [articleId, session]);

  const coverUrl = useMemo(() => articleCoverUrl(form.cover_image_path), [form.cover_image_path]);

  function setNullableField(key: NullableTextField, value: string) {
    setForm((current) => ({ ...current, [key]: value || null }));
  }

  function handleTitle(value: string) {
    setForm((current) => ({
      ...current,
      title: value,
      slug: slugTouched ? current.slug : slugify(value),
    }));
  }

  async function handleCover(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const path = await uploadArticleCover(session, file);
      setForm((current) => ({ ...current, cover_image_path: path }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar imagem.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const normalized: CmsArticleInput = {
        ...form,
        title: form.title.trim(),
        slug: slugify(form.slug),
        excerpt: form.excerpt?.trim() || null,
        content: form.content.trim(),
        category: form.category?.trim() || null,
        cover_image_alt: form.cover_image_alt?.trim() || null,
        seo_title: form.seo_title?.trim() || null,
        seo_description: form.seo_description?.trim() || null,
      };

      if (!normalized.title || !normalized.slug || !normalized.content) {
        throw new Error("Preencha título, slug e conteúdo antes de salvar.");
      }

      const article = await saveArticle(session, normalized, articleId);
      setSaved(article);
      setForm(normalized);

      if (!articleId) {
        void navigate({ to: "/admin/conteudos/$id", params: { id: article.id }, replace: true });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao salvar conteúdo.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!articleId || !window.confirm("Excluir este conteúdo permanentemente?")) return;
    setSaving(true);
    setError(null);
    try {
      await deleteArticle(session, articleId);
      void navigate({ to: "/admin/conteudos", replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao excluir conteúdo.");
      setSaving(false);
    }
  }

  if (loading) return <p className="text-sm font-light text-graphite">Carregando conteúdo…</p>;

  return (
    <form onSubmit={handleSubmit} className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-8">
        {error ? (
          <div className="border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
            {error}
          </div>
        ) : null}

        <section className="border border-brand/15 bg-white p-6 md:p-8">
          <h2 className="font-display text-2xl text-brand-deep">Conteúdo</h2>
          <div className="mt-6">
            <label className={labelClass} htmlFor="title">Título</label>
            <input
              id="title"
              value={form.title}
              onChange={(event) => handleTitle(event.target.value)}
              className={inputClass}
              required
              maxLength={180}
            />
          </div>
          <div className="mt-6">
            <label className={labelClass} htmlFor="slug">Slug da URL</label>
            <input
              id="slug"
              value={form.slug}
              onChange={(event) => {
                setSlugTouched(true);
                setForm((current) => ({ ...current, slug: slugify(event.target.value) }));
              }}
              className={inputClass}
              required
              maxLength={180}
            />
            <p className="mt-2 text-xs font-light text-graphite">/conteudos/{form.slug || "seu-artigo"}</p>
          </div>
          <div className="mt-6">
            <label className={labelClass} htmlFor="category">Categoria</label>
            <input
              id="category"
              value={form.category ?? ""}
              onChange={(event) => setNullableField("category", event.target.value)}
              className={inputClass}
              maxLength={100}
            />
          </div>
          <div className="mt-6">
            <label className={labelClass} htmlFor="excerpt">Resumo</label>
            <textarea
              id="excerpt"
              value={form.excerpt ?? ""}
              onChange={(event) => setNullableField("excerpt", event.target.value)}
              rows={3}
              className={inputClass}
              maxLength={400}
            />
          </div>
          <div className="mt-6">
            <label className={labelClass} htmlFor="content">Texto do artigo</label>
            <textarea
              id="content"
              value={form.content}
              onChange={(event) => setForm((current) => ({ ...current, content: event.target.value }))}
              rows={20}
              className={`${inputClass} leading-relaxed`}
              required
            />
            <p className="mt-2 text-xs font-light text-graphite">
              Separe os parágrafos com uma linha em branco. O site fará a formatação automaticamente.
            </p>
          </div>
        </section>

        <section className="border border-brand/15 bg-white p-6 md:p-8">
          <h2 className="font-display text-2xl text-brand-deep">SEO</h2>
          <div className="mt-6">
            <label className={labelClass} htmlFor="seo-title">Título SEO</label>
            <input
              id="seo-title"
              value={form.seo_title ?? ""}
              onChange={(event) => setNullableField("seo_title", event.target.value)}
              className={inputClass}
              maxLength={70}
              placeholder={form.title || "Título exibido no Google"}
            />
          </div>
          <div className="mt-6">
            <label className={labelClass} htmlFor="seo-description">Meta description</label>
            <textarea
              id="seo-description"
              value={form.seo_description ?? ""}
              onChange={(event) => setNullableField("seo_description", event.target.value)}
              rows={4}
              className={inputClass}
              maxLength={180}
              placeholder={form.excerpt ?? "Resumo para mecanismos de busca"}
            />
          </div>
        </section>
      </div>

      <aside className="space-y-6 xl:sticky xl:top-8 xl:self-start">
        <section className="border border-brand/15 bg-white p-6">
          <label className={labelClass} htmlFor="status">Status</label>
          <select
            id="status"
            value={form.status}
            onChange={(event) =>
              setForm((current) => ({ ...current, status: event.target.value as ArticleStatus }))
            }
            className={inputClass}
          >
            <option value="draft">Rascunho</option>
            <option value="published">Publicado</option>
          </select>

          <button
            type="submit"
            disabled={saving || uploading}
            className="mt-6 w-full bg-gold px-5 py-3 text-xs font-bold tracking-[0.16em] text-brand-deep uppercase disabled:opacity-50"
          >
            {saving ? "Salvando…" : "Salvar conteúdo"}
          </button>

          {saved ? (
            <p className="mt-4 text-xs leading-relaxed font-light text-graphite">
              Última atualização: {new Date(saved.updated_at).toLocaleString("pt-BR")}
            </p>
          ) : null}

          {articleId ? (
            <button
              type="button"
              onClick={handleDelete}
              disabled={saving}
              className="mt-5 w-full border border-red-300 px-5 py-3 text-xs font-bold tracking-[0.12em] text-red-700 uppercase disabled:opacity-50"
            >
              Excluir conteúdo
            </button>
          ) : null}
        </section>

        <section className="border border-brand/15 bg-white p-6">
          <h2 className="font-display text-xl text-brand-deep">Imagem de capa</h2>
          {coverUrl ? (
            <img src={coverUrl} alt="Prévia da capa" className="mt-5 aspect-[16/9] w-full object-cover" />
          ) : (
            <div className="mt-5 grid aspect-[16/9] place-items-center border border-dashed border-brand/20 text-xs text-graphite">
              Sem imagem
            </div>
          )}
          <label className={`${labelClass} mt-5 block`} htmlFor="cover">Enviar imagem</label>
          <input
            id="cover"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            onChange={handleCover}
            disabled={uploading}
            className="mt-2 block w-full text-xs text-graphite"
          />
          <p className="mt-2 text-xs font-light text-graphite">JPEG, PNG, WebP ou AVIF · até 5 MB.</p>
          <div className="mt-5">
            <label className={labelClass} htmlFor="cover-alt">Texto alternativo</label>
            <input
              id="cover-alt"
              value={form.cover_image_alt ?? ""}
              onChange={(event) => setNullableField("cover_image_alt", event.target.value)}
              className={inputClass}
              maxLength={180}
            />
          </div>
        </section>
      </aside>
    </form>
  );
}
