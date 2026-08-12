const SUPABASE_URL =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) ??
  "https://pdcwobuourtkalvncact.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) ??
  "sb_publishable_UO19UbxRXcEQYYVmswGivg_aX2gxSwT";

const SESSION_KEY = "patricia-savela-admin-session";
const ARTICLE_BUCKET = "article-covers";

export type ArticleStatus = "draft" | "published";

export interface CmsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  category: string | null;
  cover_image_path: string | null;
  cover_image_alt: string | null;
  seo_title: string | null;
  seo_description: string | null;
  status: ArticleStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface CmsArticleInput {
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  category: string | null;
  cover_image_path: string | null;
  cover_image_alt: string | null;
  seo_title: string | null;
  seo_description: string | null;
  status: ArticleStatus;
}

export interface AuthSession {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  user: {
    id: string;
    email: string | null;
  };
}

interface AuthTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  user: {
    id: string;
    email?: string | null;
  };
}

function apiHeaders(accessToken?: string) {
  const headers: Record<string, string> = {
    apikey: SUPABASE_PUBLISHABLE_KEY,
  };

  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
  return headers;
}

async function readJson<T>(response: Response): Promise<T> {
  const body = (await response.json().catch(() => null)) as
    | (T & { message?: string; error_description?: string; error?: string })
    | null;

  if (!response.ok) {
    const message =
      body?.message ?? body?.error_description ?? body?.error ?? `Erro HTTP ${response.status}`;
    throw new Error(message);
  }

  if (body === null) throw new Error("Resposta vazia do Supabase.");
  return body;
}

function toSession(data: AuthTokenResponse): AuthSession {
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresAt: Date.now() + data.expires_in * 1000,
    user: {
      id: data.user.id,
      email: data.user.email ?? null,
    },
  };
}

function storeSession(session: AuthSession | null) {
  if (typeof window === "undefined") return;
  if (session) window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  else window.localStorage.removeItem(SESSION_KEY);
}

export async function signInWithPassword(email: string, password: string): Promise<AuthSession> {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      ...apiHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const session = toSession(await readJson<AuthTokenResponse>(response));
  storeSession(session);
  return session;
}

async function refreshSession(session: AuthSession): Promise<AuthSession> {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
    method: "POST",
    headers: {
      ...apiHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: session.refreshToken }),
  });

  const refreshed = toSession(await readJson<AuthTokenResponse>(response));
  storeSession(refreshed);
  return refreshed;
}

export async function getAdminSession(): Promise<AuthSession | null> {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    const session = JSON.parse(raw) as AuthSession;
    if (session.expiresAt > Date.now() + 60_000) return session;
    return await refreshSession(session);
  } catch {
    storeSession(null);
    return null;
  }
}

export async function signOutAdmin(session?: AuthSession | null) {
  if (session) {
    await fetch(`${SUPABASE_URL}/auth/v1/logout`, {
      method: "POST",
      headers: apiHeaders(session.accessToken),
    }).catch(() => undefined);
  }
  storeSession(null);
}

export async function isAdmin(session: AuthSession): Promise<boolean> {
  const query = new URLSearchParams({
    select: "user_id",
    user_id: `eq.${session.user.id}`,
    limit: "1",
  });
  const response = await fetch(`${SUPABASE_URL}/rest/v1/admin_users?${query.toString()}`, {
    headers: apiHeaders(session.accessToken),
  });
  const rows = await readJson<Array<{ user_id: string }>>(response);
  return rows.length === 1;
}

export async function listAdminArticles(session: AuthSession): Promise<CmsArticle[]> {
  const query = new URLSearchParams({
    select: "*",
    order: "updated_at.desc",
  });
  const response = await fetch(`${SUPABASE_URL}/rest/v1/articles?${query.toString()}`, {
    headers: apiHeaders(session.accessToken),
  });
  return readJson<CmsArticle[]>(response);
}

export async function getAdminArticle(session: AuthSession, id: string): Promise<CmsArticle> {
  const query = new URLSearchParams({ select: "*", id: `eq.${id}`, limit: "1" });
  const response = await fetch(`${SUPABASE_URL}/rest/v1/articles?${query.toString()}`, {
    headers: apiHeaders(session.accessToken),
  });
  const rows = await readJson<CmsArticle[]>(response);
  const article = rows[0];
  if (!article) throw new Error("Conteúdo não encontrado.");
  return article;
}

export async function saveArticle(
  session: AuthSession,
  input: CmsArticleInput,
  id?: string,
): Promise<CmsArticle> {
  const endpoint = id
    ? `${SUPABASE_URL}/rest/v1/articles?id=eq.${encodeURIComponent(id)}`
    : `${SUPABASE_URL}/rest/v1/articles`;
  const response = await fetch(endpoint, {
    method: id ? "PATCH" : "POST",
    headers: {
      ...apiHeaders(session.accessToken),
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(input),
  });
  const rows = await readJson<CmsArticle[]>(response);
  const article = rows[0];
  if (!article) throw new Error("O conteúdo foi salvo, mas não retornou dados.");
  return article;
}

export async function deleteArticle(session: AuthSession, id: string): Promise<void> {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/articles?id=eq.${encodeURIComponent(id)}`,
    {
      method: "DELETE",
      headers: apiHeaders(session.accessToken),
    },
  );
  if (!response.ok) throw new Error("Não foi possível excluir o conteúdo.");
}

export async function uploadArticleCover(session: AuthSession, file: File): Promise<string> {
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const safeExt = ["jpg", "jpeg", "png", "webp", "avif"].includes(ext) ? ext : "jpg";
  const path = `covers/${crypto.randomUUID()}.${safeExt}`;
  const response = await fetch(`${SUPABASE_URL}/storage/v1/object/${ARTICLE_BUCKET}/${path}`, {
    method: "POST",
    headers: {
      ...apiHeaders(session.accessToken),
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "false",
    },
    body: file,
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { message?: string } | null;
    throw new Error(payload?.message ?? "Não foi possível enviar a imagem.");
  }

  return path;
}

export function articleCoverUrl(path: string | null): string | null {
  if (!path) return null;
  return `${SUPABASE_URL}/storage/v1/object/public/${ARTICLE_BUCKET}/${path}`;
}

export async function listPublishedArticles(): Promise<CmsArticle[]> {
  const query = new URLSearchParams({
    select: "*",
    status: "eq.published",
    order: "published_at.desc.nullslast,updated_at.desc",
  });
  const response = await fetch(`${SUPABASE_URL}/rest/v1/articles?${query.toString()}`, {
    headers: apiHeaders(),
  });
  return readJson<CmsArticle[]>(response);
}

export async function getPublishedArticle(slug: string): Promise<CmsArticle | null> {
  const query = new URLSearchParams({
    select: "*",
    status: "eq.published",
    slug: `eq.${slug}`,
    limit: "1",
  });
  const response = await fetch(`${SUPABASE_URL}/rest/v1/articles?${query.toString()}`, {
    headers: apiHeaders(),
  });
  const rows = await readJson<CmsArticle[]>(response);
  return rows[0] ?? null;
}

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function articleParagraphs(content: string) {
  return content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}
