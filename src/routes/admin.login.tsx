import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  getAdminSession,
  isAdmin,
  signInWithPassword,
  signOutAdmin,
} from "@/lib/cms";
import { adminNoIndexMeta } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/login")({
  component: Page,
  head: () => adminNoIndexMeta("Login"),
});

function Page() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void (async () => {
      const session = await getAdminSession();
      if (session && (await isAdmin(session).catch(() => false))) {
        if (active) void navigate({ to: "/admin", replace: true });
        return;
      }
      if (active) setChecking(false);
    })();
    return () => {
      active = false;
    };
  }, [navigate]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const session = await signInWithPassword(email.trim(), password);
      const allowed = await isAdmin(session);
      if (!allowed) {
        await signOutAdmin(session);
        throw new Error("Este usuário não possui acesso administrativo.");
      }
      void navigate({ to: "/admin", replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível entrar.");
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <main className="grid min-h-screen place-items-center bg-brand-deep px-6 text-offwhite">
        <p className="text-sm font-light">Verificando sessão…</p>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center bg-brand-deep px-6 py-12 text-offwhite">
      <div className="w-full max-w-md border border-offwhite/15 bg-offwhite/[0.04] p-7 md:p-10">
        <p className="text-[0.6875rem] font-bold tracking-[0.22em] text-gold uppercase">
          Área restrita
        </p>
        <h1 className="mt-4 font-display text-4xl">Painel administrativo</h1>
        <p className="mt-3 text-sm leading-relaxed font-light text-offwhite/65">
          Entre com a conta autorizada para gerenciar os conteúdos do site.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <label className="text-[0.6875rem] font-bold tracking-[0.16em] text-offwhite/75 uppercase" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="mt-2 w-full border border-offwhite/20 bg-transparent px-4 py-3 text-sm text-offwhite outline-none focus:border-gold"
          />

          <label className="mt-6 block text-[0.6875rem] font-bold tracking-[0.16em] text-offwhite/75 uppercase" htmlFor="password">
            Senha
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="mt-2 w-full border border-offwhite/20 bg-transparent px-4 py-3 text-sm text-offwhite outline-none focus:border-gold"
          />

          {error ? (
            <p className="mt-5 border-l border-red-300 pl-4 text-sm text-red-100" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-gold px-5 py-3.5 text-xs font-bold tracking-[0.18em] text-brand-deep uppercase disabled:opacity-50"
          >
            {loading ? "Entrando…" : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
